<!--
  NextChat - Messages social network
  Copyright (C) 2021  NextChat Org & NextChat Contributors
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta name="theme-color" content="#424EB4" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Link rel="shortcut icon" href="/favicon.ico" />
    <Link rel="manifest" href="/manifest.webmanifest" />
    <Link rel="apple-touch-icon" sizes="57x57" href="/icons/57x57.png" />
    <Link rel="apple-touch-icon" sizes="60x60" href="/icons/60x60.png" />
    <Link rel="apple-touch-icon" sizes="72x72" href="/icons/72x72.png" />
    <Link rel="apple-touch-icon" sizes="76x76" href="/icons/76x76.png" />
    <Link rel="apple-touch-icon" sizes="114x114" href="/icons/114x114.png" />
    <Link rel="apple-touch-icon" sizes="120x120" href="/icons/120x120.png" />
    <Link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png" />
    <Title>NextChat</Title>
  </Head>
  <Body>
    <router-view></router-view>
  </Body>
</template>

<style lang="scss">
@import '~/assets/styles/normalize', '~/assets/styles/fonts',
  '~/assets/styles/variables';

body > #__nuxt {
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
  background-color: #f9f9f9;
  height: 100%;
  min-height: 100vh;

  @supports (font-variation-settings: normal) {
    & {
      font-family: 'Inter var', sans-serif;
    }
  }
}

::selection {
  color: #f9f9f9;
  background-color: rgba($color: $color-primary, $alpha: 0.85);
}
</style>
