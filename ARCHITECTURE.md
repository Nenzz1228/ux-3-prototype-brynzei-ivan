# Architecture & Setup Guide - Mountain Hut Booking Website

## 📋 Executive Summary

This document describes the complete Vite + React + TypeScript + Tailwind CSS implementation for the Mountain Hut booking website. The application follows atomic design principles and is fully responsive across mobile, tablet, and desktop viewports.

---

## 🏗️ Architecture Overview

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **State Management**: React Hooks (built-in)

### Design Philosophy
1. **Component-Driven**: Small, reusable components following atomic design
2. **Type-Safe**: Full TypeScript coverage, no `any` types
3. **Responsive First**: Mobile-first approach with progressive enhancement
4. **Accessible**: Semantic HTML and WCAG AA compliant
5. **Maintainable**: Clean separation of concerns, DRY principles

---

## 📁 Directory Structure

```
lajoska-prototype-v2/
├── src/
│   ├── components/
│   │   ├── ui/                      # Reusable UI library (atoms)
│   │   │   ├── Button.tsx           # Flexible button with 5 variants
│   │   │   ├── Card.tsx             # Card container with composition
│   │   │   ├── Input.tsx            # Text input with validation states
│   │   │   ├── Label.tsx            # Form label
│   │   │   ├── Select.tsx           # Dropdown selector
│   │   │   └── Separator.tsx        # Textarea component
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx # Image with error state
│   │   ├── Navigation.tsx           # Header with responsive menu
│   │   ├── Footer.tsx               # Site footer
│   │   ├── Home.tsx                 # Landing page (6 sections)
│   │   ├── Booking.tsx              # Booking form + success
│   │   ├── Contact.tsx              # Contact & pricing page
│   │   └── Story.tsx                # About page
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── App.tsx                      # Main app + page routing
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Global styles + Tailwind
├── public/                          # Static assets (favicon, etc)
├── index.html                       # HTML entry point
├── vite.config.ts                   # Vite configuration
├── tailwind.config.ts               # Tailwind theme & plugins
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS + Autoprefixer
├── package.json                     # Dependencies & scripts
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

---

## 🎨 Design System

### Color Palette

```typescript
// Emerald (Primary Brand Color)
emerald-50: #f0fdf4    // Lightest background
emerald-100: #dcfce7
emerald-600: #16a34a   // Button primary
emerald-700: #15803d   // Button hover
emerald-800: #166534   // Dark state

// Stone (Neutral Gray)
stone-50: #fafaf9     // Page background
stone-100: #f5f5f4    // Subtle backgrounds
stone-600: #57534e    // Body text
stone-700: #44403c    // Headings
stone-900: #1c1917    // Dark headings
```

### Typography Scale

```
h1: 36px → 48px (mobile → desktop)  font-bold
h2: 30px → 36px (mobile → desktop)  font-bold
h3: 24px                             font-bold
p:  16px                             font-normal
sm: 14px                             text-stone-600
```

### Spacing System

Uses Tailwind's spacing scale: 1 unit = 0.25rem (4px)

```
p-4   = 1rem (16px padding)
gap-6 = 1.5rem (24px gap)
my-12 = 3rem (48px margin)
```

### Responsive Breakpoints

```
Base (mobile):     < 640px
sm:                ≥ 640px  (tablets)
md:                ≥ 768px  (iPad/small laptops)
lg:                ≥ 1024px (laptops)
xl:                ≥ 1280px (desktops)
```

---

## 🧩 Component Library

### Atoms (Basic UI Elements)

#### Button
```typescript
// Variants: primary, secondary, ghost, outline, destructive
// Sizes: xs, sm, md, lg
<Button variant="primary" size="lg" onClick={onBookNow}>
  Book Now
</Button>
```

#### Input
```typescript
<Input
  label="Email"
  type="email"
  error={emailError}
  helperText="We'll never share your email"
/>
```

#### Card
```typescript
<Card>
  <CardHeader>
    <CardTitle>My Card</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here</CardContent>
</Card>
```

#### Select
```typescript
<Select
  label="Choose"
  value={value}
  onChange={setValue}
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

### Organisms (Complex Components)

#### Navigation
- Logo with text brand
- Desktop menu (hidden on mobile)
- Mobile hamburger menu
- Smooth scroll to home
- Sticky positioning with shadow

#### Footer
- Company info
- Quick links
- Contact information with icons
- Copyright and legal links

#### Home Page Sections
1. **Hero**: Full-width image with gradient overlay, CTA buttons
2. **About**: Two-column layout (text + image)
3. **Services**: 3-5 feature cards with icons
4. **Gallery**: 3-6 image grid with hover effects
5. **Reviews**: Customer testimonials with star ratings
6. **CTA**: Final call-to-action section

#### Booking Form
- Date pickers (check-in, check-out)
- Guest count selector
- Guest information fields
- Special requests textarea
- Success confirmation screen

#### Contact & Pricing
- Contact info with icons
- Map placeholder
- Three pricing tables
- Info cards

#### Story Page
- Multiple content sections
- Narrative structure
- CTA to booking

---

## 🔄 Data Flow & State Management

### App-Level Routing
```typescript
// App.tsx manages current page state
const [currentPage, setCurrentPage] = useState<Page>('home')

// Pages: 'home' | 'booking' | 'contact' | 'story'
```

### Component-Level State
```typescript
// Navigation.tsx - Mobile menu toggle
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// Booking.tsx - Form data + submission state
const [formData, setFormData] = useState<BookingFormData>({...})
const [submitted, setSubmitted] = useState(false)
```

### Props Flow
```
App
  ├── Navigation (currentPage, onNavigate)
  ├── Home (onBookNow)
  ├── Booking ()
  ├── Contact ()
  ├── Story ()
  └── Footer ()
```

---

## 📱 Responsive Design Strategy

### Mobile-First Approach

1. **Base Styles**: Apply to all screen sizes (mobile)
2. **Responsive Classes**: Add with `sm:`, `md:`, `lg:` prefixes

### Example: Navigation Menu
```tsx
// Desktop: Full horizontal menu
<div className="hidden md:flex gap-1">
  {navItems.map(...)}
</div>

// Mobile: Hamburger menu
<button className="md:hidden" onClick={toggleMenu}>
  <Menu />
</button>
```

### Example: Hero Section
```tsx
<section className="h-[500px] md:h-[600px]">
  {/* Height: 500px mobile, 600px on md+ screens */}
</section>
```

### Example: Grid Layout
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column mobile, 2 columns on sm, 3 on lg */}
</div>
```

---

## 🔐 TypeScript Interfaces

### Page Type
```typescript
type Page = 'home' | 'booking' | 'contact' | 'story'
```

### Booking Form Data
```typescript
interface BookingFormData {
  checkIn: string        // YYYY-MM-DD
  checkOut: string       // YYYY-MM-DD
  guests: string         // '1' | '2' | '3' | '4' | '5+'
  fullName: string
  email: string
  phone: string
  specialRequests: string
}
```

### Service Card
```typescript
interface Service {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}
```

### Review Item
```typescript
interface ReviewItem {
  name: string
  rating: number      // 1-5
  text: string
}
```

---

## ♿ Accessibility Features

### Semantic HTML
- `<header>` for navigation
- `<main>` for page content
- `<section>` for page sections
- `<footer>` for footer content
- `<form>` for forms
- `<nav>` for navigation

### Form Accessibility
```tsx
<div>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-red-600">
    Invalid email
  </p>
</div>
```

### Focus Management
```typescript
// Focus states via Tailwind
className="focus:outline-none focus:ring-2 focus:ring-emerald-500"
```

### Color Contrast
- Text on white: Stone-700+ (4.5:1 ratio)
- Text on emerald: White (5.5:1 ratio)

---

## 🚀 Development Workflow

### Getting Started
```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. App opens at http://localhost:5173
```

### Development Commands
```bash
npm run dev      # Start dev server with hot reload
npm run build    # Optimize production build
npm run preview  # Preview production build locally
```

### Adding a New Page
1. Create `src/components/MyPage.tsx`
2. Add type to `Page` union in `src/types/index.ts`
3. Import in `App.tsx`
4. Add conditional render
5. Add navigation item

### Adding a New Component
1. Create `src/components/MyComponent.tsx`
2. Define TypeScript interface for props
3. Use existing UI components (Button, Input, Card, etc.)
4. Add Tailwind classes for styling

---

## 🌐 Future Enhancements

### Short Term
- [ ] Add form validation library (Zod, Yup)
- [ ] Implement actual backend API integration
- [ ] Add loading states and error boundaries
- [ ] Add toast notifications (Sonner)
- [ ] Implement image optimization

### Medium Term
- [ ] Add routing library (React Router)
- [ ] Implement authentication
- [ ] Add database integration
- [ ] Add admin panel
- [ ] Add email confirmations

### Long Term
- [ ] Payment integration (Stripe)
- [ ] Calendar system for availability
- [ ] User accounts and history
- [ ] Review and rating system
- [ ] Multi-language support

---

## 🔗 External Resources

### Official Documentation
- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

### Learning Resources
- [React Patterns](https://patterns.dev)
- [Web Accessibility Fundamentals](https://www.w3.org/WAI)
- [Tailwind Best Practices](https://tailwindcss.com/docs/installation)

### Component Libraries
- [Lucide Icons](https://lucide.dev) - Already integrated
- [Headless UI](https://headlessui.dev) - For unstyled components
- [React Hook Form](https://react-hook-form.com) - Form state

---

## ✅ Checklist for Going Live

- [ ] Replace placeholder images with real photos
- [ ] Update all text content
- [ ] Set up domain name and SSL
- [ ] Configure analytics (Google Analytics)
- [ ] Set up email notifications
- [ ] Test on real devices
- [ ] Verify accessibility (WCAG AAA)
- [ ] Set up CI/CD pipeline
- [ ] Configure error tracking (Sentry)
- [ ] Create privacy policy and terms of service
- [ ] Set up automated backups
- [ ] Performance optimization (Lighthouse 90+)

---

**Document Version**: 1.0.0  
**Last Updated**: December 10, 2025  
**Maintained By**: Development Team
