import { useState, useEffect } from 'react';
import { fetchHadithCategories, fetchHadithsByCategory } from '../utils/dataFetching';

const Hadiths = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hadithsLoading, setHadithsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchHadithCategories();
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    const loadHadiths = async () => {
      setHadithsLoading(true);
      try {
        const data = await fetchHadithsByCategory(selectedCategory.id);
        setHadiths(data);
      } catch (error) {
        console.error('Failed to fetch hadiths:', error);
        setHadiths([]);
      } finally {
        setHadithsLoading(false);
      }
    };
    loadHadiths();
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
          w-72 h-screen bg-emerald-50 border-r border-emerald-100
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-emerald-800">Hadith Explorer</h2>
            </div>

            <h3 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-4">Categories</h3>

            {loading ? (
              <div className="space-y-3">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-12 bg-emerald-100 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategorySelect(category)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                        ${selectedCategory?.id === category.id
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-emerald-800 hover:bg-emerald-100'
                        }
                      `}
                    >
                      <span className="font-medium">{category.name}</span>
                      {category.count && (
                        <span className={`
                          ml-2 text-sm
                          ${selectedCategory?.id === category.id ? 'text-emerald-200' : 'text-emerald-500'}
                        `}>
                          ({category.count})
                        </span>
                      )}
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
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                {selectedCategory ? selectedCategory.name : 'Select a Category'}
              </h1>
              <p className="text-gray-600">
                {selectedCategory
                  ? `Explore authentic hadiths related to ${selectedCategory.name.toLowerCase()}`
                  : 'Choose a category from the sidebar to explore hadiths'}
              </p>
            </div>

            {hadithsLoading ? (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
                    <div className="h-20 bg-gray-100 rounded mb-4" />
                    <div className="h-16 bg-gray-100 rounded mb-4" />
                    <div className="flex gap-4">
                      <div className="h-4 bg-gray-200 rounded w-24" />
                      <div className="h-4 bg-gray-200 rounded w-32" />
                    </div>
                  </div>
                ))}
              </div>
            ) : hadiths.length === 0 ? (
              <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No hadiths found</h3>
                <p className="text-gray-500">Select a category to view related hadiths</p>
              </div>
            ) : (
              <div className="space-y-6">
                {hadiths.map((hadith, index) => (
                  <article
                    key={hadith.id || index}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                        Hadith #{hadith.number}
                      </span>
                      <span className="text-sm text-gray-500">{hadith.source}</span>
                    </div>

                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-r-4 border-emerald-500">
                      <p className="text-right text-xl leading-relaxed text-gray-900 font-serif" dir="rtl">
                        {hadith.arabicText}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">{hadith.englishTranslation}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Narrator:</span> {hadith.narrator}
                        </span>
                      </div>

                      {hadith.ruling && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            <span className="font-medium">Ruling:</span> {hadith.ruling}
                          </span>
                        </div>
                      )}
                    </div>
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
