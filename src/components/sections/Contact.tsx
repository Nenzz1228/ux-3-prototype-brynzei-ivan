import { MapPin, Phone, Mail, Clock, Euro } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/layout/card'
import { Separator } from '../ui/layout/separator'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: "48°45'50.1\"N 21°04'43.5\"E",
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '0917 263 203',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'prednaholica@gmail.com',
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      content: '8:00 AM - 8:00 PM daily',
    },
  ];

  const priceList = [
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
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4 text-stone-900">Contact & Prices</h1>
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
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">{info.title}</p>
                      <p className="text-stone-900">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Find us in the heart of the mountains</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[300px] bg-stone-200">
                {/* Placeholder for map - in a real app, use Google Maps or similar */}
                <iframe
                  title="Mountain Hut Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=20.0%2C49.0%2C20.3%2C49.3&layer=mapnik"
                  className="w-full h-full border-0"
                  style={{ filter: 'grayscale(0.3)' }}
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
                  <p className="text-sm">
                    <span className="text-emerald-600">📍</span> Mountain Hut under Lajoška
                  </p>
                </div>
              </div>
              <div className="p-6 bg-emerald-50">
                <h4 className="mb-2 text-stone-900">Getting Here</h4>
                <p className="text-sm text-stone-700 mb-3">
                  From the main parking area, follow the marked green trail for approximately 2.5 km 
                  (about 1 hour hike). The trail is well-maintained and suitable for all skill levels.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-stone-600">Elevation</p>
                    <p className="text-stone-900">908 m</p>
                  </div>
                  <div>
                    <p className="text-stone-600">Distance from parking</p>
                    <p className="text-stone-900">2.5 km</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price List */}
        <Card className="border-none shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Euro className="h-6 w-6 text-emerald-600" />
              <CardTitle>Current Prices</CardTitle>
            </div>
            <CardDescription>All prices include VAT. Half board is highly recommended.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {priceList.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="mb-4 text-stone-900">{category.category}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0">
                        <span className="text-stone-700">{item.name}</span>
                        <span className="text-emerald-700">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  {categoryIndex < priceList.length - 1 && (
                    <Separator className="mt-6" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="mb-2 text-amber-900">Special Offers</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Stay 7 nights, pay for 6 (valid year-round)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Groups of 10+ receive 15% discount</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Children under 6 years stay free</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="border-none shadow-md bg-emerald-50">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 mb-3">We accept the following payment methods:</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Cash (EUR, CZK, PLN)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Credit/Debit Cards (Visa, Mastercard)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Bank Transfer (advance payment)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-blue-50">
            <CardHeader>
              <CardTitle>Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Free cancellation up to 7 days before check-in</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>50% refund for cancellations 3-7 days before</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>No refund for cancellations less than 3 days before</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>In case of severe weather, full refund available</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
