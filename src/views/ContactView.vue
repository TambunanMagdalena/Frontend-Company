<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to start your next project? We'd love to hear from you</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send us a Message</h2>
            <el-form
              :model="form"
              :rules="rules"
              ref="formRef"
              class="contact-form"
              status-icon
            >
              <el-form-item prop="name">
                <el-input
                  v-model="form.name"
                  placeholder="Your Name"
                  size="large"
                >
                  <template #prefix>
                    <el-icon><User /></el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="Your Email"
                  size="large"
                >
                  <template #prefix>
                    <el-icon><Message /></el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item prop="subject">
                <el-input
                  v-model="form.subject"
                  placeholder="Subject"
                  size="large"
                >
                  <template #prefix>
                    <el-icon><Document /></el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item prop="message">
                <el-input
                  v-model="form.message"
                  type="textarea"
                  :rows="6"
                  placeholder="Your Message"
                  resize="none"
                />
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  @click="submitForm"
                  :loading="loading"
                  class="submit-btn"
                >
                  Send Message
                  <el-icon><Promotion /></el-icon>
                </el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <h2>Contact Information</h2>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">
                  <el-icon><Location /></el-icon>
                </div>
                <div class="contact-details">
                  <h3>Our Office</h3>
                  <p>
                    123 Tech Park, Innovation District<br />Jakarta 12345,
                    Indonesia
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <el-icon><Phone /></el-icon>
                </div>
                <div class="contact-details">
                  <h3>Phone Number</h3>
                  <p>+62 21 1234 5678<br />+62 21 1234 5679</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <el-icon><Message /></el-icon>
                </div>
                <div class="contact-details">
                  <h3>Email Address</h3>
                  <p>info@moonlay.com<br />support@moonlay.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <el-icon><Clock /></el-icon>
                </div>
                <div class="contact-details">
                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 9:00 - 18:00<br />Saturday: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  class="social-link"
                >
                  <el-icon><component :is="social.icon" /></el-icon>
                  <span>{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <div class="map-placeholder">
          <div class="map-content">
            <el-icon><Location /></el-icon>
            <h3>Interactive Map</h3>
            <p>Our office location would be displayed here</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import {
  User,
  Message,
  Document,
  Promotion,
  Location,
  Phone,
  Clock,
  Link,
  ChatDotRound,
  VideoPlay,
} from "@element-plus/icons-vue";

const formRef = ref();
const loading = ref(false);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const rules = {
  name: [
    { required: true, message: "Please input your name", trigger: "blur" },
    { min: 2, message: "Name must be at least 2 characters", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Please input your email", trigger: "blur" },
    { type: "email", message: "Please input valid email", trigger: "blur" },
  ],
  subject: [
    { required: true, message: "Please input subject", trigger: "blur" },
    {
      min: 5,
      message: "Subject must be at least 5 characters",
      trigger: "blur",
    },
  ],
  message: [
    { required: true, message: "Please input your message", trigger: "blur" },
    {
      min: 10,
      message: "Message must be at least 10 characters",
      trigger: "blur",
    },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Link, url: "#" },
  { name: "Twitter", icon: ChatDotRound, url: "#" },
  { name: "YouTube", icon: VideoPlay, url: "#" },
];

const submitForm = async () => {
  try {
    await formRef.value.validate();
    loading.value = true;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    ElMessage.success(
      "Message sent successfully! We will get back to you soon."
    );

    // Reset form
    formRef.value.resetFields();
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("Please fill in all required fields correctly.");
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 140px 0 80px;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.contact-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-form-section {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.contact-form-section h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
}

.contact-form .el-form-item {
  margin-bottom: 1.5rem;
}

.submit-btn {
  width: 100%;
  height: 48px;
  font-size: 1.125rem;
}

.contact-info-section h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-icon .el-icon {
  width: 24px;
  height: 24px;
}

.contact-details h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.contact-details p {
  color: #718096;
  line-height: 1.6;
  margin: 0;
}

.social-section h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #4a5568;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.social-link:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #667eea;
}

.social-link .el-icon {
  width: 20px;
  height: 20px;
}

.map-section {
  padding: 80px 0;
  background: white;
}

.map-placeholder {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.map-content {
  text-align: center;
}

.map-content .el-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.map-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.map-content p {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .contact-form-section,
  .contact-info-section {
    padding: 2rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .contact-icon {
    align-self: center;
  }
}
</style>
