<template>
  <div id="app">
    <header>
      <div style="text-align:center">
        <img id="photo" src="./assets/fairo.jpg" alt="我的头像">
        <p id="name">fairo.l.r</p>
        <p id="description">让我们面对现实 让我们忠于理想</p>
      </div>
      <!--  <nav>
        <ul>
          <li>首页</li>
          <li>全部文章</li>
          <li>关于我</li>
        </ul>
      </nav>-->
    </header>
    <div class="container">
      <nav class="navbar">
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li> 
          <li class="nav-item">
            <router-link to="/coding">Blog</router-link>
          </li>
          <!--   
							<li class="nav-item">
              <router-link to="/notes">NOTES</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">CONTACT</router-link>
            </li>
          -->
        </ul>
      </nav>
      <router-view class="view" id="view"></router-view>
    </div>
    <footer>©2018-2019 fairo.l.r 闽ICP备xxxxx号</footer>
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
  font-size: 16px;
  background: url("./assets/background.png") no-repeat center;
  background-size: cover;
}

#photo {
  margin: 0 auto;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  opacity: 0.6;
}

#name {
  margin: 20px 0;
  font-weight: 700;
}

#description {
  padding: 0 20px;
  color: #65737e;
}
.container {
  min-height: calc(100% - 430px);
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 14px;
  word-spacing: 1px;
}

.view{
    padding: 10px 10px;
    list-style: none;
    word-spacing: 1px;
}
nav .nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
nav .nav .nav-item {
  display: inline-block;
  margin-right: 0.5em;
  text-align: left;
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