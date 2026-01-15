# Pelinks Synergy - Complete Theme System

## 📋 Overview

A comprehensive CSS theme system for the Pelinks Synergy website with full light and dark mode support using CSS variables. The theme is fully responsive, accessible, and uses the Sora font family.

## 🎨 Brand Colors

### Light Mode (Default)
```
Primary:      #003459 (Dark Blue)
Accent:       #007EA7 (Teal)
Background:   #FFFFFF (White)
Surface:      #F5F5F5 (Light Gray)
Text Primary: #1A1A1A (Dark Gray)
Text Secondary: #444444 (Medium Gray)
Border:       #E0E0E0 (Light Border)
```

### Dark Mode
```
Primary:      #007EA7 (Teal)
Accent:       #00B4D8 (Bright Teal)
Background:   #0D1117 (Very Dark Blue)
Surface:      #161B22 (Dark Gray)
Text Primary: #E0E0E0 (Light Gray)
Text Secondary: #B0B0B0 (Muted Gray)
Border:       #30363D (Dark Border)
```

## 🚀 Quick Start

### 1. Import Theme System

In your `App.js` or `index.js`:

```javascript
import './themes.css';
import { ThemeProvider, ThemeSwitcher } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        {/* Your app content */}
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
```

### 2. Use Theme in Components

```jsx
import { useTheme } from './ThemeProvider';

function MyComponent() {
  const { isDark, theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

## 📚 CSS Variables Available

### Colors
```css
--color-primary           /* Brand primary color */
--color-accent            /* Accent/highlight color */
--color-background        /* Page background */
--color-surface           /* Card/section background */
--color-text-primary      /* Main text */
--color-text-secondary    /* Secondary text */
--color-border            /* Borders */
--color-success           /* Success state */
--color-warning           /* Warning state */
--color-error             /* Error state */
--color-info              /* Info state */
```

### Typography
```css
--font-family             /* Sora font */
--text-xs to --text-5xl   /* Font sizes */
--line-height-tight to --line-height-loose
--font-weight-light to --font-weight-bold
```

### Spacing
```css
--spacing-xs to --spacing-4xl
```

### Effects
```css
--radius-sm to --radius-full        /* Border radius */
--shadow-sm to --shadow-xl          /* Shadows */
--transition-fast to --transition-slow
```

## 💡 Usage Examples

### 1. Buttons

```html
<!-- Primary Button -->
<button className="btn btn-primary">Get Started</button>

<!-- Secondary Button -->
<button className="btn btn-secondary">Learn More</button>

<!-- Accent Button -->
<button className="btn btn-accent">Explore</button>

<!-- Button Sizes -->
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary btn-lg">Large</button>
```

### 2. Cards

```html
<div className="card">
  <div className="card-header">
    <h3>Service Title</h3>
  </div>
  <div className="card-body">
    <p>Service description here</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

### 3. Text & Typography

```html
<h1>Main Heading</h1>
<h2>Secondary Heading</h2>
<p>Regular paragraph text</p>
<p className="text-secondary">Secondary text</p>
<p className="text-success">Success message</p>
<p className="text-error">Error message</p>
```

### 4. Layout with Flexbox

```html
<!-- Centered Layout -->
<div className="flex flex-center gap-lg">
  <button className="btn btn-primary">Button</button>
</div>

<!-- Between Layout -->
<div className="flex flex-between p-lg">
  <div>Left Content</div>
  <div>Right Content</div>
</div>

<!-- Column Layout -->
<div className="flex flex-col gap-md">
  <h2>Title</h2>
  <p>Content</p>
</div>
```

### 5. Grid Layout

```html
<!-- 3 Column Grid (Responsive) -->
<div className="grid grid-3 gap-lg">
  <div className="card">Item 1</div>
  <div className="card">Item 2</div>
  <div className="card">Item 3</div>
</div>

<!-- Auto Grid -->
<div className="grid gap-lg" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))">
  <div className="card">Auto Item</div>
  <div className="card">Auto Item</div>
</div>
```

### 6. Forms

```html
<form className="contact-form">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="Your name" />
  </div>
  
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="your@email.com" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
```

### 7. Navbar

```html
<nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-brand">
      <span>🔗</span>
      <span>Pelinks Synergy</span>
    </div>
    
    <ul className="navbar-nav">
      <li><a href="#home" className="active">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <ThemeSwitcher />
  </div>
</nav>
```

### 8. Footer

```html
<footer>
  <div className="footer-container">
    <div className="footer-section">
      <h4>About</h4>
      <p className="text-secondary">Pelinks Synergy - Your one stop shop</p>
    </div>
    
    <div className="footer-section">
      <h4>Services</h4>
      <ul>
        <li><a href="#signage">Signage Solutions</a></li>
        <li><a href="#smart-home">Smart Homes</a></li>
        <li><a href="#printing">Printing</a></li>
        <li><a href="#contracts">Contracts</a></li>
      </ul>
    </div>
    
    <div className="footer-section">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:+234">Phone</a></li>
        <li><a href="mailto:info@pelinks.com">Email</a></li>
      </ul>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p>&copy; 2026 Pelinks Synergy. All rights reserved.</p>
  </div>
</footer>
```

### 9. Badges

```html
<span className="badge">Default</span>
<span className="badge badge-primary">Primary</span>
<span className="badge badge-accent">Accent</span>
<span className="badge badge-success">Success</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-error">Error</span>
```

### 10. Utility Classes

```html
<!-- Spacing -->
<div className="p-lg m-xl">Padded and Margined</div>

<!-- Flexbox -->
<div className="flex gap-md">Flex Container</div>

<!-- Grid -->
<div className="grid grid-2 gap-lg">Grid Items</div>

<!-- Borders & Radius -->
<div className="border-primary rounded-lg">Bordered Element</div>

<!-- Shadows -->
<div className="shadow-lg">Elevated Element</div>

<!-- Background Colors -->
<div className="bg-primary text-white p-lg">Primary Background</div>
<div className="bg-accent text-white p-lg">Accent Background</div>
```

## 🎯 Component-Specific Guidelines

### Primary Button Styling
**Light Mode:**
- Background: `#003459`
- Text: `#FFFFFF`

**Dark Mode:**
- Background: `#007EA7`
- Text: `#0D1117`

Applied automatically via:
```css
.btn-primary {
  background-color: var(--color-primary);
  color: #FFFFFF;
}

[data-theme="dark"] .btn-primary {
  background-color: #007EA7;
  color: #0D1117;
}
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 769px - 1199px
- **Mobile:** 480px - 768px
- **Small Mobile:** Below 480px

Media queries are built into utility classes:
```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

## 🔄 Theme Switching Logic

### JavaScript Implementation
```javascript
// Toggle theme
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('pelinks-theme', newTheme);
};

// Set specific theme
const setTheme = (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('pelinks-theme', newTheme);
};

// Initialize on page load
const savedTheme = localStorage.getItem('pelinks-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

### System Preference Detection
```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = localStorage.getItem('pelinks-theme') || 
                    (prefersDark ? 'dark' : 'light');
```

## 📦 Files Included

1. **themes.css** - Main theme system with all CSS variables and components
2. **THEME_USAGE_GUIDE.css** - Comprehensive usage examples
3. **ThemeProvider.js** - React context provider and hooks
4. **README.md** - This file

## ✅ Features

✓ Light and Dark mode support
✓ 50+ CSS variables for consistent theming
✓ Fully responsive design
✓ Sora font family
✓ Semantic color system
✓ Pre-built component styles (buttons, cards, forms, navbar, footer)
✓ Utility classes for rapid development
✓ Animations and transitions
✓ Accessibility-first approach
✓ LocalStorage persistence
✓ System preference detection
✓ No breaking changes to existing code

## 🌐 Browser Support

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- Opera 36+
- Modern mobile browsers

## 🚀 Performance

- CSS Variables (no JavaScript overhead)
- Single DOM attribute change for theme switching
- Optimized transitions
- Minimal CSS size (~15KB)
- No external dependencies (except Sora font from Google Fonts)

## 📝 Notes

- All colors respect the brand guidelines with no additional colors
- Typography uses only Sora font family
- Spacing follows a consistent scale
- All components are mobile-first responsive
- Dark mode is automatically generated from light mode definitions

## 🔧 Customization

To customize colors, modify the CSS variables in `themes.css`:

```css
:root {
  --color-primary: #003459;  /* Change to your color */
}

[data-theme="dark"] {
  --color-primary: #007EA7;  /* Change to your dark color */
}
```

## 📧 Support

For questions or issues with the theme system, refer to the THEME_USAGE_GUIDE.css file for detailed examples or modify the themes.css file directly to match your requirements.

---

**Created for Pelinks Synergy - Your one stop shop** ✨
