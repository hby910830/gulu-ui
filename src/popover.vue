<template>
 <div class="popover">
	<div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop="yyy">
	 <slot name="content"></slot>
	</div>
	<div ref="triggerWrapper" @click="onClick">
	 <slot></slot>
	</div>
 </div>
</template>

<script>
	export default {
		name: "GuluPopover",
		data() {
			return {
				visible: false
			}
		},
		mounted() {
		},
		methods: {
			yyy() {
				console.log(1);
			},
			positionContent() {
				document.body.appendChild(this.$refs.contentWrapper)
				let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
				this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
				this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
			},
			listenToDocument() {
				let eventHandler = () => {
					this.visible = false
					document.removeEventListener('click', eventHandler)
				}
				document.addEventListener('click', eventHandler)
			},
			onShow() {
				setTimeout(() => {
					this.positionContent()
					this.listenToDocument()
				}, 300)
			},
			onClick() {
				this.visible = !this.visible
				if (this.visible) {
					this.onShow()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
 .popover {
	display: inline-block;
	vertical-align: top;
	position: relative;
 }
 .content-wrapper {
	position: absolute;
	border: 1px solid red;
	box-shadow: 0 0 3px rgba(0, 0, 0, .5);
	transform: translateY(-100%);
 }
</style>