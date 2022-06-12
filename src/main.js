import { createApp } from "vue";
import { store } from "./stores"

import App from "./App.vue";
import router from "./router";
import './index.css';
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(router);
app.use(store);

app.use(store).mount("#app");
