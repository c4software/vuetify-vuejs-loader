# vuetify-vuejs-loader

[![npm version](https://badge.fury.io/js/vuetify-vuejs-loader.svg)](https://www.npmjs.com/package/vuetify-vuejs-loader)

Vuetify VueJS Loader Component.

## Installation

```sh
npm install vuetify-vuejs-loader --save
```

## Usage

```vue
<template>
  <VuetifyLoader />
</template>

<script>
  import Vue from 'vue';
  import vuetifyLoader from 'vuetify-vuejs-loader';
  Vue.use(vuetifyLoader);

  export default {
    name: 'example'
  }
</script>
```

## Usage With Vuetify-Loader

Since Vuetify-Loader didn't « scan » correctly usage in external dependencies you have to manually import components needed…

```javascript
  import Vue from 'vue';
  import vuetifyLoader from 'vuetify-vuejs-loader';
  import Vuetify, {VCard, VCardText, VDialog, VProgressCircular} from 'vuetify/lib'
  
  Vue.use(Vuetify, {
    components: {VProgressCircular, VDialog, VCard, VCardText}
  });
  Vue.use(vuetifyLoader);
```