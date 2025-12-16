# Mountain Hut under Lajoška - Website

A modern, responsive website for a mountain hut built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Open terminal in the project folder
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
lajoska-prototype-v2/
├── public/              # Static files
├── src/
│   ├── app/            # Main app components
│   │   ├── App.tsx     # Root component with navigation
│   │   └── main.tsx    # Entry point
│   ├── components/
│   │   ├── layout/     # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/   # Page sections
│   │   │   ├── Home.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Story.tsx
│   │   └── ui/         # UI components
│   │       ├── forms/      # Form components (button, input, etc.)
│   │       ├── layout/     # Layout components (card, separator)
│   │       └── helpers/    # Helper components (ImageWithFallback, utils)
│   ├── pictures/       # Gallery images (1.png - 8.png)
│   └── styles/         # Global styles
└── README.md
```

## 🎨 Customizing Content

### 1. Adding/Changing Gallery Images

**Location:** `src/pictures/`

**Steps:**
1. Add your images to `src/pictures/` folder
2. Name them: `1.png`, `2.png`, `3.png`, etc.
3. Open `src/components/sections/Home.tsx`
4. Images are automatically imported (img1 through img8)
5. Edit captions in the `galleryImages` array:

```tsx
const galleryImages = [
  { url: img1, alt: 'Your Caption Here' },
  { url: img2, alt: 'Another Caption' },
  // ... add more
];
```

### 2. Changing Hero Image

**File:** `src/components/sections/Home.tsx`

**Find this section:**
```tsx
<ImageWithFallback
  src={img8}  // Change to img1, img2, etc.
  alt="Mountain Hut under Lajoška"
  className="w-full h-full object-cover opacity-70"
/>
```

### 3. Editing Site Text

#### Navigation Bar
**File:** `src/components/layout/Navigation.tsx`
- Logo text
- Menu items

#### Home Page
**File:** `src/components/sections/Home.tsx`
- Hero title and subtitle
- About section text
- Services list
- Reviews

#### Contact Page
**File:** `src/components/sections/Contact.tsx`
- Contact information (phone, email, address)
- Price list
- Special offers

#### Booking Page
**File:** `src/components/sections/Booking.tsx`
- Booking form labels
- Important information

#### Story Page
**File:** `src/components/sections/Story.tsx`
- History and story sections

### 4. Changing Colors

**File:** `src/styles/globals.css`

Main brand color (green):
```css
--primary: #030213;  /* Dark color */
--emerald: #10b981;  /* Green accent - change this */
```

Or directly in components, look for:
- `bg-emerald-600` → Change to another Tailwind color
- `text-emerald-700` → Change to match
- `hover:bg-emerald-700` → Change hover states

### 5. Editing Services

**File:** `src/components/sections/Home.tsx`

Find the `services` array:

```tsx
const services = [
  {
    icon: BedDouble,        // Icon from lucide-react
    title: 'Your Title',
    description: 'Your description',
  },
  // Add more services...
];
```

**Available Icons:**
Import from `lucide-react`: `BedDouble`, `Utensils`, `Wifi`, `TreePine`, `Snowflake`, etc.
Browse all icons: [lucide.dev](https://lucide.dev)

### 6. Editing Guest Reviews

**File:** `src/components/sections/Home.tsx`

Find the `reviews` array:

```tsx
const reviews = [
  {
    name: 'Guest Name',
    rating: 5,  // 1-5 stars
    text: 'Review text here...',
  },
  // Add more reviews...
];
```

## 🛠️ Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Image gallery with hover effects
- ✅ Booking form with validation
- ✅ Contact information and prices
- ✅ Guest reviews section
- ✅ Smooth scrolling navigation
- ✅ Image fallback handling (shows placeholder if image fails to load)

## 📱 Pages

1. **Home** - Hero, About, Services, Gallery, Reviews
2. **Accommodation Reservation** - Booking form
3. **Story** - Mountain hut history
4. **Contact & Prices** - Contact info, location map, price list

## 🎯 Tips

### Adding More Gallery Images

1. Add new image to `src/pictures/` (e.g., `9.png`)
2. In `Home.tsx`, import it:
   ```tsx
   import img9 from '../../pictures/9.png'
   ```
3. Add to the array:
   ```tsx
   { url: img9, alt: 'Description' }
   ```

### Changing Grid Layout

**Gallery:**
Current: 3 columns on desktop, 2 on tablet, 1 on mobile

In `Home.tsx`, find:
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
```

Change to:
- `grid-cols-2` = 2 columns always
- `md:grid-cols-4` = 4 columns on medium screens
- `gap-8` = larger spacing

### Image Requirements

- **Format:** PNG, JPG, or WEBP
- **Recommended size:** 1920x1080px for hero, 800x600px for gallery
- **File size:** Optimize to < 500KB per image for faster loading

## 🔧 Troubleshooting

### Images Not Showing

1. Check file names are exactly: `1.png`, `2.png`, etc.
2. Ensure images are in `src/pictures/` folder
3. Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### TypeScript Errors for Images

If you see "Cannot find module" errors:
- The `src/vite-env.d.ts` file should exist with image type declarations
- Reload VS Code window: Ctrl+Shift+P → "Reload Window"

### Styling Not Applying

1. Check Tailwind classes are spelled correctly
2. Clear cache and restart: `npm run dev`
3. Check `tailwind.config.js` includes your files

## 📦 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icons

## 📄 License

This project is private and for the Mountain Hut under Lajoška.

## 🆘 Need Help?

For questions or issues:
1. Check this README first
2. Review the code comments in each file
3. Contact the developer

---

**Happy customizing! 🏔️**
