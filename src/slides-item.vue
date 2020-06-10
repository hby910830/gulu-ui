<template>
	<transition name="slide">
		<div class="y-slides-item" v-if="visible" :class="{reverse}">
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
				selected: undefined,
				reverse: false
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
		width: 100%;
		top: 0;
		left: 0;
	}
	.slide-enter-active, .slide-leave-active {
		transition: all .5s;
	}
	.slide-enter {
		transform: translateX(100%);
		opacity: 0;
	}
	.slide-leave-to {
		transform: translateX(-100%) scale(.5);
		opacity: 0;
	}
	.slide-enter.reverse {
		transform: translateX(-100%);
		opacity: 0;
	}
	.slide-leave-to.reverse {
		transform: translateX(100%) scale(.5);
		opacity: 0;
	}
</style>