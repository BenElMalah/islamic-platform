const fs = require('fs');

const BASE_URL = 'https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-al-jalalayn';

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function main() {
  const allTafsir = {};
  
  for (let surah = 1; surah <= 114; surah++) {
    console.log(`Fetching surah ${surah}...`);
    try {
      const data = await fetchJSON(`${BASE_URL}/${surah}.json`);
      if (data && data.ayahs) {
        for (const ayah of data.ayahs) {
          const key = `${surah}:${ayah.ayah}`;
          allTafsir[key] = ayah.text.replace(/<[^>]*>/g, '').trim();
        }
      }
      await new Promise(r => setTimeout(r, 150));
    } catch (err) {
      console.error(`  Error on surah ${surah}: ${err.message}`);
    }
  }

  const outPath = './src/data/tafsirAlJalalayn.json';
  fs.writeFileSync(outPath, JSON.stringify(allTafsir));
  console.log(`\nSaved ${Object.keys(allTafsir).length} tafsir entries to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
