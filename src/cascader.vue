<template>
	<div class="cascader">
		<div class="trigger" @click="popoverVisible = !popoverVisible">
			{{result || '&nbsp;'}}
		</div>
		<div class="popover-wrapper" v-show="popoverVisible">
			<cascaderItems :items="source" class="popover"
										 :height="popoverHeight"
										 :selected="selected"
										 @update:selected="onUpdateSelected"
			></cascaderItems>
		</div>
	</div>
</template>

<script>
	import cascaderItems from './cascader-items'

	export default {
		name: 'GuluCascader',
		components: {cascaderItems},
		props: {
			source: {
				type: Array
			},
			popoverHeight: {
				type: String
			},
			selected: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				popoverVisible: false
			}
		},
		computed: {
			result() {
				return this.selected.map(item => item.name).join('/')
			}
		},
		methods: {
			onUpdateSelected(newSelected) {
				this.$emit('update:selected', newSelected)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "var";
	.cascader {
		position: relative;
		.trigger {background: white;height: $input-height;display: inline-flex;align-items: center;padding: 0 1em;min-width: 10em;border: 1px solid $border-color;border-radius: $border-radius;}
		.popover-wrapper { position: absolute; top: 100%; left: 0; background: white; display: flex;margin-top: 8px;z-index: 1;
			@extend .box-shadow;
			.label {white-space: nowrap;}
		}
	}
</style>