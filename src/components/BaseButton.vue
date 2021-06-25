<template>
  <button
    v-if="level.endsWith('-link') && href"
    :class="level"
    @click="
      href.startsWith('/') ? router.push(href) : window.open(href, '_blank')
    "
  >
    <slot />
  </button>
  <button v-else :class="level" @click="router.push(href)">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BaseButton',
  props: {
    level: {
      type: String,
      default: 'primary-link',
      validator: (value) => {
        return [
          'primary',
          'primary-link',
          'secondary',
          'secondary-link',
          'icon',
          'icon-link',
        ].includes(value as string)
      },
    },
    href: {
      type: String,
      default: location.pathname + location.search,
    },
  },
  setup() {
    const router = useRouter()

    return {
      router,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/scss/variables', '~@/scss/mixins';

button {
  cursor: pointer;
  font-weight: 500;
  padding: 0.6rem 0.8rem;
  @include breakpoints-value(
    padding,
    0.6rem 0.8rem,
    $md: 0.7rem 1rem,
    $lg: 0.8rem 1.2rem
  );
}

.primary,
.primary-link {
  border: none;
  background-color: $color-indigo-500;
  color: $color-gray-50;
  border-radius: 0.4rem;

  &:hover {
    background-color: $color-indigo-400;
    animation: all 0.3s ease-in-out;
  }
}

.secondary,
.secondary-link {
  border: none;
  background-color: $color-indigo-50;
  color: $color-indigo-500;
  border-radius: 0.4rem;

  &:hover {
    color: $color-indigo-400;
    animation: all 0.3s ease-in-out;
  }
}
</style>
