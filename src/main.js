import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
// PrimeVue stuff
import PrimeVue from "primevue/config";
import AppState from "./plugins/appState.js";
import Noir from "./presets/Noir.js";
import ThemeSwitcher from "./components/atoms/HeaderRight.vue";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import OverlayBadge from "primevue/overlaybadge";
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Ripple from "primevue/ripple";
import Select from "primevue/select";
import StyleClass from "primevue/styleclass";
import ToggleSwitch from "primevue/toggleswitch";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

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
app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.directive("ripple", Ripple);
app.directive("styleclass", StyleClass);
app.component("OverlayBadge", OverlayBadge);
app.component("Select", Select);
app.component("StepList", StepList);
app.component("StepPanels", StepPanels);
app.component("StepItem", StepItem);
app.component("Step", Step);
app.component("StepPanel", StepPanel);
app.component("Toast", Toast);
app.component("ToggleSwitch", ToggleSwitch);
app.component("ThemeSwitcher", ThemeSwitcher);

app.mount("#app");
