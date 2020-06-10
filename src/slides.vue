<template>
	<div class="y-slides">
		<div class="y-slides-window">
			<div class="y-slides-wrapper">
				<slot></slot>
			</div>
		</div>
		<div>
			<span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1 }">
				{{n}}
			</span>
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
		data(){
			return {
				childrenLength: 0
			}
		},
		computed:{
			selectedIndex(){
				return this.names.indexOf(this.selected)
			},
			names(){
				return this.$children.map(vm => vm.name) || 0
			}
		},
		methods: {
			playAutomatically() {
				let index = this.names.indexOf(this.getSelected())
				let run = () => {	//用 setTimeout 模拟 setInterval
					let newIndex = index - 1
					if(newIndex === -1){newIndex = this.names.length -1}
					if(newIndex === this.names.length){newIndex = 0}
					this.$emit('update:selected', this.names[newIndex])
					setTimeout(run, 2000)
				}
				setTimeout(run, 2000)
			},
			updateChildren() {
				let selected = this.getSelected()
				this.$children.forEach(vm => {
					const newIndex = this.names.indexOf(selected)
					const oldIndex = this.names.indexOf(vm.name)
					vm.selected = selected
					vm.reverse = newIndex <= oldIndex
				})
			},
			getSelected(){
				let first = this.$children[0]
				return this.selected || first.name
			}
		},
		mounted() {
			this.childrenLength = this.$children.length
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
		margin: 40px;
		&-window {
			overflow: hidden;
		}
		&-wrapper {
			position: relative;
		}
	}
</style>