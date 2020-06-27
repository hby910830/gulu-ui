<template>
	<div class="y-nav">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluNav',
		props: {
			selected: {
				type: Array,
				default: () => []
			},
			multiple: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.items.forEach(vm => {
				vm.selected = this.selected.indexOf(vm.name) > -1;
			})
			this.items.forEach(vm => {
				vm.$on('add:selected', name => {
					if(this.multiple){
						if (this.selected.indexOf(name) < 0) {
							let copy = JSON.parse(JSON.stringify(this.selected))
							copy.push(name)
							this.$emit('update:selected', copy)
						}
					}else{
						this.$emit('update:selected', [name])
					}
				})
			})
		},
		updated() {
			this.items.forEach(vm => {
				vm.selected = this.selected.indexOf(vm.name) > -1;
			})
		},
		computed: {
			items() {
				return this.$children.filter(vm => vm.$options.name === 'GuluNavItem')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.y-nav {
		display: flex;
		border: 1px solid red;
	}
</style>