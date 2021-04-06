import Button from '../packages/button';
import Dialog from '../packages/dialog';
import ImageViewer from '../packages/image-viewer';
import Toast from '../packages/toast';
import Signature from '../packages/signature';
import Noticebar from '../packages/noticebar';
import Numberkeyboard from '../packages/numberkeyboard';
import Luckdraw from '../packages/luckdraw';
import Actionsheet from '../packages/action-sheet';
import Tab from '../packages/tab';
import TabItem from '../packages/tab-item';

const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(Dialog.name, Dialog);
  Vue.component(ImageViewer.name, ImageViewer);
  Vue.component(Signature.name, Signature);
  Vue.component(Noticebar.name, Noticebar);
  Vue.component(Numberkeyboard.name, Numberkeyboard);
  Vue.component(Luckdraw.name, Luckdraw);
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Tab.name, Tab);
  Vue.component(TabItem.name, TabItem);
  Vue.prototype.$toast = Toast;
  

};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  Button,
  Dialog,
  ImageViewer,
  Signature,
  Noticebar,
  Numberkeyboard,
  Luckdraw,
  Actionsheet,
  Tab,
  TabItem,
  Toast,
};