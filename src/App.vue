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
@import '~@/scss/fonts', '~@/scss/normalize';

#app {
  font-family: 'Inter', sans-serif;

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
