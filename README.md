# Modern React + Tailwind CSS Frontend

Frontend modern dengan React 18+ dan Tailwind CSS 4.

## Setup Instructions

### 1. Initialize project

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Update Tailwind config

Lihat file `tailwind.config.js`

### 3. Install dependencies

```bash
npm install lucide-react
```

### 4. Run development server

```bash
npm run dev
```

## Struktur Project

```jsx
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Statistics.jsx
│   ├── Features.jsx
│   ├── Programs.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
```

## Fitur Utama

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI dengan Tailwind CSS
- ✅ Icon dari Lucide React
- ✅ FAQ accordion
- ✅ Testimonials carousel ready
- ✅ Program cards dengan hover effect
- ✅ Dark mode ready
