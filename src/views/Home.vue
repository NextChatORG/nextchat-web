<template>
  <layout-default h-title="Home">
    <div id="about">
      <h1>NextChat</h1>
      <h2>
        Connect with people around the world in real time in a private and
        secure way
      </h2>
    </div>
    <div id="download">
      <base-button href="/asd"
        ><font-awesome-icon :icon="['fab', 'apple']" level="secondary-link" />
        Download iOS App</base-button
      >
      <base-button href="/asd"
        ><font-awesome-icon :icon="['fab', 'android']" /> Download Android
        App</base-button
      >
    </div>
    <select v-model="$i18n.locale">
      <option
        v-for="locale of $i18n.availableLocales"
        :key="locale"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </layout-default>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutDefault from '@/layouts/Default.vue'
import BaseButton from '@/components/BaseButton.vue'

export default defineComponent({
  name: 'Home',
  components: { LayoutDefault, BaseButton },
  setup() {},
})
</script>

<style lang="scss" scoped>
@import '~@/scss/colors', '~@/scss/breakpoints';

#about {
  padding: 1rem 2%;
  width: 100%;
  text-align: center;

  @include breakpoint(md) {
    padding: 2rem 15%;
  }

  @include breakpoint(lg) {
    padding: 4rem 20%;
  }

  h1 {
    margin: 0 0 0.4rem 0;
    font-size: 2.6rem;

    @include breakpoint(md) {
      font-size: 3rem;
    }

    @include breakpoint(lg) {
      font-size: 3.6rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
    color: $color-gray-500;

    @include breakpoint(md) {
      font-size: 1.5rem;
    }
  }
}
</style>
