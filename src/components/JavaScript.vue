<template>
  <section class="html">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">JavaScript проекты</h2>
      </div>
    </div>
    <div class="container">
      <div class="html__slider-wrap">
        <div class="slider-controls">
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 250"
            style="enable-background:new 0 0 512 512;"
            fill="#146BE1"
            class="slider__arrow"
            transform="rotate(180)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 0, -131.41333)">
              <g>
                <path
                  d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                />
              </g>
            </g>
          </svg>
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 250"
            style="enable-background:new 0 0 512 512;"
            fill="#146BE1"
            class="slider__arrow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 0, -131.41333)">
              <g>
                <path
                  d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="html__nav">
          <div class="html__nav-item"></div>
          <div class="html__nav-item"></div>
          <div class="html__nav-item"></div>
          <div class="html__nav-item"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.slider-controls'"
          :navContainer="'.html__nav'"
          edgePadding="30"
        >
          <a :href="project.link" class="project" v-for="project in projects" :key="project.alt">
            <div class="project__inner" :class="project.bgName">
              <div class="project__circle-wrap">
                <a :href="project.link" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a :href="project.github" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">{{project.name}}</p>
            </div>
          </a>
        </tiny-slider>
      </div>
    </div>
  </section>
</template>


<script>
import VueTinySlider from "vue-tiny-slider";
export default {
  components: {
    "tiny-slider": VueTinySlider,
  },
  data() {
    return {
      // icons: [
      //   { webLink: "../img/icons/internet.png" },
      //   { githubLink: "../img/icons/github.png" },
      // ],
      projects: [
        {
          name: "Boostfolia",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "boostfolia",
          alt: "project-boostfolia",
        },
        {
          name: "Freehand",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-Freehand",
        },
        {
          name: "Snow",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "snow",
          alt: "project-snow",
        },
        {
          name: "Dance Tour",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "dance-tour",
          alt: "project-dance",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
        {
          name: "Test",
          github: "https://github.com/oleoot/Boostfolia",
          link: "https://boostfolia.netlify.app/",
          bgName: "freehand",
          alt: "project-test",
        },
      ],
    };
  },
};
</script>
