<template>
  <header class="header">
    <div class="header__mask">
      <!-- FIXME: This image import is wrong. At the time of creating this comment the production build with vite fails, try the traditional way with a future version of vite -->
      <img src="../../public/icons/any.svg" alt="NextChat Icon" />
      <span>NextChat</span>
    </div>
    <div class="header__access">
      <router-link v-if="$route.path !== '/signin'" to="/signin"
        >Iniciar Sesión</router-link
      >
      <router-link v-if="$route.path !== '/signup'" to="/signup"
        >Registrarse</router-link
      >
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '~@/styles/variables';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 4rem;
  user-select: none;

  .header__mask {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 48px;
      margin-right: 0.8rem;
    }

    span {
      color: $color-primary;
      font-size: 30px;
      font-weight: 640;
    }
  }

  .header__access a {
    text-decoration: none;
    color: $color-primary;
    border: 1px solid $color-primary;
    padding: 0.7rem;
    border-radius: 2rem;
    font-weight: 470;
  }
}
</style>
