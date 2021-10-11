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
  <header class="header">
    <div class="header__mask">
      <router-link to="/">
        <img src="/icons/96x96.png" alt="NextChat Icon" />
      </router-link>
    </div>
    <div class="header__navigation">
      <nav>
        <ul>
          <li>
            <router-link to="/#features">Features</router-link>
          </li>
          <li>
            <router-link to="/#download">Download</router-link>
          </li>
          <li>
            <router-link to="/#pricing">Pricing</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__session-buttons">
      <router-link to="/login" class="session-buttons__login"
        >Login</router-link
      >
      <router-link to="/register" class="session-buttons__register"
        >Register</router-link
      >
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/styles/breakpoint', '@/assets/styles/variables';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  position: sticky;
  z-index: 90;
  user-select: none;
  padding: 0.4rem 0.8rem;
  background-color: rgba($color: #fff, $alpha: 0.7);
  backdrop-filter: blur(10px) saturate(180%);

  @include breakpoint(md) {
    padding: 0.6rem 1rem;
  }

  &__mask {
    img {
      width: 48px;
      max-width: 96px;
    }
  }

  &__navigation {
    nav {
      display: none;
      @include breakpoint(md) {
        display: flex;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          padding: 0.4rem 0.8rem;

          a {
            text-decoration: none;
            color: #333;
            font-weight: 450;

            &:hover {
              color: $color-primary;
              opacity: 90%;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }

  &__session-buttons {
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
  }
}
</style>
