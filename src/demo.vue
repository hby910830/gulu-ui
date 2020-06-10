<template>
	<div>
		<y-slides :selected.sync="selected">
			<y-slides-item name="1">
				<div class="box">1</div>
			</y-slides-item>
			<y-slides-item name="2">
				<div class="box">2</div>
			</y-slides-item>
			<y-slides-item name="3">
				<div class="box">3</div>
			</y-slides-item>
			<y-slides-item name="4">
				<div class="box">4</div>
			</y-slides-item>
		</y-slides>
	</div>
</template>

<script>
	import YSlides from './slides'
	import YSlidesItem from './slides-item'

	export default {
		name: 'demo',
		components: {YSlides, YSlidesItem},
		data() {
			return {
				selected: '3'
			}
		},
		created() {
		}
	}
</script>

<style>
	* {margin: 0; padding: 0; box-sizing: border-box;}
	.box {
		width: 100%;
		height: 350px;
		background: #ddd;
		border: 1px solid red;
	}
</style>