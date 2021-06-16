<template>
  <header class="header">
    <div class="header__context-menu"></div>
    <div class="header__navigation">
      <ul>
        <li>
          <router-link to="/" :title="t('header.home.title')">{{
            t('header.home.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/#download" :title="t('header.download.title')">{{
            t('header.download.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/" :title="t('header.services.title')">{{
            t('header.services.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/#about">
            <img src="/icons/48x48.png" alt="NextChat Icon" />
          </router-link>
        </li>
        <li>
          <router-link to="/" :title="t('header.stats.title')">{{
            t('header.stats.text')
          }}</router-link>
        </li>
        <li>
          <router-link to="/"
            ><router-link to="/" :title="t('header.contributors.title')">{{
              t('header.contributors.text')
            }}</router-link></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><router-link to="/" :title="t('header.blog.title')">{{
              t('header.blog.text')
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
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'DefaultHeader',
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
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
