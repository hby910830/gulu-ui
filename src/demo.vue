<template>
	<div>
		<p>111111</p>
		<y-cascader :source="source" popover-height="200px"></y-cascader>
		<p>2222 </p>
	</div>
</template>

<script>
	import Cascader from './cascader'

	export default {
		name: 'demo',
		components: {'y-cascader': Cascader},
		data() {
			return {
				source: [{
					name: '浙江',
					children: [
						{
							name: '杭州',
							children: [
								{name: '上城区'},
								{name: '下城区'},
								{name: '西湖区'},
							]
						}, {
							name: '嘉兴',
							children: [
								{name: '南湖区'},
								{name: '秀洲区'},
								{name: '嘉善区'},
							]
						}
					]
				}, {
					name: '贵州',
					children: [
						{
							name: '贵阳',
							children: [
								{name: '南明区'},
								{name: '观山湖区'},
								{name: '云岩区'},
							]
						},
						{
							name: '六盘水',
							children: [
								{name: '中山区'},
								{name: '凉都区'},
								{name: '主城区'},
							]
						}
					]
				}, {
					name: '四川',
					children: [
						{
							name: '成都',
							children: [
								{name: '郫县区'},
								{name: '高新区'},
								{name: '武侯区'},
							],
						}, {
							name: '汶川',
							children: [
								{name: '映秀镇'},
								{name: '北川'},
								{name: '阿坝州'},
							],
						},
					]
				}]
			}
		}
	}
</script>

<style scoped>
	* {margin: 0; padding: 0; box-sizing: border-box;}
	body {background: white;}
</style>