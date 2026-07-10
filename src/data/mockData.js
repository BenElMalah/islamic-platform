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
    biography: "The closest companion of Prophet Muhammad ﷺ and the first Caliph of Islam. Known for his unwavering faith, he was the first adult male to accept Islam and accompanied the Prophet during the Hijrah.",
    achievements: ["First male convert to Islam", "First Caliph of the Rashidun", "Compiled the Quran during his caliphate", "Suppressed the Ridda Wars to preserve unity"]
  },
  {
    id: 2, name: "Umar ibn al-Khattab (RA)", type: "Companion",
    birth_death_date: "584 - 644 CE",
    biography: "The second Caliph known for his justice and administrative genius. He established the Islamic calendar and built a vast administrative system for the expanding Muslim state.",
    achievements: ["Second Caliph of the Rashidun", "Established the Islamic (Hijri) calendar", "Created the Diwan (register) system", "Expanded Muslim territories significantly"]
  },
  {
    id: 3, name: "Uthman ibn Affan (RA)", type: "Companion",
    birth_death_date: "573 - 656 CE",
    biography: "The third Caliph known for his generosity. He purchased the well of Rumah for public use and financed Muslim armies with his personal wealth.",
    achievements: ["Third Caliph of the Rashidun", "Standardized the Quran text", "Known as 'Dhun-Nurayn' (Possessor of Two Lights)", "Expanded the Prophet's Mosque"]
  },
  {
    id: 4, name: "Ali ibn Abi Talib (RA)", type: "Companion",
    birth_death_date: "601 - 661 CE",
    biography: "The cousin and son-in-law of the Prophet ﷺ, and the fourth Caliph. Known as the 'Lion of Allah' for his bravery and被誉为 the gate of knowledge.",
    achievements: ["Fourth Caliph of the Rashidun", "Famous for his eloquence and justice", "Master of Arabic language and rhetoric", "Compiled Nahj al-Balagha"]
  },
  {
    id: 5, name: "Imam Abu Hanifa (RA)", type: "Jurisprudence",
    birth_death_date: "699 - 767 CE",
    biography: "Founder of the Hanafi school of jurisprudence, the oldest and most widely followed madhhab. Known for his rigorous methodology of legal reasoning (ra'y) and qiyas.",
    achievements: ["Founded the Hanafi school of jurisprudence", "Pioneer of systematic fiqh methodology", "Established principles of analogical reasoning", "Taught over 4,000 students"]
  },
  {
    id: 6, name: "Imam Malik ibn Anas (RA)", type: "Jurisprudence",
    birth_death_date: "711 - 795 CE",
    biography: "Founder of the Maliki school and author of Al-Muwatta, one of the earliest collections of hadith and Islamic law. He emphasized the practice of the people of Madinah.",
    achievements: ["Founded the Maliki school of jurisprudence", "Authored Al-Muwatta", "Emphasized the living tradition of Madinah", "Teacher of Imam al-Shafi'i"]
  },
  {
    id: 7, name: "Imam al-Shafi'i (RA)", type: "Jurisprudence",
    birth_death_date: "767 - 820 CE",
    biography: "Founder of the Shafi'i school and the 'Father of Islamic Jurisprudence.' His work Al-Risalah established the science of usul al-fiqh (principles of jurisprudence).",
    achievements: ["Founded the Shafi'i school of jurisprudence", "Authored Al-Risalah (usul al-fiqh)", "Systematized legal theory", "Bridged hadith-based and reason-based fiqh"]
  },
  {
    id: 8, name: "Imam Ahmad ibn Hanbal (RA)", type: "Jurisprudence",
    birth_death_date: "780 - 855 CE",
    biography: "Founder of the Hanbali school and compiler of the Musnad, one of the largest hadith collections. He famously endured persecution for defending the created nature of the Quran.",
    achievements: ["Founded the Hanbali school of jurisprudence", "Compiled the Musnad (28,000+ hadiths)", "Defended orthodoxy during the Mihna", "Influenced later scholars like Ibn Taymiyyah"]
  },
  {
    id: 9, name: "Imam al-Bukhari (RA)", type: "Recitation",
    birth_death_date: "810 - 870 CE",
    biography: "Compiler of Sahih al-Bukhari, considered the most authentic hadith collection. He traveled extensively to collect hadiths and selected only about 7,275 from over 600,000.",
    achievements: ["Compiled Sahih al-Bukhari (7,275 hadiths)", "Known as 'Amir al-Mu'minin in Hadith'", "Established rigorous hadith authentication criteria", "Memorized over 600,000 hadiths"]
  },
  {
    id: 10, name: "Imam Muslim ibn al-Hajjaj (RA)", type: "Recitation",
    birth_death_date: "821 - 875 CE",
    biography: "Compiler of Sahih Muslim, considered the second most authentic hadith collection. His work is known for its superior organization and arrangement.",
    achievements: ["Compiled Sahih Muslim (over 7,500 hadiths)", "Second most authentic hadith collection", "Pioneer of hadith classification methodology", "Studied under Imam al-Bukhari"]
  },
  {
    id: 11, name: "Umar ibn Abdul Aziz", type: "Ruler",
    birth_death_date: "682 - 720 CE",
    biography: "The Umayyad Caliph known as the fifth Rightly Guided Caliph for his exceptional justice and piety. He transformed the caliphate with his emphasis on equity and Islamic principles.",
    achievements: ["Known as the 'Fifth Rightly Guided Caliph'", "Restored justice in Umayyad governance", "Eliminated many corrupt practices", "Emphasized public welfare and equity"]
  },
  {
    id: 12, name: "Salahuddin Ayyubi", type: "Ruler",
    birth_death_date: "1137 - 1193 CE",
    biography: "The legendary Muslim military leader who recaptured Jerusalem from the Crusaders. His chivalry and justice earned him respect even among his enemies.",
    achievements: ["Recaptured Jerusalem in 1187 CE", "Founded the Ayyubid dynasty", "Unified Muslim territories against Crusaders", "Known for extraordinary chivalry and mercy"]
  },
]
