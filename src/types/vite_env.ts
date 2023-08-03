interface ImportMetaEnv {
  readonly VITE_MOCK: boolean
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
