<template>
  <section class="cart">
    <div class="container">
      <h1>Корзина</h1>
      <div class="cart-wrapper">
        <div class="cart__flex">
          <CartProductList :cart="cart" />
          <div class="cart-result">
            <div class="cart-result__box">
              <div class="cart-result-head">
                <p class="cart-result-head__title">
                  Итого:
                </p>
                <p class="cart-result-head__body">
                  <span>{{ totalPrice }}</span> ₽
                </p>
              </div>
              <form v-if="cart.length > 0" class="cart-result-promocode cart-promocode">
                <p class="cart-promocode__label">
                  Подарочный сертификат
                </p>
                <input
                  v-model="promocode"
                  type="text"
                  class="cart-promocode__input input"
                  placeholder="Код сертификата"
                  required
                >
                <button
                  type="submit"
                  class="btn cart-promocode__btn"
                >
                  Проверить промокод
                </button>
              </form>
              <div
                class="btn cart-result__btn _no-anim"
                :class="{'_disabled' : cart.length === 0}"
                :disabled="cart.length === 0"
              >
                Перейти к оформлению
              </div>
            </div>
          </div>
        </div>
        <form v-if="cart.length > 0" class="_mobile cart-promocode">
          <p class="cart-promocode__label">
            Подарочный сертификат
          </p>
          <input
            v-model="promocode"
            type="text"
            class="cart-promocode__input input"
            placeholder="Код сертификата"
            required
          >
          <button type="submit" class="btn cart-promocode__btn">
            Проверить промокод
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  data () {
    return {
      promocode: ''
    }
  },
  head () {
    return {
      title: 'ERR-MECH | Корзина'
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart'
    }),
    totalPrice () {
      const total = this.cart.reduce((sum, item) => {
        sum += item.quantity * item.product.price
        return sum
      }, 0)
      return total.toLocaleString('ru')
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding-top: 50px;
  padding-bottom: 70px;
  h1 {
    text-align: left;
  }
  &__flex {
    display: flex;
    margin-top: 50px;
  }
  &-result {
    width: 510px;
    height: max-content;
    padding: 40px;
    background: #F9FBFF;
    border: 1px solid $border;
    border-radius: 5px;
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
      }
      &__body {
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
      }
    }
    &-promocode {
      margin-bottom: 20px;
    }
    &__btn {
      width: 100%;
      text-align: center;
    }
  }
}

.cart-promocode {
  &._mobile {
    display: none;
    width: 510px;
    padding: 40px;
    background: #F9FBFF;
    border: 1px solid $border;
    border-radius: 5px;
  }
  &__label {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
  &__input {
    margin: 15px 0 20px;
  }
  &__btn {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 1440px) {
  .cart {
    &-result {
      position: fixed;
      z-index: 4;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 30px 15px 20px;
      background: #FFFFFF;
      box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 10px 10px 0px 0px;
      &-head {
        margin-bottom: 10px;
      }
      .cart-promocode {
        display: none;
      }
    }
  }
  .cart-promocode {
    &._mobile {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 410px) {
  .cart {
    padding-top: 30px;
    &__flex {
      margin-top: 30px;
    }
    &-promocode {
      &._mobile {
        padding: 30px;
      }
    }
  }
}
</style>
