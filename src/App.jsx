import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LanguageSelect from './components/LanguageSelect'
import Book from './components/Book'
import { preloadImages, getAllImageUrls } from './utils/preloader'

export default function App() {
  const [language, setLanguage] = useState(null)

  // Preload all book images as soon as the app mounts
  useEffect(() => {
    preloadImages(getAllImageUrls())
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden bg-neutral-900">
      <AnimatePresence mode="wait">
        {language === null ? (
          <LanguageSelect
            key="language-select"
            onSelect={(lang) => setLanguage(lang)}
          />
        ) : (
          <Book
            key="book"
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
