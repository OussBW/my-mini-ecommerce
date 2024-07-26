import "primeicons/primeicons.css";
import "@/assets/css/style.css";
import "@/assets/css/flags.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import i18n from "./i18n/index.js";
// PrimeVue stuff
import PrimeVue from "primevue/config";
import Noir from "./presets/Noir.js";
import Drawer from "primevue/drawer";
import OverlayBadge from "primevue/overlaybadge";
import Popover from "primevue/popover";
import Ripple from "primevue/ripple";
import Select from "primevue/select";
import Step from "primevue/step";
import StepItem from "primevue/stepitem";
import StepList from "primevue/steplist";
import StepPanel from "primevue/steppanel";
import StepPanels from "primevue/steppanels";
import StyleClass from "primevue/styleclass";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ToggleSwitch from "primevue/toggleswitch";


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);

// activate PrimeVue theming
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
      cssLayer: false,
    },
  },
});

// register PrimeVue components and services
app.use(ToastService);
app.component("Drawer", Drawer);
app.component("OverlayBadge", OverlayBadge);
app.component("Popover", Popover);
app.component("Select", Select);
app.component("Step", Step);
app.component("StepItem", StepItem);
app.component("StepList", StepList);
app.component("StepPanel", StepPanel);
app.component("StepPanels", StepPanels);
app.component("Toast", Toast);
app.component("ToggleSwitch", ToggleSwitch);
app.directive("ripple", Ripple);
app.directive("styleclass", StyleClass);

app.mount("#app");
