<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Software Development & IT Outsourcing To
              <span class="highlight">Accelerate Your Business</span>
            </h1>
            <p class="hero-subtitle">
              Our unique blend of creativity, technical expertise and experience
              will transform your businesses into
              <strong>impactful and adaptable</strong>
            </p>
            <div class="hero-actions">
              <el-button
                type="primary"
                size="large"
                class="cta-button"
                @click="goToContact"
              >
                Contact Us Now
                <el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-shapes">
              <div class="shape shape-1">🚀</div>
              <div class="shape shape-2">💻</div>
              <div class="shape shape-3">🔧</div>
              <div class="shape shape-4">📱</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Values</h2>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">
              {{ value.icon }}
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-content">
          <div class="stats-grid">
            <div class="stat-item" v-for="stat in stats" :key="stat.label">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>

          <div class="clients-section">
            <h3>Our Clients</h3>
            <div class="clients-grid">
              <div
                class="client-logo"
                v-for="client in clients"
                :key="client.name"
              >
                <div class="client-placeholder">{{ client.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Accelerate Your Business?</h2>
          <p>Let's build something amazing together</p>
          <el-button type="primary" size="large" @click="goToContact">
            Start Your Project
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";

const router = useRouter();

const goToContact = () => {
  router.push("/contact");
};

// PERBAIKAN: Gunakan emoji atau text untuk icons
const values = [
  {
    icon: "💻",
    title: "End-to-end Software Development",
    description:
      "Comprehensive solutions from concept to deployment and maintenance",
  },
  {
    icon: "🌐",
    title: "Brands Agnostic",
    description:
      "We work with businesses of all sizes and across all industries",
  },
  {
    icon: "📊",
    title: "Across Vertical Industries",
    description: "Expertise spanning multiple sectors and business domains",
  },
  {
    icon: "⚡",
    title: "Craftsmanship Project Management",
    description: "Meticulous attention to detail and quality in every project",
  },
  {
    icon: "🏆",
    title: "Certified IT Experts by Google, Microsoft and AWS",
    description:
      "Our team holds top certifications from leading technology providers",
  },
];

const stats = [
  { number: "10+", label: "years experience" },
  { number: "50+", label: "certified team members" },
  { number: "200+", label: "client projects built" },
];

const clients = [
  { name: "iptadana" },
  { name: "PF DIN LIRIS" },
  { name: "DEPOSUMA" },
  { name: "BENZIMMA ONLINE" },
  { name: "PF HIM SAMPORNA TIK" },
  { name: "Major Minor" },
  { name: "SARJOTI" },
  { name: "Kataya Sarkanti" },
];
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
  background-size: cover;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, #63b3ed 0%, #4299e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-subtitle strong {
  color: #63b3ed;
  font-weight: 600;
}

.cta-button {
  background: linear-gradient(135deg, #63b3ed 0%, #4299e1 100%);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 179, 237, 0.3);
}

.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  top: 10%;
  right: 20%;
  animation-delay: 1.5s;
}

.shape-3 {
  bottom: 30%;
  left: 20%;
  animation-delay: 3s;
}

.shape-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: 4.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background: #f7fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2d3748;
  font-weight: 700;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 3rem;
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.value-card h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: #718096;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  padding: 80px 0;
  background: white;
}

.stats-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.clients-section h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.client-logo {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  min-height: 100px;
}

.client-logo:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.client-placeholder {
  color: #4a5568;
  font-weight: 600;
  text-align: center;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  color: #cbd5e0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  .stats-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .stats-grid {
    flex-direction: row;
    justify-content: space-around;
  }
  .stat-item {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .values-grid {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    flex-direction: column;
  }
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-number {
    font-size: 2.5rem;
  }
  .section-header h2 {
    font-size: 2rem;
  }
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.125rem;
  }
  .clients-grid {
    grid-template-columns: 1fr;
  }
  .value-card {
    padding: 2rem 1.5rem;
  }
}
</style>
