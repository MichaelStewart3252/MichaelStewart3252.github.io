<template>
  <div id="app">
    <header>
      <h1>Welcome to My Vite/Vue App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    
    <main>
      <router-view></router-view> <!-- This is where routed components will be displayed -->
    </main>
    

  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
html, body {
  height: 100%; /* Make sure the body takes full height of the viewport */
  margin: 0;    /* Remove default margin */
  padding: 0;   /* Remove default padding */
  background-image: url('/background.jpg'); /* Path to the image in public folder */
  background-size: cover; /* Cover the entire viewport */
  background-position: center; /* Keep the image centered */
  font-family: Arial, sans-serif;
  color: white; /* Text color to stand out */
}
/* Global styling for the App */
#app {
  height: 100vh;  /* Full height of the viewport */
  margin: 0;      /* No margin */
  padding: 0;     /* No padding */
  background: url('/background.jpg') no-repeat center center;
  background-size: cover;  /* Ensures the image covers the entire page */
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}

</style>
