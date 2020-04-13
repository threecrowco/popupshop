// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue2Filters from 'vue2-filters'
import VueTailwind from 'vue-tailwind'
import VueAnime from 'vue-animejs'
import VueAgile from 'vue-agile'
import 'vue-agile/dist/VueAgile.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueAxios, axios)
  Vue.use(require('vue-moment'))
  Vue.use(Vue2Filters)
  Vue.use(VueTailwind)
  Vue.use(VueAnime)
  Vue.use(VueAgile)
}
