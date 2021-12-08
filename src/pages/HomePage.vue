<template>
  <div class="container">
    <div class="logo">
      <h2 class="text">NextChat</h2>
      <a href="/login" class="login">Iniciar sesión</a>
      <a href="/signup" class="signup">Regístrate</a>
      <a href="/path" class="playstore">Disponible en Google Play</a>
    </div>
    <h1 class="title">¡Conecta con otras personas alrededor del mundo!</h1>
  </div>
</template>

<style lang="scss">
@import url(@/assets/styles/_normalize.scss);
@import url(@/assets/styles/_fonts.scss);

template {
  padding: 0;
  scroll-behavior: smooth;
}

.container {
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 0;
  background: url(@/assets/svg/waves.svg) no-repeat;
  background-size: cover;
  background-color: #f2f2f2;
}

.title {
  color: #ffffff;
  text-align: center;
  position: absolute;
  width: 542px;
  height: 84px;
  left: 30%;
  top: 20%;
}

.logo {
  display: block;
  width: 85px;
  height: 82px;
  left: 35%;
  right: 45%;
  background: url(@/assets/svg/nextchat.svg) no-repeat;
  background-size: 85px 82px;
  margin-bottom: 10%;
}

.text {
  color: #ffffff;
  text-align: left;
  position: absolute;
  width: 542px;
  height: 84px;
  left: 7%;
  top: 2%;
}

.login {
  color: #ffffff;
  text-align: right;
  position: absolute;
  width: 542px;
  height: 84px;
  right: 15%;
  top: 6%;
  text-decoration: none;
}

.signup {
  color: #ffffff;
  padding-top: 0.98%;
  text-align: center;
  position: absolute;
  width: 9%;
  height: 8%;
  right: 2%;
  top: 4%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  text-decoration: none;
}

.playstore {
  color: #ffffff;
  text-align: center;
  position: absolute;
  width: 15%;
  padding-top: 1.5%;
  height: 10%;
  left: 42%;
  top: 42%;
  background: #000000;
  border-radius: 24px;
  text-decoration: none;
}
</style>
