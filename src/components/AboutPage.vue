<template>
  <section class="fullpage-section">
    <div class="content">
      <h2>About Me</h2>
      <p>I am a creative software engineer that loves to explore just about anything! I </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    this.$el.id = 'about';
    this.$el.style.minHeight = 'calc(100vh - 60px)';
  }
}
</script>

<style scoped>
.fullpage-section {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  background: url('/about.jpg') center/cover no-repeat;
}

.content {
  color: white;
  max-width: 50%;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 8px;
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