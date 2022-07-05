//导入组件
import mButton from "./components/button/index";
import mInput from "./components/input/index";
import mRow from "./components/row/index";
import mCol from "./components/col/index";
import mSpace from "./components/space/index";
import mTextarea from "./components/textarea/index";
import mLink from "./components/link/index";
import mTag from "./components/tag/index";
import mRadio from "./components/radio/index";
import mRadioGroup from "./components/radio-group/index";
import mRadigButton from "./components/radio-button/index";
import mSelect from "./components/select/index";
import mSwitch from "./components/switch/index";
import mCheckbox from "./components/checkbox/index";
import mCheckboxGroup from "./components/checkbox-group/index";
import mCheckboxButton from "./components/checkbox-button/index";

// 组件列表
const components = [
  mButton,
  mInput,
  mRow,
  mCol,
  mSpace,
  mTextarea,
  mLink,
  mTag,
  mRadio,
  mRadioGroup,
  mRadigButton,
  mSelect,
  mSwitch,
  mCheckbox,
  mCheckboxGroup,
  mCheckboxButton
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  mButton,
  mInput,
  mRow,
  mCol,
  mSpace,
  mTextarea,
  mLink,
  mTag,
  mRadio,
  mRadioGroup,
  mRadigButton,
  mSelect,
  mSwitch,
  mCheckbox,
  mCheckboxGroup,
  mCheckboxButton
}