import MsDialog from './src/main';

MsDialog.install = function(Vue) {
  Vue.component(MsDialog.name, MsDialog);
};

export default MsDialog;