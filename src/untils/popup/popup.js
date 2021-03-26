import Vue from 'vue';
import { addClass, removeClass } from '../dom';

const getDOM = (dom) => {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};

export default {
  data() {
    return {
      hasModal: false,
      modalFade: false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(val) {
      if (val) {
        Vue.nextTick(() => {
          this.open();
        });
      } else {
        Vue.nextTick(() => {
          this.closeModal();
        });
      }
    },
  },
  methods: {
    open() {
      this.$emit('input', true);
      const dom  = getDOM(this.$el);
      this.openModal();
    },
    openModal() {
      const modalDom = this.getModal();
      if (!this.hasModal) {
        addClass(modalDom, 'v-modal');
        addClass(modalDom, 'v-modal-enter');
        document.body.appendChild(modalDom);
        setTimeout(() => {
          removeClass(modalDom, 'v-modal-enter');
        }, 200);
      }
    },
    getModal() {
      const modal = document.getElementsByClassName('v-modal');
      let modalDom;
      if (modal && modal.length) {
        this.hasModal = true;
        modalDom = modal[0];
        modalDom.style.display = 'block';
      } else {
        this.hasModal = false;
        modalDom = document.createElement('div');
      }
      modalDom.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      modalDom.addEventListener('click', (event) => {
        this.closeModal();
      });
      return modalDom;
    },
    closeModal() {
      this.$emit('input', false);
      const modalDom = this.getModal();
      console.log(modalDom.parentNode);
      addClass(modalDom, 'v-modal-leave');
      setTimeout(() => {
        if (modalDom && modalDom.parentNode) {
          modalDom.style.display = 'none';
        }
        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    },
  },
  destroy() {
    Vue.nextTick(() => {
      let modalDom = this.getModal();
      if (modalDom && modalDom.parentNode) {
        modalDom.parentNode.removeChild(modalDom);
        modalDom = undefined;
      }
    });
  },
};