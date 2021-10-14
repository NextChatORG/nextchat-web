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
  <layout-default name="Register" h-title="Register">
    <div class="main-box-form">
      <h1>Hi, Welcome to NextChat!</h1>
      <h3>Message Social Network, feel at Home.</h3>
      <form>
        <div class="box-input">
          <label for="username"> Username </label>
          <input v-model="username" type="text" placeholder="TeoDev1611" />
        </div>
        <div class="box-input">
          <label for="username"> Password </label>
          <input v-model="password" type="password" />
        </div>
        <div class="box-input">
          <label for="username"> Repeat Password </label>
          <input v-model="password_again" type="password" />
        </div>
        <button type="submit" class="session-buttons__register">
          Register me!
        </button>
        <router-link to="/login" class="session-buttons__login">
          I have a account
        </router-link>
      </form>
    </div>
  </layout-default>
</template>

<script lang="ts" setup>
let username = ''
let password = ''
let password_again = ''
</script>

<style lang="scss">
@import '@/assets/styles/breakpoint', '@/assets/styles/variables';

.main-box-form {
  width: 100%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box-input {
  margin-bottom: 3rem auto;
}

.session-buttons__login {
  background: transparent;
  border: 2px solid $color-primary;
  border-radius: 0.37rem;
  padding: 0.4rem 0.8rem;
  margin-left: 1rem;
  color: $color-primary;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    opacity: 80%;
    transition: opacity 0.3s ease-in-out;
  }
}

.session-buttons__register {
  @extend .session-buttons__login;
  background: $color-primary;
  color: #f9f9f9;
}
</style>
