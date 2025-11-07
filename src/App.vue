<template>
  <div id="app">
    <NavigationBar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Height of navbar */
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Element Plus overrides for consistency */
.el-button {
  font-weight: 500;
}

.el-card {
  border-radius: 12px;
}

.el-table {
  border-radius: 8px;
}
</style>
