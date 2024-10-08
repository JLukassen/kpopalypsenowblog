<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <!-- Links to different pages -->
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Blog Posts</router-link>
    </nav>

    <!-- The routed components will be rendered here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add basic styles to your navigation */
nav {
  padding: 1rem;
  background-color: #f8f9fa;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #007bff;
}
</style>
