<template>
  <div class="ms-tab-item"
    :class="[currentSelected ? activeClass : '', {
      'ms-tab-selected': currentSelected,
      'ms-tab-disabled': disabled 
    }]"
    :style="style"
    @click="onItemClick">
    <slot></slot>
    <span
      :style="{
        background: badgeBackground,
        color: badgeColor
      }"
      class="ms-tab-item-badge"
      v-if="isBadgeLabel"></span>
  </div>
</template>
<script>
// 13166433940
export default {
  name: 'MsTabItem',
  data() {
    return {
      currentSelected: this.selected,
      currentIndex: -1,
      index: -1,
    };
  },
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String,
    selected: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.currentIndex);
    });
  },
  computed: {
    style () {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      }
    },
    isBadgeLabel() {
      return typeof this.badgeLabel !== 'undefined' && this.badgeLabel !== '';
    },
  },
  watch: {
    currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    },
    index(val) {
      this.currentIndex = val;
    },
    selected (val) {
      this.currentSelected = val;
    }
  },

  methods: {
    onItemClick() {
      if (!this.disabled) {
        this.currentSelected = true;
        this.$parent.currentIndex = this.currentIndex;
        this.$emit('on-item-click', this.currentIndex);
      }
    },
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>