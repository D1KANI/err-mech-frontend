<template>
  <div class="new">
    <p class="new__date">
      {{ item.date }}
    </p>
    <nuxt-link :to="`/articles/${item.slug}`" class="new__head">
      {{ item.title }}
    </nuxt-link>
    <p class="new__desc">
      {{ item.descShort }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'NewsIndexItem',
  props: {
    item: {
      type: Object,
      default () {
        return {
          date: '1 сентября',
          title: 'Заголовок',
          descShort: 'Текст',
          slug: 'article'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.new {
  width: calc((100% - 165px) / 4);
  &__date {
    color: $lightGrey;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;
  }
  &__head {
    display: block;
    color: $text;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 16px;
    transition: color 150ms ease-out;
    &:hover {
      color: $blue;
    }
  }
  &__desc {
    font-size: 18px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1720px) {
  .new {
    width: calc((100% - 120px) / 4);
  }
}

@media screen and (max-width: 1440px) {
  .new {
    width: calc(100%  / 3 - 25px);
    &__head {
      font-size: 20px;
    }
    &:last-child {
      display: none;
    }
  }
}

@media screen and (max-width: 1000px) {
  .new {
    width: calc((100% - 40px) / 3);
  }
}

@media screen and (max-width: 920px) {
  .new {
    width: calc((100% - 30px) / 2);
    &:nth-child(3) {
      display: none;
    }
  }
}

@media screen and (max-width: 620px) {
  .new {
    width: calc((100% - 20px) / 2);
  }
}

@media screen and (max-width: 570px) {
  .new {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
