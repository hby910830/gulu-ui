<template>
	<div class="cascader">
		<div class="trigger" @click="popoverVisible = !popoverVisible">
		</div>
		<div class="popover" v-show="popoverVisible">
			<cascaderItems :items="source"></cascaderItems>
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
			}
		},
		data() {
			return {
				popoverVisible: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.cascader {
		.trigger {
			border: 1px solid red;
			width: 100px;
			height: 32px;
		}
		.popover {
			border: 2px solid green;
			height: 300px;
			display: flex;
			.label{
				white-space: nowrap;
			}
		}
	}
</style>