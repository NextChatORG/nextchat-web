<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import './assets/styles/normalize', './assets/styles/fonts';

body > #app {
  font-family: 'Inter';
  text-rendering: optimizeLegibility;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @supports (font-variation-settings: normal) {
    & {
      font-family: 'Inter var', sans-serif;
    }
  }
}
</style>