<template>
  <Head>
    <title>{{ `${props.hTitle} - ${props.hSiteName || 'NextChat'}` }}</title>
    <meta
      name="description"
      :content="props.hDescription || 'Messages social network'"
    />
    <meta property="og:locale" :content="props.hLocale || 'en'" />
    <meta property="og:type" :content="props.hSiteType || 'website'" />
    <meta
      property="og:title"
      :content="`${props.hTitle} - ${props.hSiteName || 'NextChat'}`"
    />
    <meta
      property="og:description"
      :content="props.hDescription || 'Messages social network'"
    />
    <meta property="og:url" :content="props.hUrl || locationHref" />
    <meta v-if="props.hImage" property="og:image" :content="props.hImage" />
    <meta property="og:site_name" :content="props.hSiteName || 'NextChat'" />
    <meta name="twitter:site" content="@NextChatORG" />
    <meta name="twitter:creator" content="@NextChatORG" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta v-if="props.hImage" name="twitter:image" :content="props.hImage" />
    <link ref="canonical" :href="props.hUrl || locationHref" />
  </Head>
  <Header />
  <main :class="'view-' + props.name">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Header from '@/components/Header.vue'

const props = defineProps<{
  name: string
  hTitle: string
  hDescription?: string
  hLocale?: string
  hUrl?: string
  hSiteType?: 'website' | 'article'
  hSiteName?: string
  hImage?: string
}>()

const locationHref = location.href
</script>
