<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],  // Initialize an empty array to hold blog posts
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('http://127.0.0.1:8000/api/blog/posts/')
        .then(response => {
          this.posts = response.data;  // Store the fetched data
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Add your CSS styling here */
</style>
