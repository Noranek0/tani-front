import { createApp } from "vue";
import("./styles/base.css");
import("./styles/switcher.css");
import("./styles/bootstrap.css");
import("./styles/custom.css");
import("./styles/menu-styles.css");
import("./styles/pages.css");
import("./styles/util.css");
import("./styles/global.css");
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "~/router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
