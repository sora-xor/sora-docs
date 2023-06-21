import { defineConfig } from 'vite'
export default defineConfig({
  ssr: {
    noExternal: ['lib-1', 'lib-2']
  },
})