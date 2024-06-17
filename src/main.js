import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import App from "./App.vue";
import Tugas1 from "./Tugas1.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: App },
  {
    path: "/tugas1",
    component: Tugas1,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const myApp = createApp(App);

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});

myApp.mount("#app");
