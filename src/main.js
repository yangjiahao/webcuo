// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'

import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.prototype.$http = axios

// global.BASE_URL = "http://192.168.1.190:8084";
// global.IMG_DOMAIN_URL = "http://192.168.1.190:8080";

// global.BASE_URL = "http://www.cuovip.com";
global.IMG_DOMAIN_URL = "https://www.cuovip.com";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
