<template>
  <header class="header">
    <div class="header__mask">
      <img src="/icons/any.svg" alt="NextChat Icon" />
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 4rem;

  .header__mask {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: 48px;
      margin-right: 0.8rem;
    }

    span {
      color: #3f51b5;
      font-size: 30px;
      font-weight: 640;
    }
  }

  .header__access a {
    text-decoration: none;
    color: #3f51b5;
    border: 1px solid #3f51b5;
    padding: 0.7rem;
    border-radius: 2rem;
    font-weight: 470;
  }
}
</style>
