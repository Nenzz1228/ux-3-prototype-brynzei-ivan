# Mountain Hut Booking Website

A modern, responsive React + TypeScript + Tailwind CSS web application for a mountain hut accommodation and booking platform.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components (atomic design)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   ├── Select.tsx
│   │   └── Separator.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   ├── Navigation.tsx         # Header with responsive menu
│   ├── Footer.tsx            # Site footer
│   ├── Home.tsx              # Landing page with hero, features, gallery, reviews
│   ├── Booking.tsx           # Booking form with validation
│   ├── Contact.tsx           # Contact info and pricing
│   └── Story.tsx             # About/history page
├── types/
│   └── index.ts              # TypeScript interfaces and types
├── App.tsx                   # Main app component with routing
├── main.tsx                  # React entry point
└── index.css                 # Global styles and Tailwind directives

```

## 🎨 Design System

### Colors
- **Primary**: Emerald (emerald-600, emerald-700)
- **Neutral**: Stone (stone-50 to stone-900)
- **Accents**: Amber (for stars/ratings)

### Typography
- **Font Family**: System sans-serif
- **Headings**: Bold with responsive sizing (h1: 4xl → 5xl, h2: 3xl → 4xl, h3: 2xl)
- **Body**: Regular weight with 1.5 line height

### Spacing
- **Scale**: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 3rem, etc.
- **Container**: Max-width 7xl with responsive padding

### Responsive Breakpoints
- **Mobile First**: Base styles apply to all sizes
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd lajoska-prototype-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📄 Pages Overview

### Home (/)
- Hero section with CTA buttons
- About section with image
- Services grid (5 feature cards)
- Photo gallery (6 images with hover effects)
- Guest reviews (3-star ratings)
- Call-to-action section

### Booking (/booking)
- Reservation form with fields for:
  - Check-in/Check-out dates
  - Number of guests
  - Full name, email, phone
  - Special requests
- Success confirmation screen
- Info cards for benefits

### Contact & Prices (/contact)
- Contact information with icons
- Map placeholder
- Pricing tables for:
  - Accommodation options
  - Meal options
  - Additional services

### Story (/story)
- About page with 4 sections
- History and heritage content
- Call-to-action to booking

## 🧩 Component Architecture

### Atomic Design Pattern

**Atoms** (Basic building blocks)
- `Button` - Configurable with variants and sizes
- `Input` - Text input with validation
- `Label` - Form label
- `Card` - Container component

**Molecules** (Simple component combinations)
- `CardHeader`, `CardTitle`, `CardContent` - Card composition
- `Select` - Dropdown selector
- `ImageWithFallback` - Image with fallback state

**Organisms** (Complex features)
- `Navigation` - Header with logo and menu
- `Footer` - Site footer
- `Home` - Landing page with multiple sections
- `Booking` - Booking form with success state
- `Contact` - Contact info and pricing display
- `Story` - About page content

## 🛠️ Key Features

### Button Variants
- `primary` - Green emerald button (default for CTAs)
- `secondary` - Stone gray button
- `ghost` - Transparent button with hover effect
- `outline` - Bordered button
- `destructive` - Red button for destructive actions

### Button Sizes
- `xs` - Extra small (compact)
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large (for prominent CTAs)

### Form Components
- `Input` - With optional label, error message, helper text
- `Textarea` - Multi-line input
- `Select` - Dropdown with options
- `Label` - Associated with form fields

### Responsive Features
- **Mobile Navigation**: Hamburger menu on sm screens, full menu on md+
- **Flexible Grid**: 1-column mobile, 2-3 columns on desktop
- **Image Scaling**: Hero images scale height with breakpoints
- **Typography**: Headings scale from mobile to desktop

## 📝 Form Data Structure

```typescript
interface BookingFormData {
  checkIn: string
  checkOut: string
  guests: string
  fullName: string
  email: string
  phone: string
  specialRequests: string
}
```

## 🔄 State Management

Currently using React hooks (`useState`) for:
- Page navigation in App.tsx
- Mobile menu toggle in Navigation
- Form state in Booking component
- Booking submission state

**Future Enhancement**: For larger apps, consider Redux, Zustand, or Jotai for global state.

## 🌐 API Integration

Currently all interactions are mocked. To connect to a backend:

1. **Booking Form** (`src/components/Booking.tsx`):
   - Replace `handleSubmit` with API call
   - Update `TODO: Connect to booking API` comment

2. **Add API layer**:
   ```bash
   npm install axios
   ```
   Create `src/api/booking.ts` with API client

## ♿ Accessibility Features

- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<form>`
- **Form Labels**: All inputs have associated `<label>` elements
- **ARIA Attributes**: 
  - `aria-label` for icon buttons
  - `aria-invalid` for form errors
  - `aria-describedby` for helper text
- **Focus States**: Visible ring on all interactive elements
- **Color Contrast**: All text meets WCAG AA standards

## 🎯 Next Steps for Customization

1. **Update Content**: Replace placeholder text in components
2. **Add Images**: Replace Unsplash URLs with your own images
3. **Update Colors**: Modify `tailwind.config.ts` for brand colors
4. **Add More Pages**: Create new components in `src/components/`
5. **Connect API**: Implement real backend calls in API module
6. **Analytics**: Add Google Analytics or similar tracking
7. **SEO**: Add meta tags and structured data
8. **Testing**: Add Jest and React Testing Library tests

## 📦 Dependencies

### Core
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `lucide-react` ^0.263.1 - Icon library

### Dev
- `typescript` ^5.2.2
- `vite` ^5.0.8
- `@vitejs/plugin-react` ^4.2.1
- `tailwindcss` ^3.3.6
- `postcss` ^8.4.32
- `autoprefixer` ^10.4.16

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder via Netlify UI or CLI
```

### Traditional Server
```bash
npm run build
# Copy dist/ folder to web server
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev)

## 📄 License

This project is available for personal and commercial use.

---

**Last Updated**: December 10, 2025
**Version**: 1.0.0
