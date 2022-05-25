<template>
  <div class="cart-default">
    <div class="cart-default-image">
      <img
        src="@/assets/images/icons/cart-default.svg"
        alt="Cart is empty"
        class="cart-default-image__img"
      >
    </div>
    <p class="cart-default__title">
      Ваша корзина пуста
    </p>
    <nuxt-link to="/" class="cart-default__link btn">
      Перейти к покупкам
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'CartProductEmpty'
}
</script>
<style lang="scss" scoped>
.cart {
  &-default {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    &__title {
      margin: 20px 0 40px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }
}
</style>
