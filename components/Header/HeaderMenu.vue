<template>
  <div class="menu">
    <nav class="menu-nav">
      <a href="#" class="menu-nav__link">Клавиатуры</a>
      <a href="#" class="menu-nav__link">Переключатели</a>
      <a href="#" class="menu-nav__link">Кейкапы</a>
      <a href="#" class="menu-nav__link">Аксессуары</a>
      <a href="#" class="menu-nav__link">Новости</a>
      <a href="/categories.html" class="menu-nav__link">Категории</a>
    </nav>
    <div class="menu-search">
      <button class="menu-search__btn">
        <IconSearch />
      </button>
      <input type="text" placeholder="Что нужно найти?" required name="search" class="menu-search__input">
    </div>
    <a href="#" class="menu-profile">
      <IconProfile />
      <img src="/image/SVG/profile.svg" alt="" class="menu-profile__image">
      <p>Профиль</p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'HeaderMenu'
}
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 5px 5px;
  padding: 115px 35px 30px;
  z-index: 2;
  width: 400px;
  max-width: 100%;
  &-nav {
    border-bottom: 1px solid #ECECEC;
    &__link {
      display: block;
      color: $text;
      position: relative;
      padding: 1px 0;
      padding-left: 22px;
      margin-bottom: 30px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      transition: padding-left 250ms ease-out;
      &::before {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 2px;
        border-radius: 1px;
        background-color: #ececec;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: background-color 250ms ease-out;
      }
      &:hover {
        padding-left: 32px;
        &:before {
          background-color: $blue;
        }
      }
    }
  }
  &-search {
    margin: 30px 0;
    display: flex;
    width: 100%;
    &__btn {
      border: none;
      background-color: transparent;
      margin-right: 15px;
    }
    &__input {
      width: 100%;
      padding: 0 0 4px;
      border: none;
      border-bottom: 1px solid #ECECEC;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      &:placeholder-shown {
        color: #999;
      }

    }
  }
  &-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin: 0 auto;
    border: 1px solid #ececec;
    border-radius: 5px;
    padding: 10px 15px;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $text;
      margin-left: 10px;
    }
  }
}

@media screen and (max-width: 520px) {
  .menu {
    width: 100%;
  }
}
</style>
