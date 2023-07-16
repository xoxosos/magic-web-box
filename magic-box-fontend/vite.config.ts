import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
// https://vitejs.dev/config/
const viteConfig = defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', env.VITE_API_URL)
  return {
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      host: '0.0.0.0',
      // 服务器端口号
      // @ts-ignore
      port: env.VITE_APP_PORT,
      // port: env.VITE_APP_PORT as string,
      // 是否自动打开浏览器
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // target: 'http://127.0.0.1:4523/m1/2120640-0-2c46b26a', // '/api' 代理的接口路径
          // target: 'https://mock.apifox.cn/m1/2120640-0-2c46b26a', // '/api' 代理的接口路径
          target: env.VITE_API_URL, // '/api' 服务器代理的接口路径
          changeOrigin: true, // 跨域
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: env.VITE_DROP_CONSOLE as any,
          drop_debugger: true
        }
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})

export default viteConfig
