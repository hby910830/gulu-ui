<template>
	<div class="y-slides" @mouseenter="pause" @mouseleave="playAutomatically">
		<div class="y-slides-window">
			<div class="y-slides-wrapper">
				<slot></slot>
			</div>
		</div>
		<div class="y-slides-dots">
			<span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1 }"
				@click="select(n -1)"
			>
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
				childrenLength: 0,
				lastSelectedIndex: undefined,
				timerId: undefined
			}
		},
		computed:{
			selectedIndex(){
				return this.names.indexOf(this.selected) || 0
			},
			names(){
				return this.$children.map(vm => vm.name)
			}
		},
		methods: {
			playAutomatically() {
				if(!this.timerId){
					let run = () => {	//用 setTimeout 模拟 setInterval
						let index = this.names.indexOf(this.getSelected())
						let newIndex = index + 1
						if(newIndex === -1){newIndex = this.names.length - 1}
						if(newIndex === this.names.length){newIndex = 0}
						this.select(newIndex)
						this.timerId = setTimeout(run, 3000)
					}
					this.timerId = setTimeout(run, 3000)
				}
			},
			pause(){
				clearTimeout(this.timerId)
				this.timerId = undefined
			},
			updateChildren() {
				let selected = this.getSelected()
				this.$children.forEach(vm => {
					let reverse = this.lastSelectedIndex < this.selectedIndex
					if(this.timerId){
						if(this.lastSelectedIndex === this.$children.length -1 && this.selectedIndex === 0){
							reverse = false
						}
						if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length -1){
							reverse = true
						}
					}
					vm.reverse = reverse
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
			this.updateChildren()
			this.playAutomatically()
			this.childrenLength = this.$children.length
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
			padding: 8px 0;
			display: flex;
			justify-content: center;
			align-items: center;

			> span{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				background: #ddd;
				margin: 0 8px;
				font-size: 12px;
				&:hover{
					cursor: pointer;
				}
				&.active{
					background: black;
					color: white;
					&:hover{
						cursor: default;
					}
				}
			}
		}
	}
</style>