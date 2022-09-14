import alertContent from '/packages/components/alert/doc/content.json';
import dialogContent from '/packages/components/dialog/doc/content.json';
import messageContent from '/packages/components/message/doc/content.json';
import drawerContent from '/packages/components/drawer/doc/content.json';
import loadingContent from '/packages/components/loading/doc/content.json';

export const feedbackComponent = [
  {
    path: '/alert',
    name: 'Alert 提示',
    content: alertContent,
    component: () => import('/packages/components/alert/doc/doc.md')
  },
  {
    path: '/dialog',
    name: 'Dialog 对话框',
    content: dialogContent,
    component: () => import('/packages/components/dialog/doc/doc.md')
  },
  {
    path: '/message',
    name: 'Message 消息提示',
    content: messageContent,
    component: () => import('/packages/components/message/doc/doc.md')
  },
  {
    path: '/drawer',
    name: 'Drawer 抽屉',
    content: drawerContent,
    component: () => import('/packages/components/drawer/doc/doc.md')
  },
  {
    path: '/loading',
    name: 'Loading 加载',
    content: loadingContent,
    component: () => import('/packages/components/loading/doc/doc.md')
  },
]