<template>
  <Head>
    <title>{{ globalTitle }}</title>
    <meta name="description" :content="globalDescription" />
    <meta
      name="robots"
      :content="`${index === false ? 'index' : 'noindex'}, ${
        follow === false ? 'follow' : 'nofollow'
      }`"
    />
    <link rel="canonical" :content="canonicalUrl || globalUrl" />

    <meta property="og:site_name" content="NextChat" />
    <meta property="og:title" :content="ogTitle || globalTitle" />
    <meta property="og:type" :content="ogType || 'website'" />
    <meta
      property="og:description"
      :content="ogDescription || globalDescription"
    />
    <meta property="og:url" :content="ogUrl || globalUrl" />
    <meta v-if="ogImage" property="og:image" :content="ogImage" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@NextChatORG" />
    <meta name="twitter:creator" content="@daschdev" />
  </Head>
  <the-header></the-header>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Head } from '@vueuse/head'
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: { Head, TheHeader },
  props: {
    title: String,
    follow: Boolean,
    index: Boolean,
    defaultTitle: Boolean,
    description: String,
    ogTitle: String,
    ogType: String,
    ogUrl: String,
    ogImage: String,
    ogDescription: String,
    canonicalUrl: String,
  },
  setup(props) {
    const globalTitle =
      props.defaultTitle !== true ? `${props.title} - NextChat` : props.title
    const globalDescription = props.description || 'No Description'
    const globalUrl = location.origin + location.pathname

    if (process.env.NODE_ENV !== 'development') {
      globalUrl.replace('http://', 'https://')
    }

    return {
      globalTitle,
      globalDescription,
      globalUrl,
    }
  },
})
</script>
