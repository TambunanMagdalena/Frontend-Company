<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <div class="logo-link" @click="goToHome">
          <span class="logo-icon">🌙</span>
          <span class="logo-text">Moonlay Technologies</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ 'nav-links-mobile': isMobileMenuOpen }">
        <a
          class="nav-link"
          :class="{ active: currentRoute === '/' }"
          @click="goToHome"
        >
          Home
        </a>
        <a
          class="nav-link"
          :class="{ active: currentRoute === '/about' }"
          @click="goToAbout"
        >
          About Us
        </a>
        <a
          class="nav-link"
          :class="{ active: currentRoute === '/services' }"
          @click="goToServices"
        >
          Services
        </a>
        <a
          class="nav-link"
          :class="{ active: currentRoute === '/cities' }"
          @click="goToCities"
        >
          Cities
        </a>
        <a
          class="nav-link contact-btn"
          :class="{ active: currentRoute === '/contact' }"
          @click="goToContact"
        >
          Contact
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-menu-btn" @click="toggleMobileMenu">
        <el-icon size="24">
          <Menu />
        </el-icon>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Menu } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const isMobileMenuOpen = ref(false);

// Track current route
const currentRoute = computed(() => route.path);

// Navigation methods
const goToHome = () => {
  router.push("/");
  closeMobileMenu();
};

const goToAbout = () => {
  router.push("/about");
  closeMobileMenu();
};

const goToServices = () => {
  router.push("/services");
  closeMobileMenu();
};

const goToCities = () => {
  router.push("/cities");
  closeMobileMenu();
};

const goToContact = () => {
  router.push("/contact");
  closeMobileMenu();
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest(".nav-container")) {
    closeMobileMenu();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  console.log("NavigationBar mounted. Current route:", currentRoute.value);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e4e7ed;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-logo .logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-logo .logo-link:hover {
  transform: translateY(-1px);
}

.logo-icon {
  margin-right: 8px;
  font-size: 1.8rem;
}

.logo-text {
  background: linear-gradient(135deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #606266;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.1);
  transform: translateY(-1px);
}

/* ACTIVE STATE - PASTI BERFUNGSI */
.nav-link.active {
  color: #409eff;
  background: rgba(64, 158, 255, 0.1);
  font-weight: 600;
}

.contact-btn {
  background: #409eff;
  color: white !important;
  padding: 10px 24px;
}

.contact-btn:hover {
  background: #337ecc;
  transform: translateY(-2px);
}

.contact-btn.active {
  background: #337ecc;
  box-shadow: 0 4px 12px rgba(51, 126, 204, 0.3);
}

.mobile-menu-btn {
  display: none;
  cursor: pointer;
  color: #606266;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  color: #409eff;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    border-top: 1px solid #e4e7ed;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links-mobile {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 12px 16px;
  }
}
</style>
