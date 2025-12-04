import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Mantieni i file video nella root di dist
          if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Assicura che i file grandi vengano copiati
    assetsInlineLimit: 0
  }
})
