<template>
	<div class="cascader">
		<div class="trigger">
			<slot></slot>
		</div>
		<div class="popover">
			<div v-for="item in dataSource">
				<cascader-item :sourceItem="item"></cascader-item>
			</div>
		</div>
	</div>
</template>

<script>
	import cascaderItem from './cascader-item'
	export default {
		name: 'GuluCascader',
		components:{cascaderItem},
		props: {
			dataSource: {
				type: Array
			}
		}
	}
</script>

<style scoped lang="scss">
	.cascader {
	}
</style>