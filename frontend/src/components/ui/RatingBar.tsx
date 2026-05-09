'use client';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';

interface RatingBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  // Rating configuration
  rating?: number;
  maxRating?: number;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  emptyColor?: string;
  
  // Optional parameters
  layout_width?: string;
  position?: string;
  
  // Display options
  showValue?: boolean;
  readonly?: boolean;
  onChange?: (rating: number) => void;
}

const RatingBar = ({
  rating = 0,
  maxRating = 5,
  size = 'medium',
  color = '#FFD700',
  emptyColor = '#D1D5DB',
  layout_width,
  position,
  showValue = false,
  readonly = true,
  onChange,
  className,
  ...props
}: RatingBarProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  // Size mappings
  const sizeClasses = {
    small: 'w-3 h-3 sm:w-4 sm:h-4',
    medium: 'w-4 h-4 sm:w-5 sm:h-5',
    large: 'w-5 h-5 sm:w-6 sm:h-6',
  }

  const gapClasses = {
    small: 'gap-0.5',
    medium: 'gap-1',
    large: 'gap-1.5',
  }

  const textClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
  }

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  const handleStarClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1)
    }
  }

  const renderStar = (index: number) => {
    const isFilled = index < Math.floor(rating)
    const isPartial = index < rating && index >= Math.floor(rating)
    const partialWidth = isPartial ? `${((rating % 1) * 100).toFixed(0)}%` : '0%'

    return (
      <div
        key={index}
        className={twMerge(
          'relative inline-block',
          sizeClasses[size],
          !readonly && 'cursor-pointer hover:scale-110 transition-transform'
        )}
        onClick={() => handleStarClick(index)}
        role={readonly ? 'img' : 'button'}
        aria-label={`${index + 1} star${index > 0 ? 's' : ''}`}
      >
        {/* Empty star background */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 24 24"
          fill={emptyColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        
        {/* Filled star overlay */}
        {(isFilled || isPartial) && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: isFilled ? '100%' : partialWidth }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 24 24"
              fill={color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={twMerge(
        'inline-flex items-center',
        gapClasses[size],
        optionalClasses,
        className
      )}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      <div className={twMerge('flex items-center', gapClasses[size])}>
        {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      </div>
      
      {showValue && (
        <span className={twMerge('ml-2 font-medium text-text-primary', textClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default RatingBar