<template>
  <main class="main">
    <SliderBlock />
    <ProductList />
    <GradientBlock />
    <NewsIndexBlock />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      title: 'Главная страница'
    }
  },
  head () {
    return {
      title: `ERR-MECH | ${this.title}`
    }
  }
}
</script>
