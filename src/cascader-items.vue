<template>
	<div class="cascaderItems" :style="{height}">
		<div class="left">
			<div class="label" v-for="item in items" @click="onClickSelected(item)">
				<span class="name">{{item.name}}</span>
				<span v-if="item.children"> > </span>
			</div>
		</div>
		<div class="right" v-if="rightItems">
			<gulu-cascader-items :level="level + 1" :items="rightItems"
													 :selected="selected"
													 :height="height"
													 @update:selected="onUpdateSelected"
			></gulu-cascader-items>
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
			height: {
				type: String
			},
			selected: {
				type: Array,
				default: () => []
			},
			level: {
				type: Number,
				default: 0
			}
		},
		computed: {
			rightItems() {
				const currentSelected = this.selected && this.selected[this.level]
				if (currentSelected && currentSelected.children) {
					return currentSelected.children
				} else {
					return null
				}
			}
		},
		methods: {
			onClickSelected(item) {
				const copy = JSON.parse(JSON.stringify(this.selected))
				copy[this.level] = item
				copy.splice(this.level + 1)	//每次改变就清空后面的选项
				this.$emit('update:selected', copy)
			},
			onUpdateSelected(newSelected) {
				this.$emit('update:selected', newSelected)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "var";
	.cascaderItems {display: flex;justify-content: flex-start;align-items: flex-start;height: 100px;
		.left { height: 100%;padding: .3em 0;overflow: auto}
		.right {height: 100%;border-left: 1px solid $border-color-light;}
		.label { padding: .5em 1em;display: flex;align-items: center;cursor: pointer;white-space: nowrap; &:hover {background: $grey;}
			> .name {margin-right: 1em;user-select: none;}
		}
	}
</style>