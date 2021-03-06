import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../src/http/api'
import { Form } from 'vant';
import { Search } from 'vant';

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Form);
Vue.use(Search);
// vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
