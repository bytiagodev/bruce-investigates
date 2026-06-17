import { asset } from './asset'

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
  const images = [
    asset('images/cover.webp'),
    asset('images/bruce-back.webp'),
  ]
  for (let i = 1; i <= 13; i++) {
    images.push(asset(`images/spread-${String(i).padStart(2, '0')}.webp`))
  }
  return images
}
