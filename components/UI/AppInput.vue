<template>
  <div class="input-wrapper">
    <div v-if="label.length" class="input-label">
      {{ label }}
    </div>
    <input
      :value="value"
      :type="inputType"
      class="input login__input"
      :class="{ '_error' : isError }"
      :placeholder="placeholder"
      :required="isRequired"
      :readonly="isReadonly"
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
    },
    isReadonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
