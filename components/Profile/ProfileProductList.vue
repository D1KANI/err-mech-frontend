<template>
  <div class="profile-orders-item-products">
    <ProfileProductItem
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>
<script>
export default {
  name: 'ProfileProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.profile-orders-item-products {
  flex-grow: 1;
  border-right: 1px solid $border;
}

@media screen and (max-width: 860px) {
  .profile-orders-item-products {
    border-right: 0;
    border-bottom: 1px solid #E9EEF8;
  }
}
</style>
