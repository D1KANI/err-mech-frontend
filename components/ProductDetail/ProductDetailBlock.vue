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
              <span>{{ product.company }}</span> <span>{{ product.name }}</span>
            </div>
            <client-only>
              <ProductDetailSwitchesList
                :switches="switches"
                :active="selectedSwitch"
                @set-active-switch="setActiveSwitch"
              />
            </client-only>
            <div class="item__desc-small">
              {{ product.desc_short }}
            </div>
            <div class="item-bottom">
              <div class="item__price">
                <span>{{ priceAsString }}</span> ₽
              </div>
              <button class="item__btn btn" @click="addToCart">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="item__flex">
        <div class="item__left">
          <div class="item-desc">
            <h3>Описание</h3>
            <p>
              {{ product.desc_full }}
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
                Производитель: {{ product.company }}
              </div>
              <div class="item-feature__item">
                Модель: {{ product.name }}
              </div>
              <div
                v-for="(item, index) in specifications"
                :key="index"
                class="item-feature__item"
              >
                {{ item.head }}: {{ item.value }}
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
          id: 1,
          name: 'Black',
          count: 1
        },
        {
          id: 2,
          name: 'Speed Silver',
          count: 0
        },
        {
          id: 3,
          name: 'Silent Red',
          count: 1
        },
        {
          id: 4,
          name: 'Clear',
          count: 1
        },
        {
          id: 5,
          name: 'Red',
          count: 0
        },
        {
          id: 6,
          name: 'Blue',
          count: 1
        },
        {
          id: 7,
          name: 'Brown',
          count: 1
        }
      ],
      product: {
        id: 2,
        category: 'Клавиатура',
        company: 'Varmilo',
        name: 'VA87M Vintage Days',
        desc_short: 'Короткое описание',
        desc_full: 'Полное описание',
        price: 12240,
        image: require('@/assets/images/productDetail/item.png')
      },
      specifications: [
        {
          head: 'Тип переключателей',
          value: 'Cherry MX'
        },
        {
          head: 'Беспроводная',
          value: 'Нет'
        },
        {
          head: 'Формат',
          value: 'TKL'
        },
        {
          head: 'Подсветка',
          value: 'White LED'
        },
        {
          head: 'Количество клавиш',
          value: '87'
        },
        {
          head: 'Разъём',
          value: 'Mini USB'
        },
        {
          head: 'Материал корпуса',
          value: 'Пластик'
        },
        {
          head: 'Размер',
          value: '35.6x13.4x3.3 см'
        },
        {
          head: 'Материал клавиш',
          value: 'PBT-пластик'
        },
        {
          head: 'Вес',
          value: '0.85 кг'
        },
        {
          head: 'Раскладка',
          value: 'ANSI'
        },
        {
          head: 'Гарантия',
          value: '1 год'
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
      selectedSwitch: ''
    }
  },
  computed: {
    priceAsString () {
      return this.product.price.toLocaleString('ru')
    }
  },
  mounted () {
    const notEmptySwitch = this.switches.find((item) => {
      return item.count !== 0
    })
    this.selectedSwitch = notEmptySwitch.name
  },
  methods: {
    setActiveSwitch (payload) {
      this.selectedSwitch = payload
    },
    addToCart () {
      const product = { ...this.product }
      product.selectedSwitch = this.selectedSwitch
      this.$store.commit('cart/addToCart', { product, quantity: 1 })
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
