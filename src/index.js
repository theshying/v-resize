import vResize from './v-resize'
const install = (Vue) => {
    Vue.directive('resize', vResize)
}
export default install