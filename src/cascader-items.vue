<template>
	<div class="cascaderItems" :style="{height}">
		<div class="left">
			<div class="label" v-for="item in items" @click="leftSelected = item">
				{{item.name}}
				<span v-if="item.children"> > </span>
			</div>
		</div>
		<div class="right" v-if="rightItems">
				<gulu-cascader-items :items="rightItems" :height="height"></gulu-cascader-items>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GuluCascaderItems',		// name可以把自己当作组件调用自己
		props: {
			items: {
				type: Array
			},
			height:{
				type: String
			}
		},
		data(){
			return {
				leftSelected: null
			}
		},
		computed:{
			rightItems(){
				if(this.leftSelected && this.leftSelected.children){
					return this.leftSelected.children
				}else{
					return null
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "var";
	.cascaderItems {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100px;
		@extend .box-shadow;
		.left{
			height: 100%;
			padding: .3em 0;
		}
		.right{
			height: 100%;
			border-left: 1px solid $border-color-light;
		}
		.label{
			padding: .3em 1em;
		}
	}
</style>