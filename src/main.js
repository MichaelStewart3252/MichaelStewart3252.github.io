import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css' // Import the reset FIRST
import './assets/base.css' // Then your existing styles

createApp(App).mount('#app')