<template>
	<div>
		<div>state：{{this.$store.state.count}}</div>
		<div>getters:{{this.$store.getters.stateCount}}</div>

		<span @click="reduce">-</span>
		<span @click="add">+</span>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	props: {},
	components: {},
	mounted() {
		setTimeout(() => {
			this.$store.state.count = 2;
		}, 1000)
	},
	created() { },
	watch: {},
	methods: {
		reduce() {
			this.$store.state.count--
		},
		add() {
			this.$store.state.count++
		},
	}
}
</script>

<style scoped>

</style>