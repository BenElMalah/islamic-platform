const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/hadithsData.json', 'utf8'));

for (const [key, col] of Object.entries(data)) {
  const outPath = `./src/data/hadiths/${key}.json`;
  fs.writeFileSync(outPath, JSON.stringify(col));
  const size = (fs.statSync(outPath).size / 1024 / 1024).toFixed(2);
  console.log(`${key}: ${size}MB (${Object.keys(col.hadiths).length} hadiths)`);
}
fs.unlinkSync('./src/data/hadithsData.json');
console.log('Done. Removed hadithsData.json');
