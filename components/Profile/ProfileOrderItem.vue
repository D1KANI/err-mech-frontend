<template>
  <div class="profile-orders-item">
    <div class="profile-orders-item__head">
      Заказ №<span>{{ order.orderId }}</span>
    </div>
    <div class="profile-orders-item__body">
      <ProfileProductList :products="order.products" />
      <div class="profile-orders-item-right">
        <div class="profile-orders-item-cost">
          <div class="profile-orders-item-cost__head">
            Итого:
          </div>
          <div class="profile-orders-item-cost__body">
            <span>{{ totalPrice }}</span> ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileOrderItem',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    totalPrice () {
      const total = this.order.products.reduce((sum, product) => {
        return sum + product.price * product.count
      }, 0)
      return total.toLocaleString('ru')
    }
  }
}
</script>
<style lang="scss" scoped>
.profile {
  &-orders {
    &-item {
      margin-bottom: 20px;
      &__head {
        background: #F3F4F5;
        padding: 15px;
        border-radius: 5px 5px 0 0;
      }
      &__body {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        border: 1px solid $border;
        border-top: none;
        border-radius: 0 0 5px 5px;
      }
      &-right {
        padding: 30px;

      }
      &-cost {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        &__head {
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          margin-right: 10px;
        }
        &__body {
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 810px) {
  .profile {
    &-orders {
      &-item {
        &__body {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
