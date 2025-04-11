<template>
  <section class="fullpage-section">
    <div class="content">
      <h1>Michael Stewart</h1>
      <p class ="personality">Programming with Personality</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    this.$el.id = 'home';
    this.$el.style.minHeight = 'calc(100vh)';
  }
}
</script>

<style scoped>
.fullpage-section {
  width: 100%;
  height: calc(100vh - 60px); /* Adjust for fixed header */
  display: flex;
  align-items: center;
  padding-left: 10%;

  background-image: url('/homepage.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom; /* 👈 keep the bottom visible */
}

.content {
  color: white;
  max-width: 50%;
  font-size: 8em;
  height:35%;
  font-family: 'Bangers', cursive;
}
.personality{
  margin-top: -120px;
  font-size: 0.7em;
}
@media (max-width: 768px) {
  .fullpage-section {
    padding-left: 5%;
    justify-content: center;
  }
}
</style>