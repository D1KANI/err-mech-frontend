<template>
  <div class="images">
    <div class="images-big">
      <div class="images-big__image-wrapper">
        <img :src="currentImage" alt="" class="images-big__image">
      </div>
    </div>
    <div class="images-small">
      <ProductDetailImagesItem
        v-for="(image, index) in images"
        :key="index"
        :image="image"
        @change-image="changeImage"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetailImagesList',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentImage: this.images[0]
    }
  },
  methods: {
    changeImage (payload) {
      this.currentImage = payload
    }
  }
}
</script>
<style lang="scss" scoped>
.images {
  ::-webkit-scrollbar {
    height: 10px;
    background-color: #E3E9F4;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: $blue;
    border-radius: 5px;
    height: 10px;
    cursor: pointer;
  }
  &-big {
    margin-bottom: 5px;
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
      transition: all 175ms ease-out;
      &-wrapper {
        width: 100%;
        height: 600px;
      }
    }
  }
  &-small {
    padding-bottom: 10px;
    display: flex;
    max-width: 100%;
    overflow-x: auto;
    padding-left: 3px;
  }
}
</style>
