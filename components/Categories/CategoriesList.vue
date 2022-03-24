<template>
  <div class="categories__flex">
    <CategoriesItem
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
    />
  </div>
</template>
<script>
export default {
  name: 'CategoriesList',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.categories {
  &__flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 -20px;
    margin-top: 30px;
  }
}
</style>
