// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import plugins from './mixins/index'
import {Button, Select, Row} from 'element-ui';
import iView from 'iview';
import zh from 'iview/dist/locale/zh-CN';
import 'iview/dist/styles/iview.css'


Vue.use(plugins, {someOption: true})
// UI库
// element
Vue.component(Row.name, Row);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);


// iview
Vue.use(iView, {zh});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
