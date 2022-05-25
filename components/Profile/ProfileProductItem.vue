<template>
  <div class="profile-product">
    <div class="profile-product-image">
      <img :src="product.image" alt="" class="profile-product-image__img">
    </div>
    <div class="profile-product__inner">
      <nuxt-link :to="`/products/${product.slug}`" class="profile-product__name">
        {{ product.title }}
      </nuxt-link>
      <div class="profile-product__count">
        Количество: {{ product.count }} шт.
      </div>
      <div class="profile-product__price">
        {{ priceAsString }} ₽
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    priceAsString () {
      return this.product.price.toLocaleString('ru')
    }
  }
}
</script>
<style lang="scss" scoped>
.profile-product {
  padding: 30px 0;
  margin: 0 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid $border;
  &:last-child {
    border-bottom: 0;
  }
  &-image {
    width: 156px;
    height: 100px;
    &__img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  }
  &__inner {
    margin-left: 30px;
  }
  &__name {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $text;
  }
  &__count {
    margin: 5px 0 20px;
    color: $grey;

  }
  &__price {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
}

@media screen and (max-width: 490px) {
  .profile-product {
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__inner {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>
