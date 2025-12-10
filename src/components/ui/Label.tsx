import { FC } from 'react'

/**
 * Label Component
 * Accessible form label with consistent styling
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export const Label: FC<LabelProps> = ({ className = '', children, ...props }) => (
  <label
    className={`text-sm font-medium text-stone-700 ${className}`}
    {...props}
  >
    {children}
  </label>
)
