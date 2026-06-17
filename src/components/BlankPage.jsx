import { forwardRef } from 'react'

const BlankPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative w-full h-full endpaper">
      {/* Subtle paper texture via noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
})

BlankPage.displayName = 'BlankPage'

export default BlankPage
