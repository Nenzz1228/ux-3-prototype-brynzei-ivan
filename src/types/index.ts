import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, ComponentType } from 'react'

// Shared types for the application

export type Page = 'home' | 'booking' | 'contact' | 'story'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export interface CardProps {
  children: ReactNode
  className?: string
}

export interface ReviewItem {
  name: string
  rating: number
  text: string
}

export interface Service {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface ContactItem {
  icon: ComponentType<{ className?: string }>
  title: string
  content: string
}

export interface PricingItem {
  name: string
  price: string
}

export interface PricingCategory {
  category: string
  items: PricingItem[]
}

export interface BookingFormData {
  checkIn: string
  checkOut: string
  guests: string
  fullName: string
  email: string
  phone: string
  specialRequests: string
}

export interface GalleryImage {
  url: string
  alt: string
}
