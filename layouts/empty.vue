<template>
  <div class="page-wrapper">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <AppLogo class="header__logo" />
        </div>
      </div>
    </header>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmptyLayout'
}
</script>
<style lang="scss" scoped>
.header {
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__logo {
    padding: 0px 18px;
  }
}
</style>
