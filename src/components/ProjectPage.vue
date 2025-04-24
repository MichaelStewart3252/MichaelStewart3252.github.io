<template>
  <section class="fullpage-section">
    <div class="content">
      <h2 class="projects">Some of my projects!</h2>

      <div class="projects-container">
        <!-- Concurrent Shell Card -->
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
              <a href="https://github.com/MichaelStewart3252/ConcurrentShell" target="_blank" rel="noopener noreferrer">
                🔗 View on GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- ML Robot Card -->
        <div class="project-card terminal-theme">
          <div class="terminal-header">
            <span class="circle red"></span>
            <span class="circle yellow"></span>
            <span class="circle green"></span>
            <span class="title">ml-robot@Michael</span>
          </div>

          <div class="robot-display">
            <div class="futuristic-robot">
              <div class="robot-base"></div>
              <div class="robot-body">
                <div class="robot-neck"></div>
                <div class="robot-head">
                  <div class="robot-face">
                    <div class="robot-eye left-eye"></div>
                    <div class="robot-eye right-eye"></div>
                    <div class="robot-mouth"></div>
                  </div>
                  <div class="robot-antenna"></div>
                </div>
                <div class="robot-arm left-arm">
                  <div class="robot-hand"></div>
                </div>
                <div class="robot-arm right-arm">
                  <div class="robot-hand"></div>
                </div>
              </div>
              <div class="status-display">
                <div class="status-line">🤖 {{ trainingStatus }}</div>
                <div class="status-line">📊 Accuracy: {{ formattedAccuracy }}%</div>
                <div class="status-line">⚡ Epoch: <span class="epoch-counter">{{ formattedEpoch }}</span></div>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: progress + '%' }"></div>
                </div>
              </div>
            </div>
            <div class="project-link">
              <a href="https://github.com/MichaelStewart3252/MLmodel" target="_blank" rel="noopener noreferrer">
                🤖 Explore AI Project
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
  data() {
    return {
      currentEpoch: 0,
      maxEpoch: 150,
      epochInterval: null,
      trainingStatus: 'Initializing model...',
      progress: 0,
      accuracy: 94.2,
      terminalLines: [
        "$ ./Michael's-JAVA-concurrent-shell",
        'shell> echo "Welcome to my concurrent shell!"',
        'Welcome to my concurrent shell!',
        'shell> sleep 3 &',
        '[1] 2345',
        'shell> ls -la | grep ".sh"',
        '-rwxr-xr-x  1 user staff  1234 shell.sh',
        'shell> click the link below!'
      ]
    }
  },
  computed: {
    formattedAccuracy() {
      return this.accuracy.toFixed(1);
    },
    formattedEpoch() {
      return `${this.currentEpoch.toString().padStart(3, '0')}/${this.maxEpoch}`;
    }
  },
  mounted() {
    this.$el.id = 'projects';
    this.$el.style.minHeight = 'calc(100vh)';
    this.startTypingEffect();
    this.startTrainingSimulation();
  },
  beforeDestroy() {
    clearInterval(this.epochInterval);
  },
  methods: {
    startTrainingSimulation() {
      setTimeout(() => {
        this.trainingStatus = 'Loading dataset...';
        setTimeout(() => {
          this.trainingStatus = 'Compiling model...';
          setTimeout(() => {
            this.beginEpochCounting();
          }, 1000);
        }, 1000);
      }, 1000);
    },
    beginEpochCounting() {
      this.trainingStatus = 'Training started...';
      this.epochInterval = setInterval(() => {
        if (this.currentEpoch < this.maxEpoch) {
          this.currentEpoch++;
          this.progress = Math.floor((this.currentEpoch / this.maxEpoch) * 100);
          this.accuracy = 94.2 + (this.currentEpoch * 0.03);
          
          if (this.currentEpoch === this.maxEpoch) {
            this.trainingStatus = '✅ Training complete!';
            clearInterval(this.epochInterval);
          } else if (this.currentEpoch > this.maxEpoch * 0.8) {
            this.trainingStatus = '🔍 Fine-tuning...';
          } else if (this.currentEpoch > this.maxEpoch * 0.5) {
            this.trainingStatus = '⚡ Optimizing...';
          }
          
          if (this.currentEpoch % 10 === 0) {
            clearInterval(this.epochInterval);
            const speed = 800 + Math.random() * 400;
            this.epochInterval = setInterval(this.beginEpochCounting, speed);
          }
        }
      }, 1000);
    },
    startTypingEffect() {
      const output = this.$refs.terminalOutput;
      let i = 0;
      let lineIndex = 0;

      const typeNextChar = () => {
        if (lineIndex >= this.terminalLines.length) return;

        const line = this.terminalLines[lineIndex];
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
  padding: 4rem 1rem;
  background: url('/projectspage.jpg') center/cover no-repeat;
}

.content {
  color: black;
  width: 80%;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.projects {
  font-size: 2.5em;
  margin-bottom: 1.5rem;
}

.projects-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.project-card {
  width: 45%;
  min-width: 300px;
  height: 400px;
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: #2d2d2d;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #aaa;
  font-size: 1rem;
}

.terminal-header .circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-header .title {
  margin-left: auto;
  font-weight: bold;
  font-size: 1rem;
}

.terminal-body {
  padding: 1rem;
  color: #33ff33;
  font-size: 1rem;
  background-color: #1e1e1e;
  overflow-y: auto;
  white-space: pre-wrap;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.terminal-body pre.animated-text {
  text-align: left;
  padding-left: 10px;
  margin: 0;
  width: 100%;
}

.robot-display {
  padding: 1rem;
  color: #33ff33;
  font-size: 1rem;
  background-color: #1e1e1e;
  overflow-y: auto;
  white-space: pre-wrap;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.futuristic-robot {
  width: 180px;
  height: 250px;
  position: relative;
  margin: 10px 0;
}

.robot-base {
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 20px;
  background: rgba(51, 255, 51, 0.2);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(2px);
}

.robot-body {
  position: absolute;
  bottom: 20px;
  width: 80px;
  height: 120px;
  background: rgba(51, 255, 51, 0.9);
  border-radius: 15px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: float 3s ease-in-out infinite;
}

.robot-neck {
  position: absolute;
  top: -10px;
  width: 30px;
  height: 15px;
  background: rgba(51, 255, 51, 0.9);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px 5px 0 0;
}

.robot-head {
  position: absolute;
  top: -60px;
  width: 60px;
  height: 70px;
  background: rgba(51, 255, 51, 0.95);
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.robot-face {
  position: relative;
  top: 15px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
}

.robot-eye {
  width: 15px;
  height: 15px;
  background: #1e1e1e;
  border-radius: 50%;
  position: relative;
  animation: blink 4s infinite;
}

.robot-mouth {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 5px;
  background: #1e1e1e;
  border-radius: 5px;
  animation: talk 2s infinite;
}

.robot-antenna {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 15px;
  background: #27c93f;
  border-radius: 2px;
}

.robot-antenna::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -3px;
  width: 10px;
  height: 10px;
  background: #1e1e1e;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.robot-arm {
  position: absolute;
  width: 15px;
  height: 60px;
  background: rgba(51, 255, 51, 0.9);
  top: 30px;
  border-radius: 5px;
}

.left-arm {
  left: -15px;
  transform-origin: top center;
  animation: arm-swing-left 3s infinite;
}

.right-arm {
  right: -15px;
  transform-origin: top center;
  animation: arm-swing-right 3s infinite;
}

.robot-hand {
  position: absolute;
  bottom: 0;
  width: 15px;
  height: 10px;
  background: #1e1e1e;
  border-radius: 0 0 5px 5px;
}

.status-display {
  position: absolute;
  bottom: 60px;
  width: 100%;
  background: rgba(30, 30, 30, 0.8);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
  color: #33ff33;
}

.status-line {
  margin: 5px 0;
}

.epoch-counter {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #27c93f;
  animation: pulse-green 1.5s infinite;
}

.progress-bar {
  width: 90%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin: 8px auto 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #27c93f, #7eff8a);
  transition: width 0.5s ease;
}

.project-link {
  margin-top: auto;
  padding-top: 1rem;
  text-align: center;
  width: 100%;
}

.project-link a {
  color: #33ff33;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}

.project-link a:hover {
  text-decoration: underline;
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes blink {
  0%, 45%, 55%, 100% { height: 15px; }
  48%, 52% { height: 2px; }
}

@keyframes talk {
  0%, 40%, 60%, 100% { height: 5px; }
  50% { height: 10px; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes arm-swing-left {
  0%, 100% { transform: rotate(10deg); }
  50% { transform: rotate(-20deg); }
}

@keyframes arm-swing-right {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(20deg); }
}

@keyframes pulse-green {
  0%, 100% { color: #33ff33; }
  50% { color: #7eff8a; }
}

@media (max-width: 768px) {
  .projects-container {
    flex-direction: column;
    align-items: center;
  }

  .project-card {
    width: 90%;
    margin-bottom: 1.5rem;
    height: 350px;
  }
}
</style>