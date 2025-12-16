import { useState } from 'react'
import { Mountain, Menu, X } from 'lucide-react'
import { Button } from '../ui/forms/button'

type Page = 'home' | 'booking' | 'contact' | 'story';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'booking' as Page, label: 'Accommodation Reservation' },
    { id: 'story' as Page, label: 'Story' },
    { id: 'contact' as Page, label: 'Contact & Prices' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <span className="text-stone-900">Mountain Hut</span>
              <span className="text-xs text-stone-600">under Lajoška</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => handleNavigate(item.id)}
                className={currentPage === item.id ? 'bg-emerald-700 hover:bg-emerald-800' : ''}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-stone-600 hover:bg-stone-100"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-emerald-700 text-white'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}