<template>
  <div class="numberkeyboard-page">
    <ms-numberkeyboard :visible="visible1"
      @input="input"
      @close="closeAction"
      @enter="enter"
      @leave="leave"
      v-model="value"></ms-numberkeyboard>
    <ms-button @click="visible1 = true">默认键盘</ms-button>
    <input type="text" v-model="value">
  </div>
</template>
<script>
export default {
  name: 'Numberkeyboard',
  data() {
    return {
      visible1: false,
      value: ''
    };
  },
  created() {
    this.$emit('get-name', 'Numberkeyboard');
    this.$emit('is-checked', 'demo');
  },
  methods: {
    closeAction() {
      this.visible1 = false;
    },
    input(number) {
      console.log(`输入：${number}`);
      console.log(this.value);
      console.log(typeof this.value);
    },
    enter() {
      console.log('键盘弹起');
    },
    leave() {
      console.log('键盘收起');
    },
  },
}
</script>
<style lang="scss" scoped>

</style>