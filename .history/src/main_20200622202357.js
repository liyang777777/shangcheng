import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../src/http/api'
import { Form } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
// import { Card } from 'vant';

Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$api = api
Vue.use(Form);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
// Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
