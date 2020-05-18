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
			let pages = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2]
			const u = unique(pages.sort((a, b) => a - b))
			// 页码插入...
			let u2 = u.reduce((pre, current, index, array) => {
				pre.push(current)
				array[index + 1] && array[index + 1] - array[index] > 1 && pre.push('...')
				return pre
			}, [])
			return {
				pages: u2
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