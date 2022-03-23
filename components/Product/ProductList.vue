<template>
  <section class="products">
    <div class="container">
      <h1>Популярные товары</h1>
      <div class="products__flex">
        <ProductItem />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProductsList'
}
</script>
<style lang="scss" scoped>
.products {
  margin-top: 100px;
  &__flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 -20px;
    margin-top: 50px;
  }
}

@media screen and (max-width: 1366px) {
  .products {
    &__flex {
      justify-content: flex-start;
      margin-right: -15px;
      margin-left: -15px;
    }
  }
}

@media screen and (max-width: 1040px) {
  .products {
    &__flex {
      justify-content: flex-start;
      margin-right: -10px;
      margin-left: -10px;
    }
  }
}

@media screen and (max-width: 690px) {
  .products {
    &__flex {
      justify-content: flex-start;
      margin-right: 0;
      margin-left: 0;
    }
  }
}
</style>
