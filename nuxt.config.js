const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { ref:'icon', type: 'image/x-icon', href:'/favicon.ico'},
      { rel:"stylesheet", type:'text/css', href:"https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700"},
      { href:"https://fonts.googleapis.com/css?family=Quicksand:100,300,400,500", rel:"stylesheet", type:'text/css'},
      { href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400", rel:"stylesheet", type:'text/css', }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
 build: {
  
},
plugins: []
};
