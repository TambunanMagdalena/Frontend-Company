<template>
  <div class="cities">
    <!-- Hero Section -->
    <section class="cities-hero">
      <div class="container">
        <div class="hero-content">
          <h1>Global Presence</h1>
          <p>
            Discover the cities where we deliver exceptional technology
            solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Cities Management Section -->
    <section class="cities-management">
      <div class="container">
        <el-card class="management-card">
          <template #header>
            <div class="card-header">
              <h2>🏙️ Cities Management</h2>
              <el-button type="primary" @click="showAddDialog = true">
                <el-icon><Plus /></el-icon>
                Add New City
              </el-button>
            </div>
          </template>

          <!-- Search and Stats -->
          <div class="management-tools">
            <el-input
              v-model="searchQuery"
              placeholder="Search cities..."
              style="width: 300px"
              clearable
            >
              <template #prefix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>

            <div class="stats">
              <el-tag type="success">{{ cities.length }} Cities</el-tag>
              <el-tag type="primary"
                >{{ uniqueCountries.length }} Countries</el-tag
              >
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading && cities.length === 0" class="loading-state">
            <el-skeleton :rows="6" animated />
          </div>

          <!-- Cities Table -->
          <el-table
            :data="filteredCities"
            v-else-if="cities.length > 0"
            style="width: 100%"
            empty-text="No cities found matching your search"
          >
            <el-table-column prop="id" label="ID" width="80" sortable />
            <el-table-column prop="name" label="City Name" sortable>
              <template #default="scope">
                <div class="city-name">
                  <el-icon><Location /></el-icon>
                  {{ scope.row.name }}
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="country" label="Country" sortable>
              <template #default="scope">
                <el-tag type="primary">{{ scope.row.country }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="Actions" width="200" fixed="right">
              <template #default="scope">
                <el-button
                  size="small"
                  @click="editCity(scope.row)"
                  type="primary"
                  plain
                >
                  <el-icon><Edit /></el-icon>
                  Edit
                </el-button>
                <el-button
                  size="small"
                  @click="deleteCity(scope.row.id)"
                  type="danger"
                  plain
                >
                  <el-icon><Delete /></el-icon>
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- Empty State -->
          <el-empty v-else description="No cities found" />

          <!-- Add/Edit Dialog -->
          <el-dialog
            v-model="showAddDialog"
            :title="editingCity ? 'Edit City' : 'Add New City'"
            width="500px"
            :close-on-click-modal="false"
          >
            <el-form
              :model="form"
              :rules="rules"
              ref="formRef"
              label-width="100px"
              status-icon
            >
              <el-form-item label="City Name" prop="name">
                <el-input
                  v-model="form.name"
                  placeholder="Enter city name"
                  maxlength="100"
                  show-word-limit
                />
              </el-form-item>

              <el-form-item label="Country" prop="country">
                <el-input
                  v-model="form.country"
                  placeholder="Enter country"
                  maxlength="100"
                  show-word-limit
                />
              </el-form-item>
            </el-form>

            <template #footer>
              <el-button @click="closeDialog" :disabled="loading">
                Cancel
              </el-button>
              <el-button
                type="primary"
                @click="submitForm"
                :loading="loading"
                :disabled="!form.name || !form.country"
              >
                {{ editingCity ? "Update City" : "Create City" }}
              </el-button>
            </template>
          </el-dialog>
        </el-card>
      </div>
    </section>

    <!-- Global Coverage Section -->
    <section class="coverage-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Global Coverage</h2>
          <p>We serve clients across multiple countries and regions</p>
        </div>
        <div class="coverage-stats">
          <div
            class="stat-item"
            v-for="stat in coverageStats"
            :key="stat.label"
          >
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Plus, Search, Location, Edit, Delete } from "@element-plus/icons-vue";
import { cityAPI } from "@/services/api";

// Reactive data
const cities = ref([]);
const loading = ref(false);
const showAddDialog = ref(false);
const editingCity = ref(null);
const formRef = ref();
const searchQuery = ref("");

// Form data
const form = reactive({
  name: "",
  country: "",
});

// Validation rules
const rules = {
  name: [
    { required: true, message: "Please input city name", trigger: "blur" },
    {
      min: 2,
      message: "City name must be at least 2 characters",
      trigger: "blur",
    },
  ],
  country: [
    { required: true, message: "Please input country", trigger: "blur" },
    {
      min: 2,
      message: "Country must be at least 2 characters",
      trigger: "blur",
    },
  ],
};

// Computed properties
const uniqueCountries = computed(() => {
  return [...new Set(cities.value.map((city) => city.country))];
});

const filteredCities = computed(() => {
  if (!searchQuery.value) return cities.value;
  const query = searchQuery.value.toLowerCase();
  return cities.value.filter(
    (city) =>
      city.name.toLowerCase().includes(query) ||
      city.country.toLowerCase().includes(query)
  );
});

const coverageStats = computed(() => [
  { number: cities.value.length, label: "Cities Worldwide" },
  { number: uniqueCountries.value.length, label: "Countries Served" },
  { number: "24/7", label: "Support Coverage" },
  { number: "100%", label: "Client Satisfaction" },
]);

// Methods
const fetchCities = async () => {
  loading.value = true;
  try {
    const response = await cityAPI.getCities();
    if (response.data.status === "success") {
      cities.value = response.data.data;
      ElMessage.success(`Loaded ${cities.value.length} cities successfully!`);
    }
  } catch (error) {
    ElMessage.error(
      "Failed to fetch cities: " +
        (error.response?.data?.message || error.message)
    );
  } finally {
    loading.value = false;
  }
};

const editCity = (city) => {
  editingCity.value = city;
  form.name = city.name;
  form.country = city.country;
  showAddDialog.value = true;
};

const deleteCity = async (id) => {
  try {
    await ElMessageBox.confirm(
      "This will permanently delete the city. Continue?",
      "Warning",
      {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        type: "warning",
        confirmButtonClass: "el-button--danger",
      }
    );

    loading.value = true;
    await cityAPI.deleteCity(id);
    ElMessage.success("City deleted successfully!");
    await fetchCities();
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error(
        "Failed to delete city: " +
          (error.response?.data?.message || error.message)
      );
    }
  } finally {
    loading.value = false;
  }
};

const closeDialog = () => {
  showAddDialog.value = false;
  editingCity.value = null;
  resetForm();
};

const resetForm = () => {
  form.name = "";
  form.country = "";
  formRef.value?.resetFields();
};

const submitForm = async () => {
  try {
    await formRef.value.validate();
    loading.value = true;

    if (editingCity.value) {
      await cityAPI.updateCity(editingCity.value.id, form);
      ElMessage.success("City updated successfully!");
    } else {
      await cityAPI.createCity(form);
      ElMessage.success("City created successfully!");
    }

    await fetchCities();
    closeDialog();
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error(
        "Operation failed: " + (error.response?.data?.message || error.message)
      );
    }
  } finally {
    loading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  fetchCities();
});
</script>

<style scoped>
.cities-hero {
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

.cities-management {
  padding: 80px 0;
  background: #f8f9fa;
}

.management-card {
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  margin: 0;
  color: #2d3748;
}

.management-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.stats {
  display: flex;
  gap: 1rem;
}

.loading-state {
  padding: 40px 0;
}

.city-name {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coverage-section {
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

.coverage-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #718096;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .card-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .management-tools {
    flex-direction: column;
    align-items: stretch;
  }

  .coverage-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
