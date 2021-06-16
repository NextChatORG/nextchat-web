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
  color: $color-gray-800;

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
