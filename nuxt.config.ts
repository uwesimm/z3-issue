// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
          esbuild: {
                  options: {
                          target: 'esnext'
                  }
          },
          compressPublicAssets: true,
          minify: true
  },
  modules: [
  ],
  imports: { autoImport: true },
  build:{
    transpile:[]
  },
  compatibilityDate: '2024-07-12',
  vite: {
  }
})
