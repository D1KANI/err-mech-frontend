<template>
  <main class="main">
    <ProductList :products="products" />
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
      ]
    }
  }
}
</script>
