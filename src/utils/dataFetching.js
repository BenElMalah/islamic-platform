import { supabase } from '../supabaseClient'
import {
  surahs as mockSurahs,
  verses as mockVerses,
  hadithCategories as mockHadithCategories,
  hadiths as mockHadiths,
  historicalEvents as mockHistoricalEvents,
  prominentFigures as mockProminentFigures,
} from '../data/mockData'

const useMock = !import.meta.env.VITE_SUPABASE_URL

export async function fetchSurahs() {
  if (useMock) return mockSurahs
  const { data, error } = await supabase.from('surahs').select('*').order('number')
  if (error) throw error
  return data
}

export async function fetchVersesBySurah(surahNumber) {
  if (useMock) return mockVerses.filter(v => v.surah_id === surahNumber)
  const { data, error } = await supabase
    .from('verses')
    .select('*')
    .eq('surah_id', surahNumber)
    .order('verse_number')
  if (error) throw error
  return data
}

export async function fetchHadithCategories() {
  if (useMock) return mockHadithCategories
  const { data, error } = await supabase.from('hadith_categories').select('*')
  if (error) throw error
  return data
}

export async function fetchHadithsByCategory(categoryId) {
  if (useMock) return mockHadiths.filter(h => h.category_id === categoryId)
  const { data, error } = await supabase
    .from('hadiths')
    .select('*')
    .eq('category_id', categoryId)
  if (error) throw error
  return data
}

export async function fetchHistoricalEvents() {
  if (useMock) return mockHistoricalEvents
  const { data, error } = await supabase
    .from('historical_events')
    .select('*')
    .order('hijri_year')
  if (error) throw error
  return data
}

export async function fetchProminentFigures() {
  if (useMock) return mockProminentFigures
  const { data, error } = await supabase
    .from('prominent_figures')
    .select('*')
    .order('name')
  if (error) throw error
  return data
}
