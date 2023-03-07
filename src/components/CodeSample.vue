<template>
  <vue-code-highlight language="typescript">
    <pre>
     {{codeSample}}
    </pre>
  </vue-code-highlight>
</template>
<script lang="ts">
  import Vue from 'vue'
  //@ts-ignore
  import { component as VueCodeHighlight } from 'vue-code-highlight'
  import '../../node_modules/vue-code-highlight/themes/prism.css'
  import 'prism-es6/components/prism-markup-templating'
  import 'prism-es6/components/prism-typescript'

  export default Vue.extend({
    components:{
      VueCodeHighlight,
    },
    data() {
      return {
        codeSample: `
const titleEl = document.querySelector('#title')
const titleChildren = titleEl?.querySelectorAll('span')
if (!titleChildren || !titleChildren.length) return
Array.from(titleChildren).map((el, idx) => {
  el.style.fontWeight = '200'
  cycleFontWeight(el, idx)
})

function cycleFontWeight(el: HTMLElement, idx: number): void {
  if (!el) return 
  const tick = 5
  setTimeout(
    () => {
      let cycle = 0
      setInterval(() => {
        const currentWeight = parseInt(el.style.fontWeight)
        if (cycle % 2 !== 0) {
          if (currentWeight === 200 + tick) {
            cycle ++
          }
          el.style.fontWeight = (currentWeight - tick).toString()
        } else {
          if (currentWeight === 900 - tick) {
            cycle ++
          } 
          el.style.fontWeight = (currentWeight + tick).toString()
        }
      }, tick * 2)
    }, 
    (idx + 1) * 150)
}
  `
      }
    }
  })
</script>
