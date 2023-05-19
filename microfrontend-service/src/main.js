import { createApp } from 'vue'
import { defineCustomElements } from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';
import './style.css'
import Microfrontend from './Microfrontend.vue'

defineCustomElements();

createApp(Microfrontend).mount('#app')

export {Microfrontend}