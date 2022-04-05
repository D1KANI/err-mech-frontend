<template>
  <div
    class="item-switches__item"
    :class="[classSwitch, {'disabled': item.count === 0}, {'active': item.active}]"
    @click="setActiveSwitch"
  >
    {{ item.name }}
  </div>
</template>
<script>
export default {
  name: 'ProductDetailSwitchesItem',
  props: {
    item: {
      type: Object,
      default () {
        return {
          name: 'Default',
          count: 1,
          active: false
        }
      }
    }
  },
  computed: {
    classSwitch () {
      return `${this.item.name.toLowerCase()}Switch`
    }
  },
  methods: {
    setActiveSwitch () {
      if (this.item.active) {
        return
      }
      this.$emit('set-active-switch', this.item.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.item-switches {
  &__item {
    margin-right: 5px;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 10px 20px;
    border: 1px solid #E8E9EB;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: all 175ms ease-out;
    &:hover,
    &.active {
      color: #fff;
    }
    &.disabled {
      background-color: #C4C4C4;
      border-color: #C4C4C4;
      cursor: default;
      position: relative;
      overflow: hidden;
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 130%;
        height: 2px;
        background-color: #FF3C3C;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
      }
      &:hover {
        color: $text;
      }
    }
  }
}
</style>
