<template>
	<div>
		<div style="padding: 20px">
			<y-cascader :source.sync="source" popover-height="200px"
									:selected.sync="selected"
									:loadData="loadData"
			></y-cascader>
		</div>
	</div>
</template>

<script>
	import Cascader from './cascader'
	import db from './db'

	function ajax(parentId = 0, success) {	//回调
		return setTimeout(() => {
			const result = db.filter(item => item.parent_id === parentId)
			return success(result)
		}, 1000)
	}

	function ajax2(parentId = 0) {
		return new Promise((resolve) => {	//Promise
			setTimeout(() => {
				const result = db.filter(item => item.parent_id === parentId)
				resolve(result)
			}, 1000)
		})
	}

	export default {
		name: 'demo',
		components: {'y-cascader': Cascader},
		data() {
			return {
				selected: [],
				source: []
			}
		},
		created() {
			// ajax(0, result => {
			// 	this.source = result
			// })
			ajax2(0).then(result => {
				this.source = result
			})
		},
		methods:{
			loadData({id}, updateSource){
				ajax2(id).then(result => {
					updateSource(result)
				})
			},
			xxx(){
				ajax2(this.selected[0].id).then(result => {
					let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
					this.$set(lastLevelSelected, 'children', result)
				})
			},
		}
	}
</script>

<style scoped>
	* {margin: 0; padding: 0; box-sizing: border-box;}
	body {background: white;}
</style>