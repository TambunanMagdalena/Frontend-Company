<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Company Info -->
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🌙</span>
            <span class="logo-text">Moonlay Technologies</span>
          </div>
          <p class="footer-description">
            Leading technology solutions provider delivering innovative software
            development and IT consulting services worldwide.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <el-icon><ChatDotRound /></el-icon>
            </a>
            <a href="#" class="social-link">
              <el-icon><Message /></el-icon>
            </a>
            <a href="#" class="social-link">
              <el-icon><Link /></el-icon>
            </a>
            <a href="#" class="social-link">
              <el-icon><VideoPlay /></el-icon>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3>Quick Links</h3>
          <div class="footer-links">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About Us</router-link>
            <router-link to="/services" class="footer-link"
              >Services</router-link
            >
            <router-link to="/cities" class="footer-link">Cities</router-link>
            <router-link to="/contact" class="footer-link">Contact</router-link>
          </div>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h3>Our Services</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Software Development</a>
            <a href="#" class="footer-link">Cloud Infrastructure</a>
            <a href="#" class="footer-link">IT Consulting</a>
            <a href="#" class="footer-link">Digital Transformation</a>
            <a href="#" class="footer-link">Data Analytics</a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3>Contact Info</h3>
          <div class="contact-info">
            <div class="contact-item">
              <el-icon><Location /></el-icon>
              <span>123 Tech Park, Innovation District, Jakarta 12345</span>
            </div>
            <div class="contact-item">
              <el-icon><Phone /></el-icon>
              <span>+62 21 1234 5678</span>
            </div>
            <div class="contact-item">
              <el-icon><Message /></el-icon>
              <span>info@moonlay.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2025 Moonlay Technologies. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#" class="legal-link">Privacy Policy</a>
            <a href="#" class="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Location,
  Phone,
  Message,
  ChatDotRound,
  Link,
  VideoPlay,
} from "@element-plus/icons-vue";
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  padding: 4rem 0 2rem;
}

.footer-section h3 {
  color: #63b3ed;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-icon {
  margin-right: 8px;
  font-size: 1.8rem;
}

.logo-text {
  background: linear-gradient(135deg, #63b3ed, #68d391);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: #cbd5e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #cbd5e0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #63b3ed;
  color: white;
  transform: translateY(-2px);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #63b3ed;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #cbd5e0;
}

.contact-item .el-icon {
  color: #63b3ed;
  margin-top: 2px;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a0aec0;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.legal-link {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #63b3ed;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
  }
}
</style>
