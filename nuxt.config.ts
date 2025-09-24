// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.css", "~/assets/scss/main.scss"],
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],
  vite: {
    css: {
      preprocessorMaxWorkers: true,
    },
  },
});
