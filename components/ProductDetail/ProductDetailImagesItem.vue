<template>
  <div class="images-small__image-wrapper" @click.stop="changeImage">
    <img :src="image" alt="" class="images-small__image">
  </div>
</template>
<script>
export default {
  name: 'ProductDetailImagesItem',
  props: {
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    changeImage () {
      this.$emit('change-image', this.image)
    }
  }
}
</script>
<style lang="scss" scoped>
.images {
  &-small {
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      object-fit: cover;
      &-wrapper {
        max-width: 100px;
        min-width: 100px;
        height: 100px;
        margin-right: 5px;
      }
    }
  }
}
</style>
