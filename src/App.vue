<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
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

#app {
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
  color: $color-gray-900;

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
