import Vue from 'vue';
import PopupManager from './popup-manager';

export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    modalClass: {},
    value: {
      type: Boolean,
      default: false
    },
  }
};
export { PopupManager };