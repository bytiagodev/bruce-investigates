import { forwardRef } from 'react'

const BlankPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative w-full h-full endpaper">
      {/* Subtle paper texture via noise */}
      <div className="paper-noise opacity-30" />
    </div>
  )
})

BlankPage.displayName = 'BlankPage'

export default BlankPage
