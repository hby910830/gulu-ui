<template>
	<div class="y-sub-nav">
		<span @click="onClick">
			<slot name="title"></slot>
		</span>
		<div class="y-sub-nav-popover" v-show="open">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GuluSubNav',
		data() {
			return {
				open: false
			}
		},
		methods: {
			onClick() {
				this.open = !this.open
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "var";
	.y-sub-nav {
		position: relative;
		> span {
			padding: 10px 20px;
			display: block;
		}
		&-popover {
			background: white;
			position: absolute;
			top: 100%;
			left: 0;
			white-space: nowrap;
			margin-top: 4px;
			box-shadow: 0 0 3px fade_out(black, .7);
			border-radius: $border-radius;
			color: $light-color;
			font-size: $font-size;
			min-width: 6em;
			text-align: center;
		}
	}
	.y-sub-nav .y-sub-nav .y-sub-nav-popover {
		top: 0;
		left: 100%;
		margin-left: 6px;
	}
</style>