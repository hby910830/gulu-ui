<template>
	<div>
		<y-nav :selected.sync="selected">
			<y-nav-item name="home">首页</y-nav-item>
			<y-nav-item name="about">关于</y-nav-item>
			<y-nav-item name="hire">招聘</y-nav-item>
		</y-nav>
	</div>
</template>

<script>
	import YNav from './nav/nav'
	import YNavItem from './nav/nav-item'
	import YSubNav from './nav/sub-nav'

	export default {
		name: 'demo',
		components: {YNav, YNavItem, YSubNav},
		data() {
			return {
				selected: ['home']
			}
		},
		created() {
		}
	}
</script>

<style>
	* {margin: 0; padding: 0; box-sizing: border-box;}
</style>