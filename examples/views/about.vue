<template>
  <div>
    <div class="center">
        <i class="ms-iconfont ms-iconbanben"></i>
        <p class="ms-notice">v{{ version }}</p>
      </div>
      <div>
        <div class="ms-group-title">
          <div class="ms-tap-active">
            <div class="demo-icon" style="color: rgb(247, 9, 104)">
              <i class="ms-iconfont ms-icondemo"></i>
            </div>
            <div class="ms-cell-hd">
              <p>Live Demo</p>
            </div>
            <div class="ms-cell__ft">
              <i class="ms-iconfont ms-iconaright"></i>
            </div>
          </div>
          <div class="ms-tap-active">
            <div class="demo-icon" style="color: rgb(53, 73, 94);">
              <i class="ms-iconfont ms-icongithub"></i>
            </div>
            <div class="ms-cell-hd">
              <p>Github</p>
            </div>
            <div class="ms-cell__ft">
              <span>Star me</span>
              <i class="ms-iconfont ms-iconaright"></i>
            </div>
          </div>
        </div>
      </div>
      <br />
     <p class="vue-version">current vue version: 2.5.2</p> 
  </div>
</template>
<script>
import config from '../../package.json';
export default {
  name: 'About',
  data() {
    return {
      version: config.version,
      vue: '2.5.2',
    };
  },
  created() {
    this.$emit('is-checked', 'home');
    this.$emit('get-name', 'Home');
  },
}
</script>
<style scoped lang="scss">
  .center {
    padding-top: 36PX;
    text-align: center;
    i {
      font-size: 50PX;
      color: #666;
    }
    .ms-notice {
      font-size: 18PX;
      line-height: 40PX;
      color: #666;
    }
  }
  .ms-group-title {
    margin-top: 80PX;
    font-size: 17PX;
    .ms-tap-active {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10PX 15PX;
      border-top: 1PX solid #d9d9d9;
      &:last-child {
        border-bottom: 1PX solid #d9d9d9;
      }
      .demo-icon {
        margin-right: 15px;
        font-size: 20PX;
        color: rgb(247, 9, 104);
        i {
          font-size: 20PX;
        }
      }
      .ms-cell-hd {
        flex: 1;
      }
      .ms-cell__ft {
        margin-right: 13px; /* no */
        color: #999;
      }
    }
  }
  .vue-version {
    font-size: 12px; /* no */
    color: #ccc;
    text-align: center;
  }

</style>