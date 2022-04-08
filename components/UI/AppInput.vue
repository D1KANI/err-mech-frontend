<template>
  <div class="input-wrapper">
    <input
      :value="value"
      :type="inputType"
      class="input login__input"
      :class="{ '_error' : isError }"
      :placeholder="label"
      :required="isRequired"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      required: true
    },
    isError: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
