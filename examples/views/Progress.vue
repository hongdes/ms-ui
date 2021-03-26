<template>
  <div class="progress-page"></div>
</template>
<script>
export default {
  name: 'Progress',
  created() {
    this.$emit('get-name', 'Progress');
    this.$emit('is-checked', 'demo');
  },
}
</script>