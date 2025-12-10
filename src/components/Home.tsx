import { FC } from 'react'
import { MapPin, Wifi, Utensils, BedDouble, Snowflake, TreePine, Star } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'
import { ImageWithFallback } from './assets/ImageWithFallback'
import { Service, ReviewItem, GalleryImage } from '../types'

interface HomeProps {
  onBookNow: () => void
}

/**
 * Home Component
 * Landing page with hero, features, gallery, reviews, and CTA sections
 * Mobile-first responsive design
 */
export const Home: FC<HomeProps> = ({ onBookNow }) => {
  const services: Service[] = [
    {
      icon: BedDouble,
      title: 'Comfortable Accommodation',
      description: 'Cozy rooms with mountain views',
    },
    {
      icon: Utensils,
      title: 'Mountain Cuisine',
      description: 'Traditional meals and local specialties',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Available',
      description: 'Stay connected even in the mountains',
    },
    {
      icon: TreePine,
      title: 'Hiking Trails',
      description: 'Direct access to scenic trails',
    },
    {
      icon: Snowflake,
      title: 'Year-Round Open',
      description: 'Summer hiking & winter adventures',
    },
  ]

  const galleryImages: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1630591654275-b0413a2a4108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGh1dCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzIyMTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Mountain Hut Exterior',
    },
    {
      url: 'https://images.unsplash.com/photo-1758983065583-9cea714214f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjBjYWJpbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MzIyMTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cozy Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1668900030471-170e936b201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHZpZXd8ZW58MXx8fHwxNzYzMjIxMDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Mountain Views',
    },
    {
      url: 'https://images.unsplash.com/photo-1643892492756-ffc3d71f8cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NjMxNDU2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Hiking Trails',
    },
    {
      url: 'https://images.unsplash.com/photo-1562860394-67770143610c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGh1dCUyMGRpbmluZyUyMHJvb218ZW58MXx8fHwxNzYzMjIxMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Dining Area',
    },
    {
      url: 'https://images.unsplash.com/photo-1701527318649-3dab97f88226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFjY29tbW9kYXRpb24lMjBiZWRyb29tfGVufDF8fHx8MTc2MzIyMTAzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Bedroom',
    },
  ]

  const reviews: ReviewItem[] = [
    {
      name: 'Jana K.',
      rating: 5,
      text: 'Amazing location with breathtaking views. The hosts were incredibly welcoming and the food was excellent!',
    },
    {
      name: 'Marek S.',
      rating: 5,
      text: 'Perfect base for hiking. Clean rooms, great atmosphere, and authentic mountain experience.',
    },
    {
      name: 'Elena M.',
      rating: 5,
      text: 'We spent a wonderful weekend here. The hut has everything you need and the surroundings are simply beautiful.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-stone-900 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1630591654275-b0413a2a4108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGh1dCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzIyMTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mountain Hut under Lajoška"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Mountain Hut under Lajoška</h1>
            <p className="text-lg md:text-xl mb-8 text-stone-200">
              Experience the tranquility and beauty of the mountains in our cozy alpine refuge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={onBookNow} variant="primary" className="bg-emerald-600 hover:bg-emerald-700">
                Book Your Stay
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/80 bg-stone-900/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
          <MapPin className="h-4 w-4" />
          <span>Located in the heart of the mountains</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900">About Our Mountain Hut</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Nestled in the pristine mountains under Lajoška, our hut offers a perfect retreat for nature lovers,
                hikers, and anyone seeking peace away from the bustling city life. Built with traditional craftsmanship
                and modern comfort in mind, we provide an authentic mountain experience.
              </p>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Whether you're planning a summer hiking adventure or a winter escape, our hut serves as an ideal base
                camp. Wake up to stunning mountain views, enjoy hearty traditional meals, and end your day by the
                fireplace sharing stories with fellow travelers.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We take pride in our hospitality and are committed to making your mountain experience unforgettable.
                Our family has been welcoming guests for generations, and we look forward to hosting you.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758983065583-9cea714214f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW91bnRhaW4lMjBjYWJpbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MzIyMTAzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior of the hut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Our Services</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable mountain stay
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="font-bold text-stone-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-stone-600">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Photo Gallery</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Take a virtual tour of our mountain hut and surrounding areas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white text-sm">{image.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Guest Reviews</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              See what our guests have to say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-stone-900">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Mountain Adventure?</h2>
          <p className="text-lg mb-8 text-emerald-50">
            Book your stay today and experience the beauty and tranquility of the mountains
          </p>
          <Button size="lg" onClick={onBookNow} className="bg-white text-emerald-700 hover:bg-emerald-50">
            Reserve Your Accommodation
          </Button>
        </div>
      </section>
    </div>
  )
}
