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
import mOption from "./components/option/index";
import mSwitch from "./components/switch/index";
import mCheckbox from "./components/checkbox/index";
import mCheckboxGroup from "./components/checkbox-group/index";
import mCheckboxButton from "./components/checkbox-button/index";
import mInputNumber from "./components/input-number/index";
import mTimePicker from "./components/time-picker/index";
import mDatePicker from "./components/date-picker/index";
import mRate from "./components/rate/index";
// Data 数据展示
import mProgress from "./components/progress/index";
import mCard from "./components/card/index";
import mBadge from "./components/badge/index";
import mTable from "./components/table/index";
import mTableColumn from "./components/table-column/index";
import mPagination from "./components/pagination/index";
import mTree from "./components/tree/index";
// Navigation 导航
import mBreadcrumb from "./components/breadcrumb/index";
import mBreadcrumbItem from "./components/breadcrumb-item/index";
import mDropdown from "./components/dropdown/index";
import mDropdownItem from "./components/dropdown-item/index";
import mDropdownMenu from "./components/dropdown-menu/index";
import mTabs from "./components/tabs/index";
import mTabPane from "./components/tab-pane/index";
import mMenu from "./components/menu/index";
import mMenuGroup from "./components/menu-group/index";
import mMenuItem from "./components/menu-item/index";
import mSubmenu from "./components/submenu/index";
//Feedback 反馈组件
import mAlert from "./components/alert/index";
import mDialog from "./components/dialog/index";
import mMessage from "./components/message/index";
import mDrawer from "./components/drawer/index";
import Loading from "./components/loading";

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
  mOption,
  mSwitch,
  mCheckbox,
  mCheckboxGroup,
  mCheckboxButton,
  mInputNumber,
  mTimePicker,
  mDatePicker,
  mRate,
  //Data 数据展示
  mProgress,
  mCard,
  mBadge,
  mTable,
  mTableColumn,
  mPagination,
  mTree,
  //Navigation 导航
  mBreadcrumb,
  mBreadcrumbItem,
  mDropdown,
  mDropdownItem,
  mDropdownMenu,
  mTabs,
  mTabPane,
  mMenu,
  mMenuGroup,
  mMenuItem,
  mSubmenu,
  //Feedback 反馈组件
  mAlert,
  mDialog,
  mDrawer
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
  Vue.config.globalProperties.$message = mMessage
  Vue.config.globalProperties.$loading = Loading.service
  Vue.directive('loading', Loading.directive);
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
  mOption,
  mSwitch,
  mCheckbox,
  mCheckboxGroup,
  mCheckboxButton,
  mInputNumber,
  mTimePicker,
  mDatePicker,
  mRate,
  //Data 数据展示
  mProgress,
  mCard,
  mBadge,
  mTable,
  mTableColumn,
  mPagination,
  mTree,
  //Navigation 导航
  mBreadcrumb,
  mBreadcrumbItem,
  mDropdown,
  mDropdownItem,
  mDropdownMenu,
  mTabs,
  mTabPane,
  mMenu,
  mMenuGroup,
  mMenuItem,
  mSubmenu,
  //Feedback 反馈组件
  mAlert,
  mDialog,
  mMessage,
  mDrawer
}