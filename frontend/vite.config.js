import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your actual repo name
const repoName = 'Chemistry_Test'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})