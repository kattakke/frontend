import 'vite/client'

interface ImportMetaEnv {
  readonly VITE_MOCK: boolean
  readonly VITE_BASE_URL: string
  readonly VITE_GOOGLE_BOOKS_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
