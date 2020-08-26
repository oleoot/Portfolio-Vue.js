<template>
  <section class="certificates" id="certificates">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Сертификаты</h2>
        <div class="reference__wrap">
          <a
            :href="itea"
            class="reference__link"
            target="_blank"
            v-bind:class="{reference__link_animation: blockWrap }"
          >ITEA</a>
        </div>
      </div>
      <div
        class="certificates__type-wrap"
        v-observe-visibility="{
  callback: visibilityChanged,
  once: true,
  threshold: 0
}"
        v-bind:class="{certificates__type_animation: blockWrap }"
      >
        <div class="certificates__type">
          <img v-lazy="require('../img/certificates/html.png')" alt class="certificates__img" />
        </div>
        <div class="certificates__type">
          <img v-lazy="require('../img/certificates/js-base.png')" alt class="certificates__img" />
        </div>
        <div class="certificates__type">
          <img
            v-lazy="require('../img/certificates/js-advanced.png')"
            alt
            class="certificates__img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
import { ObserveVisibility } from "vue-observe-visibility";
Vue.directive("observe-visibility", ObserveVisibility);
export default {
  data() {
    return {
      blockWrap: true,
      itea: "https://itea.ua/uk/",
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.blockWrap = isVisible;
    },
  },
};
</script>
