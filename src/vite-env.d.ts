/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly GEMINI_AI_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}