import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import api from '../http/api';

import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Vant);
vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
