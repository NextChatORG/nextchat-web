<template>
  <layout-default h-title="Home">
    <div id="about">
      <h1>NextChat</h1>
      <h2>
        Connect with people around the world in real time in a private and
        secure way
      </h2>
    </div>
  </layout-default>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutDefault from '@/layouts/Default.vue'

export default defineComponent({
  name: 'Home',
  components: { LayoutDefault },
  setup() {},
})
</script>

<style lang="scss" scoped>
@import '~@/scss/colors', '~@/scss/breakpoints';

#about {
  text-align: center;
  h1 {
    margin-bottom: 0.4rem;
    font-size: 2rem;

    @include breakpoints(md) {
      font-size: 3rem;
    }

    @include breakpoints(lg) {
      font-size: 3.6rem;
    }
  }

  h2 {
    color: $color-gray-500;
    font-weight: 300;
    margin: 0;
  }
}
</style>
