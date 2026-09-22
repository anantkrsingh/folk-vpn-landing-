import { type CSSProperties, useEffect, useRef } from 'react'

type BlurTextProps = {
  text: string
  delay?: number
  animateBy?: 'words' | 'chars'
  direction?: 'top' | 'bottom'
  onAnimationComplete?: () => void
  className?: string
}

function splitText(text: string, animateBy: 'words' | 'chars') {
  if (animateBy === 'chars') {
    return Array.from(text)
  }

  return text.split(/(\s+)/).filter(Boolean)
}

export default function BlurText({
  text,
  delay = 120,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
}: BlurTextProps) {
  const completedRef = useRef(false)
  const pieces = splitText(text, animateBy)
  const visiblePieces = pieces.filter((piece) => piece.trim().length > 0)

  useEffect(() => {
    completedRef.current = false
  }, [text, delay, animateBy, direction])

  const handleAnimationEnd = () => {
    if (completedRef.current) {
      return
    }

    completedRef.current = true
    onAnimationComplete?.()
  }

  return (
    <h1
      className={`blur-text ${className}`.trim()}
      aria-label={text}
      style={
        {
          '--blur-start-y': direction === 'top' ? '-16px' : '16px',
        } as CSSProperties
      }
    >
      {pieces.map((piece, index) => {
        const isSpace = piece.trim().length === 0
        const visibleIndex = pieces
          .slice(0, index)
          .filter((item) => item.trim().length > 0).length
        const isLastVisible = visibleIndex === visiblePieces.length - 1

        if (isSpace) {
          return piece
        }

        return (
          <span
            aria-hidden="true"
            className="blur-text-piece"
            key={`${piece}-${index}`}
            onAnimationEnd={isLastVisible ? handleAnimationEnd : undefined}
            style={
              {
                '--blur-delay': `${visibleIndex * delay}ms`,
              } as CSSProperties
            }
          >
            {piece}
          </span>
        )
      })}
    </h1>
  )
}
