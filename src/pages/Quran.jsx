import { useState, useEffect, useMemo } from 'react'
import { fetchSurahs } from '../utils/dataFetching'
import mushafPages from '../data/mushafPages.json'
import quranData from '../data/quranData.json'
import tafsirData from '../data/tafsirAlJalalayn.json'
import { juzData, hizbData, rubData, manzilData } from '../data/divisions'

const BISMILLAH = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ'
const SKIP_BISMILLAH = [1, 9]
const TOTAL_PAGES = 604

const surahNames = {
  1:{ar:'الفاتحة',en:'Al-Fatihah',tr:'The Opening'},2:{ar:'البقرة',en:'Al-Baqarah',tr:'The Cow'},3:{ar:'آل عمران',en:'Ali Imran',tr:'Family of Imran'},4:{ar:'النساء',en:'An-Nisa',tr:'The Women'},5:{ar:'المائدة',en:'Al-Ma\'idah',tr:'The Table Spread'},6:{ar:'الأنعام',en:'Al-An\'am',tr:'The Cattle'},7:{ar:'الأعراف',en:'Al-A\'raf',tr:'The Heights'},8:{ar:'الأنفال',en:'Al-Anfal',tr:'The Spoils of War'},9:{ar:'التوبة',en:'At-Tawbah',tr:'The Repentance'},10:{ar:'يونس',en:'Yunus',tr:'Jonah'},11:{ar:'هود',en:'Hud',tr:'Hud'},12:{ar:'يوسف',en:'Yusuf',tr:'Joseph'},13:{ar:'الرعد',en:'Ar-Ra\'d',tr:'The Thunder'},14:{ar:'إبراهيم',en:'Ibrahim',tr:'Abraham'},15:{ar:'الحجر',en:'Al-Hijr',tr:'The Rocky Tract'},16:{ar:'النحل',en:'An-Nahl',tr:'The Bee'},17:{ar:'الإسراء',en:'Al-Isra',tr:'The Night Journey'},18:{ar:'الكهف',en:'Al-Kahf',tr:'The Cave'},19:{ar:'مريم',en:'Maryam',tr:'Mary'},20:{ar:'طه',en:'Taha',tr:'Taha'},21:{ar:'الأنبياء',en:'Al-Anbiya',tr:'The Prophets'},22:{ar:'الحج',en:'Al-Hajj',tr:'The Pilgrimage'},23:{ar:'المؤمنون',en:'Al-Mu\'minun',tr:'The Believers'},24:{ar:'النور',en:'An-Nur',tr:'The Light'},25:{ar:'الفرقان',en:'Al-Furqan',tr:'The Criterion'},26:{ar:'الشعراء',en:'Ash-Shu\'ara',tr:'The Poets'},27:{ar:'النمل',en:'An-Naml',tr:'The Ant'},28:{ar:'القصص',en:'Al-Qasas',tr:'The Stories'},29:{ar:'العنكبوت',en:'Al-Ankabut',tr:'The Spider'},30:{ar:'الروم',en:'Ar-Rum',tr:'The Romans'},31:{ar:'لقمان',en:'Luqman',tr:'Luqman'},32:{ar:'السجدة',en:'As-Sajdah',tr:'The Prostration'},33:{ar:'الأحزاب',en:'Al-Ahzab',tr:'The Combined Forces'},34:{ar:'سبأ',en:'Saba',tr:'Sheba'},35:{ar:'فاطر',en:'Fatir',tr:'The Originator'},36:{ar:'يس',en:'Ya-Sin',tr:'Ya-Sin'},37:{ar:'الصافات',en:'As-Saffat',tr:'Those Who Set The Ranks'},38:{ar:'ص',en:'Sad',tr:'The Letter Sad'},39:{ar:'الزمر',en:'Az-Zumar',tr:'The Troops'},40:{ar:'غافر',en:'Ghafir',tr:'The Forgiver'},41:{ar:'فصلت',en:'Fussilat',tr:'Explained In Detail'},42:{ar:'الشورى',en:'Ash-Shura',tr:'The Consultation'},43:{ar:'الزخرف',en:'Az-Zukhruf',tr:'The Ornaments Of Gold'},44:{ar:'الدخان',en:'Ad-Dukhan',tr:'The Smoke'},45:{ar:'الجاثية',en:'Al-Jathiyah',tr:'The Crouching'},46:{ar:'الأحقاف',en:'Al-Ahqaf',tr:'The Wind-Curved Sandhills'},47:{ar:'محمد',en:'Muhammad',tr:'Muhammad'},48:{ar:'الفتح',en:'Al-Fath',tr:'The Victory'},49:{ar:'الحجرات',en:'Al-Hujurat',tr:'The Rooms'},50:{ar:'ق',en:'Qaf',tr:'The Letter Qaf'},51:{ar:'الذاريات',en:'Adh-Dhariyat',tr:'The Winnowing Winds'},52:{ar:'الطور',en:'At-Tur',tr:'The Mount'},53:{ar:'النجم',en:'An-Najm',tr:'The Star'},54:{ar:'القمر',en:'Al-Qamar',tr:'The Moon'},55:{ar:'الرحمن',en:'Ar-Rahman',tr:'The Beneficent'},56:{ar:'الواقعة',en:'Al-Waqi\'ah',tr:'The Inevitable'},57:{ar:'الحديد',en:'Al-Hadid',tr:'The Iron'},58:{ar:'المجادلة',en:'Al-Mujadilah',tr:'The Pleading Woman'},59:{ar:'الحشر',en:'Al-Hashr',tr:'The Exile'},60:{ar:'الممتحنة',en:'Al-Mumtahanah',tr:'She That Is To Be Examined'},61:{ar:'الصف',en:'As-Saff',tr:'The Ranks'},62:{ar:'الجمعة',en:'Al-Jumu\'ah',tr:'Friday'},63:{ar:'المنافقون',en:'Al-Munafiqun',tr:'The Hypocrites'},64:{ar:'التغابن',en:'At-Taghabun',tr:'Mutual Disillusion'},65:{ar:'الطلاق',en:'At-Talaq',tr:'Divorce'},66:{ar:'التحريم',en:'At-Tahrim',tr:'The Prohibition'},67:{ar:'الملك',en:'Al-Mulk',tr:'The Sovereignty'},68:{ar:'القلم',en:'Al-Qalam',tr:'The Pen'},69:{ar:'الحاقة',en:'Al-Haqqah',tr:'The Reality'},70:{ar:'المعارج',en:'Al-Ma\'arij',tr:'The Ascending Stairways'},71:{ar:'نوح',en:'Nuh',tr:'Noah'},72:{ar:'الجن',en:'Al-Jinn',tr:'The Jinn'},73:{ar:'المزمل',en:'Al-Muzzammil',tr:'The Enshrouded One'},74:{ar:'المدثر',en:'Al-Muddaththir',tr:'The Cloaked One'},75:{ar:'القيامة',en:'Al-Qiyamah',tr:'The Resurrection'},76:{ar:'الإنسان',en:'Al-Insan',tr:'Man'},77:{ar:'المرسلات',en:'Al-Mursalat',tr:'The Emissaries'},78:{ar:'النبأ',en:'An-Naba',tr:'The Tidings'},79:{ar:'النازعات',en:'An-Nazi\'at',tr:'Those Who Drag Forth'},80:{ar:'عبس',en:'Abasa',tr:'He Frowned'},81:{ar:'التكوير',en:'At-Takwir',tr:'The Overthrowing'},82:{ar:'الانفطار',en:'Al-Infitar',tr:'The Cleaving'},83:{ar:'المطففين',en:'Al-Mutaffifin',tr:'The Defrauding'},84:{ar:'الانشقاق',en:'Al-Inshiqaq',tr:'The Sundering'},85:{ar:'البروج',en:'Al-Buruj',tr:'The Mansions Of The Stars'},86:{ar:'الطارق',en:'At-Tariq',tr:'The Nightcomer'},87:{ar:'الأعلى',en:'Al-A\'la',tr:'The Most High'},88:{ar:'الغاشية',en:'Al-Ghashiyah',tr:'The Overwhelming'},89:{ar:'الفجر',en:'Al-Fajr',tr:'The Dawn'},90:{ar:'البلد',en:'Al-Balad',tr:'The City'},91:{ar:'الشمس',en:'Ash-Shams',tr:'The Sun'},92:{ar:'الليل',en:'Al-Layl',tr:'The Night'},93:{ar:'الضحى',en:'Ad-Duhaa',tr:'The Morning Hours'},94:{ar:'الشرح',en:'Ash-Sharh',tr:'The Relief'},95:{ar:'التين',en:'At-Tin',tr:'The Fig'},96:{ar:'العلق',en:'Al-Alaq',tr:'The Clot'},97:{ar:'القدر',en:'Al-Qadr',tr:'The Power'},98:{ar:'البينة',en:'Al-Bayyinah',tr:'The Clear Proof'},99:{ar:'الزلزلة',en:'Az-Zalzalah',tr:'The Earthquake'},100:{ar:'العاديات',en:'Al-Adiyat',tr:'The Courser'},101:{ar:'القارعة',en:'Al-Qari\'ah',tr:'The Calamity'},102:{ar:'التكاثر',en:'At-Takathur',tr:'The Rivalry In Worldly Increase'},103:{ar:'العصر',en:'Al-Asr',tr:'The Declining Day'},104:{ar:'الهمزة',en:'Al-Humazah',tr:'The Traducer'},105:{ar:'الفيل',en:'Al-Fil',tr:'The Elephant'},106:{ar:'قريش',en:'Quraysh',tr:'Quraysh'},107:{ar:'الماعون',en:'Al-Ma\'un',tr:'The Small Kindnesses'},108:{ar:'الكوثر',en:'Al-Kawthar',tr:'The Abundance'},109:{ar:'الكافرون',en:'Al-Kafirun',tr:'The Disbelievers'},110:{ar:'النصر',en:'An-Nasr',tr:'The Divine Support'},111:{ar:'المسد',en:'Al-Masad',tr:'The Palm Fiber'},112:{ar:'الإخلاص',en:'Al-Ikhlas',tr:'The Sincerity'},113:{ar:'الفلق',en:'Al-Falaq',tr:'The Daybreak'},114:{ar:'الناس',en:'An-Nas',tr:'Mankind'},
}

export default function Quran() {
  const allVerses = useMemo(() => {
    const verses = []
    for (const [surahNum, surahVerses] of Object.entries(quranData.verses)) {
      for (const v of surahVerses) {
        verses.push({
          surah: Number(surahNum),
          surahName: surahNames[Number(surahNum)]?.en || `Surah ${surahNum}`,
          surahNameAr: surahNames[Number(surahNum)]?.ar || '',
          verse_number: v.verse_number,
          text_arabic: v.text_arabic,
          text_english: v.text_english,
          page: v.page,
          juz: v.juz,
        })
      }
    }
    return verses
  }, [])

  const [surahs, setSurahs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVerse, setSelectedVerse] = useState(null)
  const [loadingSurahs, setLoadingSurahs] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarTab, setSidebarTab] = useState('surahs')
  const [ayahSearchQuery, setAyahSearchQuery] = useState('')
  const [ayahSearchResults, setAyahSearchResults] = useState([])
  const [showAyahSearch, setShowAyahSearch] = useState(false)

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

  const pageData = mushafPages[String(currentPage)]
  const pageSurahs = pageData ? pageData.surahs : []

  const filteredSurahs = surahs.filter(s =>
    s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (surahNames[s.number]?.ar || '').includes(searchQuery) ||
    String(s.number).includes(searchQuery)
  )

  const searchAyahs = (query) => {
    if (!query.trim()) { setAyahSearchResults([]); return }
    const q = query.toLowerCase()
    const results = allVerses.filter(v =>
      v.text_english.toLowerCase().includes(q) ||
      v.surahName.toLowerCase().includes(q) ||
      `${v.surah}:${v.verse_number}` === q ||
      `${v.surah} ${v.verse_number}` === q
    ).slice(0, 30)
    setAyahSearchResults(results)
  }

  const goToPage = (pageNum) => {
    const p = Math.max(1, Math.min(TOTAL_PAGES, pageNum))
    setCurrentPage(p)
    setSelectedVerse(null)
  }

  const goToSurah = (surahNum) => {
    for (const [pageNum, data] of Object.entries(mushafPages)) {
      if (data.surahs.includes(surahNum)) {
        const firstVerse = data.verses.find(v => v.surah === surahNum)
        if (firstVerse && firstVerse.verse_number === 1) {
          goToPage(Number(pageNum))
          return
        }
      }
    }
    goToPage(1)
  }

  const goToAyah = (surah, ayah) => {
    for (const [pageNum, data] of Object.entries(mushafPages)) {
      const match = data.verses.find(v => v.surah === surah && v.verse_number === ayah)
      if (match) {
        goToPage(Number(pageNum))
        setSelectedVerse(match)
        setShowAyahSearch(false)
        setAyahSearchQuery('')
        return
      }
    }
  }

  const sidebarTabs = [
    { id: 'surahs', label: 'Surahs' },
    { id: 'juz', label: 'Juz' },
    { id: 'hizb', label: 'Hizb' },
    { id: 'rub', label: 'Rub' },
    { id: 'manzil', label: 'Manzil' },
  ]

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-[#f5f0e8]">
      <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-3 border-b border-gray-200 bg-emerald-900 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold">Al-Quran</h2>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-emerald-200 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            </button>
          </div>
          <div className="flex gap-1 mb-2">
            {sidebarTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setSidebarTab(tab.id); setSearchQuery('') }}
                className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  sidebarTab === tab.id ? 'bg-white text-emerald-900' : 'text-emerald-200 hover:bg-emerald-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder={`Search ${sidebarTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-900 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-300"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {loadingSurahs ? (
            <div className="flex justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div></div>
          ) : (
            <ul>
              {sidebarTab === 'surahs' && filteredSurahs.map((surah) => {
                const info = surahNames[surah.number]
                return (
                  <li key={surah.number}>
                    <button
                      onClick={() => goToSurah(surah.number)}
                      className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all ${
                        pageSurahs.includes(surah.number) ? 'bg-emerald-50 border-l-4 border-l-emerald-600' : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full text-xs font-bold flex-shrink-0 shadow-sm">{surah.number}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <p className="font-semibold text-gray-800 text-sm truncate">{info?.en}</p>
                            <p className="text-sm text-emerald-800 flex-shrink-0" style={{fontFamily:'Amiri,serif'}}>{info?.ar}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{info?.tr} &bull; {surah.verseCount} ayahs</p>
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })}
              {sidebarTab === 'juz' && juzData.filter(j => `Juz ${j.number}`.toLowerCase().includes(searchQuery.toLowerCase()) || String(j.number).includes(searchQuery)).map(j => (
                <li key={j.number}>
                  <button onClick={() => goToPage(j.startPage)} className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all hover:bg-gray-50 border-l-4 border-l-transparent`}>
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-full text-xs font-bold flex-shrink-0">{j.number}</span>
                      <div className="flex-1"><p className="font-semibold text-gray-800 text-sm">Juz {j.number}</p><p className="text-xs text-gray-500">Starts at page {j.startPage}</p></div>
                    </div>
                  </button>
                </li>
              ))}
              {sidebarTab === 'hizb' && hizbData.filter(h => `Hizb ${h.number}`.toLowerCase().includes(searchQuery.toLowerCase()) || String(h.number).includes(searchQuery)).map(h => (
                <li key={h.number}>
                  <button onClick={() => goToPage(h.startPage)} className="w-full text-left px-4 py-3 border-b border-gray-100 transition-all hover:bg-gray-50 border-l-4 border-l-transparent">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full text-xs font-bold flex-shrink-0">{h.number}</span>
                      <div className="flex-1"><p className="font-semibold text-gray-800 text-sm">Hizb {h.number}</p><p className="text-xs text-gray-500">Starts at page {h.startPage}</p></div>
                    </div>
                  </button>
                </li>
              ))}
              {sidebarTab === 'rub' && rubData.filter(r => `Rub ${r.number}`.toLowerCase().includes(searchQuery.toLowerCase()) || String(r.number).includes(searchQuery)).map(r => (
                <li key={r.number}>
                  <button onClick={() => goToPage(r.startPage)} className="w-full text-left px-4 py-3 border-b border-gray-100 transition-all hover:bg-gray-50 border-l-4 border-l-transparent">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full text-xs font-bold flex-shrink-0">{r.number}</span>
                      <div className="flex-1"><p className="font-semibold text-gray-800 text-sm">Rub {r.number}</p><p className="text-xs text-gray-500">Starts at page {r.startPage}</p></div>
                    </div>
                  </button>
                </li>
              ))}
              {sidebarTab === 'manzil' && manzilData.filter(m => `Manzil ${m.number}`.toLowerCase().includes(searchQuery.toLowerCase()) || String(m.number).includes(searchQuery)).map(m => (
                <li key={m.number}>
                  <button onClick={() => goToPage(m.startPage)} className="w-full text-left px-4 py-3 border-b border-gray-100 transition-all hover:bg-gray-50 border-l-4 border-l-transparent">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full text-xs font-bold flex-shrink-0">{m.number}</span>
                      <div className="flex-1"><p className="font-semibold text-gray-800 text-sm">Manzil {m.number}</p><p className="text-xs text-gray-500">Starts at page {m.startPage}</p></div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 shadow-sm">
          {!sidebarOpen && (
            <button onClick={() => setSidebarOpen(true)} className="text-gray-500 hover:text-emerald-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          )}
          <div className="flex-1">
            <h1 className="text-lg font-bold text-emerald-900">Al-Quran Al-Kareem</h1>
            <p className="text-xs text-gray-500">Page {currentPage} of {TOTAL_PAGES}</p>
          </div>
          <button onClick={() => setShowAyahSearch(!showAyahSearch)} className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" title="Search Ayah">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <input type="number" min={1} max={TOTAL_PAGES} value={currentPage} onChange={(e) => goToPage(Number(e.target.value))} className="w-16 text-center text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === TOTAL_PAGES} className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {showAyahSearch && (
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search ayahs... (e.g. '2:255' or 'In the name of Allah')"
                  value={ayahSearchQuery}
                  onChange={(e) => { setAyahSearchQuery(e.target.value); searchAyahs(e.target.value) }}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-10"
                  autoFocus
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <button onClick={() => { setShowAyahSearch(false); setAyahSearchQuery(''); setAyahSearchResults([]) }} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {ayahSearchResults.length > 0 && (
              <div className="mt-3 max-h-60 overflow-y-auto space-y-1">
                {ayahSearchResults.map((r, i) => (
                  <button key={i} onClick={() => goToAyah(r.surah, r.verse_number)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 transition-colors flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">{r.surah}:{r.verse_number}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-0.5">{r.surahName} &bull; Page {r.page}</p>
                      <p className="text-sm text-gray-700 truncate">{r.text_english}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {ayahSearchQuery && ayahSearchResults.length === 0 && (
              <p className="mt-3 text-sm text-gray-500 text-center">No results found</p>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto flex justify-center py-8 px-4">
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" style={{minHeight:'700px'}}>
              {pageSurahs.length > 0 && pageSurahs.some(s => {
                const pv = pageData.verses.filter(v => v.surah === s)
                return pv[0]?.verse_number === 1
              }) && (
                <div className="bg-gradient-to-b from-emerald-800 to-emerald-900 text-white py-6 px-6 text-center">
                  {pageSurahs.filter(s => {
                    const pv = pageData.verses.filter(v => v.surah === s)
                    return pv[0]?.verse_number === 1
                  }).map(s => {
                    const info = surahNames[s]
                    return (
                      <div key={s} className="mb-4 last:mb-0">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <div className="h-px flex-1 max-w-[60px] bg-emerald-400"></div>
                          <span className="text-xs text-emerald-200 uppercase tracking-widest">سورة</span>
                          <div className="h-px flex-1 max-w-[60px] bg-emerald-400"></div>
                        </div>
                        <p className="text-3xl mb-1" style={{fontFamily:'Amiri,serif'}}>{info?.ar}</p>
                        <p className="text-lg font-bold">{info?.en}</p>
                        <p className="text-emerald-200 text-xs">{info?.tr}</p>
                        {!SKIP_BISMILLAH.includes(s) && (
                          <p className="mt-4 text-xl text-emerald-100" style={{fontFamily:'Amiri,serif'}} dir="rtl">{BISMILLAH}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="p-6 md:p-10">
                <div className="leading-[2.8] text-[28px]" dir="rtl" style={{fontFamily:'Amiri,serif', textAlign:'justify', textAlignLast:'center', wordSpacing:'0.15em'}}>
                  {pageData?.verses.map((verse) => (
                    <span key={`${verse.surah}-${verse.verse_number}`} className="inline">
                      <button
                        onClick={() => setSelectedVerse(selectedVerse?.surah === verse.surah && selectedVerse?.verse_number === verse.verse_number ? null : verse)}
                        className={`inline transition-all duration-200 ${
                          selectedVerse?.surah === verse.surah && selectedVerse?.verse_number === verse.verse_number
                            ? 'bg-emerald-100 rounded px-0.5'
                            : 'hover:bg-emerald-50 rounded px-0.5'
                        }`}
                      >
                        {verse.text_arabic}
                        <span className="inline-flex items-center justify-center w-7 h-7 mx-0.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-[11px] font-bold shadow-sm align-middle relative -top-0.5" style={{fontFamily:'Inter,sans-serif'}}>
                          {verse.verse_number}
                        </span>
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 flex items-center justify-between">
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Prev
                </button>
                <span className="text-sm font-bold text-emerald-800 bg-emerald-100 px-4 py-1 rounded-full">{currentPage}</span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === TOTAL_PAGES} className="flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${selectedVerse ? 'w-[420px]' : 'w-0'} transition-all duration-300 overflow-hidden border-l border-gray-200 bg-white flex flex-col`}>
        {selectedVerse && (
          <>
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-b from-emerald-50 to-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-emerald-900">{surahNames[selectedVerse.surah]?.en} - Ayah {selectedVerse.verse_number}</h3>
                  <p className="text-xs text-gray-500">{surahNames[selectedVerse.surah]?.ar} &bull; Page {selectedVerse.page}</p>
                </div>
                <button onClick={() => setSelectedVerse(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-100 transition-colors text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-6 border border-emerald-100">
                <p className="text-3xl text-emerald-900 leading-[2.2] text-right" dir="rtl" style={{fontFamily:'Amiri,serif'}}>{selectedVerse.text_arabic}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Translation</h4>
                <p className="text-gray-700 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 italic">&ldquo;{selectedVerse.text_english}&rdquo;</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Interpretation (Tafsir)</h4>
                <div className="text-gray-600 leading-relaxed text-sm bg-amber-50 p-4 rounded-lg border border-amber-100">
                  {tafsirData[`${selectedVerse.surah}:${selectedVerse.verse_number}`] ? (
                    <p>{tafsirData[`${selectedVerse.surah}:${selectedVerse.verse_number}`]}</p>
                  ) : (
                    <p className="italic text-gray-400">Tafsir not available for this verse.</p>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">Source: Tafsir Al-Jalalayn (English)</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <button
                  onClick={() => {
                    const idx = pageData.verses.findIndex(v => v.surah === selectedVerse.surah && v.verse_number === selectedVerse.verse_number)
                    if (idx > 0) setSelectedVerse(pageData.verses[idx - 1])
                    else if (currentPage > 1) { const pp = mushafPages[String(currentPage - 1)]; if (pp?.verses.length) { setCurrentPage(currentPage - 1); setSelectedVerse(pp.verses[pp.verses.length - 1]) } }
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Prev
                </button>
                <button
                  onClick={() => {
                    const idx = pageData.verses.findIndex(v => v.surah === selectedVerse.surah && v.verse_number === selectedVerse.verse_number)
                    if (idx < pageData.verses.length - 1) setSelectedVerse(pageData.verses[idx + 1])
                    else if (currentPage < TOTAL_PAGES) { const np = mushafPages[String(currentPage + 1)]; if (np?.verses.length) { setCurrentPage(currentPage + 1); setSelectedVerse(np.verses[0]) } }
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Next<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
