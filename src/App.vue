<template>
  <div id="app">
    <header :class="{ scrolled: isScrolled }">
      <nav>
        <a href="#home" 
           :class="{ active: currentSection === 'home' }"
           @click.prevent="scrollTo('home')">Home</a>
        <a href="#about" 
           :class="{ active: currentSection === 'about' }"
           @click.prevent="scrollTo('about')">About</a>
      </nav>
    </header>

    <main class="scroll-container" ref="mainContainer">
      <HomePage ref="homeSection" />
      <AboutPage ref="aboutSection" />
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
      observer: null,
      isScrolled: false,  // Track if the navbar should change
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.setupIntersectionObserver();
      window.addEventListener('scroll', this.handleScroll);  // Listen to scroll events
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: this.$refs.mainContainer,
        rootMargin: '-50% 0px -50% 0px', // Center detection
        threshold: 0
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      }, options);

      // Observe both sections
      [this.$refs.homeSection, this.$refs.aboutSection].forEach(section => {
        if (section?.$el) {
          this.observer.observe(section.$el);
        }
      });
    },
    scrollTo(sectionId) {
      const section = this.$refs[`${sectionId}Section`]?.$el;
      if (section) {
        this.$refs.mainContainer.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      console.log(window.scrollY);
      this.isScrolled = window.scrollY > 50;  // Change navbar style after scroll
    }
  }
}
</script>

<style>
/* Base styles */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent double scrollbars */
}
body, html {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Header styles */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
  padding: 15px 0;
  transition: background-color 0.3s ease-in-out;
}

header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);  /* Darker background when scrolled */
}

nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-family: 'Bangers', cursive; /* Comic-style font */
  font-size: 1.5rem;
  
}

nav a {
  position: relative;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border: 3px solid #fff;
  border-radius: 8px;
  background: #ffeb3b;
  color: #000;
  font-weight: bold;
  box-shadow: 3px 3px 0 #000;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  background: #ff4081;
  color: #fff;
  box-shadow: 0px 0px 10px #ff4081, 4px 4px 0 #000;
  transform: scale(1.1) rotate(-1deg);
}

nav a.active {
  background: #00e676;
  color: #000;
  box-shadow: 4px 4px 0 #000;
}

/* Main content styles */
.scroll-container {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 60px; /* Offset for fixed header */
  height: calc(100vh - 60px);
  position: relative;
  padding-top: 20px; /* Prevent content from being hidden under navbar */
}
</style>