import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import VueParticles from 'vue-particles'
import "./plugins/firebase.js";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(VueParticles)
Vue.use(LottieAnimation); // add lottie-animation to your global scope

Vue.config.productionTip = false

new Vue({
  store,
  router,
    vuetify,
    render: h => h(App)
}).$mount('#app')