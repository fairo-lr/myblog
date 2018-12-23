<template>
	<div id="app1">
		<input v-model="msg" v-on:click="sayhi" />
		<p>
			<h2>{{msg}}</h2>
		</p>
		<input v-model="msg" v-on:click="sayhi" />
		<p>
			<h2>{{msg}}</h2>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'Hi',
		data() {
			return {
				msg: 'my first vue-cli app2!'
			}
		},
		methods: {
			sayhi: function() {
				alert(this.msg);

			}
		}
	}
</script>

<style>
	#app1 {
		font-family: "microsoft yahei";
		color: dodgerblue;
		font-size: 20px;
	}
</style>