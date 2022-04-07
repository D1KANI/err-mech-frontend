<template>
  <nuxt-link :to="`/categories/${category.slug}`" class="categories-item">
    <div class="categories-item__image-wrapper">
      <img :src="category.image" alt="" class="categories-item__image">
    </div>
    <p>{{ category.name }}</p>
  </nuxt-link>
</template>
<script>
export default {
  name: 'CategoriesItem',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.categories {
  &-item {
    display: block;
    width: calc((100% - 160px) / 4);
    margin: 0 20px;
    margin-bottom: 40px;
    &__image {
      display: block;
      width: 100%;
      border-radius: 3px;
      object-fit: cover;
      &-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
      }
    }
    p {
      display: block;
      margin-top: 24px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: $text;
      transition: color 175ms ease-out;
    }
    &:hover {
      p {
        color: $blue;
      }
    }
  }
}

@media screen and (max-width: 1420px) {
  .categories {
    &-item {
      width: calc((100% - 120px) / 3);
    }
  }
}

@media screen and (max-width: 1020px) {
  .categories {
    &-item {
      width: calc((100% - 80px) / 2);
    }
  }
}

@media screen and (max-width: 620px) {
  .categories {
    &-item {
      width: 100%;
      p {
        margin-top: 20px;
      }
    }
  }
}
</style>
