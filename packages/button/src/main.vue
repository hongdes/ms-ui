<template>
  <button
    class="ms-button"
    :class="[
      type ? 'ms-button--' + type : ''
    ]"
    @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>  
  </button>
</template>
<script>
export default {
  name: 'MsButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    loading: Boolean,
    disabled: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>