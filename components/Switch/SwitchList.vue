<template>
  <div class="item-switches">
    <div class="item-switches__title">
      Выберите тип переключателей
    </div>
    <div class="item-switches__flex">
      <SwitchItem
        v-for="(item, index) in switchesWithActive"
        :key="index"
        :item="item"
        @set-active-switch="setActiveSwitch"
      />
    </div>
    <a href="#" class="item-switches__more">
      Подробнее о переключателях
    </a>
  </div>
</template>
<script>
export default {
  name: 'SwitchList',
  props: {
    switches: {
      type: Array,
      required: true
    },
    active: {
      type: String,
      required: true
    }
  },
  computed: {
    switchesWithActive () {
      const switches = this.switches.map((item) => {
        this.$set(item, 'active', false)
        if (item.name === this.active) {
          this.$set(item, 'active', true)
        }
        return item
      })
      return switches
    }
  },
  methods: {
    setActiveSwitch (payload) {
      this.$emit('set-active-switch', payload)
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  &-switches {
    margin-bottom: 40px;
    &__title {
      color: #4D5053;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
    }
    &__flex {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }
    &__more {
      display: block;
      width: max-content;
      color: $blue;
      margin-top: 15px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      position: relative;
      padding-bottom: 3px;
      &:before {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background-color: $blue;
        border-radius: 1px;
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
}
</style>
