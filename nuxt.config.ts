import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://nextchat-api.herokuapp.com',
      },
    },
  },
})
