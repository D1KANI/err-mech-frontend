<template>
  <nav class="nav">
    <nuxt-link to="/test" class="nav__link">
      Test page
    </nuxt-link>
    <nuxt-link to="/categories/keyboard" class="nav__link">
      Клавиатуры
    </nuxt-link>
    <nuxt-link to="/categories/switches" class="nav__link">
      Переключатели
    </nuxt-link>
    <nuxt-link to="/categories/keycaps" class="nav__link">
      Кейкапы
    </nuxt-link>
    <nuxt-link to="/categories/accessories" class="nav__link">
      Аксессуары
    </nuxt-link>
    <nuxt-link to="/news" class="nav__link">
      Новости
    </nuxt-link>
    <nuxt-link to="/categories" class="nav__link">
      Категории
    </nuxt-link>
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
