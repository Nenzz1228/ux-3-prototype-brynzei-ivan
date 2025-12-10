import { FC } from 'react'

/**
 * Textarea Component
 * Multi-line text input with consistent styling
 */

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-stone-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`
          w-full px-3.5 py-2.5 rounded-lg border border-stone-300
          bg-white text-stone-900 placeholder-stone-400
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
          hover:border-stone-400 transition-colors
          disabled:bg-stone-50 disabled:text-stone-500 disabled:cursor-not-allowed
          resize-vertical min-h-[120px] font-sans
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className="mt-1 text-sm text-stone-500">
          {helperText}
        </p>
      )}
    </div>
  )
}
