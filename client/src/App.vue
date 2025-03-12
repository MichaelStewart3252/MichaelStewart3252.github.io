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
  
  <style scoped>
  /* Prevent page scrolling */
  html, body {
    overflow: hidden; /* Disable page scrolling */
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  /* Ensure #app handles scrolling and always shows the scrollbar */
  #app {
    height: 100vh; /* Full height of the viewport */
    overflow-y: scroll; /* Enable scrolling and always show the scrollbar */
    box-sizing: content-box; /* Ensure padding doesn't affect the layout size */
    position: relative;
  }
  
  /* Always visible scrollbar */
  #app::-webkit-scrollbar {
    width: 8px; /* Set width of scrollbar */
  }
  
  /* Customize the scrollbar thumb */
  #app::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }
  
  /* Customize the scrollbar track */
  #app::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.5); /* Darker track */
    border-radius: 10px;
    /* Make the track fill the space */
    width: 8px;
    height: 100%;
  }
  
  /* Header styles */
  header {
    background-color: rgba(51, 51, 51, 0.7); /* Semi-transparent header */
    color: white;
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
  