<template>
	<div class="y-slides">
		<div class="y-slides-window">
			<div class="y-slides-wrapper">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slides',
		props: {
			selected: {
				type: String
			}
		},
		methods: {
			updateChildren() {
				let first = this.$children[0]
				let selected = this.selected || first.name
				this.$children.forEach(vm => {
					vm.selected = selected
				})
			}
		},
		mounted() {
			this.updateChildren()
		},
		updated() {
			this.updateChildren()
		}
	}
</script>

<style lang="scss" scoped>
	.y-slides {
		display: inline-flex;
		border: 1px solid black;
		&-window {
		}
		&-wrapper {
			position: relative;
		}
	}
</style>