<template>
  <div class="search">
    <div class="search__sortBy" v-on:click="openSort = !openSort">
      <span class="search__titelSort">Sort by:</span>
      <div class="search__typeSort">
        <span class="search__valueSort">{{ activeValue }} </span>
        <i class="search__icon"></i>
        <ul
          :class="{
            search__paramasSort: true,
            'search__paramasSort-active': openSort
          }"
        >
          <li
            class="search__li"
            v-for="(item, index) in typeSort"
            :item="item"
            :key="index"
            v-on:click="startSort(item.type)"
          >
            {{ item.type }}
          </li>
        </ul>
      </div>
    </div>
    <div class="search__KAP">
      <label for="Keywords" class="search__labelKeywords">
        <span class="search__keywords">Keywords</span>
        <input type="text" class="search__inpK" placeholder="Tablet" />
        <button v-show="showWords" class="search__showWords">Show</button>
      </label>
      <label for="price" class="search__labelPrice">
        <span class="search__titelprice">Price</span>
        <input
          v-on:input="showPrice = true"
          type="text"
          v-model="currentMinPrice"
          class="search__price"
        />
        <span class="search__def">-</span>
        <input
          type="text"
          v-model="currentMaxPrice"
          class="search__price"
          v-on:input="showPrice = true"
        />
        <button v-show="showPrice" @click="filtPrice" class="search__showPrice">
          Show
        </button>
      </label>
      <div class="search__lebelcheck">
        <input type="checkbox" checked id="chek1" class="search__check" />
        <label for="chek1" class="search__titelCheck">Free shoping</label>
      </div>
    </div>
    <div class="search__ship">
      <span class="search__titelShip">Ship to:</span>
      <div class="search__contShips">
        <span class="search__areaship">USA </span>
        <i class="search__icon"></i>
        <ul class="search__listAreasShips">
          <li class="search__liships">USA</li>
          <li class="search__liships">France</li>
          <li class="search__liships">China</li>
          <li class="search__liships">Russia</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search2",
  inject: ["getData"],
  data() {
    return {
      CatURL: "/catalogData.json",
      typeSort: [
        { type: "All products" },
        { type: "Best match" },
        { type: "Price min-max" },
        { type: "Price max-min" },
        { type: "New" }
      ],
      filt: {
        typeSort: "All products",
        price: { min: 0, max: this.max },
        country: "All",
        ship: false,
        brands: ["All"],
        available: ["All"]
      },
      activeValue: "All products",
      openSort: false,
      catalog: [],
      currentMaxPrice: this.maxPrice,
      currentMinPrice: this.minPrice,
      showPrice: false,
      showWords: false
    };
  },
  methods: {
    startSort: function(value) {
      let arr = Object.create(this.catalog);

      this.activeValue = value;
      if (value === "All products") {
        this.$store.commit("getCatalog", this.catalog);
      }
      if (value === "Best match") {
        arr = arr.filter(item => item.addAtribut.bestMatch);
        this.$store.commit("getCatalog", arr);
      }
      if (value === "New") {
        arr = arr.filter(item => item.addAtribut.new);
        this.$store.commit("getCatalog", arr);
      }
      if (value === "Price max-min") {
        arr.sort(function(a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          if (a.price == b.price) {
            return 0;
          }
        });
      }
      if (value === "Price min-max") {
        arr.sort(function(a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          if (a.price == b.price) {
            return 0;
          }
        });
      }

      this.$store.commit("getCatalog", arr);
      this.currentMaxPrice = this.maxPrice;
      this.currentMinPrice = this.minPrice;
    },
    filtPrice: function() {
      let arr = this.catalog;
      let newArr = arr.filter(item => {
        if (
          item.price >= this.currentMinPrice &&
          item.price <= this.currentMaxPrice
        ) {
          return item;
        }
      });
      this.$store.commit("getCatalog", newArr);
      this.showPrice = false;
    }
  },
  mounted: function() {
    this.getData(this.CatURL).then(data => {
      this.catalog = data;
      this.$nextTick(function() {
        this.currentMaxPrice = this.maxPrice;
        this.currentMinPrice = this.minPrice;
      });
    });
  },

  computed: {
    maxPrice: function() {
      return this.$store.getters.minMax.max;
    },
    minPrice: function() {
      return this.$store.getters.minMax.min;
    }
  },
  watch: {
    maxPrice: function() {
      this.currentMaxPrice = this.$store.getters.minMax.max;
    },
    minPrice: function() {
      this.currentMinPrice = this.$store.getters.minMax.min;
    }
  }
};
</script>
<style lang="scss">
@import "./scss/myvar";
@import "./scss/smart-grid";
@import "./scss/myMixins";
@import "./scss/search";
</style>
