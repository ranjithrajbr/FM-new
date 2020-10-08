// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueMeta from 'vue-meta'
import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import App from "./App.vue";

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);



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
 
  head.meta.push({
    name: 'keywords',
    content: 'Consultancy, Entrepreneurship, Entrepreneur, Innovation, Startup, Launchpad, Business, Business Idea, Workshop, Ideathon, Hackathon, Skills, become an entrepreneur, start a business, business consultants, branding service, marketing, learn about digital marketing, how to increase sales, business strategy, how to increase Instagram followers, learn to run a business, execution, funding, investment'
  })
  head.meta.push({
    name: 'description',
    content: 'First Main is an innovation scout and support aggregator that aims at building an entrepreneurial ecosystem, where every member mutually benefits one another.'
  })

// head.script.push({
//     src:'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js',
//     body: true
//   })
head.script.push({
    src:'/assets/js/hello.js',
    body: true
  })


  
  Vue.component('Layout', DefaultLayout)
}
