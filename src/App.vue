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
        <div v-if="!answered" class="main-content">
          <div class="heart-icon">💝</div>
          <h1>Will You Be My Valentine?</h1>
          <p>I promise endless laughter, sweet moments, and maybe some terrible jokes along the way...</p>
          
          <div class="buttons">
            <button class="yes-btn" @click="sayYes">Yes! 💕</button>
            <button 
              class="no-btn" 
              @click="moveButton"
              :style="noButtonStyle"
              ref="noButton"
            >
              {{ noButtonText }}
            </button>
          </div>
        </div>

        <div v-else class="success">
          <div class="heart-icon">🥰</div>
          <h1>Yay! Best Valentine's Ever! 💕</h1>
          <p>You just made me the happiest person! Get ready for the best Valentine's Day together!</p>
          <p class="message">I can't wait to celebrate with you! 💖</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const answered = ref(false)
const noButtonMoveCount = ref(0)
const noButtonText = ref('No')
const noButtonStyle = ref({})
const noButton = ref(null)

function moveButton() {
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
  
  noButtonMoveCount.value++
  
  // Make it harder to say no
  if (noButtonMoveCount.value === 3) {
    noButtonText.value = 'Still no?'
  } else if (noButtonMoveCount.value === 5) {
    noButtonText.value = 'Really? 🥺'
  } else if (noButtonMoveCount.value === 7) {
    noButtonText.value = 'Please? 💔'
  }
}

function sayYes() {
  answered.value = true
  
  // Create confetti
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.left = Math.random() * window.innerWidth + 'px'
      confetti.style.top = '-10px'
      confetti.style.background = ['#ff1493', '#ff69b4', '#ff85c1', '#ffc0cb'][Math.floor(Math.random() * 4)]
      confetti.style.animationDelay = Math.random() * 0.5 + 's'
      document.body.appendChild(confetti)
      
      setTimeout(() => confetti.remove(), 3000)
    }, i * 30)
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
    transform: translateY(100vh) rotate(360deg);
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
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s ease-in;
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

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  10%, 30% { transform: scale(1.1); }
  20%, 40% { transform: scale(1); }
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
}

.yes-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 20, 147, 0.6);
}

.no-btn {
  background: #f0f0f0;
  color: #999;
}

.no-btn:hover {
  background: #e0e0e0;
}

.success {
  animation: fadeIn 1s ease-in;
}

.message {
  font-size: 1.1em;
  color: #666;
  margin-top: 20px;
  font-style: italic;
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
}
</style>