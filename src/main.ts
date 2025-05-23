import "./assets/main.css";
import { MotionPlugin } from "@vueuse/motion";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueWriter from "vue-writer";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
app.use(MotionPlugin);
app.use(router);
app.use(vuetify);
app.use(VueWriter);

app.mount("#app");
