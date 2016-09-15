<style lang="scss">
	h1 {
		font: {
			weight: 200;
			size: 73px;
		}
		color: #efefef;
	}
</style>

<template>
	<h1>{{ title }}</h1>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hi mate !"
			}
		}
	}
</script>