<template>
	<div>
		<h1>coding 列表</h1>
		<ul class="posts">
			<li v-for="post in posts">
				<a href="#" class="title" v-on:click="read(post.title)">{{post.title}}</a><span class="createTime">（{{post.datetime}}）</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router/index.js'
	export default {
		data() {
			return {
				posts: {}
			}
		},
		created() {
			var _this = this;
			axios.get('http://localhost:8081/blogs/coding')
				.then(function(res) {
					_this.posts = res.data;
					console.log(typeof(res.data));
				})
				.catch(function(error) {
					console.log(error)
				});
		},
		methods: {
			read: function(filename) { 
				router.push('post/'+filename);
			}
		}
	}
</script>

<style>
	.posts {
		font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
	}
	
	.title {
		color: #333;
		cursor: pointer;
		text-decoration: underline;
	}
	
	.createTime {
		font-size: 12px;
	}
</style>