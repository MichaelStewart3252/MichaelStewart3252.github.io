<template>
  <div class="homepage-container">
    <div class="info-container">
      <h1>Michael Stewart</h1>
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
  background: url('homepage.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
}

/* Styling for the content */
.info-container {
  background: rgba(0, 0, 0, 0.5); /* Optional: semi-transparent background for better readability */
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  margin: 0 auto;
  color: white; /* Ensure the text color is readable on the dark background */
}

/* Ensure the header is positioned to the left, halfway down the screen */
h1 {
  position: absolute;
  top: 50%;  /* Vertically position the header halfway down the screen */
  left: 0;  /* Align the header to the left of the screen */
  transform: translateY(-50%); /* Adjust the element back by half its height */
  color: white;  /* Make sure the text is white and visible */
  font-size: 3rem; /* Adjust the font size as needed */
}

/* Styling for the paragraph */
p {
  font-size: 1.5rem;
  text-align: left;
}
</style>
