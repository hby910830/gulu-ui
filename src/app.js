import Button from './button'
import ButtonGroup from './button-group'
import Cascader from './cascader'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Icon from './icon'
import MyPlugin from './plugin'
import Pager from './pager'
import Popover from './popover'
import Row from './row'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPanel from './tabs-panel'
import Vue from 'vue'

Vue.component('y-button', Button)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-cascader', Cascader)
Vue.component('y-col', Col)
Vue.component('y-collapse', Collapse)
Vue.component('y-collapse-item', CollapseItem)
Vue.component('y-icon', Icon)
Vue.component('y-pager', Pager)
Vue.component('y-popover', Popover)
Vue.component('y-row', Row)
Vue.component('y-tabs', Tabs)
Vue.component('y-tabs-body', TabsBody)
Vue.component('y-tabs-head', TabsHead)
Vue.component('y-tabs-item', TabsItem)
Vue.component('y-tabs-panel', TabsPanel)
Vue.use(MyPlugin)
new Vue({
	el: '#app',
	data: {
		source: [{
			name: '浙江',
			children: [
				{
					name: '杭州',
					children: [
						{name: '上城区'},
						{name: '下城区'},
						{name: '西湖区'},
					]
				}, {
					name: '嘉兴',
					children: [
						{name: '南湖区'},
						{name: '秀洲区'},
						{name: '嘉善区'},
					]
				}
			]
		}, {
			name: '贵州',
			children: [
				{
					name: '贵阳',
					children: [
						{name: '南明区'},
						{name: '观山湖区'},
						{name: '云岩区'},
					]
				},
				{
					name: '六盘水',
					children: [
						{name: '中山区'},
						{name: '凉都区'},
						{name: '主城区'},
					]
				}
			]
		}]
	},
	created() {
	},
	methods: {}
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
