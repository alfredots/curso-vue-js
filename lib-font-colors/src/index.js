import TextRed from './components/TextRed.vue';
import TextGreen from './components/TextGreen.vue';
import TextBlue from './components/TextBlue.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('text-red', TextRed);
  Vue.component('text-green', TextGreen);
  Vue.component('text-blue', TextBlue);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default {
  TextRed,
  TextGreen,
  TextBlue
};