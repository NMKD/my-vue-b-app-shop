<template>
  <div>
    <CatalogShop />
  </div>
</template>

<script>
import CatalogShop from './Catalog/Catalog.vue';

export default {
  name: 'HomePageVue',
  components: {
    CatalogShop,
  }
}
</script>

<style>
h1 {
  padding: 2.5rem 0;
}
</style>

