import { FC } from 'react'
import { Mail, Phone } from 'lucide-react'

/**
 * Footer Component
 * Site-wide footer with contact info and links
 * Positioned at bottom of page
 */
export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Mountain Hut</h3>
            <p className="text-sm text-stone-400 mb-3">
              Experience authentic alpine hospitality in the heart of the mountains
            </p>
            <p className="text-xs text-stone-500">under Lajoška, Slovakia</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#booking" className="text-stone-400 hover:text-white transition-colors">
                  Book a Stay
                </a>
              </li>
              <li>
                <a href="#story" className="text-stone-400 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-3">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <a href="tel:+421123456789" className="text-stone-400 hover:text-white transition-colors">
                  +421 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a href="mailto:info@lajoskahut.sk" className="text-stone-400 hover:text-white transition-colors">
                  info@lajoskahut.sk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>&copy; {currentYear} Mountain Hut under Lajoška. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-stone-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-stone-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
