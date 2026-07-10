import { Link } from 'react-router-dom'

const coreBeliefs = [
  { title: 'Tawhid', arabic: 'توحيد', description: 'The absolute oneness and unity of God. Islam teaches that there is only one God, Allah, who is the sole creator and sustainer of the universe.' },
  { title: 'Prophethood', arabic: 'نبوءة', description: 'Belief in all prophets sent by God, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad (peace be upon them all), as messengers delivering God\'s guidance.' },
  { title: 'Day of Judgment', arabic: 'يوم القيامة', description: 'The belief in an afterlife where every person will be held accountable for their deeds and choices made during their earthly life.' },
  { title: 'Holy Books', arabic: 'الكتب السماوية', description: 'Revelations sent by God to guide humanity, including the Quran, Torah, Psalms, and Gospel, with the Quran being the final and preserved revelation.' },
  { title: 'Angels', arabic: 'الملائكة', description: 'Beings of light created by God who worship Him constantly and carry out His commands throughout the universe.' },
  { title: 'Divine Decree', arabic: 'القضاء والقدر', description: 'God\'s divine will and knowledge encompass all things. Everything occurs according to God\'s infinite wisdom and purpose.' },
]

const fivePillars = [
  { title: 'Shahada', arabic: 'الشهادة', icon: '宣言', description: 'The declaration of faith: "There is no god but Allah, and Muhammad is His messenger." This is the foundation of a Muslim\'s life.' },
  { title: 'Salah', arabic: 'الصلاة', icon: '祈', description: 'The five daily prayers performed facing Mecca, connecting Muslims directly with God through devotion and remembrance.' },
  { title: 'Zakat', arabic: 'الزكاة', icon: '施', description: 'Obligatory charitable giving of a fixed portion of one\'s wealth to those in need, purifying wealth and fostering social responsibility.' },
  { title: 'Sawm', arabic: 'الصوم', icon: '斋', description: 'Fasting during the month of Ramadan, abstaining from food and drink from dawn to sunset, cultivating self-discipline and spiritual growth.' },
  { title: 'Hajj', arabic: 'الحج', icon: '朝', description: 'The pilgrimage to Mecca at least once in a lifetime for those physically and financially able, a profound journey of spiritual renewal.' },
]

const platformSections = [
  { title: 'Core Concepts', path: '/core-concepts', description: 'Deep dive into fundamental Islamic beliefs and principles' },
  { title: 'Daily Practices', path: '/daily-practices', description: 'Learn about prayers, fasting, and daily worship' },
  { title: 'History', path: '/history', description: 'Explore the rich history of Islam and its civilizations' },
  { title: 'Quran', path: '/quran', description: 'Discover the teachings of the Holy Quran' },
  { title: 'Ethics', path: '/ethics', description: 'Islamic moral values and ethical conduct' },
  { title: 'Culture', path: '/culture', description: 'Art, architecture, and cultural contributions' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-sand-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0L80 40L40 80L0 40Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M40 25L55 40L40 55L25 40Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="font-[Amiri] text-emerald-300 text-2xl md:text-3xl mb-4" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Discover Islam</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            A welcoming journey into one of the world's most practiced faiths. Learn about its timeless teachings,
            rich heritage, and the values that guide over a billion people worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/core-concepts" className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              Start Learning
            </Link>
            <a href="#beliefs" className="inline-block border-2 border-emerald-300 text-emerald-100 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              Explore Below
            </a>
          </div>
        </div>
      </section>

      <section id="beliefs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[Amiri] text-emerald-600 text-xl mb-2" dir="rtl">العقيدة الإسلامية</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Beliefs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The six articles of faith form the foundation of Islamic belief, giving Muslims a comprehensive understanding of God, creation, and purpose.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreBeliefs.map((belief, index) => (
              <div key={index} className="relative group bg-white rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-emerald-50 border-l-[64px] border-l-transparent group-hover:border-t-emerald-100 transition-colors" />
                </div>
                <p className="font-[Amiri] text-emerald-500 text-lg mb-1" dir="rtl">{belief.arabic}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{belief.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pillars-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.3" />
                <path d="M20 2L38 20L20 38L2 20Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pillars-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[Amiri] text-emerald-600 text-xl mb-2" dir="rtl">أركان الإسلام</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Five Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The five pillars are the framework of a Muslim's life — fundamental acts of worship and devotion that unite the community and strengthen one's relationship with God.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {fivePillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                  {pillar.icon}
                </div>
                <p className="font-[Amiri] text-emerald-500 text-base mb-1" dir="rtl">{pillar.arabic}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[Amiri] text-emerald-600 text-xl mb-2" dir="rtl">استكشف المنصة</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover a wealth of knowledge across our carefully curated sections, designed to provide you with a thorough understanding of Islam.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformSections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                className="group block bg-white rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-lg hover:border-emerald-300 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{section.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{section.description}</p>
                <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-[Amiri] text-emerald-200 text-xl mb-2" dir="rtl">ابدأ رحلتك</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey of Discovery</h2>
          <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
            Whether you're curious, seeking knowledge, or exploring faith for the first time,
            our platform offers accessible, authentic, and respectful content to guide your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/core-concepts" className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
              Core Concepts
            </Link>
            <Link to="/history" className="inline-block border-2 border-emerald-300 text-emerald-100 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Islamic History
            </Link>
            <Link to="/quran" className="inline-block border-2 border-emerald-300 text-emerald-100 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              The Quran
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-emerald-950 text-emerald-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-[Amiri] text-emerald-400 text-lg mb-3" dir="rtl">صَدَقَ ٱللَّٰهُ ٱلْعَظِيمُ</p>
          <p className="text-emerald-300/60 text-sm mb-6">
            This platform is designed to provide accurate, respectful, and accessible information about Islam.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/core-concepts" className="hover:text-white transition-colors">Core Concepts</Link>
            <Link to="/daily-practices" className="hover:text-white transition-colors">Daily Practices</Link>
            <Link to="/history" className="hover:text-white transition-colors">History</Link>
            <Link to="/quran" className="hover:text-white transition-colors">Quran</Link>
            <Link to="/ethics" className="hover:text-white transition-colors">Ethics</Link>
            <Link to="/culture" className="hover:text-white transition-colors">Culture</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
