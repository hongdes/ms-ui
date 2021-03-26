import Luckdraw from './src/main';

Luckdraw.install = function(Vue) {
  Vue.component(Luckdraw.name, Luckdraw);
};

export default Luckdraw;