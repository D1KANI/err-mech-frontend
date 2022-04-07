<template>
  <main class="main">
    <ProductList :products="products" :title="title" />
  </main>
</template>
<script>
export default {
  name: 'ProductsPage',
  data () {
    return {
      products: [
        {
          id: 1,
          type: 'Keyboard',
          name: 'Shine 7 Blackout',
          company: 'Ducky',
          switches: ['Black'],
          price: 9999
        },
        {
          id: 2,
          type: 'Keyboard',
          name: 'Shine 7 Blackout',
          company: 'Ducky',
          switches: ['Brown', 'Blue', 'Red', 'Clear', 'Silent Red', 'Speed Silver'],
          price: 228089346.99,
          image: require('@/assets/images/product/1.png')
        }
      ],
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
  },
  computed: {
    title () {
      return this.categories.find((item) => {
        return item.slug === this.$route.params.slug
      }).name
    }
  }
}
</script>
