<template>
	<div class="cascaderItems" :style="{height}">
		<div class="left">
			<div class="label" v-for="item in items" @click="onClickLabel(item)">
				<span class="name">{{item.name}}</span>
				<span class="icons">
					<template v-if="item.name === loadingItem.name">
						<icon class="loading" name="loading"></icon>
					</template>
					<template v-else>
						<icon class="next" name="right" v-if="rightArrowVisible(item)"> > </icon>
					</template>
				</span>
			</div>
		</div>
		<div class="right" v-if="rightItems">
			<gulu-cascader-items :level="level + 1" :items="rightItems"
													 :selected="selected"
													 :height="height"
													 :loading-item="loadingItem"
													 :load-data="loadData"
													 @update:selected="onUpdateSelected"
			></gulu-cascader-items>
		</div>
	</div>
</template>

<script>
	import Icon from '../icon'

	export default {
		name: 'GuluCascaderItems',		// name可以把自己当作组件调用自己
		components: {Icon},
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
			loadingItem: {
				type: Object,
				default: () => ({})
			},
			loadData: {
				type: Function
			},
			level: {
				type: Number,
				default: 0
			}
		},
		computed: {
			rightItems() {
				if (this.selected[this.level]) {
					let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
					if (selected && selected[0].children && selected[0].children.length > 0) {
						return selected[0].children
					}
				}
			}
		},
		methods: {
			rightArrowVisible(item) {
				return this.loadData ? !item.isLeaf : item.children
			},
			onClickLabel(item) {
				let copy = JSON.parse(JSON.stringify(this.selected))
				copy[this.level] = item
				copy.splice(this.level + 1) // 一句话
				this.$emit('update:selected', copy)
			},
			onUpdateSelected(newSelected) {
				this.$emit('update:selected', newSelected)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../styles/var";
	.cascaderItems {display: flex;justify-content: flex-start;align-items: flex-start;height: 100px;
		.left { height: 100%;padding: .3em 0;overflow: auto}
		.right {height: 100%;border-left: 1px solid $border-color-light;}
		.label { padding: .5em 1em;display: flex;align-items: center;cursor: pointer;white-space: nowrap;
			&:hover {background: $grey;}
			> .name {margin-right: 1em;user-select: none;}
			.icons {
				margin-left: auto;
				.next {
					transform: scale(.5);
				}
				.loading {
					animation: spin 2s infinite linear;
				}
			}
		}
	}
</style>