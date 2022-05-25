<template>
  <section class="login login__styles">
    <div class="container">
      <div class="login__box">
        <div
          class="image"
          :style="`background: url(${require('@/assets/images/login/signin-image.png')}) no-repeat center center / cover`"
        />
        <form class="form" @submit.prevent="submitForm">
          <div class="form-wrapper">
            <p class="login__title">
              Вход
            </p>
            <p class="login__subtitle">
              Нет аккаунта?
              <nuxt-link :to="{name: 'signin'}" class="link">
                Зарегистрироваться
              </nuxt-link>
            </p>
            <div class="input-wrapper">
              <input
                v-model="userData.login"
                type="text"
                class="input login__input"
                placeholder="Логин"
                required
              >
            </div>
            <div class="input-wrapper">
              <input
                v-model="userData.pass"
                type="password"
                class="input login__input"
                placeholder="Пароль"
                required
              >
              <div class="forgot-pass__wrapper">
                <nuxt-link :to="{name: 'forgot'}" class="forgot-pass link">
                  Забыли пароль?
                </nuxt-link>
              </div>
            </div>
            <ul
              v-if="errors.length"
              class="errorlist"
            >
              <li
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
          </div>
          <button type="submit" class="login__btn btn">
            Войти
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  data () {
    return {
      userData: {
        login: '',
        pass: ''
      },
      errors: []
    }
  },
  methods: {
    submitForm () {
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
