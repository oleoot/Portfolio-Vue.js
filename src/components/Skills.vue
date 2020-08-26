<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Навыки</h2>
      </div>
      <div class="skills__type-wrap">
        <div
          class="skills__type-container"
          v-for="skill in skills"
          :key="skill.name"
          v-observe-visibility="{
  callback: visibilityChanged,
  once: true,
  threshold: 0.7
}"
          v-bind:class="{skills__type_animation: blockWrap }"
        >
          <div class="skills__type-container_top">
            <p class="skills__name">{{skill.name}}</p>
            <p class="skills__percent">{{skill.percent}}</p>
          </div>
          <div class="skills__type-container_bottom">
            <div class="skills__fill" :style="{width: skill.percent}"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Vue from "vue";
import { ObserveVisibility } from "vue-observe-visibility";
Vue.directive("observe-visibility", ObserveVisibility);
export default {
  data() {
    return {
      blockWrap: true,
      skills: [
        { name: "Html/Css", percent: "90%" },
        { name: "JavaScript", percent: "70%" },
        { name: "React.js", percent: "60%" },
        { name: "Vue.js", percent: "20%" },
        { name: "Node.js", percent: "50%" },
        { name: "MongoDB", percent: "40%" },
        { name: "Sass", percent: "60%" },
        { name: "Git", percent: "70%" },
        { name: "Ps/Figma/Zeplin", percent: "90%" },
      ],
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.blockWrap = isVisible;
    },
  },
};
</script>
