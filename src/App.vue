<template>
  <div id="app">
    <!-- Dynamic background that changes per section -->
    <div class="background-container" :class="currentBackground"></div>
    
    <header :class="{ scrolled: isScrolled }">
      <nav>
        <a href="#home" @click.prevent="scrollTo('home')" :class="{ active: currentSection === 'home' }">Home</a>
        <a href="#about" @click.prevent="scrollTo('about')" :class="{ active: currentSection === 'about' }">About</a>
        <a href="#projects" @click.prevent="scrollTo('projects')" :class="{ active: currentSection === 'projects' }">Projects</a>
        <!-- Add more nav items as needed -->
      </nav>
    </header>

    <main class="scroll-container" ref="mainContainer">
  <section id="home">
    <HomePage ref="homeSection" />
  </section>
  
  <section id="about">
    <AboutPage ref="aboutSection" />
  </section>
  
  <section id="projects">
    <ProjectPage ref="projectSection" />
  </section>
</main>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ProjectPage from '@/components/ProjectPage.vue'

export default {
  components: { HomePage, AboutPage, ProjectPage },
  data() {
    return {
      currentSection: 'home',
      currentBackground: 'home-bg',
      observer: null,
      isScrolled: false
    }
  },
  watch: {
    currentSection(newVal) {
      this.currentBackground = `${newVal}-bg`
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setupIntersectionObserver()
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    scrollTo(section) {
  const target = document.getElementById(section);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
},
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    setupIntersectionObserver() {
  const options = {
    root: this.$refs.mainContainer,
    threshold: 0.6
  };

  this.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.currentSection = entry.target.id;
      }
    });
  }, options);

  // Observe each section by ID
  ['home', 'about', 'projects'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      this.observer.observe(el);
    }
  });
}

  }
}
</script>

<style>

* {
  box-sizing: border-box;
}
/* Background container - fixed position covers entire viewport */
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
}

/* Define individual background classes */
.home-bg {
  background-image: url('/homepage.jpg');
}

.about-bg {
  background-image: url('/about.jpg');
}

.projects-bg{
  background-image: url('/projectspage.jpg');
}


/* Ensure content containers are transparent */
#app, .scroll-container {
  background: transparent !important;
}

/* Header styling - now with glass morphism effect */
header {
  background: transparent;
  /* ... rest of your header styles ... */
}
/* Base styles */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative; /* Needed for absolute positioning of background */
}

/* Header styles */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
  padding: 5px 0;
  transition: background-color 0.3s ease;
}

header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
}

nav {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-family: 'Bangers', cursive;
  font-size: 1.1rem;
  height: 3em;
}

nav a {
  position: relative;
  color: black;
  text-decoration: none;
  padding: 5px 20px;
  border: 3px solid #fff;
  border-radius: 8px;
  background: rgba(211, 211, 211, 0.704);
  color: #000;
  font-weight: bold;
  box-shadow: 3px 3px 0 #000;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  background: #ff5e93;
  color: #fff;
  box-shadow: 0px 0px 10px #ff5e93, 4px 4px 0 #000;
  transform: scale(1.1) rotate(-1deg);
}

nav a.active {
  background: white;
  color: #000;
  box-shadow: 4px 4px 0 #000;
}

/* Main content styles */
.scroll-container {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: calc(100vh);
  position: relative;
  background: transparent; /* Ensure content area is transparent */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  nav {
    gap: 20px;
    font-size: 1.2rem;
  }
  
  nav a {
    padding: 8px 15px;
  }
}
</style>