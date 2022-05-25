<template>
  <div class="product-small">
    <div class="product-small__image-wrapper">
      <img :src="image" alt="" class="product-small__image">
      <nuxt-link :to="`/products/${productId}`" class="product-small__link">
        Подробнее
      </nuxt-link>
    </div>
    <nuxt-link :to="`/products/${productId}`" class="product-small__name">
      <span class="company">{{ company }} </span>
      <span class="name">{{ name }}</span>
    </nuxt-link>
    <div class="product-small__switches">
      <div class="product-small__switches-head">
        Переключатели:
      </div>
      <ul class="product-small__switches-body">
        <li
          v-for="(item, index) in switches"
          :key="index"
          :class="`sw${item.replace(/\s/g, '')}`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="product-small__price">
      Цена: от <span>{{ priceAsString }}</span> <span>₽</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    productId: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    switches: {
      type: Array,
      default () { return [''] }
    },
    image: {
      type: String,
      default: require('@/assets/images/product/default.png')
    }
  },
  computed: {
    priceAsString () {
      return this.price.toLocaleString('ru')
    }
  }
}
</script>
<style lang="scss" scoped>
.product-small {
  display: block;
  width: calc((100% - 160px) / 4);
  margin: 0 20px;
  margin-bottom: 40px;
  &__image {
    display: block;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
    position: absolute;
    height: 100%;
    &-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      &:hover a {
        opacity: 1;
      }
    }
  }
  &__link {
    padding: 15px 40px;
    background: rgba(63, 63, 63, 0.5);
    border: 1px solid rgba(255, 255, 255, .4);
    border-radius: 3px;
    display: inline-block;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
  &__name {
    display: block;
    color: $text;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 24px 0 16px;
    transition: color 200ms ease-out;
    &:hover {
      color: $blue;
    }
  }
  &__switches {
    &-head {
      font-size: 18px;
      line-height: 21px;
      color: $grey;
      margin-bottom: 8px;
      cursor: default;
    }
    &-body {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 62px;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        cursor: default;
      }
    }
  }
  &__price {
    margin-top: 10px;
    font-size: 18px;
    line-height: 22px;
    span {
      font-weight: 600;
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
    }
  }
}

@media screen and (max-width: 1366px) {
  .product-small {
    width: calc((100% - 75px) / 3);
    margin-right: 15px;
    margin-left: 15px;
  }
}

@media screen and (max-width: 1040px) {
  .product-small {
    width: calc((100% - 40px) / 2);
    margin-right: 10px;
    margin-left: 10px;
    &__image {
      max-height: 100%;
      &-wrapper {
        padding: 0;
        height: 300px;
      }
    }
  }
}

@media screen and (max-width: 690px) {
  .product-small {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
