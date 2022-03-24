<template>
  <section class="index-news">
    <div class="container">
      <div class="index-news__wrapper">
        <div class="index-news__head">
          <h2>Новые статьи</h2>
          <a href="/articles.html" class="index-news__link">Все статьи →</a>
        </div>
        <div class="index-news__flex">
          <NewsIndexItem
            v-for="(item, index) in news"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewsIndexBlock',
  data () {
    return {
      news: [
        {
          date: '20 ноября',
          title: 'Механическая клавиатура или мембранная?',
          content: 'Расскажем кратко про основные отличия механической конструкции от мембранной, чтобы вы поняли, о чем идет речь.'
        },
        {
          date: '20 ноября',
          title: 'Какую механическую клавиатуру выбрать?',
          content: 'В этой статье мы расскажем, как не потратить свои деньги впустую на влавиатуру, которая вам не подойдет.'
        },
        {
          date: '20 ноября',
          title: 'Почему не стоит покупать механическую клавиатуру с AliExpress?',
          content: 'Давайте разберемся, что это за зверь такой — клавиатуры с Aliexpress, и есть ли смысл их покупать.'
        },
        {
          date: '20 ноября',
          title: 'Уход за механической клавиатурой',
          content: 'Расскажем, как правильно ухаживать за вашими клавиатурами'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.index-news {
  margin: 50px 0 100px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__flex {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }
  &__head {
    min-width: calc((100% - 220px) / 5);
    margin-right: 55px;
  }
  &__link {
    position: relative;
    display: block;
    width: max-content;
    color: $blue;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 10px;
    &:before {
      content: "";
      display: block;
      background-color: $blue;
      height: 1px;
      width: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 175ms ease-out;
    }
    &:hover::before {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1440px) {
  .index-news {
    &__head {
      min-width: calc((100% - 75px) / 4);
      margin-right: 25px;
    }
  }
}

@media screen and (max-width: 1220px) {
  .index-news {
    &__wrapper {
      display: block;
    }
    &__head {
      margin-bottom: 30px;
      min-width: auto;
    }
  }
}

@media screen and (max-width: 620px) {
  .index-news {
    h2 {
      text-align: center;
    }
    &__link {
      margin: 10px auto 0;
    }
  }
}

@media screen and (max-width: 570px) {
  .index-news {
    &__flex {
      display: block;
    }
  }
}
</style>
