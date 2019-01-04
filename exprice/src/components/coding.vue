<template>
  <div> 
    <ul class="posts">
      <li v-for="post in posts" class="post-item">
        <a href="#" class="title" v-on:click="read(post.title)">{{post.title}}</a>
        <span class="createTime">（{{post.datetime}}）</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
  data() {
    return {
      posts: {}
    };
  },
  created() {
    var _this = this;
    axios
      .get("http://localhost:8081/blogs/coding")
      .then(function(res) {
        _this.posts = res.data;
        console.log(typeof res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    read: function(filename) {
      router.push("post/" + filename);
    }
  }
};
</script>

<style>
.posts {
   
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.post-item {
  margin-bottom: 0.5em;
  display: list-item;
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