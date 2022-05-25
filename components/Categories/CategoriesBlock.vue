<template>
  <section class="categories">
    <div class="container">
      <h1>Категории</h1>
      <CategoriesList :categories="categories" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'CategoriesBlock',
  data () {
    return {
      categories: [
        {
          id: 1,
          name: 'Клавиатуры',
          image: require('@/assets/images/categories/1.png'),
          slug: 'keyboard'
        },
        {
          id: 2,
          name: 'Переключатели',
          image: require('@/assets/images/categories/2.png'),
          slug: 'switches'
        },
        {
          id: 3,
          name: 'Кейкапы',
          image: require('@/assets/images/categories/3.png'),
          slug: 'keycaps'
        },
        {
          id: 4,
          name: 'Аксессуары',
          image: require('@/assets/images/categories/4.png'),
          slug: 'accessories'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.categories {
  margin-top: 50px;
  margin-bottom: 70px;
  h1 {
    text-align: left;
  }
}
</style>
