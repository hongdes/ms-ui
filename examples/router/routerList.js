export default [
  {
    path: '/dialog',
    name: 'Dialog',
    icon: 'ms-icondankuang',
    meta: {
      permission: true,
    },
    component: () => import(/* webpackChunkName: "question" */ '../views/Dialog.vue'),
  },
  {
    path: '/image-viewer',
    name: 'image-viewer',
    icon: 'ms-icontupian',
    component: () => import('../views/ImageViewer'),
    meta: {
      title: '图片放大缩小拖拽'
    },
  },
  {
    path: '/toast',
    name: 'toast',
    icon: 'ms-icontishikuang',
    component: () => import('../views/Toast'),
    meta: {
      title: '提示框'
    },
  },
  {
    path: '/progress',
    name: 'progress',
    icon: 'ms-iconjindutiao',
    component: () => import('../views/Progress'),
    meta: {
      title: '进度条'
    },
  },
  {
    path: '/tab',
    name: 'tab',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Tab'),
    meta: {
      title: 'tab标签页'
    },
  },
  {
    path: '/signature',
    name: 'signature',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Signature'),
    meta: {
      title: 'signature签名'
    },
  },
  {
    path: '/noticebar',
    name: 'noticebar',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Noticebar'),
    meta: {
      title: 'noticebar公告栏'
    },
  },
  {
    path: '/numberkeyboard',
    name: 'numberkeyboard',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Numberkeyboard'),
    meta: {
      title: 'numberkeyboard数字键盘'
    },
  },
  {
    path: '/luckdraw',
    name: 'luckdraw',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Luckdraw'),
    meta: {
      title: 'luckdraw转盘抽奖'
    },
  },
  {
    path: '/actionsheet',
    name: 'actionsheet',
    icon: 'ms-icon-Switchtab',
    component: () => import('../views/Actionsheet'),
    meta: {
      title: 'Action Sheet'
    },
  },
];