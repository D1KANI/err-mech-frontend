<template>
  <section class="signin login__styles">
    <div class="container">
      <div class="signin__box login__box">
        <div
          class="image"
          :style="`background: url(${require('@/assets/images/login/login-image.png')}) no-repeat 30% center / cover`"
        />
        <form class="form" @submit.prevent="submitForm">
          <div class="form-wrapper">
            <p class="login__title">
              Регистрация
            </p>
            <p class="login__subtitle">
              Уже есть аккаунт?
              <nuxt-link :to="{name: 'login'}" class="link">
                Войти
              </nuxt-link>
            </p>
            <AppInput
              v-for="(input, index) in userData.inputs"
              :key="index"
              v-model="input.value"
              :input-type="input.inputType"
              :label="input.label"
              :is-required="input.isRequired"
              :is-error="input.isError"
            />
            <label for="terms" class="login-checkbox">
              <input
                id="terms"
                v-model="userData.terms"
                name="license"
                type="checkbox"
              >
              <div class="checkbox" :class="checkboxClass" />
              <p class="checkbox__label">
                Я принимаю условия
                <nuxt-link to="#" class="link">
                  пользовательского соглашения
                </nuxt-link>
              </p>
            </label>
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
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SignInPage',
  layout: 'empty',
  data () {
    return {
      userData: {
        inputs: {
          login: {
            value: '',
            isRequired: true,
            isError: false,
            label: 'Введите логин'
          },
          email: {
            value: '',
            isRequired: true,
            label: 'E-Mail',
            inputType: 'email',
            isError: false
          },
          pass: {
            value: '',
            isRequired: true,
            label: 'Пароль',
            inputType: 'password',
            isError: false
          },
          pass2: {
            value: '',
            isRequired: true,
            label: 'Подтверждение пароля',
            inputType: 'password',
            isError: false
          }
        },
        terms: true
      },
      errors: []
    }
  },
  computed: {
    checkboxClass () {
      return this.userData.terms ? 'active' : ''
    }
  },
  methods: {
    submitForm () {
      this.errors = []
      if (!this.userData.terms) {
        this.errors.push('Необходимо принять условия пользовательского соглашения')
        return
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
