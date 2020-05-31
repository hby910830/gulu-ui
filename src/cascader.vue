<template>
	<div class="cascader">
		<div class="trigger" @click="popoverVisible = !popoverVisible">
		</div>
		<div class="popover" v-show="popoverVisible">
			<div class="level1">
				<div class="label"
						 v-for="item1 in source"
						 @click="level1Selected = item1"
						 style="border: 1px solid red"
				>
					{{item1.name}}
				</div>
			</div>
			<div class="level2">
				<div class="label" v-for="item2 in level2Items" @click="level2Selected = item2">
					{{item2.name}}
				</div>
			</div>
			<div class="level3">
				<div class="label" v-for="item3 in level3Items">
					{{item3.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import cascaderItem from './cascader-item'

	export default {
		name: 'GuluCascader',
		components: {cascaderItem},
		props: {
			source: {
				type: Array
			}
		},
		data() {
			return {
				popoverVisible: false,
				level1Selected: null,
				level2Selected: null,
			}
		},
		computed:{
			level2Items(){
				if(this.level1Selected){
					this.level2Selected = null
					return this.level1Selected.children
				}else{
					return []
				}
			},
			level3Items(){
				return this.level2Selected && this.level2Selected.children
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