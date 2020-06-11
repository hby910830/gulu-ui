<template>
	<div class="y-slides"
			 @mouseenter="pause"
			 @mouseleave="playAutomatically"
			 @touchstart="onTouchStart"
			 @touchmove="onTouchmove"
			 @touchend="onTouchEnd"
	>
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
				timerId: undefined,
				startTouch: undefined,
				endTouch: undefined
			}
		},
		computed:{
			selectedIndex(){
				let index = this.names.indexOf(this.selected)
				return index === -1 ? 0 : index
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
			onTouchStart (e) {
				this.pause()
				this.startTouch = e.touches[0]
			},
			onTouchmove(){
				console.log('边摸边动')
			},
			onTouchEnd (e) {
				this.endTouch = e.changedTouches[0]
				let {clientX: x1, clientY: y1} = this.startTouch
				let {clientX: x2, clientY: y2} = this.endTouch

				let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2 ))
				let delaty = Math.abs(y2 - y1)
				let rate = distance / delaty
				if(rate > 2){
					if(x2 > x1){
						this.select(this.selectedIndex + 1)
					}else{
						this.select(this.selectedIndex - 1)
					}
				}
				this.$nextTick(() => {
					this.playAutomatically()
				})
			},
			select(newIndex){
				this.lastSelectedIndex = this.selectedIndex
				if(newIndex === -1){newIndex = this.names.length - 1}
				if(newIndex === this.names.length){newIndex = 0}
				this.$emit('update:selected', this.names[newIndex])
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