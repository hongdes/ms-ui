<template>
  <transition name="ms-board-slide-up" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="ms-numberkeyboard" v-show="visible">
      <div class="number-header" v-if="title">
        <h3 class="tit">{{ title }}</h3>
        <span class="keyboard-close">完成</span>
      </div>
      <div class="number-board-body">
        <div class="number-board">
          <div class="key-board-wrapper"
            v-for="(item, index) in keyList" :key="`key-${item.id}`">
            <div class="key"
              @touchstart="event => onTouchstart(item, event)"
              @touchend="onTouchEnd">
              <template>{{ item.id }}</template>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MsNumberkeyboard',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    customKey: {
      type: Array,
      default: () => []
    },
  },
  model: {
    prop: 'value',
    event: 'update:value'
  },
  data() {
    return {
      once: 0, //点击次数
      clickKeyIndex: undefined,
    };
  },
  created() {
    if (this.visible) {
      this.once += 1;
    }
  },
  mounted() {
    const that = this;
    this.$nextTick(() => {
      const targetArea = this.$el;
      document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
        let e = event || window.event;
        const ele = e.target;
        if (targetArea.contains(ele)) {
          const text = ele.innerText;
          if (text === '完成') {
            that.$emit('close');
          }
        } else {
          console.log(that.once);
          if (that.once === 0 && that.visible) {
            that.once += 1;
            return false;
          }
          that.closeBoard();
        }
      });
    });
  },
  computed: {
    keyList() {
      if (this.customKey === 'rightColumn' || this.title != '') {
        return this.getCustomKeys();
      }
      return this.getBasicKeys();
    },
  },
  methods: {
    getBasicKeys() {
      const keys = [];
      for (let i = 1; i <= 9; i ++) {
        keys.push({
          id: i,
          type: 'number',
        });
      }
      return keys;
    },
    getCustomKeys() {
      const keys = this.getBasicKeys();
      const { customKey } = this;
      let customKeys = Array.isArray(customKey) ? customKey : [customKey];
      if (customKeys.length > 2) {
        customKeys = [customKeys[0], customKeys[1]];
      }

    },
    defaultKey() {
      return [
        ...this.getBasicKeys(),
        { id: 'lock', type: 'lock' },
        { id: 0, type: 'number', },
        { id: 'delete', type: 'delete' }
      ];
    },
    afterEnter() {
      this.$emit('enter');
    },
    afterLeave() {
      this.$emit('leave');
    },
    closeBoard() {
      if (this.once > 0) {
        this.once = 0;
        this.$emit('close');
      }
    },
    onTouchstart(item, event) {
      event.stopPropagation();
      this.clickKeyIndex = item.id;
      if (item.type == 'number' || item.type == 'custom') {
         this.$emit('input', item.id);
        this.$emit('update:value', this.value + item.id);
      }
    },
    onTouchEnd() {
      this.clickKeyIndex = undefined;
    },
  },
}
</script>
<style lang="scss" scoped>
  @import "./main.scss";

</style>