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
              Забыли пароль? Поможем
            </p>
            <p class="login__subtitle">
              Нет аккаунта?
              <nuxt-link :to="{name: 'signin'}" class="link">
                Зарегистрироваться
              </nuxt-link>
            </p>
            <AppInput
              v-model="userData.email.value"
              :input-type="userData.email.inputType"
              :label="userData.email.label"
              :is-error="userData.email.isError"
              :is-required="userData.email.isRequired"
            />
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
            Отправить письмо
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ForgotPage',
  layout: 'empty',
  data () {
    return {
      userData: {
        email: {
          value: '',
          isRequired: true,
          label: 'E-Mail',
          inputType: 'email',
          isError: false
        }
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
