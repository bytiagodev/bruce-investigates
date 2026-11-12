import { forwardRef } from 'react'

const TheEndPage = forwardRef(({ language }, ref) => {
  const text = language === 'pt' ? 'Fim' : 'The End'

  return (
    <div
      ref={ref}
      className="relative w-full h-full endpaper the-end-page"
      style={{ containerType: 'inline-size' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          style={{
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
      <div className="paper-noise opacity-20" />
    </div>
  )
})

TheEndPage.displayName = 'TheEndPage'

export default TheEndPage
