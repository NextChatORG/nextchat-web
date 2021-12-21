<template>
  <landing-layout title="Iniciar Sesión">
    <div class="containner">
      <form class="form" @submit="submitHook">
        <h1>Iniciar sesión</h1>
        <div class="form__username">
          <input
            v-model="username"
            accesskey="u"
            type="text"
            placeholder="Nombre de usuario"
            title="Ingrese su nombre de usuario"
            autocapitalize="off"
            autocomplete="username"
            autocorrect="off"
            minlength="4"
            maxlength="15"
            required="true"
            spellcheck="false"
          />
        </div>
        <div class="form__password">
          <input
            v-model="password"
            accesskey="p"
            autocapitalize="off"
            autocomplete="password"
            autocorrect="off"
            :type="showPassword ? 'text' : 'password'"
            title="Ingrese su contraseña"
            placeholder="Contraseña"
            minlength="8"
            maxlength="40"
            required="true"
            spellcheck="false"
          />
          <button type="button" @click="showPassword = !showPassword">
            <fa-icon v-if="showPassword" icon="eye-slash" />
            <fa-icon v-else icon="eye" />
          </button>
        </div>
        <router-link to="/reset-password"
          >¿Olvidaste tu contraseña?</router-link
        >
        <div class="form__submit">
          <input
            type="submit"
            class="form__submit_button"
            :disabled="submitButtonDisabled"
            :value="isLoading ? 'Cargando...' : 'Ingresar'"
          />
        </div>
      </form>
      <div class="banner">
        <img src="../assets/images/signin_planet.svg" alt="Planet" />
        <span>¡Conecta con otras personas alrededor del mundo!</span>
      </div>
    </div>
  </landing-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const submitButtonDisabled = ref(false)

const submitHook = async (e: Event) => {
  e.preventDefault()

  try {
    submitButtonDisabled.value = true
    isLoading.value = true

    // send request and get response
    const res = await axios.post(
      `${import.meta.env.NC_API_URI}/auth/signin`,
      {
        username: username.value,
        password: password.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    submitButtonDisabled.value = false
    isLoading.value = false

    // save in localstorage user data
    localStorage.setItem('user', JSON.stringify(res.data))

    // redirect to the chats dashbard
    setTimeout(() => {
      router.push('/chats/dashboard')
    }, 500)
  } catch (error) {
    submitButtonDisabled.value = false
    isLoading.value = false
    console.error(error)
  }
}
</script>

<style scoped lang="scss">
.containner {
  display: flex;
  margin-top: 2rem;

  .form {
    width: 50%;
    padding: 8% 12%;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      font-weight: 500;
    }

    &__username,
    &__password {
      display: flex;
      align-items: center;
      padding: 0.6rem;
      margin: 1rem 0 0.3rem 0;
      border: 1px solid rgba($color: #000, $alpha: 0.12);
      border-radius: 0.8rem;

      input {
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
      }

      button {
        background: transparent;
        border: none;
        color: #444;
        padding: 0;
        outline: none;
      }
    }

    a {
      text-decoration: none;
      margin-bottom: 2rem;
      color: #000;
    }

    .form__submit {
      display: flex;
      justify-content: flex-end;

      &_button {
        min-width: 40%;
        padding: 0.8rem 2rem;
        color: #fff;
        background-color: #4caf50;
        border: none;
        border-radius: 2rem;
        text-transform: uppercase;

        &:disabled {
          background-color: rgba($color: #4caf50, $alpha: 0.25);
          transition: background-color 0.3s ease-in-out;
        }
      }
    }
  }

  .banner {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }

    span {
      text-align: center;
      margin-top: 2rem;
      font-size: 1.2rem;
      font-weight: 360;
      color: rgba($color: #000, $alpha: 0.35);
    }
  }
}
</style>
