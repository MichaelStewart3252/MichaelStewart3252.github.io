<template>
  <section class="fullpage-section">
    <div class="content">
      <h2>A Little About Me</h2>
      <p>
        I am a creative software engineer that loves to explore just about anything! I come
        from a diverse background of problem solving, whether it be math, programming or economics.
        I know my resume is flying around here somewhere...
      </p>
    </div>

    <a href="/MichaelStewartResume.pdf" target="_blank" class="airplane" aria-label="View Resume" ref="airplane">
      <svg width="100" height="100" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3L22 12L2 21L2 14L17 12L2 10L2 3Z" stroke="black" stroke-width="1"/>
      </svg>
      <div class="trail"></div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    this.$el.id = 'about';
    this.$el.style.minHeight = 'calc(100vh)';
    this.initAirplane();
  },
  methods: {
    initAirplane() {
      const airplane = this.$refs.airplane;
      const trail = airplane.querySelector('.trail');
      const planeSize = 60;
      const margin = 50;
      
      // State variables
      let posX, posY, angle;
      let minX, maxX, minY, maxY;
      let animationId;
      
      const initPosition = () => {
        // Calculate safe boundaries
        minX = margin;
        maxX = window.innerWidth - margin - planeSize;
        minY = margin;
        maxY = window.innerHeight - margin - planeSize;
        
        // Random starting position
        posX = minX + Math.random() * (maxX - minX);
        posY = minY + Math.random() * (maxY - minY);
        
        // Random starting direction
        angle = Math.random() * Math.PI * 2;
        
        airplane.style.left = `${posX}px`;
        airplane.style.top = `${posY}px`;
      };
      
      const updatePosition = () => {
        // Calculate movement
        const speed = 1.2;
        let newX = posX + Math.cos(angle) * speed;
        let newY = posY + Math.sin(angle) * speed;
        
        // Boundary checks with bounce
        let bounced = false;
        
        if (newX < minX) {
          newX = minX;
          angle = Math.PI - angle;
          bounced = true;
        } else if (newX > maxX) {
          newX = maxX;
          angle = Math.PI - angle;
          bounced = true;
        }
        
        if (newY < minY) {
          newY = minY;
          angle = -angle;
          bounced = true;
        } else if (newY > maxY) {
          newY = maxY;
          angle = -angle;
          bounced = true;
        }
        
        // Apply new position
        posX = newX;
        posY = newY;
        
        // Gentle random direction changes when not bouncing
        if (!bounced && Math.random() < 0.01) {
          angle += (Math.random() - 0.5) * 0.2;
        }
        
        // Normalize angle
        angle = (angle + Math.PI * 2) % (Math.PI * 2);
        
        // Update DOM
        airplane.style.left = `${posX}px`;
        airplane.style.top = `${posY}px`;
        airplane.style.transform = `rotate(${angle + Math.PI/2}rad)`;
        
        // Add trail point
        const trailPoint = document.createElement('div');
        trailPoint.className = 'trail-point';
        trail.appendChild(trailPoint);
        
        // Maintain trail length
        if (trail.children.length > 20) {
          trail.removeChild(trail.children[0]);
        }
      };
      
      const animate = () => {
        updatePosition();
        animationId = requestAnimationFrame(animate);
      };
      
      // Initialize and start animation
      initPosition();
      animate();
      

      
      // Handle window resize
      window.addEventListener('resize', () => {
        const prevCenterX = posX + planeSize/2;
        const prevCenterY = posY + planeSize/2;
        
        // Recalculate boundaries
        minX = margin;
        maxX = window.innerWidth - margin - planeSize;
        minY = margin;
        maxY = window.innerHeight - margin - planeSize;
        
        // Adjust position to stay within new boundaries
        posX = Math.max(minX, Math.min(maxX, posX));
        posY = Math.max(minY, Math.min(maxY, posY));
        
        // Adjust angle if needed to stay inbound
        if (posX <= minX || posX >= maxX) {
          angle = Math.PI - angle;
        }
        if (posY <= minY || posY >= maxY) {
          angle = -angle;
        }
      });
    }
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
  position: relative;
  overflow: hidden;
}
.content h2{
  font-size:2em;
  font-weight:bold;
}
.content {
  color: black;
  font-size: 1.5em;
  max-width: 50%;
  padding: 2rem;
  border-radius: 8px;
  z-index: 1;
}

/* Airplane position */
.airplane {
  position: absolute;
  rotate:270deg;
  width: 60px;
  height: 60px;
  transform-origin: center center;
  will-change: transform;
  z-index: 2;
  pointer-events: auto;
  transition: transform 0.2s ease-out;
}

.airplane svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 5px white);
}

/* Trail styling */
.trail {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.trail-point {
  position: absolute;
  width: 12px;
  height: 12px;
  background: rgba(222, 14, 14, 0.7); /* More noticeable */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(4px); /* Stronger blur effect */
  animation: trail-fade 2s ease-out forwards;
}

@keyframes trail-fade {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
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
  .airplane {
    width: 40px;
    height: 40px;
  }
}
</style>
