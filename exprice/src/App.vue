<template>
	<div id="app">
		<header>
			<img id="photo" src="./assets/fairo.jpg" alt="我的头像">
			<p id="name">fairo.l.r</p>
			<p id="description">让我们面对现实 让我们忠于理想</p>
		</header>
		<div>
			<ul>
				<li>首页</li>
				<li>全部文章</li>
				<li>关于我</li>
			</ul>
		</div>
		<nav class="navbar">
			<ul class="nav">
				<li>
					<router-link to='/about'>ABOUT ME</router-link>
				</li>
				<li>
					<router-link to='/coding'>CODING</router-link>
				</li>
				<li>
					<router-link to='/notes'>NOTES</router-link>
				</li>
				<li>
					<router-link to='/contact'>CONTACT</router-link>
				</li>
			</ul>
		</nav>
		<router-view class="view" id='view'></router-view> 
		<footer>
			©2018 fairo.l.r
		</footer>
	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		background: url("./assets/background.png") no-repeat center;
		background-size: cover;
		text-align: center;
		font-size: 14px;
	}
	
	#photo {
		margin: 0 auto;
		width: 128px;
		height: 128px;
		border-radius: 50%;
		opacity: .6;
	}
	
	#name {
		margin: 20px 0;
		font-weight: 700;
	}
	
	#description {
		padding: 0 20px;
		color: #65737e;
	}
	
	footer {
		height: 80px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		background-color: #fafafa;
	}
</style>