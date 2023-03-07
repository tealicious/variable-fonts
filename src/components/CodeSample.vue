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
