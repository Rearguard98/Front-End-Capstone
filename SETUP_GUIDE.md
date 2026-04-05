# Panduan Setup & Development

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Aplikasi akan buka di `http://localhost:5173`

### 3. Build untuk Production

```bash
npm run build
```

## 📁 Struktur Project

```jsx
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar dengan mobile menu
│   ├── Hero.jsx          # Hero section dengan CTA
│   ├── Statistics.jsx    # Keunggulan kompetitif
│   ├── Features.jsx      # Detail fitur dengan testimonial
│   ├── Programs.jsx      # Product cards (4 program)
│   ├── Gallery.jsx       # Grid gallery menu
│   ├── Testimonials.jsx  # Carousel testimonial
│   ├── FAQ.jsx           # Accordion FAQ
│   └── Footer.jsx        # Footer dengan links
├── App.jsx               # Main app component
├── index.css             # Tailwind & custom styles
└── main.jsx              # Entry point
```

## 🎨 Customization Guide

### Mengubah Warna Brand

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#22c55e',  // Ubah ke warna kamu
    600: '#16a34a',  // dll
  }
}
```

### Menambah Komponen Baru

1. Buat file di `src/components/NamaBaru.jsx`
2. Import di `App.jsx`
3. Tambahkan ke dalam layout

### Mengubah Data (Programs, Testimonials, dll)

Semua data statis ada di dalam masing-masing component. Cari array `programs`, `testimonials`, `faqs` dan edit value-nya.

## 🔧 Tech Stack

- **React 18.3** - Latest React dengan hooks
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Lightning fast build tool

## 📦 Package Dependencies

```json
{
  "react": "^18.3.1",           // Core React
  "react-dom": "^18.3.1",       // React DOM
  "lucide-react": "^0.394.0"    // Icons
}
```

### Dev Dependencies

```json
{
  "tailwindcss": "^3.4.1",              // CSS framework
  "postcss": "^8.4.32",                 // PostCSS processor
  "autoprefixer": "^10.4.17",           // Vendor prefixes
  "@tailwindcss/forms": "^0.5.7",      // Form styling plugins
  "@tailwindcss/typography": "^0.5.13", // Typography plugin
  "vite": "^5.0.8",                    // Build tool
  "@vitejs/plugin-react": "^4.2.1"     // React plugin untuk Vite
}
```

## 🎯 Fitur Utama

### ✅ Responsive Design

- Mobile first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Semua component support mobile, tablet, desktop

### ✅ Component Highlights

#### Navbar

- Sticky navigation
- Mobile menu toggle
- Smooth scroll links

#### Hero

- Gradient background
- Anti-aliased text
- Floating testimonial card
- Animations (slideUp, fadeIn)

#### Programs

- 4 product cards dengang unique colors
- Badge system
- CTA buttons
- Pricing display

#### Testimonials

- Carousel dengan navigation
- Verified badge
- Star ratings
- Auto dots indicator

#### FAQ

- Smooth accordion collapse/expand
- Hover effects
- Responsive layout

### ✅ Built-in Classes (Layer Components)

```css
.btn-primary      /* Green CTA button */
.btn-secondary    /* Bordered button */
.btn-outline      /* Subtle button */
.card             /* Card with shadow */
.section          /* Section padding */
.container-custom /* Responsive container */
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 💡 Development Tips

### 1. Hot Module Replacement (HMR)

Vite otomatis refresh component saat kamu edit file

### 2. Inspect Component

- Buka DevTools (F12)
- Gunakan React Developer Tools extension untuk debug

### 3. Performance

- Components sudah optimized
- CSS hanya load yang digunakan (purge CSS)
- Icons lazy loaded dari Lucide

### 4. Accessibility

- Semantic HTML
- ARIA labels di interactive elements
- Keyboard navigation support

## 🚀 Deployment Options

### Vercel (Recommended)

```bash
npm run build
# Drag dist folder ke Vercel dashboard
```

### Netlify

```bash
npm run build
# Connect repository atau drag dist folder
```

### GitHub Pages

```bash
npm run build
# Push dist folder ke gh-pages branch
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 📚 Useful Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

## ❓ FAQ Development

### Bagaimana cara menambah section baru?

1. Buat ke file `src/components/NamaSection.jsx`
2. Export default function component
3. Import dan tambahkan ke `App.jsx`
4. Gunakan `.section` class untuk padding standar

### Bagaimana cara mengganti warna?

Edit `tailwind.config.js` theme.colors.primary section

### Bagaimana cara menambah font custom?

Update `index.html` dengan Google Fonts link, kemudian add ke `tailwind.config.js` fontFamily

### Performance bagaimana?

- Vite memberikan ~95+ Lighthouse score
- Code splitting otomatis
- CSS purging yang agresif

## 🐛 Troubleshooting

### Styling tidak muncul

```bash
# Clear node_modules dan install ulang
rm -rf node_modules
npm install
npm run dev
```

### Build error

```bash
# Check versi dependencies
npm outdated
# Update jika perlu
npm update
```

### Hot reload tidak jalan

```bash
# Restart dev server
npm run dev
```

---

Happy coding! 🎉
