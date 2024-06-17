<template>
  <q-card class="weather-card">
    <q-card-section>
      <div class="text-h6">{{ cuaca }}</div>
      <div>{{ jamCuaca }}</div>
      <div>Humidity: {{ humidity }}%</div>
      <div>Temp: {{ tempC }}°C / {{ tempF }}°F</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    jamCuaca: String,
    cuaca: String,
    humidity: String,
    tempC: String,
    tempF: String,
  },
};
</script>

<style scoped>
.weather-card {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
