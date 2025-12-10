import { FC, useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

/**
 * ImageWithFallback Component
 * Displays an image with a fallback color if it fails to load
 */
export const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt, className = '' }) => {
  const [imageFailed, setImageFailed] = useState(false)

  if (imageFailed) {
    return (
      <div className={`bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center ${className}`}>
        <span className="text-stone-600 font-semibold">{alt}</span>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} className={className} onError={() => setImageFailed(true)} />
  )
}
