import mCard from './index.vue';

mCard.install = (Vue) => {
  Vue.component(mCard.name,mCard)
}

export default mCard;
