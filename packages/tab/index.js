import MsTab from './src/main';

MsTab.install = function(Vue) {
  Vue.component(MsTab.name, MsTab);
};

export default MsTab;