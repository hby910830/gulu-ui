<template>
	<transition name="slide">
		<div class="y-slides-item" v-if="visible">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'slides-item',
		props: {
			name: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				selected: undefined
			}
		},
		computed:{
			visible(){
				return this.selected === this.name
			}
		}
	}
</script>

<style lang="scss" scoped>
	.y-slides-item {
	}
	.slide-leave-active {
		position: absolute;
		top: 0;
		left: 0;
	}
	.slide-enter-active, .slide-leave-active {
		transition: all 1s;
	}
	.slide-enter {
		transform: translateX(100%);
		position: absolute;
	}
	.slide-leave-to {
		transform: translateX(-100%);
	}
</style>