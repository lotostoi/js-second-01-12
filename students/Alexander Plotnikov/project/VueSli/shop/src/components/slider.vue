<template>
  <section class="slider">
    <div class="next" data-id="next">
      <svg width="6" height="11" class="nextSvg" data-id="next">
        <path
          data-id="next"
          d="M5.667,5.877 L1.832,9.700 C1.408,10.123 0.721,10.123 0.298,9.700 C-0.126,9.279 -0.126,8.593 0.298,8.170 L3.465,5.014 L0.298,1.857 C-0.126,1.434 -0.126,0.749 0.298,0.326 C0.721,-0.096 1.408,-0.096 1.832,0.326 L5.667,4.150 C5.904,4.386 5.994,4.704 5.965,5.013 C5.994,5.323 5.904,5.640 5.667,5.877 Z"
        />
      </svg>
    </div>
    <div class="pagination">
      <div class="check checkActiv" data-number="1"></div>
      <div class="check" data-number="2"></div>
      <div class="check" data-number="3"></div>
      <div class="check" data-number="4"></div>
    </div>
    <div class="bunner bunnerActiv" data-id="1">
      <div class="bunner__contContent">
        <h2 class="bunner__h2">The best product 1</h2>
        <p class="bunner__p">
          At first, for some time, I was not able to answer him one word; but as
          he had taken me in his arms I held fast by him, or I should have
          fallen to the ground.
        </p>
        <button class="bunner__button">Buy now</button>
      </div>
      <img
        src="https://via.placeholder.com/300x480"
        height="480"
        alt=""
        class="bunner__imgProduct"
      />
    </div>
    <div class="bunner" data-id="2">
      <div class="bunner__contContent">
        <h2 class="bunner__h2">The best product 2</h2>
        <p class="bunner__p">
          At first, for some time, I was not able to answer him one word; but as
          he had taken me in his arms I held fast by him, or I should have
          fallen to the ground.
        </p>
        <button class="bunner__button">Buy now</button>
      </div>
      <img
        src="https://via.placeholder.com/300x480"
        height="480"
        alt=""
        class="bunner__imgProduct"
      />
    </div>
    <div class="bunner" data-id="3">
      <div class="bunner__contContent">
        <h2 class="bunner__h2">The best product 3</h2>
        <p class="bunner__p">
          At first, for some time, I was not able to answer him one word; but as
          he had taken me in his arms I held fast by him, or I should have
          fallen to the ground.
        </p>
        <button class="bunner__button">Buy now</button>
      </div>
      <img
        src="https://via.placeholder.com/300x480"
        height="480"
        alt=""
        class="bunner__imgProduct"
      />
    </div>
    <div class="bunner" data-id="4">
      <div class="bunner__contContent">
        <h2 class="bunner__h2">The best product 4</h2>
        <p class="bunner__p">
          At first, for some time, I was not able to answer him one word; but as
          he had taken me in his arms I held fast by him, or I should have
          fallen to the ground.
        </p>
        <button class="bunner__button">Buy now</button>
      </div>
      <img
        src="https://via.placeholder.com/300x480"
        height="480"
        alt=""
        class="bunner__imgProduct"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "slider",
  mounted: function() {
    let d = document;

    // *********************** Slider ************************************ //
    // *********************** Slider ************************************ //
    // *********************** Slider ************************************ //
    let count = 1;
    d.querySelector(".slider").addEventListener("click", workClick);

    function workClick(evt) {
      let target = evt.target;
      d.querySelector(".slider").removeEventListener("click", workClick);
      clickHandler(target, add);

      function add() {
        d.querySelector(".slider").addEventListener("click", workClick);
      }

      function clickHandler() {
        if (target.dataset["number"]) {
          d.querySelectorAll(".bunner").forEach((el, i) => {
            if (el.dataset["id"] === target.dataset["number"]) {
              d.querySelectorAll(".bunner").forEach(el => {
                el.classList.remove("bunnerActiv");
              });
              d.querySelectorAll(".check").forEach(el => {
                el.classList.remove("checkActiv");
              });
              el.classList.add("bunnerActiv");
              target.classList.add("checkActiv");
              count = i + 1;
            }
          });
        }
        if (target.dataset["id"] == "next") {
          count++;
          if (count > [...d.querySelectorAll(".bunner")].length) {
            count = 1;
          }
          d.querySelectorAll(".bunner").forEach(el => {
            if (el.dataset["id"] == count) {
              d.querySelectorAll(".bunner").forEach(el => {
                el.classList.remove("bunnerActiv");
              });
              d.querySelectorAll(".check").forEach(el => {
                el.classList.remove("checkActiv");
              });
              el.classList.add("bunnerActiv");
              d.querySelectorAll(".check").forEach(el => {
                if (el.dataset["number"] == count) {
                  el.classList.add("checkActiv");
                }
              });
            }
          });
        }
        setTimeout(() => {
          add.call(window);
        }, 610);
      }
    }
  }
};
</script>

<style lang="scss">
@import "./scss/myvar";
@import "./scss/smart-grid";
@import "./scss/myMixins";
@import "./scss/slider";
</style>
