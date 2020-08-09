<template>
	<div class="y-nav-item" :class="{selected}" @click="onClick">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluNavItem',
		props: {
			name: String,
			required: true
		},
		inject: ['root'],
		data() {
			return {
				selected: false
			}
		},
		created() {
			this.root.addItem(this)
		},
		methods: {
			onClick() {
				this.$emit('add:selected', this.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "var";
	.y-nav-item {
		padding: 10px 20px;
		position: relative;
		&.selected {
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				border-bottom: 2px solid $blue;
				width: 100%;
			}
		}
	}
	.y-sub-nav .y-nav-item {
		&.selected {
			background: $grey;
			color: $color;
			&::after {
				display: none;
			}
		}
	}
</style>