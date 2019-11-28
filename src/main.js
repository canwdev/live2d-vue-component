import Vue from 'vue'
import Live2DDemo from './Live2DDemo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Live2DDemo),
}).$mount('#app')

// 导出组件
import Live2D from './components/Live2D'

export default Live2D