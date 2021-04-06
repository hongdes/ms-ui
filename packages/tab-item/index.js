import MsTabItem from './src/main';

MsTabItem.install = function(Vue) {
  Vue.component(MsTabItem.name, MsTabItem);
};

export default MsTabItem;