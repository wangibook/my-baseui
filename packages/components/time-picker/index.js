import mTimePicker from './src/index.vue';

mTimePicker.install = (Vue) => {
  Vue.component(mTimePicker.name,mTimePicker)
}

export default mTimePicker;
