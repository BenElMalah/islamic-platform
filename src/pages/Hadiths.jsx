import { useState, useMemo, useEffect } from 'react';

const COLLECTION_KEYS = ['bukhari', 'muslim', 'abudawud', 'tirmidhi', 'nasai', 'ibnmajah', 'nawawi', 'qudsi'];
const COLLECTION_LABELS = {
  bukhari: 'Sahih al-Bukhari',
  muslim: 'Sahih Muslim',
  abudawud: 'Sunan Abu Dawud',
  tirmidhi: 'Jami at-Tirmidhi',
  nasai: "Sunan an-Nasa'i",
  ibnmajah: 'Sunan Ibn Majah',
  nawawi: 'Forty Hadith of an-Nawawi',
  qudsi: 'Forty Hadith Qudsi',
};

const Hadiths = () => {
  const [selectedCollection, setSelectedCollection] = useState('bukhari');
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCollection(null);
    setSelectedSection(null);
    import(`../data/hadiths/${selectedCollection}.json`).then(mod => {
      setCollection(mod.default);
      setLoading(false);
    });
  }, [selectedCollection]);

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
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Hadith Explorer</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex">
        {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        <aside className={`fixed lg:sticky top-0 left-0 z-40 lg:z-0 w-80 h-screen bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto flex flex-col`}>
          <div className="p-4 border-b border-gray-200 bg-emerald-900 text-white">
            <h2 className="text-lg font-bold mb-3">Al-Hadith</h2>
            <div className="flex flex-wrap gap-1 mb-3">
              {COLLECTION_KEYS.map(key => (
                <button key={key} onClick={() => handleCollectionSelect(key)} className={`px-2 py-1 rounded text-xs font-medium transition-colors ${selectedCollection === key ? 'bg-white text-emerald-900' : 'text-emerald-200 hover:bg-emerald-800'}`}>
                  {COLLECTION_LABELS[key].split(' ').slice(-1)[0]}
                </button>
              ))}
            </div>
            <input type="text" placeholder="Search sections..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-3 py-2 text-sm text-gray-900 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-300" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="p-4 space-y-2">{[...Array(8)].map((_, i) => <div key={i} className="h-10 bg-gray-100 rounded-lg animate-pulse" />)}</div>
            ) : (
              <ul>
                <li>
                  <button onClick={() => setSelectedSection(null)} className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${!selectedSection ? 'bg-emerald-50 border-l-4 border-l-emerald-600 font-semibold' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}>
                    <span className="text-sm text-gray-800">All Hadiths</span>
                    <span className="text-xs text-gray-500 ml-2">({Object.keys(collection.hadiths).length})</span>
                  </button>
                </li>
                {filteredSections.map(section => (
                  <li key={section.id}>
                    <button onClick={() => { setSelectedSection(section.id); setSidebarOpen(false) }} className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${selectedSection === section.id ? 'bg-emerald-50 border-l-4 border-l-emerald-600 font-semibold' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}>
                      <span className="text-sm text-gray-800">{section.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <main className="flex-1 min-h-screen p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{COLLECTION_LABELS[selectedCollection]}</h1>
              <p className="text-gray-600">
                {loading ? 'Loading...' : selectedSection
                  ? sections.find(s => s.id === selectedSection)?.name || 'Section'
                  : `Showing first 50 of ${Object.keys(collection.hadiths).length} hadiths`}
              </p>
            </div>

            {loading ? (
              <div className="space-y-6">{[...Array(3)].map((_, i) => <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse"><div className="h-6 bg-gray-200 rounded w-1/4 mb-4" /><div className="h-20 bg-gray-100 rounded" /></div>)}</div>
            ) : (
              <div className="space-y-6">
                {sectionHadiths.map(hadith => (
                  <article key={hadith.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">Hadith #{hadith.id}</span>
                      {hadith.section && <span className="text-sm text-gray-500">Book {hadith.section}</span>}
                    </div>
                    {hadith.arabic && (
                      <div className="mb-4 p-4 bg-gray-50 rounded-lg border-r-4 border-emerald-500">
                        <p className="text-right text-xl leading-relaxed text-gray-900" dir="rtl" style={{fontFamily:'Amiri,serif'}}>{hadith.arabic}</p>
                      </div>
                    )}
                    <div><p className="text-gray-700 leading-relaxed">{hadith.text}</p></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hadiths;
