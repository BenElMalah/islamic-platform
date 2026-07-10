const fs = require('fs');

const BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions';

const COLLECTIONS = [
  { name: 'bukhari', label: 'Sahih al-Bukhari', editions: ['eng-bukhari', 'ara-bukhari'] },
  { name: 'muslim', label: 'Sahih Muslim', editions: ['eng-muslim', 'ara-muslim'] },
  { name: 'abudawud', label: 'Sunan Abu Dawud', editions: ['eng-abudawud', 'ara-abudawud'] },
  { name: 'tirmidhi', label: 'Jami at-Tirmidhi', editions: ['eng-tirmidhi', 'ara-tirmidhi'] },
  { name: 'nasai', label: "Sunan an-Nasa'i", editions: ['eng-nasai', 'ara-nasai'] },
  { name: 'ibnmajah', label: 'Sunan Ibn Majah', editions: ['eng-ibnmajah', 'ara-ibnmajah'] },
  { name: 'nawawi', label: 'Forty Hadith of an-Nawawi', editions: ['eng-nawawi', 'ara-nawawi'] },
  { name: 'qudsi', label: 'Forty Hadith Qudsi', editions: ['eng-qudsi', 'ara-qudsi'] },
];

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function sanitize(text) {
  if (!text) return '';
  return text.replace(/<[^>]*>/g, '').trim();
}

async function main() {
  const allData = {};

  for (const col of COLLECTIONS) {
    console.log(`\nFetching ${col.label}...`);
    allData[col.name] = { label: col.label, sections: {}, hadiths: {} };

    // Fetch English edition (includes metadata with sections)
    try {
      console.log(`  Fetching English hadiths...`);
      const engData = await fetchJSON(`${BASE}/${col.editions[0]}.min.json`);

      // Extract sections from metadata
      if (engData.metadata && engData.metadata.sections) {
        allData[col.name].sections = engData.metadata.sections;
        console.log(`  Sections: ${Object.keys(engData.metadata.sections).length}`);
      }

      if (engData.hadiths) {
        for (const h of engData.hadiths) {
          const id = h.hadithnumber;
          allData[col.name].hadiths[id] = {
            id,
            text: sanitize(h.text || ''),
            section: h.reference?.book || null,
          };
        }
        console.log(`  English hadiths: ${Object.keys(allData[col.name].hadiths).length}`);
      }
    } catch (err) {
      console.error(`  Error fetching English: ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 500));

    // Fetch Arabic hadiths
    try {
      console.log(`  Fetching Arabic hadiths...`);
      const araData = await fetchJSON(`${BASE}/${col.editions[1]}.min.json`);
      if (araData.hadiths) {
        for (const h of araData.hadiths) {
          const id = h.hadithnumber;
          if (allData[col.name].hadiths[id]) {
            allData[col.name].hadiths[id].arabic = sanitize(h.text || '');
          }
        }
        console.log(`  Arabic hadiths merged`);
      }
    } catch (err) {
      console.error(`  Error fetching Arabic: ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 500));
  }

  // Stats
  let total = 0;
  for (const col of Object.values(allData)) {
    total += Object.keys(col.hadiths).length;
  }
  console.log(`\nTotal hadiths: ${total}`);

  const outPath = './src/data/hadithsData.json';
  fs.writeFileSync(outPath, JSON.stringify(allData));
  console.log(`Saved to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
