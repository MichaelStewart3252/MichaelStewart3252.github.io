<template>
  <div id="app">
    <header>
      <nav>
        <a href="#home" 
           :class="{ active: currentSection === 'home' }"
           @click.prevent="scrollTo('home')">Home</a>
        <a href="#about" 
           :class="{ active: currentSection === 'about' }"
           @click.prevent="scrollTo('about')">About</a>
      </nav>
    </header>

    <main class="scroll-container" @scroll="handleScroll" ref="mainContainer">
      <HomePage id="home" ref="homeSection" />
      <AboutPage id="about" ref="aboutSection" />
    </main>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'

export default {
  components: { HomePage, AboutPage },
  data() {
    return {
      currentSection: 'home',
      scrollTimeout: null
    }
  },
  mounted() {
    this.checkActiveSection()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      clearTimeout(this.scrollTimeout)
      this.scrollTimeout = setTimeout(this.checkActiveSection, 100)
    },
    checkActiveSection() {
      const scrollPosition = window.scrollY + 100
      const homeSection = document.getElementById('home')
      const aboutSection = document.getElementById('about')

      if (!homeSection || !aboutSection) return

      const homePosition = homeSection.offsetTop
      const homeHeight = homeSection.offsetHeight
      const aboutPosition = aboutSection.offsetTop

      if (scrollPosition >= aboutPosition) {
        this.currentSection = 'about'
      } else if (scrollPosition >= homePosition && scrollPosition < homePosition + homeHeight) {
        this.currentSection = 'home'
      }
    },
    scrollTo(sectionId) {
      this.currentSection = sectionId
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style>
/* Base styles */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header styles */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 0;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

nav a.active {
  background: #42b983;
  color: white;
}

/* Main content styles */
.scroll-container {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 60px; /* Offset for fixed header */
  height: calc(100vh - 60px);
}
</style>