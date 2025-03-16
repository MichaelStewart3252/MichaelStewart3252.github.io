<template>
  <div id="app" ref="appContainer">
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
  name: "App",
};
</script>

<style>
/* Apply background to the entire app */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: url('/homepage.jpg') no-repeat center center fixed; /* Background image */
  background-size: cover; /* Ensure it covers the full viewport */
}

#app {
  height: 100vh; /* Take full viewport height */
  overflow-y: auto;
  box-sizing: border-box;
}

/* Always visible scrollbar */
#app::-webkit-scrollbar {
  width: 8px;
}

/* Customize the scrollbar thumb */
#app::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}

/* Customize the scrollbar track */
#app::-webkit-scrollbar-track {
  background-color: transparent; 
  border-radius: 10px;
  width: 8px;
  height: 100%;
}

/* Header styles */
header {
  background: rgba(0, 0, 0, 0); /* Semi-transparent background */
  color: gray;
  padding: 10px;
  text-align: center;
}

/* Navigation styles */
nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}
</style>
