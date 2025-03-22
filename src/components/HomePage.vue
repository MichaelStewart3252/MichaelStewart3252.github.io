<template>
  <div class="homepage-container">
    <div class="info-container">
      <h1>Michael Stewart</h1>
      <p>Programming with Personality</p>
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
  height: 100vh;
  display: flex;
  justify-content: flex-start; /* Aligns content to the left */
  align-items: center; /* Centers vertically */
  padding-left: 5vw; /* 10% from the left dynamically */
}

/* Styling for the content */
.info-container {
  position: absolute;
  padding: 0.5rem;
  border-radius: 10px;
  top : 40%;
  width: 50vw; /* Adjust width dynamically */
  max-width: 800px; /* Prevents it from getting too large */
  color: white;
  text-align: left;

}
/* Ensure the header is positioned to the left, halfway down the screen */
h1 {
  font-size: 4vw;
  margin-bottom: 0.5rem;
}

/* Styling for the paragraph */
p {

  font-size: 2vw;
  text-align: left;
}
</style>
