<template>
  <div class="weather-search q-pa-md">
    <q-input
      filled
      v-model="location"
      label="Cari kota / kecamatan (cth: Pekanbaru)"
      @keyup.enter="fetchWeather"
    />
    <q-btn
      class="q-mt-md"
      color="primary"
      label="Search"
      @click="fetchWeather"
    />
    <div v-if="errorMessage || weatherData.length" class="q-mt-md q-pa-sm">
      <div class="text-h5 text-left hasil">Hasil :</div>
    </div>
    <div v-if="errorMessage" class="q-mt-md q-pa-sm error-message">
      <q-icon name="error" color="red" />
      <span class="q-ml-lg">{{ errorMessage }}</span>
    </div>
    <div v-if="weatherData.length" class="q-mt-md">
      <q-layout-grid cols="auto-fit" class="weather-grid">
        <WeatherCard
          v-for="(weather, index) in weatherData"
          :key="index"
          :jamCuaca="weather.jamCuaca"
          :cuaca="weather.cuaca"
          :humidity="weather.humidity"
          :tempC="weather.tempC"
          :tempF="weather.tempF"
        />
      </q-layout-grid>
    </div>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import wilayahData from "../assets/dbWilayah.json";

export default {
  components: {
    WeatherCard,
  },
  data() {
    return {
      location: "",
      weatherData: [],
      errorMessage: "",
    };
  },
  methods: {
    async fetchWeather() {
      this.errorMessage = "";
      this.weatherData = [];
      if (!this.location) return;

      const wilayah = wilayahData.find(
        (w) => w.kecamatan.toLowerCase() === this.location.toLowerCase()
      );

      if (!wilayah) {
        this.errorMessage = "Location not found";
        return;
      }

      try {
        const response = await fetch(
          `https://ibnux.github.io/BMKG-importer/cuaca/${wilayah.id}.json`
        );
        if (!response.ok) throw new Error("Weather data not found");
        this.weatherData = await response.json();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style scoped>
.weather-search {
  max-width: 720px;
  margin: auto;
  text-align: center;
}

.weather-grid {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px 16px;
  margin-bottom: 32px;
}

.hasil {
  font-weight: 600;
  margin-top: 16px;
}

.error-message {
  display: flex;
  align-items: center;
  color: red;
  margin-top: -8px;
}
</style>
