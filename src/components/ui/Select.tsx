import { FC, useState } from 'react'

/**
 * Select Component
 * Accessible dropdown menu with proper ARIA attributes
 */

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  error?: string
  placeholder?: string
  id?: string
  className?: string
}

export const Select: FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  error,
  placeholder,
  id,
  className = '',
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-stone-700 mb-1.5">
          {label}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-3.5 py-2.5 rounded-lg border border-stone-300
          bg-white text-stone-900
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
          hover:border-stone-400 transition-colors
          disabled:bg-stone-50 disabled:text-stone-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * SelectContent, SelectItem, SelectTrigger, SelectValue
 * Compound component exports for compatibility with existing code
 */

interface SelectContentProps {
  children: React.ReactNode
}

export const SelectContent: FC<SelectContentProps> = ({ children }) => (
  <>{children}</>
)

interface SelectItemProps {
  value: string
  children: React.ReactNode
}

export const SelectItem: FC<SelectItemProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
)

interface SelectTriggerProps {
  children: React.ReactNode
  className?: string
}

export const SelectTrigger: FC<SelectTriggerProps> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

interface SelectValueProps {
  placeholder?: string
}

export const SelectValue: FC<SelectValueProps> = ({ placeholder }) => (
  <>{placeholder}</>
)
