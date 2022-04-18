<template>
  <section class="checkout">
    <div class="container">
      <h1>Подтверждение заказа</h1>
      <div class="checkout-box">
        <CheckoutCartBlock />
        <CheckoutUser
          :user-data="userData"
          @textarea-input="changeTextareaValue"
        />
        <div class="checkout-payment">
          <h2>Способ оплаты</h2>
          <div class="checkout-payment-buttons">
            <div class="checkout-payment-btn _active">
              При получении
            </div>
            <div class="checkout-payment-btn _disabled">
              Онлайн
            </div>
          </div>
          <div class="checkout__btn btn">
            Подтвердить заказ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CheckoutPage',
  layout: 'empty',
  data () {
    return {
      userData: {
        inputs: {
          name: {
            value: '',
            label: 'Имя',
            placeholder: 'Ваше Имя',
            isError: false
          },
          surname: {
            value: '',
            label: 'Фамилия',
            placeholder: 'Ваша Фамилия',
            isError: false
          },
          midname: {
            value: '',
            label: 'Отчество',
            placeholder: 'Ваше отчество',
            isError: false
          },
          tel: {
            value: '',
            label: 'Телефон',
            placeholder: 'Ваш Телефон',
            isError: false,
            inputType: 'tel'
          },
          zip: {
            value: '',
            label: 'Почтовый Индекс',
            placeholder: 'Ваш Индекс',
            isError: false,
            inputType: 'number'
          },
          email: {
            value: '',
            label: 'E-Mail',
            placeholder: 'Ваша Почта',
            isError: false,
            inputType: 'email'
          }
        },
        address: {
          value: '',
          placeholder: 'Ваш Адрес',
          label: 'Адрес',
          isRequired: true,
          isError: false
        }
      }
    }
  },
  methods: {
    changeTextareaValue (payload) {
      this.userData.address.value = payload
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout {
  padding: 20px 0 70px;
  h1 {
    text-align: left;
  }
  &-box {
    width: 1170px;
    max-width: 100%;
    padding: 50px;
    border: 1px solid $border;
    border-radius: 5px;
    margin-top: 50px;
  }
  &-payment {
    padding: 30px 0 0;
    &-buttons {
      margin-top: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
    }
    &-btn {
      padding: 15px 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      border-radius: 5px;
      border: 1px solid #E7E7E7;
      margin-right: 20px;
      cursor: pointer;
      &._active {
        color: $green;
        border-color: $green;
      }
      &._disabled {
        cursor: not-allowed;
        color: $grey;
      }
    }
  }
  &__textarea {
    resize: none;
  }
}

@media screen and (max-width: 540px) {
  .checkout {
    &-box {
      padding: 30px;
    }
  }
}

@media screen and (max-width: 390px) {
  .checkout {
    &-payment {
      &-buttons {
        justify-content: space-between;
      }
      &-btn {
        margin-right: 0;
      }
    }
    &__btn {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
