<template>
  <div class="cart-box">
    <template v-if="cart.length > 0">
      <CartProductItem
        v-for="item in cart"
        :key="item.product.id"
        :item="item"
      />
    </template>
    <CartProductEmpty v-else />
  </div>
</template>
<script>
export default {
  name: 'CartProductList',
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  &-box {
    flex-grow: 1;
    margin-right: 40px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1440px) {
  .cart {
    &-box {
      margin-right: 0;
    }
  }
}
</style>
