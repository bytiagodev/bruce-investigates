import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import HTMLFlipBook from 'react-pageflip'
import Cover from './Cover'
import BlankPage from './BlankPage'
import Spread from './Spread'
import TheEndPage from './TheEndPage'
import BackCover from './BackCover'
import spreads from '../data/spreads'
import { playPageTurn } from '../utils/pageSound'

/*
  Page structure (18 pages total):
  0  — Front Cover (hard, single)
  1  — Inside front cover (blank endpaper)
  2  — Spread 1
  ...
  14 — Spread 13
  15 — "The End" / "Fim"
  16 — Inside back cover (blank endpaper)
  17 — Back Cover (hard, single)
*/
const TOTAL_PAGES = 18

// SVG icons — declared outside render
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 4 7 10 13 16" />
  </svg>
)
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 4 13 10 7 16" />
  </svg>
)
const SoundIcon = ({ muted }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    {muted ? (
      <>
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </>
    ) : (
      <>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </>
    )}
  </svg>
)

export default function Book({ language }) {
  const bookRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [soundOn, setSoundOn] = useState(true)
  // Default to portrait on screens too narrow for two 1076px pages
  const [isPortrait, setIsPortrait] = useState(() => window.innerWidth < 1200)

  const getPageFlip = () => bookRef.current?.pageFlip()

  const syncOrientation = useCallback(() => {
    const pf = getPageFlip()
    if (pf) {
      const orient = pf.getOrientation?.()
      if (orient) setIsPortrait(orient === 'portrait')
    }
  }, [])

  const goNext = () => getPageFlip()?.flipNext()
  const goPrev = () => getPageFlip()?.flipPrev()

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage >= TOTAL_PAGES - 1
  const showGutter = !isPortrait && !isFirstPage && !isLastPage

  const handleFlip = useCallback(
    (e) => {
      setCurrentPage(e.data)
      if (soundOn) playPageTurn()
    },
    [soundOn]
  )

  const handleOrientation = useCallback((e) => {
    setIsPortrait(e.data === 'portrait')
  }, [])

  // Sync orientation once the book initialises
  const handleInit = useCallback(() => {
    syncOrientation()
  }, [syncOrientation])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Force recalculation on viewport resize (fixes dev tools / orientation changes)
  useEffect(() => {
    let timeout
    const handleResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        getPageFlip()?.update()
        syncOrientation()
      }, 150)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [syncOrientation])

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full bg-neutral-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HTMLFlipBook
        ref={bookRef}
        width={1076}
        height={608}
        size="stretch"
        minWidth={280}
        maxWidth={1800}
        minHeight={158}
        maxHeight={1016}
        showCover={true}
        flippingTime={600}
        usePortrait={true}
        drawShadow={true}
        maxShadowOpacity={0.4}
        mobileScrollSupport={true}
        clickEventForward={true}
        showPageCorners={true}
        className={`bruce-book${showGutter ? ' show-gutter' : ''}`}
        onFlip={handleFlip}
        onInit={handleInit}
        onChangeOrientation={handleOrientation}
        autoSize={true}
      >
        {/* Page 0: Front Cover */}
        <Cover language={language} />

        {/* Page 1: Inside front cover (blank endpaper) */}
        <BlankPage />

        {/* Pages 2–14: Spreads 1–13 */}
        {spreads.map((spread) => (
          <Spread key={spread.id} spread={spread} language={language} />
        ))}

        {/* Page 15: The End */}
        <TheEndPage language={language} />

        {/* Page 16: Inside back cover (blank endpaper) */}
        <BlankPage />

        {/* Page 17: Back Cover */}
        <BackCover />
      </HTMLFlipBook>

      {/* Navigation arrows */}
      <div className="flex gap-6 mt-5">
        {!isFirstPage ? (
          <button
            onClick={goPrev}
            className="nav-arrow"
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>
        ) : (
          <div style={{ width: 44 }} />
        )}

        {!isLastPage ? (
          <button
            onClick={goNext}
            className="nav-arrow"
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        ) : (
          <div style={{ width: 44 }} />
        )}
      </div>

      {/* Sound toggle */}
      <button
        className="sound-toggle"
        onClick={() => setSoundOn((s) => !s)}
        aria-label={soundOn ? 'Mute page turn sound' : 'Enable page turn sound'}
      >
        <SoundIcon muted={!soundOn} />
      </button>
    </motion.div>
  )
}
