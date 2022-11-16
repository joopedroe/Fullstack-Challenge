import Vue from 'vue';
import router from '@Config/router';
import functions from '@Config/functions';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.$functions = functions;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
