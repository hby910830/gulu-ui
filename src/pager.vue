<template>
 <div class="pager">
	<span style="margin: 6px" v-for="item in pages">{{item}}</span>
 </div>
</template>

<script>
	export default {
		name: 'GuluPager',
		props: {
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
		},
		data() {
			let pages = unique([
				1,
				this.totalPage,
				this.currentPage,
				this.currentPage - 1,
				this.currentPage - 2,
				this.currentPage + 1,
				this.currentPage + 2]
				.sort((a, b) => a - b)).reduce((pre, current, index, array) => {		// sort页码排序
				pre.push(current)
				array[index + 1] && array[index + 1] - array[index] > 1 && pre.push('...')	// 页码插入...
				return pre
			}, [])
			return {
				pages
			}
		}
	}

	// 数组去重
	function unique(array) {
		// return [...new Set(array)]
		const object = {}
		array.map(number => {
			object[number] = true
		})
		return Object.keys(object).filter(item => parseInt(item, 10))
	}
</script>

<style scoped lang="scss">

</style>