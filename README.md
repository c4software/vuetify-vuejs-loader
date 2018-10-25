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

## Usage with Vuetify-Loader (aka a-la-carte)

Recently the Vuetify plugin for vue-cli enable A-la-carte by default.

### Importing via the .vue directly

```vue
<template>
  <VuetifyLoader />
</template>

<script>
  import Vue from 'vue';
  import vuetifyLoader from 'vuetify-vuejs-loader/src';
  Vue.use(vuetifyLoader);

  export default {
    name: 'example'
  }
<
```

### Importing every components

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
