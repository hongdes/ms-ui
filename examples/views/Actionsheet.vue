<template>
  <div>
    <ms-actionsheet :actions="actions" v-model="sheetVisible"></ms-actionsheet>
    <div class="actionsheet-page">
      <ms-button @click="sheetVisible = true">点击上拉action sheet</ms-button>   
    </div>
  </div>
</template>
<script>
export default {
  name: 'Actionsheet',
  data() {
    return {
      sheetVisible: false,
      actions: [],
    }
  },
  created() {
    this.$emit('get-name', 'Action Sheet');
    this.$emit('is-checked', 'demo');
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '从相册中选择',
      method: this.openAlbum
    }];
    console.log(this.$isServer);
  },
}
</script>
<style scoped lang="scss">
  .actionsheet-page {
    position: absolute;
    top: 50%;
    width: 100%;
    // padding: 0 20px;
    transform: translateY(-50%);
  }

</style>