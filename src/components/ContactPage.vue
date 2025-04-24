<template>
    <section class="fullpage-section">
      <div class="content">
        <h1>Contact Me</h1>
        <p class="description">Feel free to reach out for collaborations, questions, or just to say hi!</p>
  
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
  
          <button type="submit" :disabled="isSending">Send Message</button>
        </form>
  
        <!-- Loading Indicator -->
        <div v-if="isSending" class="loading-spinner">Sending...</div>
  
        <!-- Success or Error Messages -->
        <p v-if="isSent" class="success-message">
          Thank you! Your message has been sent. 🎉 
          <span v-if="userEmail">We'll get back to you soon at {{ userEmail }}.</span>
        </p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </section>
  </template>
  
  
  <script>
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSent: false,
      errorMessage: '',
      isSending: false, // Track sending state
      userEmail: '' // Store the user's email after submission
    };
  },
  mounted() {
    emailjs.init(USER_ID); // Initialize with user ID from environment
  },
  methods: {
    sendEmail() {
      const { name, email, message } = this.form;

      // Set the sending state to true
      this.isSending = true;

      // Use the correct environment variables
      const serviceID = import.meta.env.VITE_SERVICE_ID;
      const templateID = import.meta.env.VITE_TEMPLATE_ID;
      const userID = import.meta.env.VITE_USER_ID;

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('Email sent successfully', response);
          this.isSent = true;
          this.errorMessage = '';
          this.isSending = false; // Reset sending state
          this.userEmail = email; // Store the email here
          this.form = { name: '', email: '', message: '' };
        }, (error) => {
          console.error('Error sending email', error);
          this.errorMessage = 'Something went wrong. Please try again.';
          this.isSent = false;
          this.isSending = false; // Reset sending state
        });
    }
  }
};
</script>
  
  <style scoped>
  /* Styles for the contact page */
  .fullpage-section {
    width: 100%;
    height: calc(100vh);
    display: flex;
    justify-content: flex-start; /* Align content to the left */
    align-items: center;
    background-image: url('/contact.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    padding-left: 5%;
  }
  
  .content {
    text-align: left;
    color: white;
    font-family: 'Arial', sans-serif;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 12px;
    width: 400px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group label {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: #fff;
    color: #333;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #ff5e93;
    outline: none;
  }
  
  textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  button {
    padding: 12px 20px;
    background-color: #ff5e93;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s, transform 0.3s;
    width: 100%;
  }
  
  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  
  button:hover {
    background-color: #ff2a6a;
    transform: scale(1.05);
  }
  
  .loading-spinner {
    margin-top: 20px;
    color: yellow;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .success-message {
    margin-top: 20px;
    color: #ff2a6a;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .error-message {
    margin-top: 20px;
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .content {
      width: 90%;
    }
  }
  </style>
  