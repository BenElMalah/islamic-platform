import { useState, useEffect } from 'react'
import { fetchSurahs, fetchVersesBySurah } from '../utils/dataFetching'

export default function Quran() {
  const [surahs, setSurahs] = useState([])
  const [selectedSurah, setSelectedSurah] = useState(null)
  const [verses, setVerses] = useState([])
  const [selectedVerse, setSelectedVerse] = useState(null)
  const [loadingSurahs, setLoadingSurahs] = useState(true)
  const [loadingVerses, setLoadingVerses] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

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

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-sand-50">
      <aside className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-emerald-800">Surahs</h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-gray-600">
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
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    onClick={() => setSelectedSurah(surah)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-colors ${
                      selectedSurah?.number === surah.number
                        ? 'bg-emerald-50 border-l-4 border-l-emerald-600'
                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex-shrink-0">
                        {surah.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 text-sm truncate">{surah.englishName}</p>
                        <p className="text-xs text-gray-500 truncate">{surah.name} &bull; {surah.verseCount} verses</p>
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
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} className="text-gray-500 hover:text-emerald-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            {selectedSurah ? (
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-emerald-800">{selectedSurah.englishName}</h1>
                <p className="text-emerald-600 font-serif text-lg">{selectedSurah.name}</p>
                <p className="text-sm text-gray-500">{selectedSurah.verseCount} verses &bull; {selectedSurah.revelationType}</p>
              </div>
            ) : (
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-emerald-800">The Holy Quran</h1>
                <p className="text-gray-500">Select a Surah from the sidebar to begin reading</p>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {!selectedSurah ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="text-6xl mb-6 text-emerald-200">
                  <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Welcome to the Quran Reader</h2>
                <p className="text-gray-500 max-w-md">Choose a Surah from the sidebar to start reading the verses in Arabic with English translation.</p>
              </div>
            ) : loadingVerses ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <p className="text-3xl font-serif text-emerald-700 mb-1">{selectedSurah.name}</p>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedSurah.englishName}</h2>
                  <p className="text-sm text-gray-500">{selectedSurah.englishNameTranslation}</p>
                  <div className="mt-3 w-20 h-1 bg-emerald-300 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-wrap gap-2 justify-center" dir="rtl">
                    {verses.map((verse) => (
                      <button
                        key={verse.numberInSurah}
                        onClick={() => setSelectedVerse(selectedVerse?.numberInSurah === verse.numberInSurah ? null : verse)}
                        className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-lg font-serif transition-all duration-200 ${
                          selectedVerse?.numberInSurah === verse.numberInSurah
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-emerald-50 text-gray-800 hover:bg-emerald-100'
                        }`}
                      >
                        <span>{verse.text}</span>
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          selectedVerse?.numberInSurah === verse.numberInSurah
                            ? 'bg-white text-emerald-600'
                            : 'bg-emerald-200 text-emerald-700'
                        }`}>
                          {verse.numberInSurah}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`${selectedVerse ? 'w-96' : 'w-0'} transition-all duration-300 overflow-hidden border-l border-gray-200 bg-white flex flex-col`}>
          {selectedVerse && (
            <>
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-emerald-50">
                <div>
                  <h3 className="font-bold text-emerald-800">Verse {selectedVerse.numberInSurah}</h3>
                  <p className="text-sm text-gray-500">{selectedSurah?.englishName}</p>
                </div>
                <button
                  onClick={() => setSelectedVerse(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-100 transition-colors text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <p className="text-2xl font-serif text-right text-emerald-900 leading-loose" dir="rtl">
                    {selectedVerse.text}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Translation
                  </h4>
                  <p className="text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {selectedVerse.translation}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Interpretation (Tafsir)
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedVerse.tafsir || 'Tafsir for this verse will be available soon. The interpretation provides deeper understanding of the verse\'s meaning, context, and lessons.'}
                  </p>
                </div>

                {selectedVerse.juz && (
                  <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">
                    Juz {selectedVerse.juz} &bull; Page {selectedVerse.page}
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
