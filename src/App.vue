<template>
  <div
    id="app"
    class="_ptm">
    <div
      container>
      <div >
        <h1
          id="title"
          class="_text-center _mbm">
          <span
            v-for="(char, idx) in titleAsArray"
            :key="idx">{{ char }}</span>
        </h1>
        <p>This is a quick and dirty exploration of dynamic variable font styles, it will get out of sync over time, but the principal is the same as from the <a
          href="http://charlielemaignan.com/"
          target="_blank">example</a>. One key difference is that he's done his with a pure CSS solution while I'm leveraging Javascript. This might be for the best as it will resemble more closely the types of techniques you'll have to employ to do with a programming language-based solution.</p>
        <a
          href="https://fonts.google.com/?vfonly=true"
          target="_blank"
          class="_mts">
          Free Variable Fonts from Google Fonts
        </a>
        <br >
        <a
          href="https://web.dev/variable-fonts/"
          target="_blank"
          class="_mts _mbm">
          Introduction to variable fonts on the web
        </a>
      </div>
      <app-code />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

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
            el.style.fontWeight = `${currentWeight - 1}`
          } else {
            if (currentWeight >= 899) {
              cycle ++
            } 
            el.style.fontWeight = `${currentWeight + 1}`
          }
        }, 1)
      }, 
      (idx + 1 ) * 300)
  }

  const title = 'Variable Fonts'

  import  AppCode  from './components/CodeSample.vue'
  export default Vue.extend({
    name: 'variable-fonts',
    components: { AppCode },
    data() {
      return {
        title: title,
        titleAsArray: title.split(''),
      }
    },
    mounted() {
      this.titleAsArray = this.title.split('')
      const titleEl = this.$el.querySelector('#title')
      const titleChildren = titleEl?.querySelectorAll('span')
      if (!titleChildren || !titleChildren.length) return
      Array.from(titleChildren).map((el, idx) => {
        el.style.fontWeight = '200'
        cycleFontWeight(el, idx)
      })
    }
  })
</script>
<style>
body,
body * {
  font-family: "Raleway", sans-serif !important;
  font-weight:400;
}
a._mts {
  display:inline-block;
}
a:hover {
  text-decoration: underline;
}
</style>
