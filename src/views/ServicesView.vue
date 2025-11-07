<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <div class="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions for your business success</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid-section">
      <div class="container">
        <div class="services-grid">
          <div
            class="service-card"
            v-for="service in services"
            :key="service.title"
          >
            <div class="service-icon">
              <component :is="service.icon" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <el-button type="primary" text @click="scrollToContact">
              Learn More
              <el-icon><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Process</h2>
          <p>How we deliver exceptional results</p>
        </div>
        <div class="process-steps">
          <div
            class="process-step"
            v-for="(step, index) in process"
            :key="step.title"
          >
            <div class="step-number">0{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="services-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's discuss how our services can help achieve your business goals
          </p>
          <el-button
            type="primary"
            size="large"
            @click="$router.push('/contact')"
          >
            Get Free Consultation
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRight,
  Monitor,
  Cloudy,
  Setting,
  DataAnalysis,
  TrendCharts,
} from "@element-plus/icons-vue";

const services = [
  {
    icon: Monitor,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "Enterprise Software",
      "API Integration",
      "Legacy System Modernization",
    ],
  },
  {
    icon: Cloudy,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP Solutions",
      "DevOps & CI/CD",
      "Infrastructure as Code",
      "Cloud Security & Compliance",
    ],
  },
  {
    icon: Setting,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to drive your digital transformation",
    features: [
      "Digital Strategy",
      "Technology Roadmapping",
      "System Architecture",
      "Security Audits",
      "Performance Optimization",
    ],
  },
  {
    icon: DataAnalysis,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights and intelligence",
    features: [
      "Business Intelligence",
      "Data Warehousing",
      "Machine Learning",
      "Predictive Analytics",
      "Data Visualization",
    ],
  },
  {
    icon: TrendCharts,
    title: "Digital Transformation",
    description: "Comprehensive digital overhaul for future-ready businesses",
    features: [
      "Process Automation",
      "Customer Experience",
      "Workflow Optimization",
      "Digital Innovation",
      "Change Management",
    ],
  },
];

const process = [
  {
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business objectives, challenges, and requirements to create a comprehensive project plan.",
  },
  {
    title: "Design & Architecture",
    description:
      "Our experts design scalable solutions and create detailed technical specifications for your project.",
  },
  {
    title: "Development & Testing",
    description:
      "We build your solution using agile methodologies with continuous testing and quality assurance.",
  },
  {
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support to ensure optimal performance and growth.",
  },
];

const scrollToContact = () => {
  window.open("/contact", "_self");
};
</script>

<style scoped>
.services-hero {
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

.services-grid-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.service-icon .el-icon {
  width: 32px;
  height: 32px;
}

.service-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.service-card > p {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #48bb78;
  font-weight: bold;
}

.process-section {
  padding: 80px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.125rem;
  color: #718096;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.process-step {
  text-align: center;
  padding: 2rem;
}

.step-number {
  font-size: 3rem;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 1rem;
  opacity: 0.2;
}

.step-content h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.step-content p {
  color: #718096;
  line-height: 1.6;
}

.services-cta {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  color: #cbd5e0;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
