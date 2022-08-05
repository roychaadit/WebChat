import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueResource from 'vue-resource';
 
import VueSocketIO from 'vue-socket.io';
// import '/src/assets/style/style.css';

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000',
 
//   options: {  withCredentials: true, credentials :true ,debug : true } //Optional options
// }))




Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
