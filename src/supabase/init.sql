-- Islamic Platform Database Schema
-- Run this in Supabase SQL Editor or via migrations

-- Surahs table
CREATE TABLE surahs (
  id BIGSERIAL PRIMARY KEY,
  number INTEGER UNIQUE NOT NULL,
  name_arabic TEXT NOT NULL,
  name_english TEXT NOT NULL,
  total_verses INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Verses table
CREATE TABLE verses (
  id BIGSERIAL PRIMARY KEY,
  surah_id BIGINT REFERENCES surahs(id) ON DELETE CASCADE NOT NULL,
  verse_number INTEGER NOT NULL,
  text_arabic TEXT NOT NULL,
  text_english TEXT NOT NULL,
  tafsir TEXT,
  revelation_reason TEXT,
  tajweed_rules TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(surah_id, verse_number)
);

-- Hadith categories table
CREATE TABLE hadith_categories (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hadiths table
CREATE TABLE hadiths (
  id BIGSERIAL PRIMARY KEY,
  category_id BIGINT REFERENCES hadith_categories(id) ON DELETE CASCADE NOT NULL,
  source TEXT NOT NULL,
  hadith_number TEXT NOT NULL,
  text_arabic TEXT NOT NULL,
  text_english TEXT NOT NULL,
  context_and_ruling TEXT,
  narrator TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Historical events table
CREATE TABLE historical_events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  hijri_year INTEGER,
  gregorian_year INTEGER,
  description TEXT NOT NULL,
  location TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prominent figures table
CREATE TABLE prominent_figures (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('Jurisprudence', 'Recitation', 'Companion', 'Ruler')) NOT NULL,
  birth_death_date TEXT,
  biography TEXT,
  achievements TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_verses_surah_id ON verses(surah_id);
CREATE INDEX idx_hadiths_category_id ON hadiths(category_id);
CREATE INDEX idx_historical_events_hijri ON historical_events(hijri_year);
CREATE INDEX idx_prominent_figures_type ON prominent_figures(type);

-- Row Level Security (RLS) - Enable as needed
ALTER TABLE surahs ENABLE ROW LEVEL SECURITY;
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;
ALTER TABLE hadith_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE hadiths ENABLE ROW LEVEL SECURITY;
ALTER TABLE historical_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE prominent_figures ENABLE ROW LEVEL SECURITY;

-- Public read policies (adjust as needed for write operations)
CREATE POLICY "Public read access on surahs" ON surahs FOR SELECT USING (true);
CREATE POLICY "Public read access on verses" ON verses FOR SELECT USING (true);
CREATE POLICY "Public read access on hadith_categories" ON hadith_categories FOR SELECT USING (true);
CREATE POLICY "Public read access on hadiths" ON hadiths FOR SELECT USING (true);
CREATE POLICY "Public read access on historical_events" ON historical_events FOR SELECT USING (true);
CREATE POLICY "Public read access on prominent_figures" ON prominent_figures FOR SELECT USING (true);
