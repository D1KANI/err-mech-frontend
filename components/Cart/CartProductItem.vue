<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <img :src="item.product.image" alt="" class="cart-item-image__img">
    </div>
    <div class="cart-item__inner">
      <p class="cart-item__category">
        {{ item.product.category }}
      </p>
      <p class="cart-item__name">
        {{ item.product.company }} {{ item.product.name }}
      </p>
      <div class="cart-item-count">
        <div class="count">
          <div class="count-minus count__btn" @click="decrement(item)">
            -
          </div>
          <input
            type="text"
            class="count-value"
            :value="item.quantity"
            readonly
          >
          <div class="count-plus count__btn" @click="increment(item)">
            +
          </div>
        </div>
      </div>
      <div class="cart-item-price">
        <div class="cart-item-price__head">
          Цена:
        </div>
        <div class="cart-item-price__content">
          <span>{{ priceAsString }}</span> ₽
        </div>
      </div>
    </div>
    <div class="cart-item__delete" @click="removeFromCart(item)">
      Удалить
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CartProductItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    priceAsString () {
      return this.item.product.price.toLocaleString('ru')
    }
  },
  methods: {
    ...mapMutations({
      increment: 'cart/incrementQuantity',
      decrement: 'cart/decrementQuantity',
      removeFromCart: 'cart/removeFromCart'
    })
  }
}
</script>
<style lang="scss" scoped>
.cart {
  &-item {
    padding: 40px;
    border: 1px solid #E8E9EB;
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    &-image {
      width: 310px;
      height: 200px;
      border-radius: 4px;
      overflow: hidden;
      &__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &__inner {
      flex-grow: 1;
      margin: 0 30px;
    }
    &__category {
      color: $orange;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
      line-height: 19px;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }
    &__name {
      font-weight: 600;
      font-size: 26px;
      line-height: 31px;
    }
    &-count {
      margin-top: 30px;
      .count {
        display: flex;
        height: 40px;
        &__btn {
          height: 100%;
          width: 40px;
          background: #F9FBFF;
          border: 1px solid #E9EEF8;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          cursor: pointer;
          user-select: none;
        }
        &-minus {
          border-radius: 5px 0 0 5px;
        }
        &-plus {
          border-radius: 0 5px 5px 0;
        }
        &-value {
          height: 100%;
          width: 40px;
          border: 1px solid $border;
          text-align: center;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
    &-price {
      display: flex;
      align-items: center;
      margin-top: 30px;
      &__head {
        margin-right: 15px;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
      }
      &__content {
        display: block;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
      }
    }
    &__delete {
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $lightGrey;
      cursor: pointer;
      position: absolute;
      top: 40px;
      right: 40px;
    }
  }
}

@media screen and (max-width: 870px) {
  .cart {
    &-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 60px 30px 30px;
      &__inner {
        margin: 0;
      }
      &-image {
        width: 100%;
        height: 200px;
        &__img {
          display: block;
        }
      }
      &__category {
        margin: 20px 0 10px;
      }
      &-count {
        margin-top: 30px;
        .count {
          justify-content: center;
        }
      }
      &-price {
        justify-content: center;
      }
      &__delete {
        top: 20px;
        right: 20px;
      }
    }
  }
}

@media screen and (max-width: 410px) {
  .cart {
    &-item {
      &-image {
        width: 100%;
      }
    }
  }
}
</style>
