<template>
  <Head>
    <title>{{ props.title }} - {{ props.siteName }}</title>
    <meta name="description" :content="props.description" />
    <meta
      property="og:title"
      name="twitter:title"
      :content="`${props.title} - ${props.siteName}`"
    />
    <meta
      property="og:description"
      name="twitter:description"
      :content="props.description"
    />
    <meta property="og:type" :content="props.siteType" />
    <meta property="og:site_name" :content="props.siteName" />
    <meta
      v-if="props.imageUri"
      property="og:image"
      name="twitter:image"
      :content="props.imageUri"
    />
    <meta
      v-if="props.imageType"
      property="og:image:type"
      :content="props.imageType"
    />
    <meta
      v-if="props.imageAlt"
      property="og:image:alt"
      name="twitter:image:alt"
      :content="props.imageAlt"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@NextChatORG" />
    <meta name="twitter:creator" content="@NextChatORG" />
  </Head>
  <default-header></default-header>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import DefaultHeader from '@/components/DefaultHeader.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Messages social network',
  },
  siteName: {
    type: String,
    default: 'NextChat',
  },
  siteType: {
    type: String,
    default: 'website',
  },
  imageUri: {
    type: String,
    default: undefined,
  },
  imageType: {
    type: String,
    default: undefined,
  },
  imageAlt: {
    type: String,
    default: undefined,
  },
})
</script>