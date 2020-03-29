import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'amfe-flexible';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
Vue.prototype.$moment = moment
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
