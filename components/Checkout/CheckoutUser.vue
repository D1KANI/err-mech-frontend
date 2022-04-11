<template>
  <div class="checkout-person">
    <h2>Данные покупателя</h2>
    <div class="checkout-person__flex">
      <AppInput
        v-for="(input, index) in userData.inputs"
        :key="index"
        v-model="input.value"
        :label="input.label"
        :placeholder="input.placeholder"
        :is-required="input.isRequired"
        :is-error="input.isError"
        :is-readonly="input.isReadonly"
      />
      <div class="input-wrapper _textarea">
        <div class="input-label">
          {{ userData.address.label }}
        </div>
        <textarea
          v-model="userData.address.value"
          rows="2"
          class="input checkout__textarea"
          :placeholder="userData.address.placeholder"
          :required="userData.address.isRequired"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CheckoutUser',
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout {
  &-person {
    padding: 30px 0;
    border-bottom: 1px solid $border;
    &__flex {
      width: 960px;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      .input-wrapper {
        width: calc((100% - 60px) / 3);
        margin-bottom: 20px;
        &._textarea {
          width: calc((100% - 60px) / 3 * 2 + 30px);
          margin-bottom: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 690px) {
  .checkout {
    &-person {
      &__flex {
        display: block;
        .input-wrapper {
          width: 100%;
          &._textarea {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
