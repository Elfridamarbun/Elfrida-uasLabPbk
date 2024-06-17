<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white q-my-md shadow-2">
      <q-btn stretch flat label="Weather Widget" />
      <q-space />
      <q-btn-dropdown stretch flat label="Elfrida">
        <q-list>
          <q-item
            v-for="n in 7"
            :key="`x.${n}`"
            clickable
            v-close-popup
            tabindex="0"
            @click="handleClick(n)"
          >
            <q-item-section avatar>
              <q-avatar icon="task" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-text="`Tugas ${n}`"></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </div>
  <WeatherSearch />
</template>

<script>
import WeatherSearch from "./components/WeatherSearch.vue";

export default {
  components: {
    WeatherSearch,
  },
  methods: {
    handleClick(n) {
      const urls = [
        "https://elfrida-projek-cv.netlify.app/",
        "https://elfridaa.netlify.app/",
        "https://vuecrud-elfrida.netlify.app/",
        "https://elfrida-tugas4.vercel.app/",
        "https://tugas5elfrida-prakpbk.vercel.app/",
        "https://prak-pbk-tgas6-pnwn.vercel.app/",
        "https://tugas7-prakpbk.vercel.app/",
      ];

      if (urls[n - 1]) {
        window.location.href = urls[n - 1];
      } else {
        this.$router.push(`/tugas${n}`);
      }
    },
  },
};
</script>
