<template>
 <div class="pager">pager</div>
</template>

<script>
	export default {
		name: 'GuluPager',
		props:{
			totalPage: {
				type: Number,
				required: true
			},
			currentPage: {
				type: Number,
				required: true
			},
			hideIfOnePage: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped lang="scss">

</style>