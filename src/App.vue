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
  <router-view></router-view>
</template>
<script lang="ts" setup></script>
<style lang="scss">
@import '@/assets/styles/normalize', '@/assets/styles/fonts';

#app {
  font-family: 'Inter', sans-serif;
  @supports (font-variation-settings: normal) {
    & {
      font-family: 'Inter var', sans-serif;
    }
  }
}
</style>
