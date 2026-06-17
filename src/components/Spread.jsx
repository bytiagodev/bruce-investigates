import { forwardRef } from 'react'

const Spread = forwardRef(({ spread, language }, ref) => {
  const lines = spread[language]
  const isLastSpread = spread.id === 13

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden bg-black"
      style={{ containerType: 'inline-size' }}
    >
      {/* Illustration */}
      <img
        src={spread.image}
        alt={`Spread ${spread.id}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text block with gradient backdrop */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          padding: '5cqw 3cqw 2.5cqw',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
        }}
      >
        {lines.map((line, i) => {
          const isFinalLine = isLastSpread && i === lines.length - 1

          return (
            <p
              key={i}
              className="text-center spread-text"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: isFinalLine ? 400 : 600,
                fontStyle: isFinalLine ? 'italic' : 'normal',
                fontSize: isFinalLine
                  ? 'clamp(12px, 2cqw, 22px)'
                  : 'clamp(10px, 1.6cqw, 17px)',
                lineHeight: 1.55,
                marginTop: isFinalLine ? '0.8cqw' : '0',
              }}
            >
              {line}
            </p>
          )
        })}
      </div>
    </div>
  )
})

Spread.displayName = 'Spread'

export default Spread
