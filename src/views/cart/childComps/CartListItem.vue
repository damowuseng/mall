<template>
	<div>{{product}}</div>
</template>

<script>
	export default {
		name: "CartListItem",
		props: {
			product: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style scoped>

</style>
