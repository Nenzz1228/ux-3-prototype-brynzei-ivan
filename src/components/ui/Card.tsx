import { FC } from 'react'
import { CardProps } from '../types'

/**
 * Card Component
 * Base container for grouped content with consistent styling
 */
export const Card: FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-stone-100 ${className}`}>
    {children}
  </div>
)

/**
 * CardHeader
 * Top section of card, typically for title and description
 */
interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-stone-100 ${className}`}>
    {children}
  </div>
)

/**
 * CardTitle
 * Heading for card content
 */
interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export const CardTitle: FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-bold text-stone-900 ${className}`}>
    {children}
  </h3>
)

/**
 * CardDescription
 * Subtitle or secondary text below title
 */
interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const CardDescription: FC<CardDescriptionProps> = ({ children, className = '' }) => (
  <p className={`text-sm text-stone-600 mt-1 ${className}`}>
    {children}
  </p>
)

/**
 * CardContent
 * Main content area of card
 */
interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
)
