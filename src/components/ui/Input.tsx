import { FC } from 'react'
import { InputProps } from '../types'

/**
 * Input Component
 * Accessible text input with optional label and error messaging
 */
export const Input: FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-stone-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full px-3.5 py-2.5 rounded-lg border border-stone-300
          bg-white text-stone-900 placeholder-stone-400
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
          hover:border-stone-400 transition-colors
          disabled:bg-stone-50 disabled:text-stone-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-stone-500">
          {helperText}
        </p>
      )}
    </div>
  )
}
