<template>
  <transition name="dialog-fade">
    <div class="ms-dialog__wrapper"
      :class="customClass"
      v-show="visible">
      <div class="ms-mask"></div>
      <div class="ms-dialog-box">
        <div class="ms-dialog">
          <span class="ms-dialog-close" v-if="closeBtn"></span>
          <div class="ms-dialog-body">
            <div class="ms-dialog-title">
              {{ title }}
            </div>
            <div class="ms-dialog-content" v-if="$slots.default">
              <slot></slot>
            </div>
          </div>
          <div class="ms-dialog-footer" v-if="!noFooter">
            <button class="ms-dialog-btn btn1" @click="btn1Action">{{ btn1Txt }}</button>
            <button class="ms-dialog-btn btn2" @click="btn2Action">{{ btn2Txt }}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MsDialog',
  data() {
    return {
      curVisible: false,
    };
  },
  props: {
    visible: Boolean,
    appendToBody: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '确认退出',
    },
    closeBtn: Boolean,
    noFooter: {
      type: Boolean,
      default: false,
    },
    btn1Txt: {
      type: String,
      default: '确认退出',
    },
    btn2Txt: {
      type: String,
      default: '继续答题',
    },
    customClass: {
      type: String,
      default: '',
    },
    contentTitle: {
      type: String,
      default: '<p>本次答题还未做完哦！</p><p>确认要退出吗？</p>'
    },
  },
  watch: {
    visible(val) {
      this.curVisible = val;
      if (val) {
        this.closed = false;
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },
  },
  mounted() {
    if (this.visible) {
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  methods: {
    btn1Action() {
      this.$emit('cancel-action');
      this.$emit('update:visible', false);
      this.curVisible= false;
    },
    btn2Action() {
      this.$emit('ok-action');
      this.$emit('update:visible', false);
      this.curVisible = false;
    },
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>