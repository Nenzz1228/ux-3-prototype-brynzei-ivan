import { useState, FC } from 'react'
import { Mountain, Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { Page } from '../types'

interface NavigationProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

/**
 * Navigation Component
 * Main navigation bar with logo, desktop menu, and mobile hamburger
 * Sticky positioning with shadow on scroll
 */
export const Navigation: FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'booking' as Page, label: 'Accommodation Reservation' },
    { id: 'story' as Page, label: 'Story' },
    { id: 'contact' as Page, label: 'Contact & Prices' },
  ]

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mountain className="h-8 w-8 text-emerald-700" />
            <div className="flex flex-col items-start">
              <span className="text-stone-900 font-semibold">Mountain Hut</span>
              <span className="text-xs text-stone-600">under Lajoška</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleNavigate(item.id)}
                className={currentPage === item.id ? 'bg-emerald-600 text-white' : 'text-stone-700'}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-stone-900" />
            ) : (
              <Menu className="h-6 w-6 text-stone-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-200">
            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleNavigate(item.id)}
                  className="w-full justify-start text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
