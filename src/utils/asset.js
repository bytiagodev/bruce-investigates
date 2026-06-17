/**
 * Prefix a public asset path with the Vite base URL.
 * In dev this is '/', in production it's '/bruce-investigates/'.
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`
