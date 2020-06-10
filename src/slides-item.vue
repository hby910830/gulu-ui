<template>
	<transition name="slide">
		<div class="y-slides-item" v-if="visible" :class="{reverse}">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
	export default {
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
	}
	.slide-enter.reverse {
		transform: translateX(-100%);
	}
	.slide-leave-to {
		transform: translateX(-100%);
	}
	.slide-leave-to.reverse {
		transform: translateX(100%);
	}
</style>