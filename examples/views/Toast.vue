<template>
  <div class="toast-page">
    <ms-button @click="openToast">打开dialog弹框</ms-button>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  created() {
    this.$emit('get-name', 'Toast');
    this.$emit('is-checked', 'demo');
  },
  methods: {
    openToast() {
      this.$toast({
         message: '这是一条信息',
         duration: 3000,
       });
    },
  },
}
</script>