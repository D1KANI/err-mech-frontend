<template>
  <section class="index-news">
    <div class="container">
      <div class="index-news__wrapper">
        <div class="index-news__head">
          <h2>Новые статьи</h2>
          <nuxt-link to="/articles" class="index-news__link">
            Все статьи →
          </nuxt-link>
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
          title: 'Крепления переключателей: Plate Mounted и PCB Mounted',
          descShort: 'Переключатели обычно крепятся на клавиатуру одним из двух популярных способов: Plate Mounted и PCB Mounted',
          descFull: 'Переключатели обычно крепятся на клавиатуру одним из двух популярных способов: Plate Mounted и PCB Mounted. Переключатели обычно крепятся на клавиатуру одним из двух популярных способов: Plate Mounted и PCB Mounted. Переключатели обычно крепятся на клавиатуру одним из двух популярных способов: Plate Mounted и PCB Mounted',
          date: '1 сентября',
          slug: 'article5'
        },
        {
          title: 'Виды нанесения символов на клавиши',
          descShort: 'Doubleshot, Dye Sublimation, Laser Engraving и Pad Printing. Если эти слова вам не знакомы, то давайте разберемся, в чем мем.',
          descFull: 'Если эти слова вам не знакомы, то давайте разберемся, в чем мем. Doubleshot, Dye Sublimation, Laser Engraving и Pad Printing. Если эти слова вам не знакомы, то давайте разберемся, в чем мем. Если эти слова вам не знакомы, то давайте разберемся, в чем мем. Doubleshot, Dye Sublimation, Laser Engraving и Pad Printing. Если эти слова вам не знакомы, то давайте разберемся, в чем мем',
          date: '1 сентября',
          slug: 'article6'
        },
        {
          title: 'Чем отличается дорогая клавиатура от дешевой?',
          descShort: 'Статья о том, почему при выборе механической клавиатуры не стоит экономить свои кровные',
          descFull: 'Статья о том, почему при выборе механической клавиатуры не стоит экономить свои кровные. Статья о том, почему при выборе механической клавиатуры не стоит экономить свои кровные. Статья о том, почему при выборе механической клавиатуры не стоит экономить свои кровные',
          date: '1 сентября',
          slug: 'article7'
        },
        {
          title: 'Типы механических переключателей',
          descShort: 'В этой статье вы узнаете все (или почти) о механических переключателях, различия между ними и какие компании их производят',
          descFull: 'В этой статье вы узнаете все (или почти) о механических переключателях, различия между ними и какие компании их производят. В этой статье вы узнаете все (или почти) о механических переключателях, различия между ними и какие компании их производят. В этой статье вы узнаете все (или почти) о механических переключателях, различия между ними и какие компании их производят',
          date: '1 сентября',
          slug: 'article8'
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
