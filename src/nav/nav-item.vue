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
		created(){
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
	.y-nav-item {
		padding: 10px 20px;
		&.selected {
			background: red;
		}
	}
</style>