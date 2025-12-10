import { FC } from 'react'
import { Card, CardContent } from './ui/Card'

/**
 * Story Component
 * About page with history and heritage information
 */
export const Story: FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Story</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover the rich history and heritage of the Mountain Hut under Lajoška
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-12 sm:space-y-16">
          {/* Section 1: Origins */}
          <Card className="border-none shadow-md">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">Our Origins</h2>
              <p className="text-stone-600 leading-relaxed">
                Nestled in the heart of the mountains, our hut has been a sanctuary for hikers and nature lovers for
                generations, offering shelter and warmth in the alpine wilderness. What began as a simple rest stop for
                mountain travelers has grown into a beloved destination known throughout the region for its authentic
                hospitality and commitment to preserving the mountain way of life.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Tradition */}
          <Card className="border-none shadow-md">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">Mountain Tradition</h2>
              <p className="text-stone-600 leading-relaxed">
                Built with respect for mountain traditions, we continue to honor the heritage of alpine hospitality
                while providing modern comfort to our guests. Our architecture reflects traditional construction methods,
                while our amenities ensure that visitors can enjoy contemporary convenience without compromising the
                authentic mountain experience. Every detail, from the wooden beams to the stone fireplace, tells a story
                of generations who came before us.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Nature */}
          <Card className="border-none shadow-md">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">Connection to Nature</h2>
              <p className="text-stone-600 leading-relaxed">
                Surrounded by breathtaking peaks and pristine trails, our location offers an authentic mountain
                experience where visitors can reconnect with the natural world. We are committed to sustainable practices
                and environmental stewardship, ensuring that the beauty we cherish today will be preserved for future
                generations. From supporting local conservation efforts to sourcing food from nearby producers, we
                believe in living in harmony with the mountains that define our home.
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Our Mission */}
          <Card className="border-none shadow-md bg-emerald-50">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission Today</h2>
              <p className="text-stone-700 leading-relaxed">
                Today, we continue our mission to provide a warm welcome to all who visit. Whether you're a seasoned
                mountaineer, a casual hiker, or someone seeking refuge from the everyday hustle, our hut is your home
                away from home. We believe in the transformative power of mountain experiences and are dedicated to
                creating memories that will last a lifetime. Join us and discover why travelers from around the world
                return to the Mountain Hut under Lajoška year after year.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-3">Experience Our Heritage</h3>
          <p className="text-stone-600 mb-6">
            Come and be part of the Mountain Hut under Lajoška story. Every guest who walks through our doors becomes
            part of our history.
          </p>
          <a
            href="#booking"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </div>
  )
}
