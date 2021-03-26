<template>
  <div
    v-show="showNoticeBar"
    class="ms-noticebar"
    :style="barStyle"
    @click="handleClick">
    <div class="left-icon" v-if="iconShow"></div>
    <div class="wrap" ref="wrap">
      <div class="content"
        ref="content"
        :class="[animationClass]"
        :style="contentStyle"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MsNoticebar',
  props: {
    background: {
      type: String,
      default: 'rgba(254,250,216,1)'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    speed: {
      type: Number,
      default: 50
    },
    text: {
      type: String,
      default: ''
    },
    scrollable: { // 是否可以滚动
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      showNoticeBar: true,
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler(val) {
        this.$nextTick((_) => {
          const { wrap, content } = this.$refs;
          if (!wrap || !content) return;
          const wrapWidth = wrap.getBoundingClientRect().width;
          const offsetWidth = content.getBoundingClientRect().width;
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;
            this.duration = offsetWidth / this.speed;
            this.animationClass = 'play';
          } else {
            this.animationClass = '';
          }
        });
      },
      immediate: true,
    },
  },
  computed: {
    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    iconShow() {
      return this.leftIcon !== 'close';
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.animationClass = 'play-infinite';
        this.duration = (this.wrapWidth + this.offsetWidth) / this.speed;
      });
    },
  },
}
</script>
<style lang="scss" scoped>
  @import "./main.scss";

</style>