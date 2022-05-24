import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)

  return {
    plugins: [vue()],
    server: {
      port: 7000,
      open: true
    },
    base: env.VITE_APP_BASE
  }
})
