# Component Examples & Snippets

## 📝 Reusable Patterns

### 1. Button Component

```jsx

// components/Button.jsx

import React from 'react';

export function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon,
  ...props 
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  return (
    <button className={`${variants[variant]} gap-2`} {...props}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}
```

### 2. Card Component

```jsx

// components/Card.jsx

export function Card({ 
  title, 
  description, 
  icon: Icon, 
  children,
  hover = true 
}) {
  return (
    <div className={`card p-6 ${hover ? 'hover:shadow-xl' : ''}`}>
      {Icon && (
        <div className="p-3 bg-primary-100 rounded-lg mb-4 w-fit">
          <Icon className="text-primary-600" size={24} />
        </div>
      )}
      {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
      {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
      {children}
    </div>
  );
}
```

### 3. Modal Component

```jsx
// components/Modal.jsx
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-bold text-lg">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
```

### 4. Image Gallery Component

```jsx
// components/ImageGallery.jsx
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img 
        src={images[current]} 
        alt="Gallery" 
        className="w-full h-96 object-cover rounded-lg"
      />
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
```

### 5. Form Input Component

```jsx
// components/FormInput.jsx
export function FormInput({ 
  label, 
  type = 'text', 
  placeholder, 
  error,
  ...props 
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-medium text-gray-700 text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:ring-primary-200'
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
```

## 🎨 Styling Patterns

### Responsive Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Hover Effects

```jsx
<div className="hover:shadow-lg hover:scale-105 transition-all duration-300">
```

### Gradient Text

```jsx
<h1 className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
```

### Badge

```jsx
<span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
  Badge
</span>
```

### Alert Component

```jsx
<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
  <p className="text-red-800 font-medium">Error message</p>
</div>
```

## 📱 Responsive Utilities

### Hide on Mobile

```jsx
<div className="hidden md:block">
```

### Show Only on Mobile

```jsx
<div className="md:hidden">
```

### Responsive Text Size

```jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

### Responsive Padding

```jsx
<div className="p-4 md:p-6 lg:p-8">
```

## 🎭 Animation Classes

### Built-in Animations

```jsx
// Fade in
<div className="animate-fadeIn">

// Slide up
<div className="animate-slideUp">

// Custom animation
<div className="transition-all duration-300 hover:scale-110">
```

## 🔗 Custom Hooks (Coming Soon)

### useLocalStorage

```jsx
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  const setStoredValue = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, setStoredValue];
}
```

### useFetch

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```

## 🚀 Advanced Patterns

### Compound Component Pattern

```jsx
// Usage
<Select>
  <Select.Label>Pilih Program</Select.Label>
  <Select.Option value="fat-loss">Fat Loss</Select.Option>
  <Select.Option value="muscle-gain">Muscle Gain</Select.Option>
</Select>
```

### Render Props Pattern

```jsx
<DataFetcher url="/api/programs">
  {({ data, loading, error }) => (
    loading ? <div>Loading...</div> : <div>{data}</div>
  )}
</DataFetcher>
```

### Context API Pattern

```jsx
// Creating context
const ThemeContext = createContext();

// Provider
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Using context
const { isDark } = useContext(ThemeContext);
```

---

**Tip:** Copy snippets di atas ke component baru dan customisasi sesuai kebutuhan! 🎉
