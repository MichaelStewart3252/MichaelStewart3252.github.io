<template>
  <div class="valentine-wrapper">
    <div class="valentine-container">
      <!-- Floating hearts background -->
      <div class="heart-bg" style="top: 10%; left: 10%;">💕</div>
      <div class="heart-bg" style="top: 20%; right: 15%; animation-delay: 1s;">💗</div>
      <div class="heart-bg" style="bottom: 15%; left: 20%; animation-delay: 2s;">💖</div>
      <div class="heart-bg" style="bottom: 25%; right: 10%; animation-delay: 1.5s;">💝</div>
      <div class="heart-bg" style="top: 50%; left: 5%; animation-delay: 0.5s;">💓</div>
      <div class="heart-bg" style="top: 60%; right: 5%; animation-delay: 2.5s;">💕</div>

      <div class="card-container">
        <div v-if="!answered && !showAngryFace" class="main-content">
          <div class="heart-icon">💝</div>
          <h1>Will You Be My Valentine?</h1>
          <p>No pressure, but I built an entire website for this so... 👀</p>
          
          <div class="buttons">
            <button class="yes-btn" @click="sayYes">Yes! 💕</button>
            <button 
              class="no-btn" 
              @click="moveButton"
              :style="noButtonStyle"
            >
              No
            </button>
          </div>
        </div>

        <!-- Angry face after 4 clicks -->
        <div v-if="showAngryFace && !answered" class="angry-screen">
          <img src="https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" alt="Angry">
          <p>you hate me</p>
        </div>

        <!-- Success message -->
        <div v-if="answered" class="success">
          <div class="heart-icon dancing">💕</div>
          <h1>I love you! 💖</h1>
          <p class="special-message">You make everything better. Can't wait to spend Valentine's Day with you ✨</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const answered = ref(false)
const noButtonMoveCount = ref(0)
const noButtonStyle = ref({})
const showAngryFace = ref(false)

function moveButton() {
  noButtonMoveCount.value++
  
  if (noButtonMoveCount.value >= 4) {
    showAngryFace.value = true
    return
  }
  
  // Make the No button run away
  const maxX = window.innerWidth - 150
  const maxY = window.innerHeight - 100
  
  const randomX = Math.random() * maxX
  const randomY = Math.random() * maxY
  
  noButtonStyle.value = {
    position: 'fixed',
    left: randomX + 'px',
    top: randomY + 'px',
    transition: 'all 0.3s ease',
    zIndex: 1000
  }
}

function sayYes() {
  answered.value = true
  
  // Create confetti
  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.left = Math.random() * window.innerWidth + 'px'
      confetti.style.top = '-10px'
      
      const shapes = ['❤️', '💕', '💖', '✨', '🎉', '⭐', '💝']
      const colors = ['#ff1493', '#ff69b4', '#ff85c1', '#ffc0cb', '#ff6b9d']
      
      if (Math.random() > 0.5) {
        confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)]
        confetti.style.fontSize = '20px'
        confetti.style.background = 'transparent'
      } else {
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
      }
      
      confetti.style.animationDelay = Math.random() * 0.5 + 's'
      confetti.style.animationDuration = (2 + Math.random() * 2) + 's'
      document.body.appendChild(confetti)
      
      setTimeout(() => confetti.remove(), 5000)
    }, i * 20)
  }
}
</script>

<style>
/* Global reset for this page */
* {
  box-sizing: border-box;
}

/* Global styles for confetti (not scoped) */
.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  background: #ff1493;
  animation: confetti-fall 3s linear;
  pointer-events: none;
  z-index: 9999;
}

@keyframes confetti-fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
</style>

<style scoped>
.valentine-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%);
  z-index: 9999;
}

.valentine-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Floating hearts background */
.heart-bg {
  position: absolute;
  font-size: 20px;
  opacity: 0.3;
  animation: float 10s infinite;
  pointer-events: none;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.card-container {
  background: white;
  padding: 60px 40px;
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
  text-align: center;
  max-width: 600px;
  width: 90%;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s ease-in;
  max-height: 90vh;
  overflow-y: auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.heart-icon {
  font-size: 80px;
  animation: heartbeat 1.5s infinite;
  display: inline-block;
  margin-bottom: 20px;
}

.heart-icon.dancing {
  animation: dance 0.5s infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  10%, 30% { transform: scale(1.1); }
  20%, 40% { transform: scale(1); }
}

@keyframes dance {
  0%, 100% { transform: rotate(-5deg) scale(1.1); }
  50% { transform: rotate(5deg) scale(1.2); }
}

h1 {
  color: #ff1493;
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Georgia', serif;
}

p {
  color: #666;
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 40px;
  font-family: 'Georgia', serif;
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

button {
  padding: 15px 40px;
  font-size: 1.1em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-family: 'Georgia', serif;
}

.yes-btn {
  background: linear-gradient(135deg, #ff1493, #ff69b4);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 20, 147, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.yes-btn:hover {
  transform: scale(1.15);
  box-shadow: 0 6px 25px rgba(255, 20, 147, 0.7);
}

.no-btn {
  background: #f0f0f0;
  color: #999;
}

.no-btn:hover {
  background: #e0e0e0;
}

/* Angry face screen */
.angry-screen {
  animation: fadeIn 0.5s ease-in;
}

.angry-screen img {
  width: 300px;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  margin-bottom: 20px;
}

.angry-screen h1 {
  font-size: 4em;
  margin: 20px 0;
}

.angry-screen p {
  font-size: 1.5em;
  font-weight: bold;
  color: #ff1493;
  margin-bottom: 20px;
}

/* Success screen */
.success {
  animation: fadeIn 1s ease-in;
}

.success h1 {
  font-size: 3em;
  animation: rainbow 3s infinite;
}

.special-message {
  font-size: 1.3em;
  color: #ff1493;
  font-style: italic;
  margin-top: 30px;
  line-height: 1.8;
}

@keyframes rainbow {
  0% { color: #ff1493; }
  25% { color: #ff69b4; }
  50% { color: #ff85c1; }
  75% { color: #ff69b4; }
  100% { color: #ff1493; }
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .card-container {
    padding: 40px 30px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  p {
    font-size: 1em;
  }
  
  .heart-icon {
    font-size: 60px;
  }
  
  .angry-screen img {
    width: 200px;
  }
  
  .success h1 {
    font-size: 2em;
  }
}
</style>