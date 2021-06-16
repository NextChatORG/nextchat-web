<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {},
})
</script>

<style lang="scss">
@import '~@/scss/fonts', '~@/scss/normalize', '~@/scss/colors';

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
div,
section,
header,
footer {
  scrollbar-width: auto;
  scrollbar-color: $color-indigo-300 $color-indigo-50;
}

#app {
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
  color: $color-gray-800;
  overflow: hidden auto;

  ::selection {
    color: $color-gray-50;
    background-color: rgba($color: $color-indigo-500, $alpha: 0.8);
  }

  code {
    font-family: 'JetBrains Mono', monospace;
  }
}

@supports (font-variation-settings: normal) {
  #app {
    font-family: 'Inter var', sans-serif;
  }
}
</style>
