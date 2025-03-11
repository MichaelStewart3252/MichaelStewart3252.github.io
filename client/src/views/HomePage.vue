<template>
  <div class="homepage-container">
    <div class="info-container">
      <h1>Welcome to My Personal Website!</h1>
      <p>Hi, I'm Michael, and this is my website. Feel free to explore!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>

/* Set the background image */
.homepage-container {
  height: 100vh; /* Full height of the viewport */
  background-image: url('/public/homepage.jpg'); /* Use the image from assets */
  background-size: cover; /* Ensure the image covers the entire screen */
  background-position: center; /* Center the image */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color for better visibility */
}

.info-container {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}
</style>