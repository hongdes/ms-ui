<template>
  <div class="signature-page">
    <ms-signature @confirm="confirm"></ms-signature>
    <div class="demo"></div>
  </div>
</template>
<script>
export default {
  name: 'Signature',
  created() {
    this.$emit('get-name', 'Signature');
    this.$emit('is-checked', 'demo');
  },
  methods: {
    confirm(canvas, data) {
      console.log(canvas, data);
      const img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo').appendChild(img);
    },
    clear() {
      const img = document.querySelector('.demo img'); 
      img && img.remove();
    },
  },
}
</script>
<style scoped>
  .signature-page {
    padding: 0 16px; /* no */
    margin: 5px 0; /* no */
  }

</style>