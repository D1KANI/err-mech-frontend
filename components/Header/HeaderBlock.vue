<template>
  <header class="header">
    <div class="container">
      <div class="header__flex">
        <div
          class="header-burger"
          :class="{'active' : menuOpened}"
          @click="toggleMenu"
        >
          <span />
          <span />
          <span />
        </div>
        <Logo class="header__logo" />
        <Nav />
        <div class="header__buttons">
          <a href="#" class="search-btn">
            <IconSearch />
            <p>Поиск</p>
          </a>
          <nuxt-link to="/profile" class="profile-btn">
            <IconProfile />
            <p>Профиль</p>
          </nuxt-link>
          <nuxt-link to="/cart" class="cart-btn">
            <IconCart />
            <p>Корзина</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <transition name="slide-left">
      <HeaderMenu v-if="menuOpened" />
    </transition>
  </header>
</template>
<script>
export default {
  name: 'HeaderBlock',
  data () {
    return {
      menuOpened: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpened = !this.menuOpened
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background-color: #fff;
  position: relative;
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    padding: 0px 18px;
    margin-right: 50px;
    z-index: 3;
  }
  &__buttons {
    display: flex;
    align-items: center;
    .search-btn,
    .profile-btn,
    .cart-btn {
      display: flex;
      align-items: center;
      margin-left: 32px;
      position: relative;
      z-index: 3;
      &:hover p {
        color: $blue;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: $text;
        margin-left: 10px;
        transition: color 150ms ease-out;
      }
    }
  }
  &-burger {
    display: none;
    position: relative;
    z-index: 3;
    padding: 8px 10px;
    cursor: pointer;
    span {
      display: block;
      background-color: $text;
      position: absolute;
      height: 2px;
      width: 100%;
      left: 50%;
      transition: all 175ms ease-out;
      &:first-child {
        top: 0;
        transform: translate(-50%, 0);
      }
      &:nth-child(2) {
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &:nth-child(3) {
        top: 100%;
        transform: translate(-50%, -100%);
      }
    }
    &.active {
      span {
        &:first-child {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
}

@media screen and (max-width: 1290px) {
  .header {
    &__buttons {
      .search-btn,
      .profile-btn,
      .cart-btn {
        p {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .header {
    position: relative;
    padding: 32px 0;
    &__logo {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &__buttons {
      .search-btn,
      .profile-btn {
        display: none;
      }
    }
    &-burger {
      display: block;
    }
  }
}

@media screen and (max-width: 480px) {
  .header {
    &__buttons {
      .search-btn,
      .profile-btn {
        display: none;
      }
    }
  }
}

.slide-left {
  &-leave {
    &-active {
      transition: 300ms ease-in-out;
    }
    &-to {
      transform: translateX(-400px);
    }
  }
  &-enter {
    &-active {
      transform: translateX(-400px);
      transition: 300ms ease-in-out;
    }
    &-to {
      transform: translateX(0);
    }
  }
}
</style>
