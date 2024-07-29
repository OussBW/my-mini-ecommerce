import 'primeicons/primeicons.css'
import '@/assets/css/style.css'
import '@/assets/css/flags.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from '@/i18n'
// PrimeVue stuff
import PrimeVue from 'primevue/config'
import Noir from './presets/Noir'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)

// activate PrimeVue theming
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false
    }
  }
})

// register PrimeVue components and services with lazy loading
app.use(ToastService)
app.component('Drawer', () => import('primevue/drawer'))
app.component('OverlayBadge', () => import('primevue/overlaybadge'))
app.component('Popover', () => import('primevue/popover'))
app.component('Select', () => import('primevue/select'))
app.component('Step', () => import('primevue/step'))
app.component('StepItem', () => import('primevue/stepitem'))
app.component('StepList', () => import('primevue/steplist'))
app.component('StepPanel', () => import('primevue/steppanel'))
app.component('StepPanels', () => import('primevue/steppanel'))
app.component('Toast', () => import('primevue/toast'))
app.component('ToggleSwitch', () => import('primevue/toggleswitch'))
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)

app.mount('#app')
