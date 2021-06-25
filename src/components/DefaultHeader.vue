<template>
  <header class="header">
    <div class="header__context-menu"></div>
    <div class="header__navigation">
      <ul>
        <li>
          <router-link to="/" :title="$t('header.home.title')">{{
            $t('header.home.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/#download" :title="$t('header.download.title')">{{
            $t('header.download.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/" :title="$t('header.services.title')">{{
            $t('header.services.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/#about">
            <img src="/icons/48x48.png" alt="NextChat Icon" />
          </router-link>
        </li>
        <li>
          <router-link to="/" :title="$t('header.stats.title')">{{
            $t('header.stats.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/"
            ><router-link to="/" :title="$t('header.contributors.title')">{{
              $t('header.contributors.text')
            }}</router-link></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><router-link to="/" :title="$t('header.blog.title')">{{
              $t('header.blog.text')
            }}</router-link></router-link
          >
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
@import '~@/scss/mixins', '~@/scss/variables';

.header {
  @include flex($content: space-between);
  @include breakpoints-value(
    padding,
    0.2rem 0.6rem,
    0.6rem 1rem,
    0.8rem 1.4rem
  );
  user-select: none;

  &__navigation ul {
    @include list-reset;
    @include flex;

    li {
      @include flex;
      @include breakpoints-value(
        margin,
        0 0.2rem,
        $md: 0 0.4rem,
        $lg: 0 0.8rem
      );

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
      @include breakpoints-value(width, 36px, $md: 40px, $lg: 48px);
    }
  }

  &__social-media ul {
    @include flex;
    @include list-reset;

    li {
      @include breakpoints-value(
        margin,
        0 0.2rem,
        $md: 0 0.6rem,
        $lg: 0 0.8rem
      );

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
