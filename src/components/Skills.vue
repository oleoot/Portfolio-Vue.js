<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Навыки</h2>
      </div>
      <div class="skills__type-wrap">
        <div class="skills__type-container" v-for="skill in skills" :key="skill.name">
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
export default {
  data() {
    return {
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
};
</script>
