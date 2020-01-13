<template>
  <nav class="navPagination">
    <resize-observer @notify="handleResize" />
    <ul class="paginationn">
      <li class="page-item">
        <button
          class="page-link"
          href="#"
          aria-label="Previous"
          @click="getList(currentIndex - 1)"
        >
          <img
            src="./assets/Next_left.svg"
            alt="previos"
            class="page-link__img"
          />
        </button>
      </li>

      <li
        v-on:click="getList(index)"
        v-for="(item, index) in listStile"
        :key="index"
        :index="index"
        class="page-item"
      >
        <button class="page-link" :class="{ 'page-link-active': item.active }">
          {{ index + 1 }}
        </button>
      </li>

      <li class="page-item">
        <button
          class="page-link"
          href="#"
          aria-label="Next"
          @click="getList(currentIndex + 1)"
        >
          <img
            src="./assets/Next_right.svg"
            alt="previos"
            class="page-link__img"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import "vue-resize/dist/vue-resize.css";
import Vue from "vue";
import VueResize from "vue-resize";

Vue.use(VueResize);

export default {
  name: "pagination",
  inject: ["getData"],

  data() {
    return {
      quantPage: 10, // чисило страниц
      quantProd: 12, // число продуктов на странице
      currentIndex: 0, // номер текущей страници
      listStile: [] // массив со свойством для каждого значения пагинации, свойство отвечает за формление кнопки когда она выбрана
    };
  },

  methods: {
    handleResize() {
      window.console.log(this.$el.clientWidth);
    },

    // метод для получения масива для страници по номеру страници
    getList(number) {
      this.currentIndex = number;
      // если номер страници не больше расчитанного общего числа страниц
      if (number <= this.allQuantPages && number >= 0) {
        let arr = [];
        let startValue = number * this.quantProd;
        let finishVelue = number * this.quantProd + this.quantProd - 1;
        for (let i = startValue; i <= finishVelue; i++) {
          // если элемент есть в массиве пушим его
          this.$store.state.catalog[i] &&
            arr.push(this.$store.state.catalog[i]);
        }
        return arr;
      }
    },
    reRenderPage(arr) {
      this.$store.commit("getCurrentListProducts", arr);
    },
    // метод создающий массив с индексом отвечющим за номер страници в пагинации,
    // и css свойством для каждого значения этого масива. С помощю этого метода создаетс массив,
    // на основе котрого происходит рендер кнопок со значениями страниц в текущем компонете
    creatClassList(min, max) {
      let arr = [];
      for (let i = min; i < max; i++) {
        arr.push({ active: false });
      }
      return arr;
    },
    creatArrCurrentPages(index) {
      if (this.allQuantPages > this.quantPage) {
        this.listStile = this.creatClassList(0, this.allQuantPages);
      }

      this.listStile = this.creatClassList(this.allQuantPages);
      window.console.log(this.listStile);
      this.listStile[this.currentIndex].active = true;
    }
  },
  mounted: function() {
    this.getData(this.$store.state.urlCatalog).then(data => {
      this.$store.state.catalog = data;
      this.$store.commit("getCatalog", data);
      this.reRenderPage(this.getList(0));
    });
  },
  computed: {
    //  расчитываем общее количество страниц на основе масива данных
    allQuantPages() {
      return this.$store.state.catalog.length % this.quantProd
        ? Math.floor(this.$store.state.catalog.length / this.quantProd) + 1
        : Math.floor(this.$store.state.catalog.length / this.quantProd);
    },
    chengeCatalog() {
      // метка для вызова методов по изменению в массиве каталога
      return this.$store.state.catalog;
    }
  },
  watch: {
    chengeCatalog: function() {
      this.reRenderPage(this.getList(this.currentIndex));
    }
  }
};
</script>

<style lang="scss">
@import "./scss/myvar";
@import "./scss/smart-grid";
@import "./scss/myMixins";
@import "./scss/pagination";
</style>
