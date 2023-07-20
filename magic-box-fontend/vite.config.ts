import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

const viteConfig = defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', env.VITE_API_URL)
  return {
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      // 构建压缩文件
      viteCompression({
        // 是否禁用，默认false
        disable: false,
        // 记录压缩文件及其压缩率。默认true
        verbose: true,
        // 需要使用压缩前的最小文件大小，单位字节（byte） b，1b(字节)=8bit(比特), 1KB=1024B
        threshold: 10240, // 即10kb以上即会压缩
        // 压缩算法 可选 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
        algorithm: env.VITE_BUILD_COMPRESS as any,
        // 压缩后是否删除源文件
        deleteOriginFile: true,
        // 压缩后的文件格式
        ext: '.gz'
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
      port: env.VITE_APP_PORT as unknown as number,
      // port: env.VITE_APP_PORT as string,
      // 是否自动打开浏览器
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
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
          drop_console: env.VITE_DROP_CONSOLE as unknown as boolean,
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
