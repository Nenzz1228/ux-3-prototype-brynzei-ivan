# 🚀 SETUP & QUICK START GUIDE

## ⚡ Installation (5 minutes)

### Step 1: Install Dependencies
```bash
cd lajoska-prototype-v2
npm install
```

This installs:
- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- Lucide React (icons)
- PostCSS & Autoprefixer

### Step 2: Start Development Server
```bash
npm run dev
```

✅ Browser opens automatically to `http://localhost:5173`

You should see the **Mountain Hut** website with:
- Navigation bar with logo
- Home page with hero section
- Working page navigation
- Responsive design (try resizing!)

---

## 📂 Project File Structure at a Glance

```
After npm install, you'll have:

src/                              # Source code
├── components/
│   ├── ui/                       # 5 reusable UI components
│   │   ├── Button.tsx            ✅ Primary, secondary, ghost, outline, destructive
│   │   ├── Card.tsx              ✅ Card container + CardHeader, CardTitle, CardContent
│   │   ├── Input.tsx             ✅ Text input with validation
│   │   ├── Select.tsx            ✅ Dropdown selector
│   │   ├── Label.tsx             ✅ Form label
│   │   └── Separator.tsx         ✅ Textarea component
│   ├── figma/
│   │   └── ImageWithFallback.tsx ✅ Image with fallback state
│   ├── Navigation.tsx            ✅ Header with responsive menu
│   ├── Footer.tsx                ✅ Site footer
│   ├── Home.tsx                  ✅ Landing page (6 sections)
│   ├── Booking.tsx               ✅ Booking form + success screen
│   ├── Contact.tsx               ✅ Contact & pricing page
│   └── Story.tsx                 ✅ About/heritage page
├── types/
│   └── index.ts                  ✅ TypeScript interfaces
├── App.tsx                       ✅ Main app component
├── main.tsx                      ✅ React entry point
└── index.css                     ✅ Global styles + Tailwind

public/                           # Static assets (favicon, etc)
index.html                        # HTML entry point
vite.config.ts                    ✅ Vite configuration
tailwind.config.ts                ✅ Tailwind theme + colors
tsconfig.json                     ✅ TypeScript config
postcss.config.js                 ✅ PostCSS setup
package.json                      ✅ Dependencies + scripts

README.md                         ✅ Project overview
ARCHITECTURE.md                   ✅ Detailed architecture guide
SETUP.md                          👈 You are here!
```

---

## 🎯 Pages & Navigation

The app has 4 pages, accessible via the navigation bar:

| Page | Route | Component | Purpose |
|------|-------|-----------|---------|
| **Home** | `/` | `Home.tsx` | Landing page with hero, features, gallery, reviews |
| **Booking** | `/booking` | `Booking.tsx` | Reservation form with date picker and guest info |
| **Story** | `/story` | `Story.tsx` | About page with history and heritage |
| **Contact** | `/contact` | `Contact.tsx` | Contact info, map placeholder, pricing tables |

**Navigation works by**: Clicking nav items changes the `currentPage` state in `App.tsx`, which conditionally renders the appropriate component.

---

## 🎨 How to Customize

### 1. Update Colors
Edit `tailwind.config.ts`:
```typescript
// Change primary color
emerald-600: '#YOUR-HEX-CODE'
emerald-700: '#YOUR-HEX-CODE'
```

### 2. Update Text Content
Edit each component's content:
- `src/components/Home.tsx` - Hero text, section titles, service descriptions
- `src/components/Booking.tsx` - Form labels, placeholder text
- `src/components/Contact.tsx` - Contact info, pricing
- `src/components/Story.tsx` - About page text

### 3. Replace Images
In components, find image URLs and replace with your own:
```typescript
// Before:
url: 'https://images.unsplash.com/photo-...'

// After:
url: '/images/your-mountain-hut.jpg'
```

### 4. Update Company Info
- **Navigation.tsx**: Logo text "Mountain Hut" and "under Lajoška"
- **Footer.tsx**: Company name and contact details
- **Contact.tsx**: Address, phone, email

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Create optimized production build
npm run preview      # Test production build locally

# Other
npm install          # Install/update dependencies
npm run lint         # Check code style (if ESLint configured)
```

---

## 🧪 Testing Pages Locally

### Mobile Responsive
1. Open DevTools: `F12` or `Cmd+Option+I`
2. Click device toolbar (top-left)
3. Choose device: iPhone, iPad, or Desktop
4. Watch how layout responds!

**Key responsive points:**
- Navigation: Full menu on desktop, hamburger on mobile
- Hero: 500px on mobile, 600px on desktop
- Grid layouts: 1 column mobile, 2-3 on desktop
- Text: Scales from smaller on mobile to larger on desktop

### Test Pages
1. Click "Home" → See landing page
2. Click "Accommodation Reservation" → Fill booking form
3. Click "Story" → Read about page
4. Click "Contact & Prices" → View contact info and pricing
5. Try on mobile device → Menu collapses to hamburger

---

## 🎯 Key Features Ready to Use

### Button Component
```tsx
import { Button } from './ui/Button'

// Primary button (green)
<Button variant="primary" size="lg">Book Now</Button>

// Secondary button (gray)
<Button variant="secondary">Learn More</Button>

// Ghost button (transparent)
<Button variant="ghost">Read More</Button>

// Outline button (bordered)
<Button variant="outline">More Info</Button>

// Destructive button (red)
<Button variant="destructive">Cancel</Button>

// Sizes: xs, sm, md, lg
// Loading state: isLoading={true}
```

### Input Component
```tsx
import { Input } from './ui/Input'

<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  error={error}
  helperText="We'll never share your email"
/>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### Select Component
```tsx
import { Select } from './ui/Select'

<Select
  label="Guests"
  value={value}
  onChange={setValue}
  options={[
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
  ]}
/>
```

---

## 💡 Common Tasks

### Add a New Page
1. Create `src/components/MyPage.tsx`:
```tsx
import { FC } from 'react'

export const MyPage: FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">My Page</h1>
        {/* Content here */}
      </div>
    </div>
  )
}
```

2. Update `src/types/index.ts`:
```typescript
export type Page = 'home' | 'booking' | 'contact' | 'story' | 'mypage'
```

3. Update `src/App.tsx`:
```typescript
import { MyPage } from './components/MyPage'

// In Navigation navItems, add:
{ id: 'mypage' as Page, label: 'My Page' }

// In main return, add:
{currentPage === 'mypage' && <MyPage />}
```

### Add a New Component
1. Create in `src/components/MyComponent.tsx`
2. Define TypeScript interface for props
3. Use Tailwind classes for styling
4. Import and use in pages

### Modify Colors
Edit `tailwind.config.ts` colors section to match your brand.

### Add Font
Edit `tailwind.config.ts` fontFamily section:
```typescript
fontFamily: {
  sans: ['YOUR-FONT', 'sans-serif'],
}
```

---

## 🌐 Deployment

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts, auto-deploys on git push
```

### Netlify
```bash
npm run build
# Deploy dist/ folder via Netlify UI
```

### Traditional Server
```bash
npm run build
# Copy dist/ folder to web server root
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.ts
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Tailwind Classes Not Working
- Make sure `index.css` has `@tailwind` directives
- Restart dev server: `npm run dev`
- Check `tailwind.config.ts` has correct content paths

### Slow Build Times
- Use `npm run preview` to check production build
- Check for large images (optimize before adding)

---

## 📖 Next Steps

1. **Read** `README.md` for complete documentation
2. **Study** `ARCHITECTURE.md` for detailed architecture
3. **Customize** content in `src/components/`
4. **Replace** placeholder images
5. **Add** your company info
6. **Test** on real devices
7. **Deploy** when ready!

---

## 📚 Learning Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Lucide Icons**: https://lucide.dev

---

## ✨ You're All Set!

Your modern, responsive Mountain Hut booking website is ready to use!

**Next**: Customize with your content, images, and colors.

Questions? Check `README.md` or `ARCHITECTURE.md` for detailed information.

Happy coding! 🏔️⛰️
