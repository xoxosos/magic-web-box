import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  server: {
    port: 3000, // 设置服务器端口，默认为3000
    host: '0.0.0.0',
    proxy: {
      // 配置代理，用于解决跨域问题
      '/api': {
        target: 'https://mock.apifox.cn/m1/2120640-0-2c46b26a', // 代理目标地址
        changeOrigin: true, // 开启跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 重写请求路径
      }
    }
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  }
})
