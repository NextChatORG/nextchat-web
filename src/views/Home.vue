<template>
  <layout-default title="Home">
    <h1>Hola Mundo</h1>
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
