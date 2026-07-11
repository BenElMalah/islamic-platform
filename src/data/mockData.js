export const surahs = [
  { id: 1, number: 1, name_arabic: "الفاتحة", name_english: "Al-Fatihah", total_verses: 7 },
  { id: 2, number: 2, name_arabic: "البقرة", name_english: "Al-Baqarah", total_verses: 286 },
  { id: 3, number: 3, name_arabic: "آل عمران", name_english: "Ali 'Imran", total_verses: 200 },
  { id: 4, number: 4, name_arabic: "النساء", name_english: "An-Nisa", total_verses: 176 },
  { id: 5, number: 5, name_arabic: "المائدة", name_english: "Al-Ma'idah", total_verses: 120 },
  { id: 6, number: 6, name_arabic: "الأنعام", name_english: "Al-An'am", total_verses: 165 },
  { id: 7, number: 7, name_arabic: "الأعراف", name_english: "Al-A'raf", total_verses: 206 },
  { id: 8, number: 8, name_arabic: "الأنفال", name_english: "Al-Anfal", total_verses: 75 },
  { id: 9, number: 9, name_arabic: "التوبة", name_english: "At-Tawbah", total_verses: 129 },
  { id: 10, number: 10, name_arabic: "يونس", name_english: "Yunus", total_verses: 109 },
  { id: 11, number: 11, name_arabic: "هود", name_english: "Hud", total_verses: 123 },
  { id: 12, number: 12, name_arabic: "يوسف", name_english: "Yusuf", total_verses: 111 },
  { id: 13, number: 13, name_arabic: "الرعد", name_english: "Ar-Ra'd", total_verses: 43 },
  { id: 14, number: 14, name_arabic: "إبراهيم", name_english: "Ibrahim", total_verses: 52 },
  { id: 15, number: 15, name_arabic: "الحجر", name_english: "Al-Hijr", total_verses: 99 },
  { id: 16, number: 16, name_arabic: "النحل", name_english: "An-Nahl", total_verses: 128 },
  { id: 17, number: 17, name_arabic: "الإسراء", name_english: "Al-Isra", total_verses: 111 },
  { id: 18, number: 18, name_arabic: "الكهف", name_english: "Al-Kahf", total_verses: 110 },
  { id: 19, number: 19, name_arabic: "مريم", name_english: "Maryam", total_verses: 98 },
  { id: 20, number: 20, name_arabic: "طه", name_english: "Taha", total_verses: 135 },
  { id: 21, number: 21, name_arabic: "الأنبياء", name_english: "Al-Anbiya", total_verses: 112 },
  { id: 22, number: 22, name_arabic: "الحج", name_english: "Al-Hajj", total_verses: 78 },
  { id: 23, number: 23, name_arabic: "المؤمنون", name_english: "Al-Mu'minun", total_verses: 118 },
  { id: 24, number: 24, name_arabic: "النور", name_english: "An-Nur", total_verses: 64 },
  { id: 25, number: 25, name_arabic: "الفرقان", name_english: "Al-Furqan", total_verses: 77 },
  { id: 26, number: 26, name_arabic: "الشعراء", name_english: "Ash-Shu'ara", total_verses: 227 },
  { id: 27, number: 27, name_arabic: "النمل", name_english: "An-Naml", total_verses: 93 },
  { id: 28, number: 28, name_arabic: "القصص", name_english: "Al-Qasas", total_verses: 88 },
  { id: 29, number: 29, name_arabic: "العنكبوت", name_english: "Al-Ankabut", total_verses: 69 },
  { id: 30, number: 30, name_arabic: "الروم", name_english: "Ar-Rum", total_verses: 60 },
  { id: 114, number: 114, name_arabic: "الناس", name_english: "An-Nas", total_verses: 6 },
]

export const verses = [
  {
    id: 1, surah_id: 1, verse_number: 1,
    text_arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    text_english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    tafsir: "This is the opening verse of the Quran and serves as a prologue to every chapter except At-Tawbah. It establishes the foundational concept of God's mercy and compassion.",
    revelation_reason: "Revealed in Makkah as the first complete Surah. It is considered equivalent to one-third of the Quran in reward.",
    tajweed_rules: "Stop at the end of each name. The 'noon' in 'Ar-Rahman' and 'Ar-Raheem' are both ghunnah (nasalized)."
  },
  {
    id: 2, surah_id: 1, verse_number: 2,
    text_arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    text_english: "All praise is due to Allah, Lord of the worlds.",
    tafsir: "Praise here encompasses both linguistic praise (hamd) and worship. Allah is the Creator, Sustainer, and Sovereign of all existence.",
    revelation_reason: "Establishes the concept of Tawhid (monotheism) and Allah's universal lordship.",
    tajweed_rules: "Extend the 'alif' in 'al-hamdu'. The 'lam' in 'lillahi' is assimilated."
  },
  {
    id: 3, surah_id: 1, verse_number: 3,
    text_arabic: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    text_english: "The Entirely Merciful, the Especially Merciful.",
    tafsir: "Ar-Rahman refers to Allah's universal mercy that encompasses all creation. Ar-Raheem refers to the specific mercy reserved for the believers.",
    revelation_reason: "Reinforces the divine attributes of mercy introduced in Bismillah.",
    tajweed_rules: "The 'noon' of 'Ar-Rahman' carries a ghunnah of 2 counts."
  },
  {
    id: 4, surah_id: 1, verse_number: 4,
    text_arabic: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
    text_english: "Sovereign of the Day of Recompense.",
    tafsir: "Allah is the absolute Master and King on the Day of Judgment when all deeds will be accounted for.",
    revelation_reason: "Introduces the concept of accountability and the Day of Judgment.",
    tajweed_rules: "The 'alif' after 'ma' is elongated. Stop permitted after 'maaliki'."
  },
  {
    id: 5, surah_id: 1, verse_number: 5,
    text_arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    text_english: "It is You we worship and You we ask for help.",
    tafsir: "This verse contains the essence of worship: exclusive devotion to Allah and complete dependence on Him for all needs.",
    revelation_reason: "Summarizes the two fundamental pillars of Islam: worship (ibadah) and supplication (du'a).",
    tajweed_rules: "The 'ya' in 'iyyaka' is elongated. Ghunnah on 'noon' of 'na'budu'."
  },
  {
    id: 6, surah_id: 1, verse_number: 6,
    text_arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
    text_english: "Guide us to the straight path.",
    tafsir: "A supplication for guidance to the path that leads to Allah's pleasure and Paradise. The 'straight path' is Islam itself.",
    revelation_reason: "Teaches Muslims to continually seek divine guidance, even after accepting Islam.",
    tajweed_rules: "Elongate the 'alif' after 'ihdina'. The 'ta' of 'mustaqeem' is aspirated."
  },
  {
    id: 7, surah_id: 1, verse_number: 7,
    text_arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
    text_english: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    tafsir: "Those favored are the prophets, truthful ones, martyrs, and righteous. Those who incurred anger are those who know the truth but reject it. Those astray are those who follow error without knowledge.",
    revelation_reason: "Clarifies that the straight path is specifically that of the prophets and their followers.",
    tajweed_rules: "Multiple stop points allowed. The 'lam' in 'ghayri' is clear. Extend the 'alif' in 'dhaalleen'."
  },
  {
    id: 8, surah_id: 2, verse_number: 255,
    text_arabic: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ",
    text_english: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    tafsir: "Known as Ayat al-Kursi (The Throne Verse), it is one of the most powerful verses in the Quran, affirming Allah's absolute sovereignty and self-sufficiency.",
    revelation_reason: "Revealed in Madinah. Recited for protection and is part of the daily adhkar.",
    tajweed_rules: "Pause after 'al-Qayyum'. Ghunnah on 'noon' of 'takhudhuhu'. Multiple permitted stops."
  },
  {
    id: 9, surah_id: 36, verse_number: 82,
    text_arabic: "إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ",
    text_english: "His command is only when He intends a thing that He says to it, 'Be,' and it is.",
    tafsir: "Demonstrates Allah's absolute creative power. His will is instantaneous and requires no effort or intermediaries.",
    revelation_reason: "Affirms the divine attribute of omnipotence and creative sovereignty.",
    tajweed_rules: "The 'meem' of 'innamaa' carries a ghunnah. Pause after 'kun'."
  },
  {
    id: 10, surah_id: 112, verse_number: 1,
    text_arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
    text_english: "Say, 'He is Allah, [who is] One.'",
    tafsir: "Surah Al-Ikhlas is equivalent to one-third of the Quran in reward. It establishes pure monotheism (Tawhid).",
    revelation_reason: "Revealed in Makkah in response to the Quraysh's question about Allah's lineage.",
    tajweed_rules: "Pause after 'qul'. The 'hamza' in 'ahadun' is clear."
  },
]

export const hadithCategories = [
  { id: 1, name: "Worship (Ibadah)", description: "Rituals of prayer, fasting, charity, and pilgrimage" },
  { id: 2, name: "Commercial Transactions", description: "Buying, selling, trade ethics, and financial dealings" },
  { id: 3, name: "Social Relations", description: "Family ties, neighborly conduct, and community life" },
  { id: 4, name: "Inheritance", description: "Rules of bequest, estate distribution, and wills" },
  { id: 5, name: "Criminal Law", description: "Justice, punishments, and compensations" },
  { id: 6, name: "Etiquette & Character", description: "Manners, speech, and personal conduct" },
  { id: 7, name: "Knowledge & Learning", description: "Seeking knowledge, scholars, and education" },
]

export const hadiths = [
  {
    id: 1, category_id: 1, source: "Sahih al-Bukhari", hadith_number: "1",
    text_arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    text_english: "Actions are but by intentions, and every person shall have only what they intended.",
    context_and_ruling: "This hadith establishes that the validity and reward of any deed depend on the intention behind it. It is the foundation for evaluating all acts of worship and worldly deeds.",
    narrator: "Umar ibn al-Khattab (RA)"
  },
  {
    id: 2, category_id: 1, source: "Sahih Muslim", hadith_number: "7",
    text_arabic: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ",
    text_english: "Islam is built upon five pillars: testifying that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing prayer, paying zakat, making the pilgrimage to the House, and fasting in Ramadan.",
    context_and_ruling: "Enumerates the five fundamental acts of worship that constitute the framework of a Muslim's life.",
    narrator: "Abdullah ibn Umar (RA)"
  },
  {
    id: 3, category_id: 2, source: "Sahih al-Bukhari", hadith_number: "2072",
    text_arabic: "الْبَيْعُ عَلَى الْبَيْعِ، وَالرِّبَا عَلَى الرِّبَا",
    text_english: "A sale upon a sale, and interest upon interest.",
    context_and_ruling: "Prohibits the practice of making a sale conditional upon another sale, which was a pre-Islamic practice. It also reinforces the prohibition of usury (riba).",
    narrator: "Uthman ibn Affan (RA)"
  },
  {
    id: 4, category_id: 2, source: "Sahih Muslim", hadith_number: "1534",
    text_arabic: "لاَ تَبِيعُوا ذَهَبًا بِذَهَبٍ إِلاَّ مِثْلًا بِمِثْلٍ، وَلاَ تُشِفُّوا بَعْضَهَا عَلَى بَعْضٍ، وَلاَ تَبِيعُوا آجِلًا بِنَقْدٍ",
    text_english: "Do not sell gold for gold unless it is equivalent in weight, and do not give more for less, and do not sell something for something on credit.",
    context_and_ruling: "Establishes the rules for exchanging precious metals in equal measure. Violating these conditions constitutes riba (usury).",
    narrator: "Abdullah ibn Mas'ud (RA)"
  },
  {
    id: 5, category_id: 3, source: "Sahih al-Bukhari", hadith_number: "6014",
    text_arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    text_english: "Whoever believes in Allah and the Last Day should speak a good word or remain silent.",
    context_and_ruling: "Emphasizes the importance of guarding one's tongue and speaking only what is beneficial.",
    narrator: "Abu Hurairah (RA)"
  },
  {
    id: 6, category_id: 3, source: "Sahih Muslim", hadith_number: "2625",
    text_arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    text_english: "None of you truly believes until he loves for his brother what he loves for himself.",
    context_and_ruling: "Defines the completeness of faith through mutual love and concern for fellow Muslims.",
    narrator: "Anas ibn Malik (RA)"
  },
  {
    id: 7, category_id: 4, source: "Sahih al-Bukhari", hadith_number: "2738",
    text_arabic: "الرَّجُلُ يُوصِي بِالصَّاعِ، فَإِنَّ اللَّهَ أَعْلَمُ بِالْوَصِيَّةِ، وَعَلَى اللَّهِ أَنْ يَقُومَ بِهَا",
    text_english: "A man may make a bequest of a sa' (measure), and Allah knows best regarding it, and it is upon Allah to fulfill it.",
    context_and_ruling: "Indicates that even small bequests should be honored. Allah will compensate if the bequest is disproportionate.",
    narrator: "Aisha (RA)"
  },
  {
    id: 8, category_id: 5, source: "Sahih al-Bukhari", hadith_number: "6767",
    text_arabic: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الإِيمَانِ",
    text_english: "Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart — and that is the weakest of faith.",
    context_and_ruling: "Establishes the graduated responsibility of enjoining good and forbidding evil.",
    narrator: "Abu Sa'id al-Khudri (RA)"
  },
  {
    id: 9, category_id: 6, source: "Sahih al-Bukhari", hadith_number: "6018",
    text_arabic: "مَنْ لاَ يَرْحَمُ النَّاسَ لاَ يَرْحَمْهُ اللَّهُ",
    text_english: "He who does not show mercy to people, Allah will not show mercy to him.",
    context_and_ruling: "Mercy is a fundamental attribute that a Muslim must embody in all dealings.",
    narrator: "Jabir ibn Abdullah (RA)"
  },
  {
    id: 10, category_id: 6, source: "Sahih Muslim", hadith_number: "2699",
    text_arabic: "إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلاَقًا",
    text_english: "The most beloved of you to me and the nearest to you in my sitting on the Day of Resurrection are those with the best character.",
    context_and_ruling: "Good character is the most valued quality in the sight of the Prophet ﷺ.",
    narrator: "Jabir ibn Abdullah (RA)"
  },
  {
    id: 11, category_id: 7, source: "Sahih al-Bukhari", hadith_number: "100",
    text_arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    text_english: "Whoever takes a path seeking knowledge, Allah will make easy for him the path to Paradise.",
    context_and_ruling: "Seeking knowledge is one of the most virtuous deeds with an immense reward.",
    narrator: "Abu Hurairah (RA)"
  },
  {
    id: 12, category_id: 7, source: "Sunan an-Nasa'i", hadith_number: "4991",
    text_arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    text_english: "Whomever Allah intends good for, He grants him understanding of the religion.",
    context_and_ruling: "True understanding of religion is a divine gift and a sign of Allah's favor.",
    narrator: "Mu'adh ibn Jabal (RA)"
  },
]

export const historicalEvents = [
  {
    id: 1, title: "The First Revelation (Wahy)", hijri_year: -1, gregorian_year: 610,
    description: "Angel Jibril (Gabriel) descended upon Prophet Muhammad ﷺ in the Cave of Hira, revealing the first verses of Surah Al-Alaq: 'Read in the name of your Lord who created.'",
    location: "Cave of Hira, Makkah"
  },
  {
    id: 2, title: "The Secret Da'wah Begins", hijri_year: 1, gregorian_year: 610,
    description: "Prophet Muhammad ﷺ began calling people to Islam secretly, starting with his wife Khadijah, cousin Ali, and close companion Abu Bakr.",
    location: "Makkah"
  },
  {
    id: 3, title: "Public Preaching of Islam", hijri_year: 3, gregorian_year: 613,
    description: "Allah commanded the Prophet ﷺ to publicly call to Islam. He climbed Mount Safa and called out to the Quraysh tribe.",
    location: "Mount Safa, Makkah"
  },
  {
    id: 4, title: "The Night Journey (Isra & Mi'raj)", hijri_year: 10, gregorian_year: 620,
    description: "Prophet Muhammad ﷺ was transported from the Sacred Mosque in Makkah to Al-Aqsa Mosque in Jerusalem, and then ascended through the seven heavens, receiving the command for five daily prayers.",
    location: "Makkah to Jerusalem"
  },
  {
    id: 5, title: "The Migration to Madinah (Hijrah)", hijri_year: 1, gregorian_year: 622,
    description: "The Prophet ﷺ and his companions migrated from Makkah to Madinah, marking the beginning of the Islamic calendar. This established the first Muslim community.",
    location: "Makkah to Madinah"
  },
  {
    id: 6, title: "Construction of the Prophet's Mosque", hijri_year: 1, gregorian_year: 622,
    description: "Upon arriving in Madinah, the Prophet ﷺ built Masjid al-Nabawi, which served as the center of worship, education, and governance.",
    location: "Madinah"
  },
  {
    id: 7, title: "The Battle of Badr", hijri_year: 2, gregorian_year: 624,
    description: "The first major military battle in Islamic history. Despite being vastly outnumbered, the Muslim forces achieved a decisive victory over the Quraysh.",
    location: "Badr, near Madinah"
  },
  {
    id: 8, title: "The Battle of Uhud", hijri_year: 3, gregorian_year: 625,
    description: "A battle where the Muslims faced setbacks due to disobedience of orders. The Prophet ﷺ was injured, and his uncle Hamza was martyred.",
    location: "Mount Uhud, Madinah"
  },
  {
    id: 9, title: "The Treaty of Hudaybiyyah", hijri_year: 6, gregorian_year: 628,
    description: "A peace treaty between the Muslims and Quraysh that allowed peaceful interaction and eventually led to the conquest of Makkah.",
    location: "Hudaybiyyah, near Makkah"
  },
  {
    id: 10, title: "The Conquest of Makkah (Fath Makkah)", hijri_year: 8, gregorian_year: 630,
    description: "The Prophet ﷺ entered Makkah with a large army and peacefully conquered it. He destroyed the idols around the Ka'bah and declared amnesty.",
    location: "Makkah"
  },
  {
    id: 11, title: "The Farewell Sermon (Khutbah al-Wada')", hijri_year: 10, gregorian_year: 632,
    description: "During his final pilgrimage, the Prophet ﷺ delivered his farewell sermon at Mount Arafat, emphasizing equality, justice, and the sanctity of life and property.",
    location: "Mount Arafat, Makkah"
  },
  {
    id: 12, title: "The Passing of the Prophet ﷺ", hijri_year: 11, gregorian_year: 632,
    description: "Prophet Muhammad ﷺ passed away in Madinah, leaving behind the complete revelation of the Quran and his exemplary life as a guide for humanity.",
    location: "Madinah"
  },
  {
    id: 13, title: "The Rightly Guided Caliphate Begins", hijri_year: 11, gregorian_year: 632,
    description: "Abu Bakr al-Siddiq became the first Caliph after the Prophet's ﷺ passing, establishing continuity of leadership for the Muslim community.",
    location: "Madinah"
  },
  {
    id: 14, title: "Collection of the Quran", hijri_year: 25, gregorian_year: 646,
    description: "Caliph Uthman ibn Affan ordered the compilation of the Quran into a single standardized manuscript and distributed copies across the Muslim lands.",
    location: "Madinah"
  },
  {
    id: 15, title: "The Battle of Qadisiyyah", hijri_year: 15, gregorian_year: 636,
    description: "A pivotal battle between the Muslim forces and the Sassanid Persian Empire, resulting in a decisive Muslim victory that opened Persia to Islam.",
    location: "Al-Qadisiyyah, Iraq"
  },
]

export const prominentFigures = [
  {
    id: 1, name: "Abu Bakr al-Siddiq (RA)", type: "Companion",
    birth_death_date: "573 - 634 CE",
    biography: "Abu Bakr al-Siddiq, whose full name was Abdullah ibn Abi Quhafah, was the closest companion of Prophet Muhammad ﷺ and the first righteously guided Caliph of Islam. He was born in Makkah approximately three years before the Prophet's mission began. From the very earliest days of Islam, Abu Bakr was the first adult male to accept the new faith, earning him the title 'al-Siddiq' (the Truthful) for his immediate and unwavering belief in the Prophet's Night Journey and Ascension (Isra and Mi'raj).\n\nHis devotion to Islam was total and selfless. He spent his considerable wealth to free Muslim slaves who had been tortured for their faith, including Bilal ibn Rabah. When the Prophet ﷺ migrated from Makkah to Madinah during the Hijrah, Abu Bakr was his sole companion on the perilous journey, hiding with him in the Cave of Thawr. During this harrowing moment, Abu Bakr famously told the Prophet, 'If they look down into the cave, they will see us,' to which the Prophet replied, 'What do you think of two people, the third of whom is Allah?'\n\nDuring his caliphate (632–634 CE), Abu Bakr faced the monumental challenge of preserving the unity of the Muslim community after the Prophet's passing. He successfully suppressed the Ridda Wars (Wars of Apostasy), in which several tribes revolted and refused to pay zakat. His decisive leadership prevented the fragmentation of the nascent Islamic state. He also initiated the compilation of the Quran into a single manuscript, ensuring the preservation of Allah's final revelation. Abu Bakr passed away in Madinah after serving as caliph for approximately two years and four months, leaving behind a legacy of piety, humility, and steadfast leadership.",
    achievements: ["First male convert to Islam", "First Caliph of the Rashidun", "Compiled the Quran during his caliphate", "Suppressed the Ridda Wars to preserve unity", "Accompanied the Prophet during the Hijrah", "Freed Muslim slaves with his personal wealth"]
  },
  {
    id: 2, name: "Umar ibn al-Khattab (RA)", type: "Companion",
    birth_death_date: "584 - 644 CE",
    biography: "Umar ibn al-Khattab was the second Caliph of the Rashidun and is widely regarded as one of the most influential figures in Islamic history. Born into a noble Qurayshi family in Makkah, Umar initially opposed Islam and even set out to kill the Prophet ﷺ. However, upon reading Surah Taha, his heart was transformed, and he accepted Islam, becoming one of its strongest champions. His conversion was a turning point for the Muslim community, as Muslims could now practice their faith openly in Makkah.\n\nUmar's caliphate (634–644 CE) is often called the 'Golden Age' of the Rashidun Caliphate. He established the Islamic calendar (Hijri calendar), organized the vast territories of the expanding Muslim state through the Diwan system (a register of citizens and soldiers), and founded garrison cities (amsar) that later became major centers of Islamic civilization, such as Kufa, Basra, and Fustat. He implemented groundbreaking administrative reforms, including a judicial system with appointed judges (qadis), a treasury (bayt al-mal) for public welfare, and a postal system.\n\nUmar was renowned for his extraordinary justice. He would patrol the streets of Madinah at night to ensure his subjects were well. He lived in extreme simplicity, often sleeping on the ground and wearing patched clothing, despite ruling over an empire that stretched from Egypt to Persia. His famous saying, 'If a dog dies hungry on the banks of the Euphrates, Umar will be responsible,' reflects his deep sense of accountability. He was assassinated by a Persian slave while leading the Fajr prayer in the Prophet's Mosque in 644 CE.",
    achievements: ["Second Caliph of the Rashidun", "Established the Islamic (Hijri) calendar", "Created the Diwan (register) system", "Expanded Muslim territories significantly", "Founded major Islamic cities", "Pioneered public welfare systems"]
  },
  {
    id: 3, name: "Uthman ibn Affan (RA)", type: "Companion",
    birth_death_date: "573 - 656 CE",
    biography: "Uthman ibn Affan was the third Caliph of the Rashidun, known for his extraordinary generosity and devotion to Allah. He belonged to the Umayyad clan of the Quraysh and was one of the earliest converts to Islam, accepting the faith through the influence of Abu Bakr. He was given the title 'Dhun-Nurayn' (Possessor of Two Lights) because he married two of the Prophet's daughters, Ruqayyah and later Umm Kulthum, making him the only person in history to marry two daughters of any Prophet.\n\nUthman's generosity was legendary. During the time of the Prophet ﷺ, he financed the entire Muslim army at the Battle of Tabuk with his personal wealth, equipping over 30,000 soldiers. He purchased the well of Rumah and dedicated it for public use, and he bought a large bathhouse in Madinah and made it free for all Muslims. The Prophet ﷺ said of him, 'Nothing Uthman does after today will harm him,' referring to his sincere charity.\n\nHis most enduring contribution was the compilation and standardization of the Quran. Recognizing that the expanding Muslim empire led to variations in Quranic recitation, Uthman ordered the preparation of a single, authoritative text of the Quran and distributed copies to all major cities. He ordered the burning of all variant copies to prevent disputes, a decision that preserved the Quran in its pure, unified form as we have it today. He also expanded the Prophet's Mosque in Madinah and built a wall around the Ka'bah. Uthman was martyred in his home while reciting the Quran during a rebellion in 656 CE.",
    achievements: ["Third Caliph of the Rashidun", "Standardized the Quran text", "Known as 'Dhun-Nurayn' (Possessor of Two Lights)", "Expanded the Prophet's Mosque", "Financed the Muslim army at Tabuk", "Purchased public wells and bathhouses"]
  },
  {
    id: 4, name: "Ali ibn Abi Talib (RA)", type: "Companion",
    birth_death_date: "601 - 661 CE",
    biography: "Ali ibn Abi Talib was the cousin and son-in-law of Prophet Muhammad ﷺ, and the fourth Caliph of the Rashidun. He was born in Makkah and was raised in the Prophet's household from a young age. Ali was the first child to accept Islam, embracing the faith at approximately ten years of age, and he remained one of the Prophet's most devoted followers throughout his life. The Prophet ﷺ loved him deeply, saying, 'I am the city of knowledge and Ali is its gate.'\n\nAli was renowned for his unparalleled bravery, earning the title 'Asadullah' (the Lion of Allah). In the Battle of Khaybar, he was the one who tore down the fortress gate that had resisted all other warriors. During the Battle of the Trench, he defeated the fearsome Qurayshi champion Amr ibn Abd Wudd in single combat. His courage was matched by his deep knowledge of the Quran, Hadith, and Islamic jurisprudence. He was among the most eloquent speakers in Arabic, and his sermons, letters, and sayings were compiled in the famous book 'Nahj al-Balagha' (Peak of Eloquence), which remains a masterpiece of Arabic literature and Islamic thought.\n\nAs the fourth Caliph (656–661 CE), Ali faced the challenge of uniting a community divided by civil war (the Fitna). He moved the capital from Madinah to Kufa and fought several battles, including the Battle of the Camel and the Battle of Siffin. His caliphate was marked by his commitment to justice and equality, often at great personal cost. Ali was assassiated by a Kharijite while praying in the Mosque of Kufa in 661 CE. His legacy as a warrior, scholar, and paragon of justice continues to inspire Muslims across all traditions.",
    achievements: ["Fourth Caliph of the Rashidun", "Famous for his eloquence and justice", "Master of Arabic language and rhetoric", "Compiled Nahj al-Balagha", "First child to accept Islam", "Known as 'Lion of Allah' for bravery"]
  },
  {
    id: 5, name: "Imam Abu Hanifa (RA)", type: "Jurisprudence",
    birth_death_date: "699 - 767 CE",
    biography: "Imam Abu Hanifah, whose full name was Nu'man ibn Thabit ibn Zuta, was the founder of the Hanafi school of jurisprudence (madhhab), the oldest and most widely followed of the four Sunni schools of Islamic law. He was born in Kufa, Iraq, during the Umayyad period and initially studied under various scholars of fiqh and hadith. His father, a silk merchant, initially intended for him to follow the family trade, but Abu Hanifah's passion for Islamic scholarship soon became evident.\n\nAbu Hanifah's approach to Islamic jurisprudence was revolutionary. He pioneered the systematic use of ra'y (reasoned opinion) and qiyas (analogical reasoning) alongside the Quran and Sunnah, developing a comprehensive methodology for deriving legal rulings in situations not explicitly addressed in the primary sources. His school is known for its flexibility and adaptability, which is one reason it became the most widely followed madhhab, now accounting for the majority of the world's Sunni Muslims, particularly in Turkey, South Asia, Central Asia, the Balkans, and parts of the Arab world.\n\nHe taught in Kufa for over forty years, training an estimated 4,000 students, among whom Abu Yusuf and Muhammad al-Shaybani became the primary transmitters of his legal thought. His famous弟子 Abu Yusuf became the first Chief Judge (Qadi al-Qudat) of the Abbasid Caliphate. Abu Hanifah was known for his extreme caution in issuing legal opinions; he would often consult multiple scholars before making a ruling. He reportedly said, 'This is our opinion, and whoever comes with a better opinion than ours, we will accept it.' He passed away in Baghdad in 767 CE, reportedly after being imprisoned and flogged by the Abbasid authorities for refusing to serve as a judge, though the details of his death remain debated among historians.",
    achievements: ["Founded the Hanafi school of jurisprudence", "Pioneer of systematic fiqh methodology", "Established principles of analogical reasoning", "Taught over 4,000 students", "Most widely followed madhhab globally", "Known for intellectual humility and caution"]
  },
  {
    id: 6, name: "Imam Malik ibn Anas (RA)", type: "Jurisprudence",
    birth_death_date: "711 - 795 CE",
    biography: "Imam Malik ibn Anas was the founder of the Maliki school of jurisprudence and the author of 'Al-Muwatta'' (The Well-Trodden Path), one of the earliest and most important collections of hadith and Islamic law. He was born in Madinah and spent his entire life in the city of the Prophet ﷺ, which gave him unique access to the living traditions and practices of the people of Madinah, descendants of the Prophet's Companions.\n\nMalik's distinctive approach to Islamic law was his emphasis on the 'Amal Ahl al-Madinah' (the practice of the people of Madinah). He considered the continuous, generational practice of the Prophet's city as a reliable source of Islamic law, on par with individual hadith narrations. This approach gave his school a strong connection to the practical application of Islam as lived by the earliest generations. Al-Muwatta', his magnum opus, compiled approximately 1,720 legal traditions and was praised by Imam al-Shafi'i, who said, 'There is no book on earth after the Book of Allah that is more authentic than Al-Muwappa'' after what Malik has put in it.'\n\nMalik was renowned for his piety, humility, and deep love for the Prophet ﷺ. He would perform ghusl (ritual bath) before writing a hadith and would not narrate a hadith without first praying two rak'ahs. He served as the chief judge of Madinah for many years and was consulted by caliphs on legal matters. He taught in the Prophet's Mosque for over sixty years, and among his students were the great Imam al-Shafi'i and Yahya ibn Sa'id al-Ansari. The Maliki school is followed predominantly in North Africa, West Africa, and parts of the Arabian Peninsula. Malik passed away in Madinah in 795 CE at the age of 84.",
    achievements: ["Founded the Maliki school of jurisprudence", "Authored Al-Muwatta'", "Emphasized the living tradition of Madinah", "Teacher of Imam al-Shafi'i", "Chief Judge of Madinah", "Served as a leading authority for over 60 years"]
  },
  {
    id: 7, name: "Imam al-Shafi'i (RA)", type: "Jurisprudence",
    birth_death_date: "767 - 820 CE",
    biography: "Imam al-Shafi'i, whose full name was Muhammad ibn Idris al-Shafi'i, was the founder of the Shafi'i school of jurisprudence and is often called the 'Father of Islamic Jurisprudence' (Umm al-Fiqh). He was born in Gaza, Palestine, and belonged to the noble Qurayshi tribe of Hashim, the same lineage as the Prophet ﷺ. Orphaned at a young age, he was raised in Makkah and showed exceptional intellectual ability from childhood.\n\nAl-Shafi'i's greatest contribution to Islamic scholarship was his seminal work 'Al-Risalah' (The Treatise), which was the first book ever written on 'usul al-fiqh' (the principles of Islamic jurisprudence). In Al-Risalah, he systematically articulated the sources of Islamic law and established the hierarchy of legal authority: the Quran, the Sunnah, ijma' (scholarly consensus), and qiyas (analogical reasoning). He refined and standardized the methodology of legal reasoning, creating a balanced approach that bridged the hadith-based methodology of Imam Malik and the reason-based methodology of the Hanafi school. His work laid the foundation for all subsequent Islamic legal theory.\n\nAl-Shafi'i studied under Imam Malik in Madinah for several years, and he also studied with students of Imam Abu Hanifah in Iraq, giving him a unique perspective that synthesized both major legal traditions. He was known for his photographic memory, remarkable eloquence in Arabic poetry, and his fierce devotion to the Sunnah. His poetry praising knowledge and scholarship remains widely quoted today. Al-Shafi'i moved to Egypt late in his life, where he revised his legal opinions (the 'Old' and 'New' opinions of al-Shafi'i). He passed away in Fustat, Egypt, in 820 CE at the age of 53, leaving behind a legacy that shaped Islamic legal thought for centuries to come.",
    achievements: ["Founded the Shafi'i school of jurisprudence", "Authored Al-Risalah (usul al-fiqh)", "Systematized legal theory", "Bridged hadith-based and reason-based fiqh", "First to write on principles of Islamic law", "Known for eloquent Arabic poetry"]
  },
  {
    id: 8, name: "Imam Ahmad ibn Hanbal (RA)", type: "Jurisprudence",
    birth_death_date: "780 - 855 CE",
    biography: "Imam Ahmad ibn Muhammad ibn Hanbal was the founder of the Hanbali school of jurisprudence and the compiler of the Musnad, one of the largest and most comprehensive collections of hadith in Islamic history. He was born in Baghdad during the Abbasid Caliphate and devoted his entire life to the pursuit of Islamic knowledge, reportedly traveling extensively to study under over a thousand scholars across the Muslim world.\n\nIbn Hanbal's most famous and defining moment came during the Mihna (Inquisition), a theological controversy imposed by the Abbasid Caliph al-Ma'mun and his successors. The caliph demanded that scholars accept the Mu'tazili doctrine that the Quran was 'created' rather than the eternal, uncreated Word of Allah. While the vast majority of scholars eventually capitulated under pressure, Ibn Hanbal steadfastly refused, enduring imprisonment, flogging, and public humiliation. His resistance became a symbol of scholarly integrity and religious conviction, and he is often credited with preserving the orthodox Sunni position on the nature of the Quran. The Mihna ultimately failed, and Ibn Hanbal's stance was vindicated.\n\nHis Musnad, one of the largest hadith collections ever compiled, contains over 28,000 hadith narrations, making it an invaluable resource for hadith scholars. His legal methodology was characterized by a strict adherence to the Quran and Sunnah, with limited use of qiyas and a preference for hadith evidence even over the opinions of the Companions. The Hanbali school, though the smallest of the four major madhhabs, produced some of the most influential scholars in Islamic history, including Ibn Taymiyyah, Ibn al-Qayyim, and Muhammad ibn Saud. Ibn Hanbal passed away in Baghdad in 855 CE, and it is said that over 800,000 people attended his funeral, a testament to the immense respect he commanded.",
    achievements: ["Founded the Hanbali school of jurisprudence", "Compiled the Musnad (28,000+ hadiths)", "Defended orthodoxy during the Mihna", "Influenced later scholars like Ibn Taymiyyah", "Studied under over 1,000 scholars", "Endured persecution for his principles"]
  },
  {
    id: 9, name: "Imam al-Bukhari (RA)", type: "Recitation",
    birth_death_date: "810 - 870 CE",
    biography: "Imam al-Bukhari, whose full name was Muhammad ibn Ismail ibn Ibrahim al-Bukhari, was the compiler of 'Sahih al-Bukhari,' universally regarded as the most authentic hadith collection in Sunni Islam. He was born in Bukhara (in modern-day Uzbekistan) during the Abbasid Caliphate. His father, Ismail, was a scholar of hadith who passed away when al-Bukhari was young, but he left behind valuable notes and recordings that became the foundation of his son's early education.\n\nAl-Bukhari's dedication to hadith scholarship was extraordinary from a young age. He reportedly memorized the entire Quran by age seven and began studying hadith in earnest by ten. He spent over sixteen years traveling across the Islamic world—from Mecca and Madinah to Egypt, Syria, Iraq, and Khorasan—collecting hadiths from over 1,000 scholars. He is reported to have examined over 600,000 hadiths before selecting approximately 7,275 for inclusion in his Sahih, applying the strictest criteria of authentication. His methodology required that each hadith be traced through an unbroken chain of narrators (isnad) and that every narrator be of known integrity and accuracy.\n\nSahih al-Bukhari is considered the most authentic book after the Quran in Sunni Islam. Al-Bukhari would perform ghusl and pray two rak'ahs before including any hadith in his collection. He completed the final version of his Sahih in 846 CE in the city of Nishapur. He was also the author of other works, including 'Al-Tarikh al-Kabir' (The Great History), a biographical dictionary of hadith narrators. Al-Bukhari passed away in Samarkand (modern-day Uzbekistan) in 870 CE at the age of 62, leaving behind a legacy that has shaped Islamic scholarship for over a millennium.",
    achievements: ["Compiled Sahih al-Bukhari (7,275 hadiths)", "Known as 'Amir al-Mu'minin in Hadith'", "Established rigorous hadith authentication criteria", "Memorized over 600,000 hadiths", "Examined works of 1,000+ scholars", "Most authoritative hadith collection in Sunni Islam"]
  },
  {
    id: 10, name: "Imam Muslim ibn al-Hajjaj (RA)", type: "Recitation",
    birth_death_date: "821 - 875 CE",
    biography: "Imam Muslim ibn al-Hajjaj was the compiler of 'Sahih Muslim,' the second most authentic hadith collection in Sunni Islam and one of the most important works in Islamic scholarship. He was born in Nishapur (in modern-day Iran) during the Abbasid Caliphate. From an early age, Muslim showed a deep passion for hadith studies, and he traveled extensively across the Islamic world to study under prominent scholars in Mecca, Madinah, Baghdad, Egypt, Syria, and other centers of learning.\n\nMuslim's 'Sahih' is celebrated not only for the authenticity of its narrations but also for its superior organization and methodology. Unlike al-Bukhari, who often arranged hadiths thematically and sometimes shortened the chains of narration, Muslim typically included the full chains of narrators and arranged his hadiths in a more systematic, logical order. He established a clear methodology in his introduction, outlining his criteria for selecting narrators and his approach to hadith authentication. His collection contains over 7,500 hadith narrations (with repetitions), or approximately 3,033 without repetitions.\n\nMuslim was known for his meticulous scholarship, humility, and dedication to truth. He reportedly studied under over 1,500 scholars and was deeply influenced by the methodology of al-Bukhari, whom he considered his primary teacher in hadith science. He dedicated his Sahih to the great hadith scholar al-Qa'nabi. Muslim's work is often studied alongside Sahih al-Bukhari, and together they form the most authoritative hadith canon in Sunni Islam. He passed away in Nishapur in 875 CE at the age of 55, leaving behind a work that has been the subject of hundreds of commentaries and remains indispensable to Islamic scholarship.",
    achievements: ["Compiled Sahih Muslim (over 7,500 hadiths)", "Second most authentic hadith collection", "Pioneer of hadith classification methodology", "Studied under Imam al-Bukhari", "Superior organizational methodology", "Studied under 1,500+ scholars"]
  },
  {
    id: 11, name: "Umar ibn Abdul Aziz", type: "Ruler",
    birth_death_date: "682 - 720 CE",
    biography: "Umar ibn Abdul Aziz, the Umayyad Caliph who ruled from 717 to 720 CE, is often referred to as the 'Fifth Rightly Guided Caliph' by Muslim historians due to his exceptional piety, justice, and devotion to Islamic principles. He was born into the Umayyad dynasty in Medina and was the grandson of Umar ibn al-Khattab, the second Caliph. Despite his royal lineage, Umar ibn Abdul Aziz grew up with a deep love for knowledge, piety, and simplicity.\n\nUpon ascending to the caliphate, Umar ibn Abdul Aziz immediately set about reforming the Umayyad state, which had become characterized by luxury, corruption, and neglect of Islamic values. He ordered the return of public lands that had been unjustly seized by previous rulers, redistributed wealth to the poor, and abolished the oppressive taxes that had been imposed on non-Arab Muslims. He famously said, 'I have been given authority over you, and I am the least deserving of it. So if I do well, help me; and if I do wrong, set me right.' He held nightly audiences where any citizen could bring complaints directly to him.\n\nUnder his short but transformative rule, the Islamic empire experienced a revival of Islamic learning and practice. He sent scholars and teachers to every corner of the empire, established schools, and encouraged the compilation and study of hadith. He also practiced extreme personal austerity, often refusing to use state funds for his own needs and spending his nights in prayer and charity. His wife reported that he would often pray until dawn, weeping before Allah. Umar ibn Abdul Aziz died in 720 CE after only two and a half years in office, and it is said that when his estate was assessed after his death, it was so modest that it could barely cover his debts, despite ruling over one of the largest empires in the world.",
    achievements: ["Known as the 'Fifth Rightly Guided Caliph'", "Restored justice in Umayyad governance", "Eliminated many corrupt practices", "Emphasized public welfare and equity", "Redistributed wealth to the poor", "Established schools across the empire"]
  },
  {
    id: 12, name: "Salahuddin Ayyubi", type: "Ruler",
    birth_death_date: "1137 - 1193 CE",
    biography: "Salahuddin Ayyubi, known in the West as Saladin, was the founder of the Ayyubid dynasty and one of the most celebrated figures in Islamic history. He was born in Tikrit, in modern-day Iraq, into a Kurdish Muslim family. His father, Najm al-Din Ayyub, was a military commander who brought the family to Damascus, where young Salahuddin received a comprehensive Islamic education, studying the Quran, Hadith, fiqh, and military strategy.\n\nSalahuddin's greatest achievement was the recapture of Jerusalem from the Crusaders in 1187 CE. After years of careful preparation and the unification of fragmented Muslim territories in Egypt, Syria, and Mesopotamia, he decisively defeated the Crusader forces at the Battle of Hattin near the Sea of Galilee. He then proceeded to reclaim Jerusalem and other coastal cities. Unlike the Crusaders who had massacred the inhabitants of Jerusalem when they captured it in 1099, Salahuddin showed extraordinary mercy, sparing the Christian inhabitants and allowing them to ransom themselves or leave peacefully. His chivalry and justice earned him respect even among his European adversaries.\n\nSalahuddin was known for his remarkable personal qualities: humility, generosity, and deep devotion to Islam. He refused to sleep on a proper bed during military campaigns, preferring to rest on the ground or on his horse's saddle. He was known to give away everything he had, and when he died in Damascus in 1193, he left virtually no personal wealth. His Ayyubid dynasty ruled over Egypt, Syria, Mesopotamia, and parts of the Arabian Peninsula and Yemen until the Mamluk conquest in 1250. His legacy as a righteous warrior-king has inspired Muslims and non-Muslims alike for centuries, and he remains one of the most admired figures in world history.",
    achievements: ["Recaptured Jerusalem in 1187 CE", "Founded the Ayyubid dynasty", "Unified Muslim territories against Crusaders", "Known for extraordinary chivalry and mercy", "Decisive victory at the Battle of Hattin", "Demonstrated exemplary Islamic ethics in warfare"]
  },
]
