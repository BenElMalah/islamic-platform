import { useState, useEffect } from 'react';
import { fetchProminentFigures } from '../utils/dataFetching';

const FILTER_TABS = ['All', 'Jurisprudence', 'Recitation', 'Companion', 'Ruler'];

const TYPE_BADGE_COLORS = {
  Jurisprudence: 'bg-blue-100 text-blue-800',
  Recitation: 'bg-purple-100 text-purple-800',
  Companion: 'bg-amber-100 text-amber-800',
  Ruler: 'bg-rose-100 text-rose-800',
};

export default function Figures() {
  const [figures, setFigures] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadFigures = async () => {
      const data = await fetchProminentFigures();
      setFigures(data);
    };
    loadFigures();
  }, []);

  const filteredFigures = figures.filter((figure) => {
    const matchesFilter = activeFilter === 'All' || figure.type === activeFilter;
    const matchesSearch = figure.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Scholars & Figures Directory
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Explore the lives of prominent Islamic scholars and historical figures
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search figures by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === tab
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filteredFigures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No figures found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFigures.map((figure) => (
              <div
                key={figure.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{figure.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${TYPE_BADGE_COLORS[figure.type] || 'bg-gray-100 text-gray-800'}`}>
                      {figure.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>{figure.birth_death_date || 'Unknown'}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
                    {figure.biography}
                  </p>
                  <button
                    onClick={() => setSelectedFigure(figure)}
                    className="flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-800 transition-colors"
                  >
                    <span>Read more</span>
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedFigure && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{backgroundColor:'rgba(0,0,0,0.6)'}}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-900">{selectedFigure.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${TYPE_BADGE_COLORS[selectedFigure.type] || 'bg-gray-100 text-gray-800'}`}>
                    {selectedFigure.type}
                  </span>
                </div>
                <button onClick={() => setSelectedFigure(null)} className="text-gray-400 hover:text-gray-600 p-1">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                <p className="text-sm text-gray-500 mb-4">{selectedFigure.birth_death_date}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Biography</h4>
                  <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                    {selectedFigure.biography}
                  </div>
                </div>

                {selectedFigure.achievements && selectedFigure.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedFigure.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                <button
                  onClick={() => setSelectedFigure(null)}
                  className="w-full sm:w-auto px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
