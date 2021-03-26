<template>
  <div class="dialog-page">
    <ms-button @click="openDialog">打开dialog弹框</ms-button>
    <ms-dialog :visible.sync="isVisible"></ms-dialog>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  created() {
    console.log('121212');
    this.$emit('is-checked', 'demo');
    this.$emit('get-name', 'Dialog');
  },
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    si: Boolean,
  },
  methods: {
    openDialog() {
      console.log('open-dialog');
      console.log(this.$props);
      this.isVisible = true;
    }
  },
}
</script>
<style scoped lang="scss">
  .dialog-page {
    padding-top: 20px;
    margin: 0 80px;
  }

</style>