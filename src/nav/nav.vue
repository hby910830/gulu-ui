<template>
	<div class="y-nav">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluNav',
		provide(){
			return {
				root: this
			}
		},
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
		data(){
			return{
				items: []
			}
		},
		mounted() {
			this.updateChildren()
			this.listenToChildren()
		},
		updated() {
			this.updateChildren()
		},
		methods: {
			addItem(vm){
				this.items.push(vm)
			},
			updateChildren() {
				this.items.forEach(vm => {
					vm.selected = this.selected.indexOf(vm.name) > -1
				})
			},
			listenToChildren(){
				this.items.forEach(vm => {
					vm.$on('add:selected', name => {
						if (this.multiple) {
							if (this.selected.indexOf(name) < 0) {
								let copy = JSON.parse(JSON.stringify(this.selected))
								copy.push(name)
								this.$emit('update:selected', copy)
							}
						} else {
							this.$emit('update:selected', [name])
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "var";
	.y-nav {
		display: flex;
		border-bottom: 1px solid $grey;
	}
</style>