import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: { //同plugins同级
    port:3000,
    open:true,
    cors:true,
    proxy: { //配置代理服务器
      '/api': {
        target: "http://127.0.0.1:8080",    //目标url
        changeOrigin: true,    //允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''),     //重写路径,替换/api
      },
    },
  },
})
