<template>
  <section class="payment">
    <div class="container">
      <h1>Оплата заказа</h1>
      <form class="payment__inner" @submit.prevent="">
        <div class="card">
          <div class="card__price">
            <span>12 300</span> ₽
          </div>
          <AppInput
            v-for="(input, index) in card"
            :key="index"
            v-model="input.value"
            :placeholder="input.placeholder"
            :is-required="input.isRequired"
            :class="input.class"
          />
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
        <button type="submit" class="btn payment__btn" :class="btnClass">
          Оплатить
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PaymentPage',
  layout: 'empty',
  data () {
    return {
      card: {
        number: {
          value: '',
          placeholder: 'Номер карты',
          isRequired: true,
          class: 'number'
        },
        date: {
          value: '',
          placeholder: 'MM/YY',
          isRequired: true,
          class: 'small'
        },
        cvc: {
          value: '',
          placeholder: 'CVC',
          isRequired: true,
          class: 'small'
        }
      },
      errors: []
    }
  },
  computed: {
    btnClass () {
      if (
        this.card.number.value.length === 0 ||
        this.card.date.value.length === 0 ||
        this.card.cvc.value.length === 0
      ) {
        return ['_disabled', '_no-anim']
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.payment {
  padding-top: 40px;
  h1 {
    margin-bottom: 50px;
  }
  &__inner {
    width: 400px;
    margin: 0 auto;
    max-width: 100%;
  }
  &__btn {
    width: 100%;
    margin-top: 24px;
    text-align: center;
  }
}

.card {
  padding: 32px;
  border: 1px solid #E7E7E7;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  &__price {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .input-wrapper {
    width: 100%;
    &.number {
      margin-bottom: 12px;
    }
    &.small {
      width: calc(50% - 4px);
    }
  }
}
</style>
