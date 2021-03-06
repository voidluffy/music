// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import store from './store'
import VueLazyLoad from 'vue-lazyload'


Vue.use(VueLazyLoad,{
loading:"/static/loading-svg/loading-bars.svg"
})


fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // components: { App },
  // template: '<App/>',
  render:h => h(App),
})
