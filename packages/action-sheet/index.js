import MsActionsheet from './src/main';

MsActionsheet.install = function(Vue) {
  Vue.component(MsActionsheet.name, MsActionsheet);
};

export default MsActionsheet;