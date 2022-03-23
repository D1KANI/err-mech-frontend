<template>
  <nav class="nav">
    <nuxt-link to="/test">Test page</nuxt-link>
    <a href="#" class="nav__link">Клавиатуры</a>
    <a href="#" class="nav__link">Переключатели</a>
    <a href="#" class="nav__link">Кейкапы</a>
    <a href="#" class="nav__link">Аксессуары</a>
    <a href="#" class="nav__link">Новости</a>
    <a href="/categories.html" class="nav__link">Категории</a>
  </nav>
</template>
<script>
export default {
  name: 'Nav'
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
  }
}
</style>
