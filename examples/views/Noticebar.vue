<template>
  <div class="noticebar-page">
    <ms-noticebar text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"></ms-noticebar>
  </div>
</template>
<script>
export default {
  name: 'Noticebar',
  created() {
    this.$emit('get-name', 'Noticebar');
    this.$emit('is-checked', 'demo');
  },
}
</script>