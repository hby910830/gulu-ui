import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      let Constructor = Vue.extend(Toast)  //创造Toast子类的构造器
      let toast = new Constructor({
        propsData: options
      })
      toast.$slots.default = message //设置组建的默认slots
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}