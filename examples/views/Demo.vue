<template>
  <div class="ms_view_box_body">
    <div class="router-view">
      <div class="ms-flex-item"
        v-for="(item, index) in list"
        :key="item.name"
        :class="(index+1)%3 === 0 ? 'is-last' : ''">
        <router-link  class="cbox-inner" :to="item.path">
          <span class="demo-icon-big">
            <i class="ms-iconfont" :class="item.icon"></i>
          </span>
          <br />
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import routerList from '../router/routerList';
export default {
  name: 'Demo',
  data() {
    return {
      list: routerList,
    };
  },
  created() {
    this.$emit('is-checked', 'demo');
    this.$emit('get-name', 'Demo list');
  },
}
</script>
<style scoped lang="scss">
  .ms_view_box_body {
    margin-bottom: 10px;
    overflow: auto;
    background-color: #fff;
    .router-view {
      display: flex;
      flex-wrap: wrap;
      .ms-flex-item {
        flex: 0 0 33%;
        margin-right: 0;
        text-align: center;
        border-right: 1px solid #c7c7c7; /* no */
        border-bottom: 1px solid #c7c7c7; /* no */
        &.is-last {
          border-right: none;
        }
        .cbox-inner {
          display: block;
          padding: 15px 0;
          color: #000;
          .demo-icon-big {
            i {
              font-size: 28PX;
              color: #04be02;
            }
          }
        }
      }
    }
  }

</style>