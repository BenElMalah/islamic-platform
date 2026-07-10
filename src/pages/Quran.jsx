import { useState, useEffect } from 'react'
import { fetchSurahs, fetchVersesBySurah } from '../utils/dataFetching'

const BISMILLAH = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ'
const SKIP_BISMILLAH = [1, 9]

export default function Quran() {
  const [surahs, setSurahs] = useState([])
  const [selectedSurah, setSelectedSurah] = useState(null)
  const [verses, setVerses] = useState([])
  const [selectedVerse, setSelectedVerse] = useState(null)
  const [loadingSurahs, setLoadingSurahs] = useState(true)
  const [loadingVerses, setLoadingVerses] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [viewMode, setViewMode] = useState('surah')

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await fetchSurahs()
        setSurahs(data)
      } catch (error) {
        console.error('Failed to fetch surahs:', error)
      } finally {
        setLoadingSurahs(false)
      }
    }
    loadSurahs()
  }, [])

  useEffect(() => {
    if (!selectedSurah) return
    const loadVerses = async () => {
      setLoadingVerses(true)
      setSelectedVerse(null)
      try {
        const data = await fetchVersesBySurah(selectedSurah.number)
        setVerses(data)
      } catch (error) {
        console.error('Failed to fetch verses:', error)
      } finally {
        setLoadingVerses(false)
      }
    }
    loadVerses()
  }, [selectedSurah])

  const filteredSurahs = surahs.filter(s =>
    s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.name.includes(searchQuery) ||
    String(s.number).includes(searchQuery)
  )

  const showBismillah = selectedSurah && !SKIP_BISMILLAH.includes(selectedSurah.number)

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-[#f5f0e8]">
      <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-4 border-b border-gray-200 bg-emerald-900 text-white">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Al-Quran</h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-emerald-200 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search surahs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-900 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-300"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {loadingSurahs ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <ul>
              {filteredSurahs.map((surah) => (
                <li key={surah.number}>
                  <button
                    onClick={() => { setSelectedSurah(surah); setViewMode('surah') }}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${
                      selectedSurah?.number === surah.number
                        ? 'bg-emerald-50 border-l-4 border-l-emerald-600'
                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full text-xs font-bold flex-shrink-0 shadow-sm">
                        {surah.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-semibold text-gray-800 text-sm truncate">{surah.englishName}</p>
                          <p className="text-sm font-arabic text-emerald-800 flex-shrink-0" style={{fontFamily:'Amiri,serif'}}>{surah.name}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{surah.revelationType} &bull; {surah.verseCount} ayahs</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 shadow-sm">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} className="text-gray-500 hover:text-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            {selectedSurah ? (
              <>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h1 className="text-xl font-bold text-emerald-900">{selectedSurah.englishName}</h1>
                    <span className="text-lg text-emerald-700" style={{fontFamily:'Amiri,serif'}}>{selectedSurah.name}</span>
                  </div>
                  <p className="text-xs text-gray-500">{selectedSurah.englishNameTranslation} &bull; {selectedSurah.revelationType} &bull; {selectedSurah.verseCount} ayahs</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      const idx = surahs.findIndex(s => s.number === selectedSurah.number)
                      if (idx > 0) setSelectedSurah(surahs[idx - 1])
                    }}
                    disabled={selectedSurah.number === 1}
                    className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    onClick={() => {
                      const idx = surahs.findIndex(s => s.number === selectedSurah.number)
                      if (idx < surahs.length - 1) setSelectedSurah(surahs[idx + 1])
                    }}
                    disabled={selectedSurah.number === 114}
                    className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1">
                <h1 className="text-xl font-bold text-emerald-900">The Holy Quran</h1>
                <p className="text-xs text-gray-500">Select a Surah to begin reading</p>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            {!selectedSurah ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="mb-6" style={{fontFamily:'Amiri,serif'}}>
                  <p className="text-5xl text-emerald-800 mb-4">ٱلْقُرْآنُ ٱلْكَرِيمُ</p>
                  <p className="text-lg text-gray-500">The Noble Quran</p>
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Welcome to the Quran Reader</h2>
                <p className="text-gray-500 max-w-md">Choose a Surah from the sidebar to start reading the Quran in Arabic with English translation.</p>
              </div>
            ) : loadingVerses ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-b from-emerald-800 to-emerald-900 text-white py-8 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 400 200"><pattern id="islamic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="8" fill="none" stroke="white" strokeWidth="0.5"/><path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.3"/></pattern><rect width="400" height="200" fill="url(#islamic-pattern)"/></svg>
                    </div>
                    <div className="relative">
                      <p className="text-xs text-emerald-200 uppercase tracking-widest mb-2">سورة</p>
                      <p className="text-4xl mb-2" style={{fontFamily:'Amiri,serif'}}>{selectedSurah.name}</p>
                      <h2 className="text-2xl font-bold mb-1">{selectedSurah.englishName}</h2>
                      <p className="text-emerald-200 text-sm">{selectedSurah.englishNameTranslation}</p>
                      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-emerald-300">
                        <span>{selectedSurah.revelationType}</span>
                        <span>•</span>
                        <span>{selectedSurah.verseCount} Ayahs</span>
                        <span>•</span>
                        <span>Juz {Math.ceil(selectedSurah.number / 20)}</span>
                      </div>
                    </div>
                  </div>

                  {showBismillah && (
                    <div className="py-6 px-8 text-center border-b border-gray-100 bg-gradient-to-b from-emerald-50 to-white">
                      <p className="text-3xl text-emerald-800 leading-loose" style={{fontFamily:'Amiri,serif'}} dir="rtl">{BISMILLAH}</p>
                    </div>
                  )}

                  <div className="p-6 md:p-10">
                    <div className="flex flex-wrap gap-x-1 gap-y-2 justify-center leading-[2.6]" dir="rtl">
                      {verses.map((verse) => (
                        <button
                          key={verse.numberInSurah}
                          onClick={() => setSelectedVerse(selectedVerse?.numberInSurah === verse.numberInSurah ? null : verse)}
                          className={`inline items-center transition-all duration-200 ${
                            selectedVerse?.numberInSurah === verse.numberInSurah
                              ? 'bg-emerald-100 rounded-lg px-1'
                              : 'hover:bg-emerald-50 rounded-lg px-1'
                          }`}
                        >
                          <span className="text-2xl md:text-3xl text-gray-900" style={{fontFamily:'Amiri,serif'}}>{verse.text}</span>
                          <span className="inline-flex items-center justify-center w-8 h-8 mx-0.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-xs font-bold shadow-sm align-middle relative -top-0.5">
                            {verse.numberInSurah}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-10 text-center">
                      <div className="flex items-center justify-center gap-2 text-emerald-600">
                        <span className="text-2xl" style={{fontFamily:'Amiri,serif'}}>۞</span>
                        <span className="text-sm font-medium">End of {selectedSurah.englishName}</span>
                        <span className="text-2xl" style={{fontFamily:'Amiri,serif'}}>۞</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`${selectedVerse ? 'w-[420px]' : 'w-0'} transition-all duration-300 overflow-hidden border-l border-gray-200 bg-white flex flex-col`}>
          {selectedVerse && (
            <>
              <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-b from-emerald-50 to-white">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-emerald-900">Ayah {selectedVerse.numberInSurah}</h3>
                    <p className="text-xs text-gray-500">{selectedSurah?.englishName} • {selectedSurah?.name}</p>
                  </div>
                  <button
                    onClick={() => setSelectedVerse(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-100 transition-colors text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      const idx = surahs.findIndex(s => s.number === selectedSurah.number)
                      if (idx > 0) setSelectedSurah(surahs[idx - 1])
                    }}
                    disabled={selectedSurah?.number === 1}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Prev Surah
                  </button>
                  <span className="text-xs text-emerald-600 font-medium">{selectedSurah?.number} / 114</span>
                  <button
                    onClick={() => {
                      const idx = surahs.findIndex(s => s.number === selectedSurah.number)
                      if (idx < surahs.length - 1) setSelectedSurah(surahs[idx + 1])
                    }}
                    disabled={selectedSurah?.number === 114}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                  >
                    Next Surah
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-6 border border-emerald-100">
                  <p className="text-3xl text-emerald-900 leading-[2.2] text-right" dir="rtl" style={{fontFamily:'Amiri,serif'}}>
                    {selectedVerse.text}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Translation
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 italic">
                    &ldquo;{selectedVerse.translation}&rdquo;
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Interpretation (Tafsir)
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedVerse.tafsir || 'Tafsir for this verse will be available soon. The interpretation provides deeper understanding of the verse\'s meaning, context, and lessons.'}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <button
                    onClick={() => {
                      const idx = verses.findIndex(v => v.numberInSurah === selectedVerse.numberInSurah)
                      if (idx > 0) setSelectedVerse(verses[idx - 1])
                    }}
                    disabled={selectedVerse.numberInSurah === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Prev
                  </button>
                  <span className="text-xs text-gray-400 font-medium">{selectedVerse.numberInSurah} / {verses.length}</span>
                  <button
                    onClick={() => {
                      const idx = verses.findIndex(v => v.numberInSurah === selectedVerse.numberInSurah)
                      if (idx < verses.length - 1) setSelectedVerse(verses[idx + 1])
                    }}
                    disabled={selectedVerse.numberInSurah === verses.length}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                {selectedVerse.juz && (
                  <div className="text-xs text-gray-400 border-t border-gray-100 pt-4 flex items-center gap-3">
                    <span className="bg-gray-100 px-2 py-1 rounded">Juz {selectedVerse.juz}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Page {selectedVerse.page}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
