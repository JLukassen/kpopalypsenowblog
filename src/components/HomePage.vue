<!-- src/components/HomePage.vue -->
<template>
  <div class="home">
    <h1>Welcome to My Blog</h1>
    <p>Here you'll find the latest blog posts and updates.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'  // Change this from 'Home' to 'HomePage'
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #333;
}
</style>
