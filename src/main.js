// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueMeta from 'vue-meta'



import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/animate.css'
import '~/assets/css/bootsnav.css'
import '~/assets/css/bootstrap.min.css'
import '~/assets/css/et-line-icons.css'
import '~/assets/css/font-awesome.min.css'
import '~/assets/css/justified-gallery.min.css'
import '~/assets/css/magnific-popup.css'
import '~/assets/css/modified.css'
import '~/assets/css/responsive.css'
import '~/assets/css/style.css'
import '~/assets/css/test.css'
import '~/assets/css/themify-icons.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
  Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
  head.script.push({
    src: 'assets/js/hello.js',
    body: true
  })

  
  Vue.component('Layout', DefaultLayout)
}
