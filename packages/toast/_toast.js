import Vue from 'vue';
import Main from './src/main.vue';

const MessageConstructor = Vue.extend(Main);
let instance;
let seed = 1;

const Toast = function (options) {
  if (Vue.prototype.$isServer) return false;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  let id = 'toast_' + seed++;
  instance = new MessageConstructor({
    data: options,
  });
  instance.visible = true;
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  return instance;
};
export default Toast;
