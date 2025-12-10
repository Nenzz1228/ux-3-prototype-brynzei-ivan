import { FC } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { ContactItem, PricingCategory } from '../types'

/**
 * Contact Component
 * Contact information, pricing, and location details
 */
export const Contact: FC = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Mountain Hut under Lajoška, Vysoké Tatry, Slovakia',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+421 123 456 789',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lajoskahut.sk',
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      content: '8:00 AM - 8:00 PM daily',
    },
  ]

  const priceList: PricingCategory[] = [
    {
      category: 'Accommodation',
      items: [
        { name: 'Double Room (per night)', price: '€45' },
        { name: 'Single Room (per night)', price: '€30' },
        { name: 'Dormitory Bed (per night)', price: '€20' },
        { name: 'Family Room (per night)', price: '€80' },
      ],
    },
    {
      category: 'Meals',
      items: [
        { name: 'Breakfast', price: '€8' },
        { name: 'Lunch', price: '€12' },
        { name: 'Dinner', price: '€15' },
        { name: 'Half Board (breakfast + dinner)', price: '€20' },
      ],
    },
    {
      category: 'Additional Services',
      items: [
        { name: 'Sauna (per person)', price: '€10' },
        { name: 'Packed Lunch', price: '€8' },
        { name: 'Hiking Guide (per day)', price: '€50' },
        { name: 'Bike Rental (per day)', price: '€15' },
      ],
    },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Contact & Prices</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Get in touch with us or find out more about our pricing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us for any questions or bookings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">{info.title}</p>
                      <p className="text-stone-900 font-semibold">{info.content}</p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Find us in the heart of the mountains</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-64 bg-stone-300 flex items-center justify-center">
                <p className="text-stone-600">Map integration coming soon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-stone-900">Our Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {priceList.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-none shadow-md">
                <CardHeader className="bg-emerald-50">
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center">
                        <p className="text-stone-700 text-sm">{item.name}</p>
                        <p className="font-bold text-emerald-700">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Note */}
        <Card className="border-2 border-emerald-200 bg-emerald-50">
          <CardContent className="p-6">
            <p className="text-stone-700">
              <span className="font-semibold">Note:</span> All prices are per person per night unless otherwise
              specified. Special discounts available for multi-night bookings and group reservations. Contact us for more
              information.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
