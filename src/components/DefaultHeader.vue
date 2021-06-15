<template>
  <header class="header">
    <div class="header__context-menu"></div>
    <div class="header__navigation">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Download</router-link>
        </li>
        <li>
          <router-link to="/">Services</router-link>
        </li>
        <li>
          <img src="/icons/48x48.png" alt="NextChat Icon" />
        </li>
        <li>
          <router-link to="/">Stats</router-link>
        </li>
        <li>
          <router-link to="/">Contributors</router-link>
        </li>
        <li>
          <router-link to="/">Blog</router-link>
        </li>
      </ul>
    </div>
    <div class="header__social-media">
      <ul>
        <li>
          <a href="//twitter.com/NextChatORG" target="__blank"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li>
          <a href="//github.com/NextChatORG" target="__blank"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultHeader',
  setup() {},
})
</script>

<style lang="scss" scoped>
@import '~@/scss/colors', '~@/scss/breakpoints';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.6rem;
  user-select: none;

  @include breakpoints(md) {
    padding: 0.6rem 1rem;
  }

  @include breakpoints(lg) {
    padding: 0.8rem 1.4rem;
  }

  &__navigation ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: 0.8rem;

      @include breakpoints(md) {
        margin: 0 0.8rem;
      }

      @include breakpoints(lg) {
        margin: 0 1rem;
      }

      a {
        text-decoration: none;
        font-weight: 500;
        color: $color-gray-700;
        padding: 0.2rem;

        &:hover {
          color: $color-indigo-500;
          transition: 0.3s color ease-in-out;
        }
      }
    }

    li > img {
      width: 36px;

      @include breakpoints(md) {
        width: 40px;
      }

      @include breakpoints(lg) {
        width: 48px;
      }
    }
  }

  &__social-media ul {
    display: flex;

    li {
      list-style: none;
      margin: 0 0.2rem;

      @include breakpoints(md) {
        margin: 0 0.6rem;
      }

      @include breakpoints(lg) {
        margin: 0 0.8rem;
      }

      a {
        color: $color-indigo-500;

        &:hover {
          color: $color-deep-purple-500;
          transition: color 0.3s ease-in-out;
        }

        font-size: 24px;
      }
    }
  }
}
</style>
