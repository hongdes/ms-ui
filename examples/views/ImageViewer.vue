<template>
  <div class="image-viewer-page">
  </div>
</template>
<script>
export default {
  name: 'ImageViewer',
  created() {
    this.$emit('get-name', 'ImageViewer');
  },
}
</script>