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
          title: 'Клавиатуры',
          image: require('@/assets/images/categories/1.png'),
          link: 'keyboard'
        },
        {
          title: 'Переключатели',
          image: require('@/assets/images/categories/2.png'),
          link: 'switches'
        },
        {
          title: 'Кейкапы',
          image: require('@/assets/images/categories/3.png'),
          link: 'keycaps'
        },
        {
          title: 'Аксессуары',
          image: require('@/assets/images/categories/4.png'),
          link: 'accessories'
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
