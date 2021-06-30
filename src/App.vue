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
@import '~@/scss/fonts', '~@/scss/normalize', '~@/scss/variables';

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: $font-sans;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

*::selection {
  background-color: rgba($color: $color-primary, $alpha: 0.7);
  color: #fff;
}
</style>
