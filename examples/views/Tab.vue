<template>
  <div class="tab-page">
    <ms-tab>
      <ms-tab-item selected @on-item-click="onItemClick">已发货</ms-tab-item>
      <ms-tab-item @on-item-click="onItemClick">未发货</ms-tab-item>
      <ms-tab-item @on-item-click="onItemClick">全部订单</ms-tab-item>
    </ms-tab>
    <br/><br/>
    <ms-tab>
      <ms-tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{n}}</ms-tab-item>
    </ms-tab>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  created() {
    this.$emit('get-name', 'Tab');
  },
  methods: {
    onItemClick(index) {
      console.log(index);
    },
  },
}
</script>