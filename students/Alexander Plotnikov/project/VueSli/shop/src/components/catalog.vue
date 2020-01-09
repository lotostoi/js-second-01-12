<template>
  <div class="productsPage" id="bodyShop">
    <product
      v-for="item in $store.state.currentListProducts"
      v-bind:key="item.id"
      v-bind:item="item"
    ></product>
  </div>
</template>

<script>
import product from "./product";

export default {
  nane: "catalog",
  components: {
    product: product
  },
  inject: ["getData", "allFetch"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./scss/myvar";
@import "./scss/smart-grid";
@import "./scss/myMixins";
@import "./scss/catalog";
</style>
