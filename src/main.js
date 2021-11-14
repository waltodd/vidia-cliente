import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
  {
    offset: 400,
    duration: 1000
  }
);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
