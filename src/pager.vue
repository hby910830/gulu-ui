<template>
 <div class="gulu-pager" :class="{hide: hideIfOnePage && totalPage <= 1}">
	<span class="gulu-pager-nav pre" :class="{disabled: currentPage === 1}" @click="onClickPage(currentPage - 1)"><</span>
	<template class="gulu-pager-item" v-for="page in pages">
	 <template v-if="page === currentPage">
		<span class="gulu-pager-item current">{{page}}</span>
	 </template>
	 <template v-else-if="page === '...'">
		<span class="gulu-pager-separator">...</span>
	 </template>
	 <template v-else>
		<span class="gulu-pager-item other" @click="onClickPage(page)">{{page}}</span>
	 </template>
	</template>
	<span class="gulu-pager-nav next" :class="{disabled: currentPage === totalPage}" @click="onClickPage(currentPage + 1)">></span>
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
		computed:{
			pages(){
				return unique([
					1,
					this.totalPage,
					this.currentPage,
					this.currentPage - 1,
					this.currentPage - 2,
					this.currentPage - 3,
					this.currentPage + 1,
					this.currentPage + 2,
					this.currentPage + 3]
					.filter(n => n >= 1 && n <= this.totalPage)
					.sort((a, b) => a - b)).reduce((pre, current, index, array) => {		// sort页码排序
					pre.push(current)
					array[index + 1] && array[index + 1] - array[index] > 1 && pre.push('...')	// 页码插入...
					return pre
				}, [])
			}
		},
		methods: {
			onClickPage(n){
				if(n >= 1 && n <= this.totalPage){
					this.$emit('update:currentPage', n)
				}
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
		return Object.keys(object).map(item => parseInt(item, 10))
	}
</script>

<style>
 * {margin: 0;padding: 0;box-sizing: border-box;}
 body {
	background: #fff;
 }
</style>

<style scoped lang="scss">
 @import "../styles/var";
 $height: 20px;
 $width: 20px;
 $font-size: 12px;
 .gulu-pager {
	&.hide{display: none}
	display: flex;align-items: center;user-select: none;
	&-separator {font-size: $font-size;width: $width;text-align: center;}
	&-item {
	 font-size: $font-size;height: $height;min-width: $width;border: 1px solid #e1e1e1;border-radius: $border-radius;
	 padding: 0 4px;display: inline-flex;justify-content: center;align-items: center;margin: 0 4px;cursor: pointer;
	 &.current, &:hover {border-color: $blue;}
	 &.current {cursor: default;}
	}
	&-nav {
	 display: inline-flex;justify-content: center;align-items: center;background: $grey;cursor: pointer;
	 width: $width;height: $height;border-radius: $border-radius;font-size: $font-size;margin: 0 4px;
	 &.disabled {cursor:default;background: darken($grey, 15%)}
	}
 }
</style>