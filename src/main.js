import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import './index.css';
import store from './stores/index.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(store).mount("#app");
