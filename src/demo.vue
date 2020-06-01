<template>
	<div>
		<div style="padding: 20px">
			<y-cascader :source="source" popover-height="200px" :selected.sync="selected"></y-cascader>
		</div>
	</div>
</template>

<script>
	import Cascader from './cascader'
	import db from './db'

	function ajax(parentId = 0) {
		return db.filter(item => item.parent_id === parentId)
	}

	export default {
		name: 'demo',
		components: {'y-cascader': Cascader},
		data() {
			return {
				selected: [],
				source: ajax()
			}
		}
	}
</script>

<style scoped>
	* {margin: 0; padding: 0; box-sizing: border-box;}
	body {background: white;}
</style>