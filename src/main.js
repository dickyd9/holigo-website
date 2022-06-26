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
    preset: 'tailwind',
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1366,
        xl: 1903,
    }
});

app.use(store).mount("#app");
