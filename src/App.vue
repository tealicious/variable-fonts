<template>
  <div
    id="app"
    class="_ptm">
    <div container>
      <div>
        <h1
          id="title"
          class="_text-center _mbs">
          <span
            v-for="(char, idx) in titleAsArray"
            :key="idx">{{ char }}</span>
        </h1>
        <div class="main">
          <p>
            This is a quick and dirty exploration of dynamic variable font styles, using similar principal as the
            <a
              href="http://charlielemaignan.com/"
              target="_blank"
            >example</a> you shared. One key difference is that he's done his with a pure CSS solution while I'm leveraging Javascript. This might be for the best as it will resemble more closely the types of techniques you'll have to employ with another programming language.
          </p>
          <a
            href="https://fonts.google.com/?vfonly=true"
            target="_blank"
            class="_mts"
          >Free Variable Fonts from Google Fonts</a>
          <br />
          <a
            href="https://web.dev/variable-fonts/"
            target="_blank"
            class="_mts"
          >Introduction to variable fonts on the web</a>
        </div>
        <br />
      </div>
      <app-code />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  function cycleFontWeight(el: HTMLElement, idx: number): void {
    if (!el) return
    const tick = 5
    setTimeout(() => {
      let cycle = 0
      setInterval(() => {
        const currentWeight = parseInt(el.style.fontWeight)
        if (cycle % 2 !== 0) {
          if (currentWeight === 100 + tick) {
            cycle++
          }
          el.style.fontWeight = (currentWeight - tick).toString()
        } else {
          if (currentWeight === 900 - tick) {
            cycle++
          }
          el.style.fontWeight = (currentWeight + tick).toString()
        }
      }, tick * 2)
    }, (idx + 1) * 150)
  }

  const title = 'Variable Fonts'

  import AppCode from './components/CodeSample.vue'
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
        el.style.fontWeight = '100'
        cycleFontWeight(el, idx)
      })
    },
  })
</script>
<style lang="scss">
[container] {
  max-width: 1000px;
}
body {
 padding-bottom: 5rem;
}
.main {
  font-family: "Roboto Mono", monospace !important;
  font-weight: 400;
}
h1 {
  font-family: "Roboto Slab", serif !important;
  font-weight: 100;
  font-size: 40px;
  @media (min-width: 900px) {
    font-size: 90px;
  }
}
a._mts {
  display: inline-block;
}
a:hover {
  text-decoration: underline;
}
pre[class*="language-"] {
  padding: .5em 1.75em;
}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
  background: none;
}
</style>
