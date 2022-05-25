<template>
  <div class="checkout-cart">
    <h2>Список заказа:</h2>
    <div class="checkout-cart-table">
      <div class="row _head">
        <span class="col">№</span>
        <span class="col">Производитель</span>
        <span class="col">Название</span>
        <span class="col">Количество</span>
        <span class="col">Цена</span>
      </div>
      <CheckoutCartItem
        v-for="(item, index) in cart"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
    <div class="checkout-cart-result">
      <div class="checkout-cart-result__head">
        Общая сумма заказа:
      </div>
      <div class="checkout-cart-result__body">
        <span>{{ totalPrice }}</span> ₽
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CheckoutProducts',
  computed: {
    ...mapGetters({
      cart: 'cart/getCart'
    }),
    totalPrice () {
      return this.cart.reduce((sum, item) => {
        sum += item.quantity * item.product.price
        return sum
      }, 0).toLocaleString('ru')
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout {
  &-cart {
    padding-bottom: 30px;
    border-bottom: 1px solid $border;
    &-table {
      width: 820px;
      max-width: 100%;
      margin: 30px 0 10px;
      .row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &._head {
          .col {
            color: $lightGrey;
            text-transform: uppercase;
          }
        }
        .col {
          margin: 0 20px;
          margin-bottom: 20px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          &:first-child {
            width: 20px;
          }
          &:nth-child(2) {
            width: 150px;
          }
          &:nth-child(3) {
            width: 250px;
          }
          &:nth-child(4) {
            width: 100px;
          }
          &:last-child {
            width: 100px;
          }
        }
      }
    }
    &-result {
      display: flex;
      align-items: center;
      background-color: #F8F8F8;
      border-radius: 5px;
      padding: 15px 20px;
      width: max-content;
      &__head {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #585F65;
        margin-right: 10px;
      }
      &__body {
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .checkout {
    &-cart {
      &-table {
        .row {
          flex-direction: column;
          margin-bottom: 40px;
          &._head {
            display: none;
          }
        }
      }
    }
  }
}
</style>
