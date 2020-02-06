import Toast from './toast'

let currentToast
export default {
	install(Vue) {
		Vue.prototype.$toast = function (message, options) {
			if (currentToast) {
				currentToast.close()
			}
			currentToast = createToast({
				Vue,
				message,
				propsData: options,
				onClose: () => {
					currentToast = null
				}
			})
		}
	}
}

// helper
function createToast({Vue, message, propsData, onClose}) {
	let Constructor = Vue.extend(Toast)  //创造Toast子类的构造器
	let toast = new Constructor({propsData})
	toast.$slots.default = message //设置组建的默认slots
	toast.$mount()
	toast.$on('close', onClose)
	document.body.appendChild(toast.$el)
	return toast
}