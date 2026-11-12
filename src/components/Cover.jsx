import { forwardRef } from 'react'
import { asset } from '../utils/asset'

const Cover = forwardRef(({ language }, ref) => {
  const title = language === 'pt' ? 'Bruce Investiga' : 'Bruce Investigates'

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden hard-cover"
      style={{ containerType: 'inline-size' }}
    >
      <img
        src={asset('images/cover.webp')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hardcover edge effect */}
      <div className="cover-edge cover-edge--front" />

      <div
        className="absolute top-0 left-0 right-0 flex flex-col items-center pointer-events-none"
        style={{ paddingTop: '4cqw' }}
      >
        <h1
          className="cover-title text-center"
          style={{
            fontSize: 'clamp(16px, 3.3cqw, 36px)',
            padding: '0 3cqw',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
})

Cover.displayName = 'Cover'

export default Cover
