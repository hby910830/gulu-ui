import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Col from './col'
import Row from './row'
import ButtonGroup from './button-group'
import MyPlugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPanel from './tabs-panel'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Pager from './pager'

Vue.component('y-button', Button)
Vue.component('y-col', Col)
Vue.component('y-row', Row)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.use(MyPlugin)
Vue.component('y-tabs', Tabs)
Vue.component('y-tabs-head', TabsHead)
Vue.component('y-tabs-item', TabsItem)
Vue.component('y-tabs-body', TabsBody)
Vue.component('y-tabs-panel', TabsPanel)
Vue.component('y-popover', Popover)
Vue.component('y-collapse', Collapse)
Vue.component('y-collapse-item', CollapseItem)
Vue.component('y-pager', Pager)

new Vue({
  el: '#app',
  data: {
    currentPage: 1
  },
  created() {

  },
  methods: {
  }
})


//单元测试
import chai from 'chai'
import spy from 'chai-spies'

chai.use(spy)

const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true,
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  //mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let spy = chai.spy(function () {
  })
  vm.$on('click', spy)
  //希望这个函数被执行
  vm.$el.click()
  expect(spy).to.have.been.called()
  vm.$el.remove()
  vm.$destroy()
}
