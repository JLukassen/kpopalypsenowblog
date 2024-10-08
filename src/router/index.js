import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';  // Import the HomePage component (formerly Home.vue)
import BlogPostList from '../components/BlogPostList.vue';  // Import another component (e.g., for blog posts)


const routes = [
  {
    path: '/',
    name: 'HomePage',  // Use the updated name
    component: HomePage  // HomePage component for the root URL
  },
  {
    path: '/posts',
    name: 'BlogPostList',  // Another route for blog posts
    component: BlogPostList  // BlogPostList component
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
