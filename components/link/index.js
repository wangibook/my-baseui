import mLink from './index.vue'
mLink.install = app => {
  app.component(mLink.name, mLink)
} 
export default mLink;