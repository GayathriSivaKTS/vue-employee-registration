// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin, SidebarPlugin } from 'bootstrap-vue'
import { ListGroupPlugin } from 'bootstrap-vue'
import { JumbotronPlugin } from 'bootstrap-vue'
/* eslint-disable no-new */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SidebarPlugin)
Vue.use(ListGroupPlugin)
Vue.use(JumbotronPlugin)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
