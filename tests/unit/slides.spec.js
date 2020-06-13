import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '../../src/slides'
import SlidesItem from '../../src/slides-item'
import Vue from 'vue'

chai.use(sinonChai)
describe('Slides.vue', () => {
	it('存在.', () => {
		expect(Slides).to.exist
	})
	it('接受GuluSlidesItem, 默认展示第一个', (done) => {
		Vue.component('YSlidesItem', SlidesItem)
		const wrapper = mount(Slides, {
		  propsData:{
		    autoPlay: false
      },
			slots: {
				default: `
          <y-slides-item name="1">
            <div class="box">1</div>
          </y-slides-item>
          <y-slides-item name="2">
            <div class="box">2</div>
          </y-slides-item>
          <y-slides-item name="3">
            <div class="box">3</div>
          </y-slides-item>
			`
			}
		})
    setTimeout(() => {
      console.log(wrapper.find('.box').element)
      expect(wrapper.find('.box').element).to.exist
      done()
    })
	})
})