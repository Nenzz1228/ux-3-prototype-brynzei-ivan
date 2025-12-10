import { useState, FC } from 'react'
import { Home } from './components/Home'
import { Booking } from './components/Booking'
import { Contact } from './components/Contact'
import { Story } from './components/Story'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Page } from './types'

/**
 * App Component
 * Main application shell with page routing and layout
 * Manages current page state and navigation
 */
const App: FC = () => {
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

export default App
