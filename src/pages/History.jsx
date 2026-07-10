import { useState, useEffect } from 'react';
import { fetchHistoricalEvents } from '../utils/dataFetching';

export default function History() {
  const [events, setEvents] = useState([]);
  const [useHijri, setUseHijri] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchHistoricalEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch historical events:', error);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const sortedEvents = [...events].sort((a, b) =>
    useHijri ? a.hijriYear - b.hijriYear : a.gregorianYear - b.gregorianYear
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-emerald-800 text-lg font-medium">Loading historical events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Timeline of Islamic History
          </h1>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto mb-8">
            Explore the pivotal moments that shaped Islamic civilization across the centuries
          </p>
          <button
            onClick={() => setUseHijri((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Showing: {useHijri ? 'Hijri Years' : 'Gregorian Years'}
          </button>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-300 transform sm:-translate-x-px"></div>

          <div className="space-y-8 sm:space-y-12">
            {sortedEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.id || index}
                  className={`relative flex items-center ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
                >
                  <div className="absolute left-4 sm:left-1/2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full shadow-md transform -translate-x-2.5 sm:-translate-x-2.5 z-10 ring-2 ring-emerald-200"></div>

                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-emerald-100 transform hover:-translate-y-1">
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isLeft ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full">
                          {useHijri ? `AH ${event.hijriYear}` : `AD ${event.gregorianYear}`}
                        </span>
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                          {useHijri ? `AD ${event.gregorianYear}` : `AH ${event.hijriYear}`}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-emerald-900 mb-2">
                        {event.title}
                      </h3>

                      <p className="text-emerald-700 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {event.location && (
                        <div
                          className={`flex items-center gap-1.5 text-sm text-emerald-600 ${
                            isLeft ? 'sm:justify-end' : 'sm:justify-start'
                          }`}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {sortedEvents.length === 0 && !loading && (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-emerald-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-emerald-700 font-medium">No historical events found</p>
            <p className="text-emerald-500 mt-2">Events will appear here once they are available</p>
          </div>
        )}
      </div>
    </div>
  );
}
