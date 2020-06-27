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
		data() {
			return {
				selected: false
			}
		},
		methods: {
			onClick() {
				this.$emit('add:selected', this.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.y-nav-item {
		padding: 10px 20px;
		&.selected {
			background: red;
		}
	}
</style>