<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  setup() {},
})
</script>

<style lang="scss">
@import '~@/scss/fonts', '~@/scss/normalize', '~@/scss/variables';

html,
body,
#app {
  width: 100%;
  height: auto;
  min-height: 100vh;
}

html,
body,
#app,
section,
header,
footer,
strong,
aside,
main,
span,
nav,
div,
h1,
h2,
h3,
h4,
h5,
h6,
em,
ul,
ol,
li,
p,
a {
  scrollbar-width: auto;
  scrollbar-color: $color-blue-gray-200 $color-blue-gray-50;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    background: $color-gray-200;
  }

  &::-webkit-scrollbar-track {
    background: $color-blue-gray-50;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
}

#app {
  font-family: $font-sans;
  text-rendering: optimizeLegibility;
  color: $color-gray-800;

  ::selection {
    color: $color-gray-50;
    background-color: $color-indigo-A200;
  }
}
</style>
