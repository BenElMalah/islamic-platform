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
    const matchesFilter =
      activeFilter === 'All' || figure.type === activeFilter;
    const matchesSearch = figure.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (figure) => {
    setSelectedFigure(figure);
  };

  const closeModal = () => {
    setSelectedFigure(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Scholars & Figures Directory
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Explore the lives of prominent Islamic scholars and historical
            figures
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
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
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
            <p className="text-gray-500 text-lg">
              No figures found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFigures.map((figure) => (
              <div
                key={figure.id}
                onClick={() => openModal(figure)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {figure.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        TYPE_BADGE_COLORS[figure.type] ||
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {figure.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-2">
                      Born: {figure.birthDate || 'Unknown'}
                    </span>
                    <span>|</span>
                    <span className="ml-2">
                      Died: {figure.deathDate || 'Unknown'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {figure.shortBio}
                  </p>
                  <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium">
                    <span>Read more</span>
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedFigure && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              onClick={closeModal}
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>

              <div
                className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        id="modal-title"
                      >
                        {selectedFigure.name}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          TYPE_BADGE_COLORS[selectedFigure.type] ||
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {selectedFigure.type}
                      </span>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-3">
                    <span>
                      Born: {selectedFigure.birthDate || 'Unknown'}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span>
                      Died: {selectedFigure.deathDate || 'Unknown'}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Biography
                    </h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedFigure.biography || selectedFigure.shortBio}
                    </p>
                  </div>

                  {selectedFigure.contributions && (
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Contributions
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedFigure.contributions}
                      </p>
                    </div>
                  )}

                  {selectedFigure.notableWorks && (
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Notable Works
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedFigure.notableWorks}
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
