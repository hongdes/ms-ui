import Vue from 'vue';
import App from './App';
import router from './router';
import '../packages/base';
import { install as Ms } from '@/index';
Vue.use(Ms);


new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})