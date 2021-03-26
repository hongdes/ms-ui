<template>
  <transition name="actionsheet-float">
    <div class="ms-actionsheet"
      v-show="currentValue">
      <ul class="ms-actionsheet-list">
        <li class="ms-actionsheet-listitem" 
          v-for="(item, index) in actions"
          :key="`list${index}`"
          @click.stop="itemClick(item, index)"> {{ item.name }} </li>
      </ul>  
    </div>
  </transition>
</template>
<script>
import Popup from '@/untils/popup/popup';

let idSeed = 1;
export default {
  name: 'MsActionsheet',
  mixins: [Popup],
  data() {
    return {
      currentValue: false,
    }
  },
  props: {
    modal: {
      default: true,
    },
    actions: {
      type: Array,
      default: () => []
    },
  },
  watch: {
    value(val) {
      console.log(val, 'val-----');
      this.currentValue = val;
      
    },
    currentValue(val) {
      this.$emit('input', val);
    },
  },
  beforeCreate() {
  },
  created() {
    if (this.value) {
      this.currentValue = true;
      this.open();
    }
  },
  methods: {
    itemClick(item, index) {
      if (item.method && typeof item.method === 'function') {
        item.method(item, index);
      }
      this.currentValue = false;
    },
  },
  beforeDestroy() {
    
  },
}
</script>
<style scoped lang="scss">
  @import "./main.scss";

</style>