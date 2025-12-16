import { useState } from 'react'
import { Calendar, Users, Mail, Phone, User, CheckCircle } from 'lucide-react'
import { Button } from '../ui/forms/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/layout/card'
import { Input } from '../ui/forms/input'
import { Label } from '../ui/forms/label'
import { Textarea } from '../ui/forms/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/forms/select'

export function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '',
        fullName: '',
        email: '',
        phone: '',
        specialRequests: '',
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
            <h2 className="text-2xl mb-3 text-stone-900">Booking Request Received!</h2>
            <p className="text-stone-600 mb-4">
              Thank you for your reservation request. We will contact you shortly to confirm your booking.
            </p>
            <p className="text-sm text-stone-500">
              Check your email for confirmation details.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl mb-4 text-stone-900">Accommodation Reservation</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Fill out the form below to reserve your stay at our mountain hut. We'll get back to you within 24 hours to confirm availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Booking Form */}
          <Card className="lg:col-span-2 border-none shadow-md">
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
              <CardDescription>Please provide your stay details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Stay Dates */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      Check-in Date
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleChange('checkIn', e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      Check-out Date
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleChange('checkOut', e.target.value)}
                      required
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    Number of Guests
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleChange('guests', value)}
                    required
                  >
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5 Guests</SelectItem>
                      <SelectItem value="6">6 Guests</SelectItem>
                      <SelectItem value="7+">7+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <h3 className="text-stone-900">Contact Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-emerald-600" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-emerald-600" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+420 123 456 789"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                    value={formData.specialRequests}
                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Submit Reservation Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Summary & Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pb-4 border-b border-stone-200">
                  <p className="text-sm text-stone-600 mb-1">Check-in</p>
                  <p className="text-stone-900">
                    {formData.checkIn
                      ? new Date(formData.checkIn).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Select date'}
                  </p>
                </div>
                <div className="pb-4 border-b border-stone-200">
                  <p className="text-sm text-stone-600 mb-1">Check-out</p>
                  <p className="text-stone-900">
                    {formData.checkOut
                      ? new Date(formData.checkOut).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Select date'}
                  </p>
                </div>
                <div className="pb-4 border-b border-stone-200">
                  <p className="text-sm text-stone-600 mb-1">Guests</p>
                  <p className="text-stone-900">{formData.guests || 'Select number'}</p>
                </div>
                {formData.checkIn && formData.checkOut && (
                  <div>
                    <p className="text-sm text-stone-600 mb-1">Number of Nights</p>
                    <p className="text-stone-900">
                      {Math.ceil(
                        (new Date(formData.checkOut).getTime() -
                          new Date(formData.checkIn).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}{' '}
                      nights
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-emerald-50">
              <CardContent className="p-6">
                <h3 className="mb-3 text-stone-900">Important Information</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Check-in: 2:00 PM - 8:00 PM</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Check-out: By 10:00 AM</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Free cancellation up to 7 days before arrival</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Half board (breakfast & dinner) included</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>Pets are welcome with prior notice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
