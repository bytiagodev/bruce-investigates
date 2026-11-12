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
  Page structure, with the 13 spreads the book has today (18 pages):
  0  - Front Cover (hard, single)
  1  - Inside front cover (blank endpaper)
  2  - Spread 1
  ...
  14 - Spread 13
  15 - "The End" / "Fim"
  16 - Inside back cover (blank endpaper)
  17 - Back Cover (hard, single)
*/
// Two covers, two endpapers and the closing page, around the spreads.
const TOTAL_PAGES = spreads.length + 5

// SVG icons, declared outside render
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

const labels = {
  en: {
    previous: 'Previous page',
    next: 'Next page',
    mute: 'Mute page turn sound',
    unmute: 'Enable page turn sound',
  },
  pt: {
    previous: 'Página anterior',
    next: 'Página seguinte',
    mute: 'Desligar o som das páginas',
    unmute: 'Ligar o som das páginas',
  },
}

export default function Book({ language }) {
  const bookRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [soundOn, setSoundOn] = useState(true)
  // The library shows one page below twice its minWidth (560px) and two
  // from there up. onInit corrects this guess if it is ever wrong.
  const [isPortrait, setIsPortrait] = useState(() => window.innerWidth < 560)

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

  const handleInit = useCallback(() => {
    syncOrientation()
  }, [syncOrientation])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') bookRef.current?.pageFlip()?.flipNext()
      if (e.key === 'ArrowLeft') bookRef.current?.pageFlip()?.flipPrev()
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
        {/* Front Cover */}
        <Cover language={language} />

        {/* Inside front cover (blank endpaper) */}
        <BlankPage />

        {/* The spreads, from page 2 on */}
        {spreads.map((spread, index) => (
          <Spread
            key={spread.id}
            spread={spread}
            language={language}
            isLast={index === spreads.length - 1}
          />
        ))}

        {/* The End */}
        <TheEndPage language={language} />

        {/* Inside back cover (blank endpaper) */}
        <BlankPage />

        {/* Back Cover */}
        <BackCover language={language} />
      </HTMLFlipBook>

      <div className="flex gap-6 mt-5">
        {!isFirstPage ? (
          <button
            onClick={goPrev}
            className="nav-arrow"
            aria-label={labels[language].previous}
          >
            <ChevronLeft />
          </button>
        ) : (
          <div className="nav-arrow-spacer" />
        )}

        {!isLastPage ? (
          <button
            onClick={goNext}
            className="nav-arrow"
            aria-label={labels[language].next}
          >
            <ChevronRight />
          </button>
        ) : (
          <div className="nav-arrow-spacer" />
        )}
      </div>

      <button
        className="sound-toggle"
        onClick={() => setSoundOn((s) => !s)}
        aria-label={soundOn ? labels[language].mute : labels[language].unmute}
      >
        <SoundIcon muted={!soundOn} />
      </button>
    </motion.div>
  )
}
