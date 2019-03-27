import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Col from './col'
import Row from './row'
import ButtonGroup from './button-group'
import MyPlugin from './plugin'

Vue.component('y-button', Button)
Vue.component('y-col', Col)
Vue.component('y-row', Row)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.use(MyPlugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
  created() {
  },
  methods: {
    showToast() {
      this.$toast('很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字', {
        closeButton: {
          text: '关闭',
          callback() {
            console.log('我知道到了')
          },
          enableHtml: false
        }
      })
    }
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
