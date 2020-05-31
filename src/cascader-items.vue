<template>
	<div class="cascaderItems">
		<div class="left">
			<div class="label" v-for="item in items" @click="leftSelected = item">
				{{item.name}}
			</div>
		</div>
		<div class="right" v-if="rightItems">
				<gulu-cascader-items :items="rightItems"></gulu-cascader-items>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GuluCascaderItems',		// name可以把自己当作组件调用自己
		props: {
			items: {
				type: Array
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
	.cascaderItems {
		border: 1px solid red;
		margin: 10px;
	}
</style>