<template>
  <nav class="nav">
    <nuxt-link to="/categories" class="nav__link">
      Категории
    </nuxt-link>
    <nuxt-link to="/articles" class="nav__link">
      Статьи
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  name: 'AppNav'
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  flex-grow: 1;
  &__link {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.2px;
    color: $text;
    margin-right: 40px;
    transition: color 200ms ease-out;
    &:hover {
      color: $blue;
    }
  }
}

@media screen and (max-width: 1080px) {
  .nav {
    display: none;
    &__link {
      margin: 0 20px;
    }
  }
}
</style>
