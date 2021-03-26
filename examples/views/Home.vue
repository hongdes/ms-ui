<template>
  <div class="home-page">
    <div class="ms-header">
      <div class="ms-header-left"
        v-show="titleName !== 'Home'"
        @click="backActionn">
        <i class="ms-iconfont ms-iconright-angle-copy"></i>
        返回
      </div>
      <div class="ms-header-title">
        <span>{{ titleName }}</span>
      </div>
    </div>
    <div class="container-home">
      <router-view
        @is-checked="isChecked"
        @get-name="getName"/>
    </div>
    <div class="ms-footer">
      <router-link to="/" class="ms-bar-item">
        <div>
          <div class="icon-label"
            :class="checkedStatus == 'home' ? 'is-active' : ''">
            <i class="ms-iconfont ms-iconshouye"></i>
          </div>
          <div class="text-label">
            <p>Home</p>
          </div>
        </div>
      </router-link>
      
      <router-link to="/demo" class="ms-bar-item">
        <div>
          <div class="icon-label"
            :class="checkedStatus == 'demo' ? 'is-active' : ''">
            <i class="ms-iconfont ms-icondemo"></i>
          </div>
          <div class="text-label">
            <p>Demos</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      checkedStatus: 'home',
      titleName: 'Home',
    };
  },
  methods: {
    isChecked(val) {
      this.checkedStatus = val;
    },
    getName(val) {
      this.titleName = val;
    },
    backActionn() {
      history.go(-1);
    },
  },
}
</script>
<style scoped lang="scss">
  .home-page {
    padding-bottom: 20px;
    overflow: hidden;
  }
  .ms-header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3PX 0;
    background-color: #35495e;
    .ms-header-left,
    .ms-header-left i {
      font-size: 14PX;
      color: #ccc;
    }
    .ms-header-left {
      margin-left: 10PX;
    }
    .ms-header-title {
      flex: 1;
      height: 40PX;
      // margin: 0 88PX;
      font-size: 18PX;
      line-height: 40PX;
      color: #fff;
      text-align: center;
    }
  }
  .container-home {
    margin-top: 46PX;
  }
  .ms-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    background-color: #f7f7fa;
    border-top: 1px solid #c0bfc4; /* no */
    .ms-bar-item {
      flex: 1;
      padding: 5PX 0 0 0;
      color: #999;
      text-align: center;
      cursor: pointer;
      .icon-label i {
        font-size: 26PX;
      }
      .text-label {
        font-size: 10PX;
        line-height: 1.8;
      }
    }
  }
  .is-active {
    color: rgb(247, 9, 104);
  }
  .is-active ~ .text-label {
    color: rgb(247, 9, 104);
  }

</style>