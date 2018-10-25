import VuetifyLoader from './component/VuetifyLoader.vue';

function Install(Vue) {
  Vue.component('VuetifyLoader', VuetifyLoader);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Install)
}

export default Install;