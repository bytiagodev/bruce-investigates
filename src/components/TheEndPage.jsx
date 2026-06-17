import { forwardRef } from 'react'

const TheEndPage = forwardRef(({ language }, ref) => {
  const text = language === 'pt' ? 'Fim' : 'The End'

  return (
    <div
      ref={ref}
      className="relative w-full h-full the-end-page"
      style={{ containerType: 'inline-size' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: 'clamp(14px, 3cqw, 32px)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#6B5E50',
            letterSpacing: '0.06em',
            opacity: 0.8,
          }}
        >
          {text}
        </p>
      </div>

      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
})

TheEndPage.displayName = 'TheEndPage'

export default TheEndPage
