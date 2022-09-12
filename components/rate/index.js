import mRate from './index.vue';

mRate.install = app => {
  app.component(mRate.name, mRate)
} 
export default mRate;