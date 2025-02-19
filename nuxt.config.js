export default defineNuxtConfig({
  target: "server",

  head: {
    title: "Shnell's Kitchen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
      },
    ],
  },

  runtimeConfig: {
    adminUsername: process.env.ADMIN_USERNAME,
    adminPassword: process.env.ADMIN_PASSWORD,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    public: {
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
      cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    },
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/themes.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-vuefire",
    "@nuxtjs/cloudinary",
    'nuxt-gtag'
  ],

  plugins: ["~/plugins/toast.client.ts"],

  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "cuisine-storefront.firebaseapp.com",
      databaseURL:
        "https://cuisine-storefront-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "cuisine-storefront",
      storageBucket: "cuisine-storefront.firebasestorage.app",
      messagingSenderId: "977203987184",
      appId: "1:977203987184:web:694b363e037fa0ad02b835",
    },
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },

  gtag: {
    id: 'G-0ZYDYCQG05'
  },

  compatibilityDate: "2025-02-05",
});
