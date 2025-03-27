<template>
  <section id="home" class="fullpage-section">
    <div class="content">
      <h1>Michael Stewart</h1>
      <p>Programming with Personality</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    // Ensure proper section height
    this.$el.style.minHeight = 'calc(100vh - 60px)'
  }
}
</script>

<style scoped>
.fullpage-section {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  background: url('/homepage.jpg') center/cover no-repeat;
}

.content {
  color: white;
  max-width: 50%;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .fullpage-section {
    padding-left: 5%;
    justify-content: center;
  }
  .content {
    max-width: 90%;
    text-align: center;
  }
}
</style>