# Islamic Platform

A production-ready React web application for presenting Islam to a global audience. Built with Vite, Tailwind CSS, and Supabase.

## Features

- **Home** — Welcoming landing page introducing Islam's core beliefs and Five Pillars
- **Quran Reader** (`/quran`) — Browse Surahs, read verses with Tafsir, Revelation Context, and Tajweed Rules via a slide-out drawer
- **Hadith Explorer** (`/hadiths`) — Categorized Hadiths with sidebar navigation and contextual rulings
- **History Timeline** (`/history`) — Chronological vertical timeline of key Islamic events (Hijri/Gregorian toggle)
- **Scholars & Figures** (`/figures`) — Searchable directory of Jurisprudence scholars, Reciters, Companions, and Rulers

## Tech Stack

- **Vite** — Build tool and dev server
- **React 19** — UI framework
- **Tailwind CSS v4** — Styling
- **Supabase** — Backend database (optional, mock data included)
- **React Router v7** — Client-side routing

## Project Structure

```
islamic-platform/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Quran.jsx
│   │   ├── Hadiths.jsx
│   │   ├── History.jsx
│   │   └── Figures.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── utils/
│   │   └── dataFetching.js
│   ├── supabase/
│   │   └── init.sql
│   ├── supabaseClient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd islamic-platform
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` with mock data by default.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Supabase Setup

The app works out-of-the-box with built-in mock data. To connect to a real Supabase database:

1. Create a Supabase project at [supabase.com](https://supabase.com)

2. Run the SQL schema in the Supabase SQL Editor:
   - Copy contents of `src/supabase/init.sql`
   - Paste into Supabase Dashboard > SQL Editor > New Query
   - Execute the query

3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

4. Fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

5. Restart the dev server:
   ```bash
   npm run dev
   ```

## Database Schema

### Tables

| Table | Description |
|-------|-------------|
| `surahs` | Quran chapters with Arabic/English names and verse counts |
| `verses` | Individual verses with Arabic text, translation, Tafsir, and Tajweed |
| `hadith_categories` | Categories for organizing Hadiths |
| `hadiths` | Hadith text with source, narrator, and contextual rulings |
| `historical_events` | Timeline events with Hijri/Gregorian dates |
| `prominent_figures` | Scholars, Companions, Rulers with biographies |

### Relationships

- `verses.surah_id` → `surahs.id`
- `hadiths.category_id` → `hadith_categories.id`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect repository on [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## License

MIT
