<template>
  <main class="main">
    <SliderBlock />
    <ProductList :products="products" :title="'Популярные товары'" />
    <GradientBlock />
    <NewsIndexBlock />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      products: [
        {
          id: 1,
          type: 'Keyboard',
          name: 'Shine 7 Blackout',
          company: 'Ducky',
          switches: ['Brown', 'Blue', 'Red', 'Clear', 'Silent Red', 'Speed Silver', 'Black'],
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
      ]
    }
  },
  head () {
    return {
      title: 'ERR-MECH | Главная страница'
    }
  }
}
</script>
