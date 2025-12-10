import { useState, FC } from 'react'
import { Calendar, Users, Mail, Phone, User, CheckCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Input } from './ui/Input'
import { Label } from './ui/Label'
import { Textarea } from './ui/Separator'
import { Select } from './ui/Select'
import { BookingFormData } from '../types'

/**
 * Booking Component
 * Accommodation reservation form with validation and success state
 * Handles guest information, dates, and special requests
 */
export const Booking: FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: '',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to booking API
    console.log('Booking submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '',
        fullName: '',
        email: '',
        phone: '',
        specialRequests: '',
      })
    }, 3000)
  }

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-emerald-50 px-4">
        <Card className="max-w-md w-full border-none shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-stone-900">Booking Request Received!</h2>
            <p className="text-stone-600 mb-4">
              Thank you for your reservation request. We will contact you shortly to confirm your booking.
            </p>
            <p className="text-sm text-stone-500">Check your email for confirmation details.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">Accommodation Reservation</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Fill out the form below to reserve your stay at our mountain hut. We'll get back to you within 24 hours to
            confirm availability.
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-none shadow-lg">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dates Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Check-in Date"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange('checkIn', e.target.value)}
                  required
                />
                <Input
                  label="Check-out Date"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange('checkOut', e.target.value)}
                  required
                />
              </div>

              {/* Guests */}
              <Select
                label="Number of Guests"
                value={formData.guests}
                onChange={(value) => handleChange('guests', value)}
                options={[
                  { value: '1', label: '1 Guest' },
                  { value: '2', label: '2 Guests' },
                  { value: '3', label: '3 Guests' },
                  { value: '4', label: '4 Guests' },
                  { value: '5', label: '5+ Guests' },
                ]}
                placeholder="Select number of guests"
              />

              {/* Guest Info Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-stone-900 mb-4">Guest Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="border-t pt-6">
                <Textarea
                  label="Special Requests (Optional)"
                  placeholder="Let us know if you have any special requests or dietary requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => handleChange('specialRequests', e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              {/* Terms */}
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-stone-600">
                    I agree to the terms and conditions and privacy policy
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" size="lg" variant="primary" className="flex-1">
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-bold text-stone-900 mb-1">Flexible Dates</h3>
              <p className="text-sm text-stone-600">Book for any duration that suits your plans</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-bold text-stone-900 mb-1">Group Bookings</h3>
              <p className="text-sm text-stone-600">Ask about our special rates for groups</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-bold text-stone-900 mb-1">24-Hour Response</h3>
              <p className="text-sm text-stone-600">We respond to all inquiries within 24 hours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
