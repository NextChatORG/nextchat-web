<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import '~@/styles/normalize', '~@/styles/fonts', '~@/styles/variables';

body > #app {
  font-family: 'Inter';
  text-rendering: optimizeLegibility;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  accent-color: $color-primary;

  @supports (font-variation-settings: normal) {
    & {
      font-family: 'Inter var', sans-serif;
    }
  }
}

::selection {
  color: #f9f9f9;
  background-color: rgba($color: $color-primary, $alpha: 0.8);
}
</style>
