<template>
  <section class="item">
    <div class="container">
      <div class="item__flex">
        <div class="item__left">
          <client-only>
            <ProductDetailImagesList :images="images" />
          </client-only>
        </div>
        <div class="item__right">
          <div class="item__info">
            <div class="item__category">
              Клавиатуры
            </div>
            <div class="item__name">
              <span>Varmilo</span> <span>VA87M Vintage Days</span>
            </div>
            <client-only>
              <ProductDetailSwitchesList
                :switches="switches"
                :active="activeSwitch"
                @set-active-switch="setActiveSwitch"
              />
            </client-only>
            <div class="item__desc-small">
              Давно мы не слышали писк модема и пароль от аськи совсем забыт. На мониторах больше нет защитных экранов и шарик от мышки больше не нужно чистить. Но, порой, так хочется хоть на минутку в 1998-й, заглянуть кто там в чате и оставить компьютер на ночь качать mp3 (главное, чтоб никто трубку не поднял). Увы, прошлое не вернуть и многие вещи безнадёжно устарели. Но не Varmilo Vintage Days. Классическая серо-белая расцветка клавиш, проверенные переключатели и лучшие материалы, ностальгия ещё никогда не была такой качественной. В комплекте есть 9 ярких функциональных клавиш и 3 клавиши для Lock-ов с прорезью для индикации работы.
            </div>
            <div class="item-bottom">
              <div class="item__price">
                <span>13 490</span> ₽
              </div>
              <a href="#" class="item__btn btn">Добавить в корзину</a>
            </div>
          </div>
        </div>
      </div>
      <div class="item__flex">
        <div class="item__left">
          <div class="item-desc">
            <h3>Описание</h3>
            <p>
              Varmilo – производитель, которого по многим параметрам можно поставить на один уровень с Леопольд: они так же серьезно относятся к качеству своей продукции, так же не тратят уйму средств на маркетинг и точно так же используют премиальные материалы в своей продукции, но что же их отличает? А отличает их страсть к необычным цветовым решениям. Леопольд стараются выпускать свои продукты в сдержанных и классических тонах, Вармило же не боится экспериментировать и её продукцию можно найти как в классическом исполнении, так и в весьма необычных цветовых решениях.
            </p>
            <p>
              В данной модели основным цветом является холодный белый, почти все клавиши модификаторы представлены в сером цвете, тогда как клавиши shift/ctrl/windows/alt/fn имеют желтый/розово-красный/фиолетовый/голубой/оранжевый цвета соответственно (в комплекте есть дополнительные вышеперечисленные клавиши в сером цвете, а также Caps Lock и Scroll Lock с прорезями под светодиоды). Mini-USB порт спрятан в центре под корпусом, а на самой клавиатуре имеются центральная и две боковые канавки под кабель.
            </p>
            <h3>Особенности</h3>
            <div class="item-desc__item">
              <p class="before-dot">
                Мультимедиа и дополнительные FN функции
              </p>
              <p>
                Клавиатура поддерживает сочетания клавиш для регулировки громкости и управления музыкой. Также имеется возможность отключить кнопку windows и поменять клавиши Fn и Win/Ctrl и Caps Lock местами.
              </p>
            </div>
            <div class="item-desc__item">
              <p class="before-dot">
                Клавишные колпачки толщиной 1.4 мм
              </p>
              <p>
                Колпачки изготовлены из высокопрочного пластика PBT с применением dye-sublimation технологии, с выгравированными символами на боках. Использование dye-sub позволяет символам никогда не стираться и никак не чувствоваться при печати, а качественный PBT пластик гарантирует надежность и долговечность. Клавиши имеют слегка текстурированный верх и приятны на ощупь.
              </p>
            </div>
            <div class="item-desc__item">
              <p class="before-dot">
                Стабилизаторы, смазанные на заводе
              </p>
              <p>
                Сочетание стабилизаторов и смазки позволяет добиться максимально равномерного и плавного хода клавиш enter/space/shift/backspace, а сами колпачки легко снять с клавиатуры.
              </p>
            </div>
            <div class="item-desc__item">
              <p class="before-dot">
                Белая подсветка
              </p>
              <p>
                Имеется 3 разных режима (выключена, статичное свечение, эффект затухания) и 4 уровня яркости. Режимы меняются через FN + стрелка вправо, FN + стрелка вверх/вниз меняет яркость в режиме статичного свечения и скорость в режиме затухания.
              </p>
            </div>
            <h3>Комплектация</h3>
            <p class="before-dot before-dot_small">
              Клавиатура;
            </p>
            <p class="before-dot before-dot_small">
              Коробка;
            </p>
            <p class="before-dot before-dot_small">
              Крышка для защиты от пыли;
            </p>
            <p class="before-dot before-dot_small">
              Varmilo wire keycap puller – позволит легко снять колпачки с клавиатуры;
            </p>
            <p class="before-dot before-dot_small">
              Mini-USB кабель с велкро застежкой;
            </p>
            <p class="before-dot before-dot_small">
              Дополнительные серые клавиши-модификаторы: Caps Lock и Scroll Lock с прорезями под светодиоды.
            </p>
            <p class="before-dot before-dot_small">
              Инструкция на английском языке.
            </p>
          </div>
        </div>
        <div class="item__right">
          <div class="item-feature__box">
            <div class="item-feature__title">
              Основные характеристики
            </div>
            <div class="item-feature__flex">
              <div class="item-feature__item">
                Производитель: Varmilo
              </div>
              <div class="item-feature__item">
                Тип переключателей: Cherry MX
              </div>
              <div class="item-feature__item">
                Модель: VA87M Vintage Days CMYK
              </div>
              <div class="item-feature__item">
                Беспроводная: Нет
              </div>
              <div class="item-feature__item">
                Формат: TKL
              </div>
              <div class="item-feature__item">
                Подсветка: White LED
              </div>
              <div class="item-feature__item">
                Количество клавиш: 87
              </div>
              <div class="item-feature__item">
                Разъём: Mini USB
              </div>
              <div class="item-feature__item">
                Материал корпуса: Пластик
              </div>
              <div class="item-feature__item">
                Размер: 35.6x13.4x3.3 см
              </div>
              <div class="item-feature__item">
                Материал клавиш: PBT-пластик
              </div>
              <div class="item-feature__item">
                Вес: 0.85 кг
              </div>
              <div class="item-feature__item">
                Раскладка: ANSI
              </div>
              <div class="item-feature__item">
                Гарантия: 1 год
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProductDetailBlock',
  data () {
    return {
      switches: [
        {
          name: 'Clear',
          count: 1
        },
        {
          name: 'Brown',
          count: 1
        },
        {
          name: 'Red',
          count: 1
        },
        {
          name: 'SilentRed',
          count: 0
        }
      ],
      images: [
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png'),
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png'),
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png'),
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png'),
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png'),
        require('@/assets/images/productDetail/item.png'),
        require('@/assets/images/productDetail/item2.png')
      ],
      activeSwitch: ''
    }
  },
  methods: {
    setActiveSwitch (payload) {
      this.activeSwitch = payload
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  margin-top: 50px;
  margin-bottom: 100px;
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__left {
    width: 940px;
    margin-right: 50px;
  }
  &__right {
    width: calc(100% - 990px);
  }
  &__category {
    color: #E68513;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  &__name {
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    margin-bottom: 40px;
  }
  &__desc {
    &-small {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 40px;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__price {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    margin-right: 30px;
  }
  &-desc {
    h3 {
      margin-top: 50px;
      margin-bottom: 20px;
    }
    p {
      display: block;
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 26px;
      &.before-dot {
        position: relative;
        padding-left: 18px;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        &:before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $orange;
          position: absolute;
          top: 9px;
          left: 0;
        }
        &_small {
          font-weight: 400;
        }
      }
    }
  }
  &-feature {
    &__box {
      margin-top: 50px;
      padding: 40px 40px 25px;
      background-color: #F9FBFF;
      border: 1px solid #E9EEF8;
      border-radius: 5px;
    }
    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 40px;
      text-align: center;
    }
    &__flex {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__item {
      width: calc((100% - 40px) / 2);
      font-size: 16px;
      line-height: 26px;
      padding-left: 33px;
      position: relative;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      &:before {
        content: "";
        display: block;
        width: 18px;
        height: 18px;
        background: url(assets/images/icons/check.svg) no-repeat center center / contain;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}

@media screen and (max-width: 1800px) {
  .item {
    &-feature {
      &__item {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 1690px) {
  .item {
    &__right {
      width: 600px;
    }
    &__left {
      width: calc(100% - 630px);
    }
  }
}

@media screen and (max-width: 1400px) {
  .item {
    .images {
      &-big {
        &__image {
          &-wrapper {
            height: 500px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1260px) {
  .item {
    &__flex {
      display: block;
      &:last-child {
        display: flex;
        flex-direction: column;
        .item__right {
          order: -1;
        }
        .item__left {
          order: 2;
        }
      }
    }
    &__left {
      width: 100%;
    }
    &__right {
      width: 100%;
    }
    &__info {
      margin-top: 50px;
      text-align: center;
    }
    &__name {
      margin-bottom: 30px;
    }
    &-switches {
      margin-bottom: 30px;
      &__flex {
        justify-content: center;
      }
      &__more {
        margin: 15px auto 0;
      }
    }
    &-bottom {
      display: block;
    }
    &__price {
      margin-right: 0;
      margin-bottom: 30px;
    }
    &__btn {
      margin: 0 auto;
    }
    &__desc {
      &-small {
        display: none;
      }
    }
    &-feature {
      &__box {
        padding: 40px 100px;
      }
      &__item {
        width: 330px;
        &:nth-child(2n-1) {
          margin-right: 50px;
        }
      }
    }
  }
}

@media screen and (max-width: 1020px) {
  .item {
    &-feature {
      &__box {
        padding: 40px;
      }
      &__item {
        &:nth-child(2n-1) {
          margin-right: 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 833px) {
  .item {
    &-feature {
      &__flex {
        justify-content: center;
      }
      &__item {
        &:nth-child(2n-1) {
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .item {
    .images {
      &-big {
        &__image {
          &-wrapper {
            height: 300px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .item {
    &__name {
      font-size: 32px;
      margin-bottom: 20px;
    }
    &-switches {
      margin-bottom: 20px;
    }
    &__price {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 540px) {
  .item {
    margin-top: 30px;
    .images {
      &-small {
        &__image {
          &-wrapper {
            max-width: 60px;
            min-width: 60px;
            height: 60px;
          }
        }
      }
    }
    &__name {
      font-size: 28px;
    }
    &-feature {
      &__box {
        padding: 20px;
      }
    }
    &-desc {
      h3 {
        margin-top: 30px;
      }
      p {
        font-size: 16px;
        &.before-dot {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .item {
    .images {
      &-big {
        &__image {
          &-wrapper {
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
