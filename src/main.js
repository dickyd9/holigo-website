import { createApp } from "vue";
import { store } from "./stores"
import { Vue3Mq } from "vue3-mq";

import App from "./App.vue";
import router from "./router";
import './index.css';


const app = createApp(App);

app.use(router);
app.use(store);
app.use(Vue3Mq, {
    preset: 'tailwind'
});

app.use(store).mount("#app");
