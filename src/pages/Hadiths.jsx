import { useState, useMemo } from 'react';
import hadithsData from '../data/hadithsData.json';

const COLLECTIONS = Object.keys(hadithsData);

const Hadiths = () => {
  const [selectedCollection, setSelectedCollection] = useState(COLLECTIONS[0]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const collection = hadithsData[selectedCollection];

  const sections = useMemo(() => {
    if (!collection?.sections) return [];
    return Object.entries(collection.sections)
      .filter(([key]) => key !== '0')
      .map(([key, name]) => ({ id: Number(key), name }));
  }, [collection]);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    return sections.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sections, searchQuery]);

  const sectionHadiths = useMemo(() => {
    if (!collection?.hadiths) return [];
    const hadiths = Object.values(collection.hadiths);
    if (!selectedSection) return hadiths.slice(0, 50);
    return hadiths.filter(h => h.section === selectedSection);
  }, [collection, selectedSection]);

  const handleCollectionSelect = (key) => {
    setSelectedCollection(key);
    setSelectedSection(null);
    setSearchQuery('');
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Hadith Explorer</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`
          fixed lg:sticky top-0 left-0 z-40 lg:z-0
          w-80 h-screen bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto flex flex-col
        `}>
          <div className="p-4 border-b border-gray-200 bg-emerald-900 text-white">
            <h2 className="text-lg font-bold mb-3">Al-Hadith</h2>
            <div className="flex gap-1 mb-3">
              {COLLECTIONS.map(key => (
                <button
                  key={key}
                  onClick={() => handleCollectionSelect(key)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    selectedCollection === key
                      ? 'bg-white text-emerald-900'
                      : 'text-emerald-200 hover:bg-emerald-800'
                  }`}
                >
                  {hadithsData[key].label.split(' ').slice(-1)[0]}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-900 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-300"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul>
              <li>
                <button
                  onClick={() => setSelectedSection(null)}
                  className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${
                    !selectedSection
                      ? 'bg-emerald-50 border-l-4 border-l-emerald-600 font-semibold'
                      : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                  }`}
                >
                  <span className="text-sm text-gray-800">All Hadiths</span>
                  <span className="text-xs text-gray-500 ml-2">({Object.keys(collection.hadiths).length})</span>
                </button>
              </li>
              {filteredSections.map(section => (
                <li key={section.id}>
                  <button
                    onClick={() => { setSelectedSection(section.id); setSidebarOpen(false) }}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${
                      selectedSection === section.id
                        ? 'bg-emerald-50 border-l-4 border-l-emerald-600 font-semibold'
                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                    }`}
                  >
                    <span className="text-sm text-gray-800">{section.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1 min-h-screen p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                {collection.label}
              </h1>
              <p className="text-gray-600">
                {selectedSection
                  ? sections.find(s => s.id === selectedSection)?.name || 'Section'
                  : `Showing ${sectionHadiths.length} of ${Object.keys(collection.hadiths).length} hadiths`}
              </p>
            </div>

            <div className="space-y-6">
              {sectionHadiths.map(hadith => (
                <article
                  key={hadith.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      Hadith #{hadith.id}
                    </span>
                    {hadith.section && (
                      <span className="text-sm text-gray-500">
                        Book {hadith.section}
                      </span>
                    )}
                  </div>

                  {hadith.arabic && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg border-r-4 border-emerald-500">
                      <p className="text-right text-xl leading-relaxed text-gray-900" dir="rtl" style={{fontFamily:'Amiri,serif'}}>
                        {hadith.arabic}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">{hadith.text}</p>
                  </div>
                </article>
              ))}
            </div>

            {sectionHadiths.length === 0 && (
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No hadiths found</h3>
                <p className="text-gray-500">Try selecting a different section</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hadiths;
