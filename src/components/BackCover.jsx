import { forwardRef } from 'react'
import { asset } from '../utils/asset'

const BackCover = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative w-full h-full back-cover overflow-hidden hard-cover">
      {/* Bruce from behind, centred */}
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <img
          src={asset('images/bruce-back.webp')}
          alt="Bruce walking away"
          className="object-contain"
          style={{
            height: '70%',
            maxHeight: '70%',
            opacity: 0.85,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
          }}
        />
      </div>

      {/* Hardcover edge effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 40px rgba(0,0,0,0.12), inset 3px 0 8px rgba(0,0,0,0.08)',
          borderLeft: '3px solid rgba(60,45,30,0.25)',
        }}
      />
    </div>
  )
})

BackCover.displayName = 'BackCover'

export default BackCover
