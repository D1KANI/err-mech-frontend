<template>
  <div
    class="row"
  >
    <span class="col">{{ index + 1 }}</span>
    <span class="col">{{ item.product.company }}</span>
    <span class="col">
      {{ item.product.name }}
      <span :class="classForSwitch">{{ item.product.selectedSwitch }}</span>
    </span>
    <span class="col">{{ item.quantity }}</span>
    <span class="col">{{ item.product.price.toLocaleString('ru') }} ₽</span>
  </div>
</template>
<script>
export default {
  name: 'CheckoutCartItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    classForSwitch () {
      return `sw${this.item.product.selectedSwitch.replace(/\s/g, '')}`
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.col {
  margin: 0 20px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  &:first-child {
    width: 20px;
  }
  &:nth-child(2) {
    width: 150px;
  }
  &:nth-child(3) {
    width: 250px;
  }
  &:nth-child(4) {
    width: 100px;
  }
  &:last-child {
    width: 100px;
  }
}

@media screen and (max-width: 900px) {
  .col {
    &::before {
      content: "";
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: $grey;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    &:first-child {
      &::before {
        content: "№";
      }
    }
    &:nth-child(2) {
      &::before {
        content: "Производитель";
      }
    }
    &:nth-child(3) {
      &::before {
        content: "Название";
      }
    }
    &:nth-child(4) {
      &::before {
        content: "Количество";
      }
    }
    &:last-child {
      &::before {
        content: "Цена";
      }
    }
  }
}
</style>
