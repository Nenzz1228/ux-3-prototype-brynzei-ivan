import { useState } from 'react'
import { Booking } from '../components/sections/Booking'
import { Contact } from '../components/sections/Contact'
import { Home } from '../components/sections/Home'
import { Story } from '../components/sections/Story'
import { Footer } from '../components/layout/Footer'
import { Navigation } from '../components/layout/Navigation'

type Page = 'home' | 'booking' | 'contact' | 'story';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1">
        {currentPage === 'home' && <Home onBookNow={() => setCurrentPage('booking')} />}
        {currentPage === 'booking' && <Booking />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'story' && <Story />}
      </main>

      <Footer />
    </div>
  )
}