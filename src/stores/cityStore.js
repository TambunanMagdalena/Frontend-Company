import { defineStore } from "pinia";
import { cityAPI } from "@/services/api";
import { ref } from "vue";
import { ElMessage } from "element-plus";

export const useCityStore = defineStore("city", () => {
  const cities = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const pagination = ref({});

  const fetchCities = async (page = 1, pageSize = 10) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await cityAPI.getCities(page, pageSize);
      if (response.data.status === "success") {
        cities.value = response.data.data;
        pagination.value = {
          page: response.data.page,
          pageSize: response.data.page_size,
          pages: response.data.pages,
          total: response.data.total,
        };
        ElMessage.success(`Loaded ${cities.value.length} cities`);
      }
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch cities";
      ElMessage.error(error.value);
    } finally {
      loading.value = false;
    }
  };
  const createCity = async (cityData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await cityAPI.createCity(cityData);
      if (response.data.status === "success") {
        ElMessage.success("City created successfully!");
        await fetchCities();
        return response.data.data;
      }
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to create city";
      ElMessage.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const updateCity = async (id, cityData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await cityAPI.updateCity(id, cityData);
      if (response.data.status === "success") {
        ElMessage.success("City updated successfully!");
        await fetchCities();
        return response.data.data;
      }
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to update city";
      ElMessage.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Delete city
  const deleteCity = async (id) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await cityAPI.deleteCity(id);
      if (response.data.status === "success") {
        ElMessage.success("City deleted successfully!");
        await fetchCities();
      }
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to delete city";
      ElMessage.error(error.value);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    cities,
    loading,
    error,
    pagination,
    fetchCities,
    createCity,
    updateCity,
    deleteCity,
  };
});
