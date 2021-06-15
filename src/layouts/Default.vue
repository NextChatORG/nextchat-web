<template>
  <Head>
    <title>{{ globalTitle }}</title>
    <meta name="description" :content="hDescription" />

    <meta property="og:locale" content="en" />
    <meta property="og:type" :content="hType" />
    <meta property="og:title" :content="globalTitle" />
    <meta property="og:site_name" :content="hSitename" />
    <meta property="og:description" :content="hDescription" />
    <meta v-if="hImage" property="og:image" :content="hImage" />

    <meta name="twitter:site" content="@NextChatORG" />
    <meta name="twitter:creator" content="@daschdev" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
  <default-header />
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Head } from '@vueuse/head'
import DefaultHeader from '@/components/DefaultHeader.vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: { Head, DefaultHeader },
  props: {
    hTitle: String,
    hTitleTemplate: {
      type: String,
      default: '{hTitle} - {hSitename}',
    },
    hDescription: {
      type: String,
      default:
        'Connect with people around the world in real time in a private and secure way',
    },
    hUrl: {
      type: String,
      default: location.origin + location.pathname,
    },
    hSitename: {
      type: String,
      default: 'NextChat',
    },
    hImage: String,
    hType: {
      type: String,
      default: 'website',
    },
  },
  setup(props) {
    let globalTitle = props.hTitleTemplate

    for (const prop in props) {
      globalTitle = globalTitle.replaceAll(`{${prop}}`, (props as any)[prop])
    }

    return {
      globalTitle,
    }
  },
})
</script>
