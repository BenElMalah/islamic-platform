import { useState, useEffect } from 'react'
import { fetchSurahs, fetchVersesBySurah } from '../utils/dataFetching'

export default function Quran() {
  const [surahs, setSurahs] = useState([])
  const [selectedSurah, setSelectedSurah] = useState(null)
  const [verses, setVerses] = useState([])
  const [expandedVerse, setExpandedVerse] = useState(null)
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
      setExpandedVerse(null)
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

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah)
    setExpandedVerse(null)
  }

  const toggleVerse = (verse) => {
    setExpandedVerse(expandedVerse?.numberInSurah === verse.numberInSurah ? null : verse)
  }

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
                    onClick={() => handleSurahClick(surah)}
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

        <div className="flex-1 overflow-y-auto">
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
            <div className="max-w-5xl mx-auto px-6 py-8">
              <div className="text-center mb-12">
                <p className="text-4xl font-serif text-emerald-700 mb-2">{selectedSurah.name}</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedSurah.englishName}</h2>
                <p className="text-gray-500">{selectedSurah.englishNameTranslation} &bull; {selectedSurah.revelationType}</p>
                <div className="mt-4 w-24 h-1 bg-emerald-300 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-0">
                {verses.map((verse) => (
                  <div key={verse.numberInSurah}>
                    <button
                      onClick={() => toggleVerse(verse)}
                      className={`w-full text-left p-6 transition-all duration-200 rounded-xl mb-2 ${
                        expandedVerse?.numberInSurah === verse.numberInSurah
                          ? 'bg-emerald-50 shadow-md'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                          {verse.numberInSurah}
                        </span>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="text-right" dir="rtl">
                            <p className="text-2xl font-serif text-gray-900 leading-loose">
                              {verse.text}
                            </p>
                          </div>
                          <div className="border-l border-gray-200 pl-6">
                            <p className="text-gray-700 leading-relaxed">
                              {verse.translation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>

                    {expandedVerse?.numberInSurah === verse.numberInSurah && (
                      <div className="mx-6 mb-4 p-6 bg-white border border-emerald-200 rounded-xl shadow-sm">
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            Translation
                          </h4>
                          <p className="text-gray-800 leading-relaxed italic bg-emerald-50 p-4 rounded-lg">
                            "{verse.translation}"
                          </p>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                          <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            Interpretation (Tafsir)
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {verse.tafsir || 'Tafsir for this verse will be available soon. The interpretation provides deeper understanding of the verse\'s meaning, context, and lessons.'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
