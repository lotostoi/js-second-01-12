<template>
      <aside class="left">
         <!--  <ul class="first">
            <li class="firstLi">Top Sales</li>
            <li class="firstLi">Brand Focus</li>
            <li class="firstLi">Hi-Tech</li>
            <li class="firstLi">Home</li>
            <li class="firstLi">Sale</li>
          </ul> -->
          <ul class="availableAndBrand">
            <li class="availableAndBrand__li">Available</li>
            <li class="availableAndBrand__li availableAndBrand__contInput">
              <input
                type="checkbox"
                class="availableAndBrand__inputInstorage"
                id="shop"
              />
              <label for="shop" class="availableAndBrand__inStorage">
                <div class="availableAndBrand__contIcon"></div>
                In Storage
              </label>
              <span class="availableAndBrand__count">45</span>
            </li>
            <li class="availableAndBrand__li availableAndBrand__contInput">
              <input
                type="checkbox"
                class="availableAndBrand__inputInstorage"
                id="Online"
              />

              <label for="Online" class="availableAndBrand__inStorage">
                <div class="availableAndBrand__contIcon"></div>
                In Online-Shop
              </label>
              <span class="availableAndBrand__count">12</span>
            </li>
            <li class="availableAndBrand__li">
              <span class="availableAndBrand__brands">Brands</span>
              <a href="#" class="availableAndBrand__abrands">All</a>
            </li>
            <li class="availableAndBrand__li">
              <input
                type="checkbox"
                class="availableAndBrand__inputCheck"
                id="Apple"
              />
              <label for="Apple" class="availableAndBrand__nameCheck">
                <div class="availableAndBrand__contIconB"></div>
                Apple
              </label>
              <span class="availableAndBrand__quentlyBrands">32</span>
            </li>
            <li class="availableAndBrand__li">
              <input
                type="checkbox"
                class="availableAndBrand__inputCheck"
                id="JBL"
              />
              <label for="JBL" class="availableAndBrand__nameCheck">
                <div class="availableAndBrand__contIconB"></div>
                JBL
              </label>
              <span class="availableAndBrand__quentlyBrands">14</span>
            </li>
            <li class="availableAndBrand__li">
              <input
                type="checkbox"
                class="availableAndBrand__inputCheck"
                id="Bose"
              />
              <label for="Bose" class="availableAndBrand__nameCheck">
                <div class="availableAndBrand__contIconB"></div>
                Bose
              </label>
              <span class="availableAndBrand__quentlyBrands">5</span>
            </li>
            <li class="availableAndBrand__li">
              <input
                type="checkbox"
                class="availableAndBrand__inputCheck"
                id="Nest"
              />
              <label for="Nest" class="availableAndBrand__nameCheck">
                <div class="availableAndBrand__contIconB"></div>
                Nest
              </label>
              <span class="availableAndBrand__quentlyBrands">3</span>
            </li>
          </ul>
        <!--   <ul class="condition">
            <li class="condition__li">
              <span class="condition__brands">Condition</span>
              <a href="#" class="condition__abrands"> See All</a>
            </li>
            <li class="condition__li">
              <input type="checkbox" class="condition__inputCheck" id="New" />
              <label for="New" class="condition__nameCheck">
                <div class="condition__contIconB"></div>
                New
              </label>
            </li>
            <li class="condition__li">
              <input
                type="checkbox"
                class="condition__inputCheck"
                id="Manufacturer"
              />
              <label for="Manufacturer" class="condition__nameCheck">
                <div class="condition__contIconB"></div>
                Manufacturer Refurbished
              </label>
            </li>
            <li class="condition__li">
              <input
                type="checkbox"
                class="condition__inputCheck"
                id="Seller"
              />
              <label for="Seller" class="condition__nameCheck">
                <div class="condition__contIconB"></div>
                Seller Refurbished
              </label>
            </li>
            <li class="condition__li">
              <input type="checkbox" class="condition__inputCheck" id="Used" />
              <label for="Used" class="condition__nameCheck">
                <div class="condition__contIconB"></div>
                Used
              </label>
            </li>
            <li class="condition__li">
              <input type="checkbox" class="condition__inputCheck" id="Parts" />
              <label for="Parts" class="condition__nameCheck">
                <div class="condition__contIconB"></div>
                For Parts or not Working
              </label>
            </li>
          </ul> -->
          <div class="deliveryOptions">
            <span class="deliveryOptions__name">Delivery Options</span>
            <div class="deliveryOptions__contCheck">
              <input type="checkbox" class="deliveryOptions__input" id="free" />
              <label for="free" class="deliveryOptions__label">
                <div class="deliveryOptions__contIcon"></div>
                Free
              </label>
            </div>
            <div class="deliveryOptions__contCheck">
              <input
                type="checkbox"
                class="deliveryOptions__input"
                id="price"
              />
              <label for="price" class="deliveryOptions__label">
                <div class="deliveryOptions__contIcon"></div>
                $4.56
              </label>
            </div>
          </div>
        </aside>
</template>>

<script>
export default {
    name: "filt"
}
</script>>

<style lang="scss">
@import "./scss/myvar";
@import "./scss/smart-grid";
@import "./scss/myMixins";
@import "./scss/filter";
</style>