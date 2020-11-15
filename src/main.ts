import Vue from 'vue'
import App from './App.vue'
const FontFaceObserver = require('fontfaceobserver')

Vue.config.productionTip = false

const fontRaleway = new FontFaceObserver('Raleway')
fontRaleway.load().then(
  function() {
    console.log('Fonts loaded, then app as intended')
    new Vue({
      render: h => h(App)
    }).$mount('#app')
  },
  function() {
    console.log('App loaded before fonts could load')
    new Vue({
      render: h => h(App)
    }).$mount('#app')
  }
)
