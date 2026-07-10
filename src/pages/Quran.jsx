import { useState, useEffect } from 'react';
import { fetchSurahs, fetchVersesBySurah } from '../utils/dataFetching';

export default function Quran() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [loadingSurahs, setLoadingSurahs] = useState(true);
  const [loadingVerses, setLoadingVerses] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await fetchSurahs();
        setSurahs(data);
      } catch (error) {
        console.error('Failed to fetch surahs:', error);
      } finally {
        setLoadingSurahs(false);
      }
    };
    loadSurahs();
  }, []);

  useEffect(() => {
    if (!selectedSurah) return;
    const loadVerses = async () => {
      setLoadingVerses(true);
      try {
        const data = await fetchVersesBySurah(selectedSurah.number);
        setVerses(data);
      } catch (error) {
        console.error('Failed to fetch verses:', error);
      } finally {
        setLoadingVerses(false);
      }
    };
    loadVerses();
  }, [selectedSurah]);

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
    setSelectedVerse(null);
    setDrawerOpen(false);
  };

  const handleVerseClick = (verse) => {
    setSelectedVerse(verse);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedVerse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">The Holy Quran</h1>
          <p className="text-gray-600 text-lg">Select a Surah to read its verses</p>
        </div>

        {loadingSurahs ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {surahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => handleSurahClick(surah)}
                className={`bg-white rounded-xl p-5 shadow-md border-2 transition-all duration-300 text-left hover:shadow-lg hover:-translate-y-1 ${
                  selectedSurah?.number === surah.number
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-transparent hover:border-emerald-300'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                    {surah.number}
                  </span>
                  <span className="text-2xl font-serif text-emerald-800">{surah.name}</span>
                </div>
                <p className="text-gray-700 font-semibold mb-1">{surah.englishName}</p>
                <p className="text-sm text-gray-500">{surah.verseCount} verses</p>
              </button>
            ))}
          </div>
        )}

        {selectedSurah && (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="text-center mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-emerald-800 mb-2">{selectedSurah.englishName}</h2>
              <p className="text-4xl font-serif text-emerald-600 mb-2">{selectedSurah.name}</p>
              <p className="text-gray-500">{selectedSurah.verseCount} verses &bull; {selectedSurah.revelationType}</p>
            </div>

            {loadingVerses ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
              </div>
            ) : (
              <div className="space-y-1">
                {verses.map((verse) => (
                  <button
                    key={verse.number}
                    onClick={() => handleVerseClick(verse)}
                    className="w-full text-left p-5 rounded-xl transition-all duration-200 hover:bg-emerald-50 group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold group-hover:bg-emerald-200 transition-colors">
                        {verse.numberInSurah}
                      </span>
                      <div className="flex-1">
                        <p className="text-2xl font-serif text-right text-gray-900 leading-loose mb-3" dir="rtl">
                          {verse.text}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">{verse.translation}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeDrawer}
          ></div>

          <div className="relative w-full max-w-lg bg-white shadow-2xl transform transition-transform duration-300 translate-x-0 overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-emerald-800">
                {selectedSurah?.englishName} - Verse {selectedVerse?.numberInSurah}
              </h3>
              <button
                onClick={closeDrawer}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <p className="text-3xl font-serif text-right text-emerald-900 leading-loose mb-4" dir="rtl">
                  {selectedVerse?.text}
                </p>
                <p className="text-gray-700 italic">{selectedVerse?.translation}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Tafsir
                </h4>
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  {selectedVerse?.tafsir || 'Tafsir information not available for this verse.'}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Revelation Context
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedVerse?.revelationContext || 'Context information not available for this verse.'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Tajweed Rules
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {selectedVerse?.tajweedRules && selectedVerse.tajweedRules.length > 0 ? (
                    <ul className="space-y-2">
                      {selectedVerse.tajweedRules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-500 mt-1">&#8226;</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">No specific tajweed rules noted for this verse.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
