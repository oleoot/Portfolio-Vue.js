<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Опыт работы</h2>
        <div class="reference__wrap">
          <a
            :href="goodwine"
            class="reference__link"
            target="_blank"
            v-bind:class="{reference__link_animation : blockWrap }"
          >Goodwine</a>
          <a
            :href="gfk"
            class="reference__link"
            target="_blank"
            v-bind:class="{reference__link_animation : blockWrap }"
          >GFK</a>
        </div>
      </div>
      <div class="type-wrap">
        <div class="type-wrap__left">
          <div class="circle"></div>
          <div
            class="type-wrap__inner"
            v-observe-visibility="{
  callback: visibilityChanged,
  once: true,
  threshold: 0
}"
            v-bind:class="{type__inner_animation: blockWrap }"
          >
            <img v-lazy="require('../img/icons/shape-1.png')" alt class="shape shape-1" />
            <h2 class="type-wrap__headline">Консультант в Goodwine</h2>
            <p class="type-wrap__date">20.07.2017-01.06.2019</p>
            <p
              class="type-wrap__description"
            >Сервисное обслуживание покупателей. Проведение переучетов. Фиксация результатов работы в 1С.</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div class="type-wrap__right">
          <div class="circle"></div>
          <div class="type-wrap__inner" v-bind:class="{type__inner_animation: blockWrap }">
            <img v-lazy="require('../img/icons/shape-2.png')" alt class="shape shape-2" />
            <h2 class="type-wrap__headline">Интервьюер в GFK Ukraine</h2>
            <p class="type-wrap__date">01.06.2016-10.08.2016</p>
            <p
              class="type-wrap__description"
            >Проведение социальных опросов и интервью согласно требованиям заказчика.</p>
          </div>
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
      goodwine: "https://goodwine.com.ua/",
      gfk: "https://www.askgfk.com.ua/index.php?id=7&no_cache=1",
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.blockWrap = isVisible;
    },
  },
};
</script>
