/**
 * Prefix a public asset path with the Vite base URL.
 * It is '/bruce-investigates/' everywhere, set in vite.config.js.
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`
