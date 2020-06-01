<template>
	<div class="cascader">
		<div class="trigger" @click="popoverVisible = !popoverVisible">
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
		methods:{
			onUpdateSelected(newSelected){
				this.$emit('update:selected', newSelected)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "var";
	.cascader {
		position: relative;
		.trigger {
			border: 1px solid black;
			width: 100px;
			height: 32px;
		}
		.popover-wrapper {position: absolute;top: 100%;left: 0;background: #fff;height: 200px;display: flex;
			@extend .box-shadow;
			.label {
				white-space: nowrap;
			}
		}
	}
</style>