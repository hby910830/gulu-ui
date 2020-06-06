document.addEventListener('click', e => {
	callbacks.forEach(item => {
		if (!item.el.contains(e.target)) {
			item.callback()
		}
	})
})
let callbacks = []
export default {
	bind(el, binding, vnode) {
		callbacks.push({el, callback: binding.value})
	}
}