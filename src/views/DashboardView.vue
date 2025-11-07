<template>
  <div class="dashboard">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <h2>🚀 Welcome to Moonlay Cities Manager</h2>
        </div>
      </template>

      <p>This is your modern Vue.js frontend for managing cities.</p>

      <el-button type="primary" @click="$router.push('/cities')">
        Go to Cities Management
      </el-button>
    </el-card>
  </div>
</template>

<script setup>
// Dashboard logic will go here
</script>

<style scoped>
.dashboard {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-card {
  text-align: center;
}

.card-header {
  text-align: center;
}
</style>
