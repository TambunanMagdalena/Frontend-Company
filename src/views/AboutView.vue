<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1>About Moonlay Technologies</h1>
          <p>Pioneering digital transformation since 2015</p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="company-story">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2>Our Journey</h2>
            <p>
              Founded in 2015, Moonlay Technologies began as a small startup
              with a big vision: to revolutionize how businesses leverage
              technology. Today, we're a trusted partner for enterprises
              worldwide, delivering innovative solutions that drive growth and
              efficiency.
            </p>
            <p>
              Our team of experts combines deep industry knowledge with
              cutting-edge technical expertise to create solutions that not only
              meet today's challenges but also anticipate tomorrow's
              opportunities.
            </p>
          </div>
          <div class="story-visual">
            <div class="timeline">
              <div
                class="timeline-item"
                v-for="item in timeline"
                :key="item.year"
              >
                <div class="timeline-year">{{ item.year }}</div>
                <div class="timeline-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-card vision">
            <div class="vm-icon">
              <el-icon><View /></el-icon>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading global technology partner that empowers
              businesses to thrive in the digital age through innovative and
              sustainable solutions.
            </p>
          </div>
          <div class="vm-card mission">
            <div class="vm-icon">
              <el-icon><Aim /></el-icon>
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional technology services that drive digital
              transformation, enhance operational efficiency, and create lasting
              value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Leadership</h2>
          <p>The passionate professionals driving our success</p>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="member in team" :key="member.name">
            <div class="team-avatar">
              <el-avatar :size="120" :src="member.avatar" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p class="bio">{{ member.bio }}</p>
            <div class="social-links">
              <a
                v-for="social in member.social"
                :key="social.platform"
                :href="social.url"
                class="social-link"
              >
                <el-icon><component :is="social.icon" /></el-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  View,
  Aim,
  Link,
  Message,
  ChatDotRound,
} from "@element-plus/icons-vue";

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with 5 team members focusing on web development",
  },
  {
    year: "2017",
    title: "First Enterprise Client",
    description:
      "Secured our first Fortune 500 client, marking significant growth",
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Opened offices in Singapore and expanded to Southeast Asia",
  },
  {
    year: "2022",
    title: "AI & ML Division",
    description: "Launched specialized AI and machine learning services",
  },
  {
    year: "2024",
    title: "Cloud Excellence",
    description: "Recognized as top cloud solutions provider in the region",
  },
];

const team = [
  {
    name: "Sarah Chen",
    position: "CEO & Founder",
    bio: "15+ years in technology leadership with passion for innovation and digital transformation.",
    avatar: "",
    social: [
      { platform: "linkedin", icon: Link, url: "#" },
      { platform: "email", icon: Message, url: "#" },
    ],
  },
  {
    name: "Michael Rodriguez",
    position: "CTO",
    bio: "Expert in cloud architecture and scalable systems with background in Fortune 100 companies.",
    avatar: "",
    social: [
      { platform: "linkedin", icon: Link, url: "#" },
      { platform: "email", icon: Message, url: "#" },
    ],
  },
  {
    name: "Emily Watson",
    position: "Head of Delivery",
    bio: "Specialized in project management and ensuring successful client implementations.",
    avatar: "",
    social: [
      { platform: "linkedin", icon: Link, url: "#" },
      { platform: "email", icon: Message, url: "#" },
    ],
  },
  {
    name: "David Kim",
    position: "Innovation Director",
    bio: "Drives research and development in emerging technologies and digital solutions.",
    avatar: "",
    social: [
      { platform: "linkedin", icon: Link, url: "#" },
      { platform: "email", icon: Message, url: "#" },
    ],
  },
];
</script>

<style scoped>
.about-hero {
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

.company-story {
  padding: 80px 0;
  background: white;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-content h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
}

.story-content p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2.4rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #667eea;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-year {
  font-weight: 700;
  color: #667eea;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #718096;
  line-height: 1.6;
}

.vision-mission {
  padding: 80px 0;
  background: #f7fafc;
}

.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.vm-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.vm-card:hover {
  transform: translateY(-5px);
}

.vm-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.vm-icon .el-icon {
  width: 32px;
  height: 32px;
}

.vm-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.vm-card p {
  color: #718096;
  line-height: 1.6;
  font-size: 1.125rem;
}

.team-section {
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.team-avatar {
  margin-bottom: 1.5rem;
}

.team-card h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.position {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bio {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f7fafc;
  border-radius: 8px;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .story-grid,
  .vm-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
