// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store/store'
import plugins from './mixins/index'
import router from './router'
// import ElementUI from 'element-ui';
import {Button, Select, Row} from 'element-ui';


Vue.use(plugins, {someOption: true})

// Vue.use(ElementUI)
Vue.component(Row.name, Row);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
