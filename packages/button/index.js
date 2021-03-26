import MsButton from './src/main';

MsButton.install = function(Vue) {
  Vue.component(MsButton.name, MsButton);
};

export default MsButton;