import { supabase } from '../supabaseClient'
import {
  hadithCategories as mockHadithCategories,
  hadiths as mockHadiths,
  historicalEvents as mockHistoricalEvents,
  prominentFigures as mockProminentFigures,
} from '../data/mockData'

const useSupabase = !!supabase

let _quranDataCache = null
async function getQuranData() {
  if (!_quranDataCache) {
    _quranDataCache = (await import('../data/quranData.json')).default
  }
  return _quranDataCache
}

export async function fetchSurahs() {
  if (useSupabase) {
    const { data, error } = await supabase.from('surahs').select('*').order('number')
    if (error) throw error
    return data
  }
  const quranData = await getQuranData()
  return quranData.surahs.map(s => ({
    number: s.number,
    name: s.name_arabic,
    englishName: s.name_english,
    englishNameTranslation: s.name_translation,
    verseCount: s.total_verses,
    revelationType: s.revelation_type,
  }))
}

export async function fetchVersesBySurah(surahNumber) {
  if (useSupabase) {
    const { data, error } = await supabase
      .from('verses')
      .select('*')
      .eq('surah_id', surahNumber)
      .order('verse_number')
    if (error) throw error
    return data
  }
  const quranData = await getQuranData()
  const verses = quranData.verses[String(surahNumber)] || []
  return verses.map(v => ({
    number: v.verse_number,
    numberInSurah: v.verse_number,
    text: v.text_arabic,
    translation: v.text_english,
    juz: v.juz,
    page: v.page,
    tafsir: null,
    revelationContext: null,
    tajweedRules: null,
  }))
}

export async function fetchHadithCategories() {
  if (useSupabase) {
    const { data, error } = await supabase.from('hadith_categories').select('*')
    if (error) throw error
    return data
  }
  return mockHadithCategories
}

export async function fetchHadithsByCategory(categoryId) {
  if (useSupabase) {
    const { data, error } = await supabase
      .from('hadiths')
      .select('*')
      .eq('category_id', categoryId)
    if (error) throw error
    return data
  }
  return mockHadiths.filter(h => h.category_id === categoryId)
}

export async function fetchHistoricalEvents() {
  if (useSupabase) {
    const { data, error } = await supabase
      .from('historical_events')
      .select('*')
      .order('hijri_year')
    if (error) throw error
    return data
  }
  return mockHistoricalEvents
}

export async function fetchProminentFigures() {
  if (useSupabase) {
    const { data, error } = await supabase
      .from('prominent_figures')
      .select('*')
      .order('name')
    if (error) throw error
    return data
  }
  return mockProminentFigures
}
