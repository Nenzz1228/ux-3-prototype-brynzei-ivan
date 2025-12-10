import { FC } from 'react'
import { ButtonProps } from '../types'

/**
 * Button Component
 * Versatile button with multiple variants and sizes
 * Variants: primary, secondary, ghost, outline, destructive
 * Sizes: xs, sm, md, lg
 */
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'font-medium inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 focus:ring-emerald-500',
    secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300 active:bg-stone-400 focus:ring-stone-500',
    ghost: 'bg-transparent text-stone-900 hover:bg-stone-100 active:bg-stone-200 focus:ring-stone-400',
    outline: 'border-2 border-stone-300 text-stone-900 hover:border-stone-400 bg-white active:bg-stone-50 focus:ring-stone-400',
    destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
  }

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}
