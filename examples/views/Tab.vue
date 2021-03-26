<template>
  <div class="tab-page"></div>
</template>
<script>
export default {
  name: 'Tab',
  created() {
    this.$emit('get-name', 'Tab');
  },
}
</script>