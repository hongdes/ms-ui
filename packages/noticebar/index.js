import Noticebar from './src/main';

Noticebar.install = function(Vue) {
  Vue.component(Noticebar.name, Noticebar);
};
export default Noticebar;
