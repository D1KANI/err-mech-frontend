<template>
  <div class="profile-orders">
    <h3>История заказов</h3>
    <ProfileOrderItem
      v-for="(order, index) in orders"
      :key="index"
      :order="order"
    />
  </div>
</template>
<script>
export default {
  name: 'ProfileOrderList',
  props: {
    orders: {
      type: Array,
      reqiored: true
    }
  }
}
</script>
<style lang="scss" scoped>
h3 {
  margin-bottom: 20px;
}

.profile {
  &-orders {
    padding-top: 30px;
  }
}
</style>
