<template>
  <div class="ms-signature" :class="customClass">
    <div class="ms-signature-inner" ref="wrap">
      <canvas ref="canvas" :height="canvasHeight" :width="canvasWidth"
        v-if="isCanvasSupported"></canvas>
        <p v-else class="ms-signature-unsoport">{{ unSupportTpl }}</p>
    </div>
    <slot></slot>
    <ms-button @click="clear">重签</ms-button>
    <ms-button @click="confirm">确认</ms-button>
  </div>
</template>
<script>
export default {
  name: 'MsSignature',
  data() {
    return {
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: 'ontouchstart' in window,
      events: 'ontouchstart' in window ? ['touchstart', 'touchmove', 'touchend', 'touchleave'] : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']
    };
  },
  props: {
    customClass: {
      type: String,
      default: ''
    },
    unSupportTpl: {
      type: String,
      default: '对不起，当前浏览器不支持Canvas，无法使用本控件！'
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: '#000'
    },
    type: {
      type: String,
      default: 'png'
    }
  },
  computed: {
    isCanvasSupported() {
      let elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }
  },
  mounted() {
    if (this.isCanvasSupported) {
      this.ctx = this.$refs.canvas.getContext('2d');
      this.canvasWidth = this.$refs.wrap.offsetWidth;
      (this.canvasHeight = this.$refs.wrap.offsetHeight), this.addEvent();
    }
  },
  methods: {
    addEvent() {
      this.$refs.canvas.addEventListener(this.events[0], this.startEventHandler, false);
    },
    startEventHandler(event) {
      event.preventDefault();
      console.log('satrt');
      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.strokeStyle;
      this.$refs.canvas.addEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
      this.$refs.canvas.addEventListener(this.events[3], this.leaveEventHandler, false);
    },
    moveEventHandler(event) {
      event.preventDefault();
      const evt = this.isSupportTouch ? event.touches[0] : event;
      const coverPos = this.$refs.canvas.getBoundingClientRect();
      const mouseX = evt.clientX - coverPos.left;
      const mouseY = evt.clientY - coverPos.top;

      this.ctx.lineTo(mouseX, mouseY);
      this.ctx.stroke();
    },
    endEventHandler(event) {
      event.preventDefault();
      this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
    },
    leaveEventHandler(event) {
      event.preventDefault();
      this.$refs.canvas.removeEventListener(this.events[1], this.moveEventHandler, false);
      this.$refs.canvas.removeEventListener(this.events[2], this.endEventHandler, false);
    },
    clear(isUnEmit) {
      this.$refs.canvas.addEventListener(this.events[2], this.endEventHandler, false);
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.closePath();
      !isUnEmit && this.$emit('clear');
    },
    confirm() {
      this.onSave(this.$refs.canvas);
    },
    onSave(canvas) {
      let dataurl;
      switch (this.type) {
        case 'png':
          dataurl = canvas.toDataURL('image/png');
          break;
        case 'jpg':
          dataurl = canvas.toDataURL('iamge/jpeg', 0.8);
          break;
      }
      this.clear(true);
      this.$emit('confirm', canvas, dataurl);
    },
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>