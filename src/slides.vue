<template>
	<div class="y-slides">
		<div class="y-slides-window">
			<div class="y-slides-wrapper">
				<slot></slot>
			</div>
		</div>
		<div class="y-slides-dots">
			<span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1 }"
				@click="select(n -1)"
			>
				{{n -1}}
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
				childrenLength: 0,
				lastSelectedIndex: undefined
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
					this.select(newIndex)
					setTimeout(run, 2000)
				}
				setTimeout(run, 2000)
			},
			updateChildren() {
				let selected = this.getSelected()
				this.$children.forEach(vm => {
					vm.reverse = this.lastSelectedIndex < this.selectedIndex
					this.$nextTick(() => {
						vm.selected = selected
					})
				})
			},
			select(index){
				this.lastSelectedIndex = this.selectedIndex
				this.$emit('update:selected', this.names[index])
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
		&-dots{
			> span{
				&.active{
					background: red;
				}
			}
		}
	}
</style>