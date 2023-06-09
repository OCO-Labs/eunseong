// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client'}
  ],
})