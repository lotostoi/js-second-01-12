<template>
  <div class="contener" id="E-Shop" ref="par">
    <header class="header">
      <!-- ******************** menuTop  *************************** -->
      <!-- ******************** menuTop  *************************** -->
      <menu-top ref="top"> </menu-top>
      <!-- ******************** menuTop  *************************** -->
      <!-- ******************** menuTop  *************************** -->

      <!-- ******************** menuBot  *************************** -->
      <!-- ******************** menuBot  *************************** -->
      <menu-bot> </menu-bot>
      <!-- ******************** menuBot  *************************** -->
      <!-- ******************** menuBot  *************************** -->
    </header>
    <main class="main">
      <!-- ******************** Slider  *************************** -->
      <!-- ******************** Slider  *************************** -->
      <slider></slider>
      <!-- ******************** Slider  *************************** -->
      <!-- ******************** Slider  *************************** -->

      <section class="bodyShop">
        <!-- ******************** Search2  *************************** -->
        <!-- ******************** Search2  *************************** -->

        <search2></search2>

        <!-- ******************** Search2  *************************** -->
        <!-- ******************** Search2  *************************** -->

        <filt-left> </filt-left>

        <!-- ******************** компонет товра в магазине  *************************** -->
        <!-- ******************** компонет товра в магазине  *************************** -->
        <catalog ref="catalog"></catalog>
        <!-- ******************** компонет товра в магазине  *************************** -->
        <!-- ******************** компонет товра в магазине  *************************** -->

        <pagination></pagination>

        <section class="bestSellers">
          <h3 class="bestSellers__titel">Best Sellers</h3>
          <div class="bestSellers__contItems">
            <div class="bestSellers__contItem">
              <img
                src="./assets/Photo2.png"
                width="188"
                height="188"
                alt="imgProduct"
                class="bestSellers__img"
              />
              <span class="bestSellers__name">Beanie</span>
              <span class="bestSellers__color">Green</span>
              <p class="bestSellers__prices">
                <span class="bestSellers__old">$5.8</span
                ><span class="bestSellers__now">$3.8</span>
              </p>
            </div>
            <div class="bestSellers__contItem">
              <img
                src="./assets/Photo2.png"
                width="188"
                height="188"
                alt="imgProduct"
                class="bestSellers__img"
              />
              <span class="bestSellers__name">T-Shirt With a Print</span>
              <span class="bestSellers__color">Dark Blue</span>
              <p class="bestSellers__prices">
                <span class="bestSellers__old">$5.8</span
                ><span class="bestSellers__now">$3.8</span>
              </p>
            </div>
            <div class="bestSellers__contItem">
              <img
                src="./assets/Photo2.png"
                width="188"
                height="188"
                alt="imgProduct"
                class="bestSellers__img"
              />
              <span class="bestSellers__name">Pile-Lined Hooded Jacket</span>
              <span class="bestSellers__color">Dark Blue</span>
              <p class="bestSellers__prices">
                <span class="bestSellers__old">$5.8</span
                ><span class="bestSellers__now">$3.8</span>
              </p>
            </div>
            <div class="bestSellers__contItem">
              <img
                src="./assets/Photo2.png"
                width="188"
                height="188"
                alt="imgProduct"
                class="bestSellers__img"
              />
              <span class="bestSellers__name">Trainers</span>
              <span class="bestSellers__color">Space Grey</span>
              <p class="bestSellers__prices">
                <span class="bestSellers__old">$5.8</span
                ><span class="bestSellers__now">$3.8</span>
              </p>
            </div>
          </div>
        </section>
      </section>
      <section class="reviews">
        <h2 class="reviews__h2">What Our Customers Have to Say</h2>
        <p class="reviews__p">Couple of Words About This Stories Section</p>
        <div class="reviews__contReviews">
          <div class="reviews__contReview">
            <div class="reviews__contImgAndName">
              <img
                src="./assets/ather1.png"
                width="40"
                height="40"
                alt="fotoAther"
                class="reviews__img"
              />
              <p class="reviews__nameJob">
                <span class="reviews__name">Celia Fields</span
                ><span class="reviews__job">UX Expert</span>
              </p>
            </div>
            <p class="reviews__text">
              This I have produced as a scantling of Jack’s great eloquence and
              the force of his reasoning upon such abstruse matters.
            </p>
          </div>
          <div class="reviews__contReview">
            <div class="reviews__contImgAndName">
              <img
                src="./assets/ather2.png"
                width="40"
                height="40"
                alt="fotoAther"
                class="reviews__img"
              />
              <p class="reviews__nameJob">
                <span class="reviews__name">Alexander Lee</span
                ><span class="reviews__job">Founder</span>
              </p>
            </div>
            <p class="reviews__text">
              Looking cautiously round, to ascer- tain that they were not
              overheard, the two hags cowered nearer to the fire, and chuckled
              heartily.
            </p>
          </div>
          <div class="reviews__contReview">
            <div class="reviews__contImgAndName">
              <img
                src="./assets/ather3.png"
                width="40"
                height="40"
                alt="fotoAther"
                class="reviews__img"
              />
              <p class="reviews__nameJob">
                <span class="reviews__name" Lenora Sandoval
                  >Lenora Sandoval</span
                ><span class="reviews__job">Product Manager</span>
              </p>
            </div>
            <p class="reviews__text">
              This sounded a very good reason, and Alice was quite pleased to
              know it. 'I never thought of that before!' she said.
            </p>
          </div>
        </div>
      </section>
      <!-- ******************** компонет формы обратной связи  *************************** -->
      <!-- ******************** компонет формы обратной связи  *************************** -->
      <!--    <feed-back-form></feed-back-form> -->
      <!-- ******************** компонет формы обратной связи  *************************** -->
      <!-- ******************** компонет формы обратной связи  *************************** -->
    </main>
    <footer class="footer">
      <nav class="nav">
        <a href="# " class="footer__a"
          ><img src="./assets/logo.svg" alt="imglogo" class="footer__img"
        /></a>
        <ul class="nav__ul">
          <li class="nav__li">
            <a href="#" class="nav__ali" data-id="#">home</a>
          </li>
          <li class="nav__li">
            <a href="#" class="nav__ali" data-id="#">Shop</a>
          </li>
          <li class="nav__li">
            <a href="#" class="nav__ali" data-id="#">Team</a>
          </li>
          <li class="nav__li">
            <a href="#" class="nav__ali" data-id="#">About Us</a>
          </li>
          <li class="nav__li">
            <a href="#" class="nav__ali" data-id="contacts">Contacts</a>
          </li>
        </ul>
        <ul class="nav__socsety">
          <li class="nav__liIcon">
            <a href="#" class="nav__aIcon"
              ><i class="icon-twitter nav__icon"></i
            ></a>
          </li>
          <li class="nav__liIcon">
            <a href="#" class="nav__aIcon"
              ><i class="icon-facebook nav__icon"></i
            ></a>
          </li>
          <li class="nav__liIcon">
            <a href="#" class="nav__aIcon"
              ><i class="icon-gplus nav__icon"></i
            ></a>
          </li>
        </ul>
      </nav>
      <div class="foot">
        <p class="foot__p">
          She gave my mother such a turn, that I have always been convinced I am
          indebted to Miss Betsey for having been born on a Friday.
        </p>
        <ul class="foot__ul">
          <li class="foot__li">
            <a href="#" class="foot__a">Privacy Policy</a>
          </li>
          <li class="foot__li">
            <a href="#" class="foot__a">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    urlCatalog: "/catalogData.json", // ссылка для запроса на получение всех товаров
    catalog: "", // массив всех продуктов
    quantProductsOnPage: 12, // число товаров на одной странице
    quantPagesOnPagination: 10, // число страниц в пагинации
    currentListProducts: "" // массив товаров на текущей страинце
  },
  mutations: {
    getCatalog(state, arr) {
      state.catalog = arr;
    },
    getCurrentListProducts(state, arr) {
      state.currentListProducts = arr;
    }
  },
  getters: {
    minMax: state => {
      let max = 0;
      for (const key in state.catalog) {
        let el = state.catalog[key];
        el.price > max ? (max = el.price) : null;
      }
      let min = max;
      for (const key in state.catalog) {
        let el = state.catalog[key];
        el.price < min ? (min = el.price) : null;
      }
      return { max: max, min: min };
    }  
  }
});

import menutop from "./components/menuTop.vue";
import menubot from "./components/menuBot.vue";
import slider from "./components/slider.vue";
import search2 from "./components/search2.vue";
import filt from "./components/filter.vue";
import catalog from "./components/catalog.vue";
import pagination from "./components/pagination.vue";

export default {
  name: "EShop",
  store,
  components: {
    "menu-top": menutop,
    "menu-bot": menubot,
    slider: slider,
    search2,
    "filt-left": filt,
    catalog,
    pagination
  },
  methods: {
    getData: function(url) {
      return fetch(url).then(data => data.json());
    },
    allFetch: function(url, type, data) {
      return fetch(url, {
        method: type,
        headers: {
          "Content-Type": "application/json"
        },
        body: data
      }).then(data => data.json());
    }
  },
  provide: function() {
    return {
      getData: this.getData,
      allFetch: this.allFetch
    };
  }
  
};
</script>

<style lang="scss">
@import "./components/scss/myvar";
@import "./components/scss/smart-grid";
@include reset();
@import "./components/scss/myMixins";
.contener {
  cursor: default;
  @include wrapper();
  padding: 0;
  margin: 0 auto;
  font-size: 11px;
  position: static;
  overflow: hidden;
}
.main {
  margin-top: 146px;
  background-color: #e4e5e7;
  padding-bottom: 20px;
}
.bodyShop {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 116px;

  @include to(1380px) {
    padding: 30px 25px;
  }
}
</style>
