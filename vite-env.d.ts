/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string; // Add any other VITE_ prefixed environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
