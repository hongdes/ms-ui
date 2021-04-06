<template>
  <div class="ms-tab-wrap">
    <div class="ms-tab-container">
      <div class="ms-tab" ref="nav"
        :class="[{'ms-tab-no-animate': !animate},{ scrollable }]">
        <slot></slot>
        <div
          v-if="animate"
          class="ms-tab-ink-bar"
          :class="barClass"
          :style="barStyle">
          <span
            class="ms-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MsTab',
  data() {
    return {
      hasReady: false,
      index: -1,
      currentIndex: -1,
      direction: 'forward',
      number: this.$children.length,
    };
  },
  watch: {
    index(val) {
      this.currentIndex = val;
    },
    currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      this.direction = val > oldVal ? 'forward' : 'backward';
      this.$emit('on-index-change', val, oldVal);
      this.hasReady && this.scrollToActiveTab();
    },
  },
  mounted () {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true
      }, 0)
    });
    this.number = this.$children.length;
    this.updateIndex();
  },
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    barActiveColor: String,
    activeColor: String,
    lineWidth: {
      type: Number,
      default: 3
    },
    scrollThreshold: {
      type: Number,
      default: 4
    }
  },
  computed: {
    barClass () {
      return {
        'ms-tab-ink-bar-transition-forward': this.direction === 'forward',
        'ms-tab-ink-bar-transition-backward': this.direction === 'backward'
      }
    },
    innerBarStyle () {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      }
    },
    barLeft () {
      if (this.hasReady) {
        const nav = this.$refs.nav
        const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number;
        console.log(this.$children, 'number----');
        console.log(this.currentIndex * (100 / count), 'count---');
        return `${this.currentIndex * (100 / count)}%`
      }
    },
    barRight () {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        console.log(nav.offsetWidth);
        const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number;
        console.log(count, 'right---');
        return `${(count - this.currentIndex - 1) * (100 / count)}%`
      }
    },
    barStyle () {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      }
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor
      } else {
        commonStyle.background = 'transparent' // when=prop:custom-bar-width
      }
      return commonStyle
    },
    scrollable () {
      return this.number > this.scrollThreshold
    }
  },
  methods: {
    updateIndex() {
      if (!this.$children || !this.$children.length) return;
      const children = this.$children;
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i;
        if (children[i].currentSelected) {
          this.index = i;
        }
      }
    },
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    },
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>