import { motion } from 'framer-motion'
import { asset } from '../utils/asset'

export default function LanguageSelect({ onSelect }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-neutral-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 16:9 container matching book proportions */}
      <div
        className="relative w-full"
        style={{ maxWidth: '1076px', aspectRatio: '16/9' }}
      >
        <img
          src={asset('images/language-select.webp')}
          alt="Bruce sits between a British flag and a Portuguese flag"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <button
          onClick={() => onSelect('en')}
          className="absolute flag-btn cursor-pointer"
          style={{
            left: '3%',
            top: '55%',
            width: '27%',
            height: '35%',
          }}
          aria-label="Read in English"
        />

        <button
          onClick={() => onSelect('pt')}
          className="absolute flag-btn cursor-pointer"
          style={{
            left: '68%',
            top: '55%',
            width: '27%',
            height: '35%',
          }}
          aria-label="Ler em Português"
        />

        <p
          className="absolute bottom-2 left-0 right-0 text-center pointer-events-none"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: 'clamp(11px, 1.5vw, 15px)',
            color: 'rgba(255, 253, 245, 0.75)',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            fontStyle: 'italic',
          }}
        >
          Choose your language / Escolhe o teu idioma
        </p>
      </div>
    </motion.div>
  )
}
