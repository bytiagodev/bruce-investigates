import { asset } from './asset'
import spreads from '../data/spreads'

/**
 * Preload an array of image URLs.
 * Returns a promise that resolves when all images are loaded.
 */
export function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve // don't block on failures
          img.src = url
        })
    )
  )
}

export function getAllImageUrls() {
  return [
    asset('images/cover.webp'),
    asset('images/bruce-back.webp'),
    ...spreads.map((spread) => spread.image),
  ]
}
