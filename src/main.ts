import Vue from 'vue'
import App from './App.vue'
const FontFaceObserver = require('fontfaceobserver')

Vue.config.productionTip = false

const fontRSlab = new FontFaceObserver('Roboto Slab')
const fontRMono = new FontFaceObserver('Roboto Mono')
fontRSlab.load().then(function () {
  fontRMono.load().then(function () {
    new Vue({
      render: (h) => h(App),
    }).$mount('#app')
  })
})
