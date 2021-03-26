<template>
  <transition name="fade" @after-leave="handleAfterLeave">
    <div
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      class="ms-toast toast-fade-in"
      v-if="visible">
      <div class="ms-toast__body">
        <i class="iconfont" :class="iconClass" v-if="iconClass"></i>
        <slot>
          <p v-if="!dangerouslyUseHTMLString" class="ms-toast__content">{{ message }}</p>
          <p v-else v-html="message" class="ms-toast__content"></p>
        </slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MsToast',
  data() {
    return {
      message: '',
      type: 'error',
      customClass: '',
      duration: 3000,
      timer: null,
      iconClass: '',
      dangerouslyUseHTMLString: false,
      visible: false,
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.visible = false;
          }
        }, this.duration);
      }
    },
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>