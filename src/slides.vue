<template>
	<div class="y-slides">
		<div class="y-slides-window">
			<div class="y-slides-wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slides',
		props: {
			selected: {
				type: String
			},
			autoPlay: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			playAutomatically() {
				const names = this.$children.map(vm => vm.name)
				let index = names.indexOf(this.getSelected())
				// setInterval(() => {
				// 	if(index === names.length){
				// 		index = 0
				// 	}
				// 	this.$emit('update:selected', names[index + 1])
				// 	index++
				// }, 2000)

				let run = () => {	//用 setTimeout 模拟 setInterval
					if(index === names.length){index = 0}
					this.$emit('update:selected', names[index + 1])
					index++
					setTimeout(run, 2000)
				}
				run()
			},
			updateChildren() {
				let selected = this.getSelected()
				this.$children.forEach(vm => {
					vm.selected = selected
				})
			},
			getSelected(){
				let first = this.$children[0]
				return this.selected || first.name
			}
		},
		mounted() {
			this.updateChildren()
			this.playAutomatically()
		},
		updated() {
			this.updateChildren()
		}
	}
</script>

<style lang="scss" scoped>
	.y-slides {
		display: inline-flex;
		&-window {
		}
		&-wrapper {
			position: relative;
		}
	}
</style>