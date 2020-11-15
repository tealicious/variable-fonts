<template>
  <pre>
 {{codeSample}}
 </pre>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
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
  setTimeout(
    () => {
      let cycle = 0
      setInterval(() => {
        const currentWeight = parseInt(el.style.fontWeight)
        if (cycle % 2 !== 0) {
          if (currentWeight <= 201) {
            cycle ++
          }
          el.style.fontWeight = (currentWeight - 1).toString()
        } else {
          if (currentWeight >= 899) {
            cycle ++
          } 
          el.style.fontWeight = (currentWeight + 1).toString()
        }
      }, 1)
    }, 
    (idx + 1 ) * 300)
}
  `
      }
    }
  })
</script>
