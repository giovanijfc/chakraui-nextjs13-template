declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENVIRONMENT: 'development' | 'production'

      NEXT_PUBLIC_BASE_URL: string
    }
  }
}
export {}
