import { createApp } from "vue";
// import "./style.css";
import('./styles/base.css');
import('./styles/bootstrap.css');
import('./styles/custom.css');
import('./styles/global.css');
import('./styles/menu-styles.css');
import('./styles/pages.css');
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "~/router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
