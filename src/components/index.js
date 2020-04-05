import header from './header'
import page from './page'
import toolList from './tool-list'
import appList from './app-list'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('tool-page', page)
        Vue.component('ui-tool-list', toolList)
        Vue.component('app-list', appList)
    }
}
