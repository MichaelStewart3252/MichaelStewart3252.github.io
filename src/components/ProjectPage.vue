<template>
    <section class="fullpage-section">
      <div class="content">
        <h2 class="projects">Some of my projects!</h2>
  
        <!-- Main Projects Container (Flexbox Layout) -->
        <div class="projects-container">
          <!-- Project 1: Concurrent Shell -->
          <div class="project-card terminal-theme">
            <div class="terminal-header">
              <span class="circle red"></span>
              <span class="circle yellow"></span>
              <span class="circle green"></span>
              <span class="title">concurrent-shell@Michael</span>
            </div>
  
            <div class="terminal-body">
              <pre ref="terminalOutput" class="animated-text"></pre>
              <div class="project-link">
                <a
                  href="https://github.com/MichaelStewart3252/ConcurrentShell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
  
          <!-- Project 2: Full Stack Website -->
          <div class="project-card fullstack-theme">
            <div class="project-header">
              <h3>Machine Learning Script</h3>
            </div>
  
            <div class="project-body">
              <p>
                A machine learning algorithm developed for a Kaggle Competition.
              </p>
              <div class="project-link">
                <a
                  href="https://github.com/MichaelStewart3252/FullStackWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsPage',
    mounted() {
      this.$el.id = 'projects';
      this.$el.style.minHeight = 'calc(100vh)';
      this.startTypingEffect();
    },
    methods: {
      startTypingEffect() {
        const terminalLines = [
          "$ ./Michael's-JAVA-concurrent-shell",
          'shell> echo "Welcome to my concurrent shell!"',
          'Welcome to my concurrent shell!',
          'shell> sleep 3 &',
          '[1] 2345',
          'shell> ls -la | grep ".sh"',
          '-rwxr-xr-x  1 user staff  1234 shell.sh',
          'shell> click the link below!'
        ];
  
        const output = this.$refs.terminalOutput;
        let i = 0;
        let lineIndex = 0;
  
        const typeNextChar = () => {
          if (lineIndex >= terminalLines.length) return;
  
          const line = terminalLines[lineIndex];
          if (i < line.length) {
            output.textContent += line[i];
            i++;
            setTimeout(typeNextChar, 40);
          } else {
            output.textContent += '\n';
            i = 0;
            lineIndex++;
            setTimeout(typeNextChar, 300);
          }
        };
  
        typeNextChar();
      }
    }
  }
  </script>
  
  <style scoped>
  .fullpage-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 2rem;
    background: url('/projectspage.jpg') center/cover no-repeat;
  }
  
  .content {
    color: white;
    width:85%;
    background: rgba(0, 0, 0, 0.75);
    padding: 5rem;
    border-radius: 15px;
    text-align: center;
  }
  
  .projects {
    font-size: 5em;
    margin-bottom: 3rem;
  }
  
  .projects-container {
    display: flex;
    gap: 5rem;
    justify-content: center;
    flex-wrap: nowrap; /* Prevents wrapping */
  }
  
  .project-card {
    width: 55%; /* Width of each card */
    height: 800px; /* Increased height */
    background-color: #1e1e1e;
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
  }
  
  .terminal-theme {
    background: #1e1e1e;
  }
  
  .fullstack-theme {
    background: #2d2d2d;
  }
  
  .terminal-header {
    background: #2d2d2d;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #aaa;
    font-size: 1.6rem;
  }
  
  .terminal-header .circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: inline-block;
  }
  
  .red { background: #ff5f56; }
  .yellow { background: #ffbd2e; }
  .green { background: #27c93f; }
  
  .terminal-header .title {
    margin-left: auto;
    font-weight: bold;
    font-size: 2rem;
  }
  
  .terminal-body {
    padding: 3rem;
    color: #33ff33;
    font-size: 2rem;
    background-color: #1e1e1e;
    overflow-y: auto;
    white-space: pre-wrap;
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .project-header {
    background: #3c3c3c;
    padding: 2rem;
    color: #fff;
  }
  
  .project-body {
    padding: 3rem;
    color: #fff;
    background-color: #2d2d2d;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .project-link {
    margin-top: auto;
    padding-top: 2rem;
    text-align: center;
  }
  
  .project-link a {
    color: #00bfff;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
  }
  
  .project-link a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .projects-container {
      flex-direction: column;
      align-items: center;
    }
  
    .project-card {
      width: 80%;
      margin-bottom: 3rem;
    }
  
    .terminal-header {
      font-size: 1.3rem;
    }
  
    .terminal-body {
      font-size: 1.5rem;
    }
  
    .project-header h3 {
      font-size: 2.5rem;
    }
  
    .project-link a {
      font-size: 1.8rem;
    }
  }
  </style>