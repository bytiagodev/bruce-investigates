import { forwardRef } from 'react'
import { asset } from '../utils/asset'

const BackCover = forwardRef(({ language }, ref) => {
  return (
    <div ref={ref} className="relative w-full h-full back-cover overflow-hidden hard-cover">
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <img
          src={asset('images/bruce-back.webp')}
          alt={language === 'pt' ? 'Bruce a afastar-se' : 'Bruce walking away'}
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
      <div className="cover-edge cover-edge--back" />
    </div>
  )
})

BackCover.displayName = 'BackCover'

export default BackCover
