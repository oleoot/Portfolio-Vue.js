<template>
  <section class="react">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Fullstack проекты</h2>
      </div>
    </div>
    <div class="slider__container">
      <div class="slider-wrap">
        <div class="slider-controls fullstack-slider-controls">
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
        <div class="slider__nav fullstack-slider-nav">
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item slider__nav-item_hidden"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.fullstack-slider-controls'"
          :navContainer="'.fullstack-slider-nav'"
          edgePadding="30"
          :responsive="{
      1023: {
        items:3,
      },
      1441: {
        items: 4
      }
    }"
        >
          <a :href="project.link" class="project" v-for="project in projects" :key="project.id">
            <div class="project__inner" :style="{backgroundImage: 'url(' + project.bg + ')' }">
              <div class="project__mask"></div>
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
          name: "Weather Here",
          github:
            "https://github.com/oleoot/Weather-air-pollution-app-using-node.js",
          link: "https://the-weather-here-app-nodejs.herokuapp.com/index.html",
          bg: require("../img/projects/fullstack/weather-pollution/weather-pollution-bg.png"),
          id: "5.1",
        },
        {
          name: "Travel Log App",
          github: "https://github.com/oleoot/Full-Stack-Travel-Log-App",
          link: "https://travel-log-app.netlify.app/",
          bg: require("../img/projects/fullstack/travel-log-app/travel-log-app-bg.png"),
          id: "5.2",
        },
        {
          name: "Twitter Clone",
          github: "https://github.com/oleoot/Twitter-clone-app",
          link: "https://twitter-clone-website.netlify.app/",
          bg: require("../img/projects/fullstack/twitter-clone/twitter-clone-bg.png"),
          id: "5.3",
        },
        {
          name: "Chat Room",
          github: "https://github.com/oleoot/Chat-room-app",
          link: "https://chat-room-app-ok.herokuapp.com/",
          bg: require("../img/projects/fullstack/chat-room/chat-room-bg.png"),
          id: "5.4",
        },
        {
          name: "Chat Room",
          github: "https://github.com/oleoot/Chat-room-app",
          link: "https://chat-room-app-ok.herokuapp.com/",
          bg: require("../img/projects/fullstack/chat-room/chat-room-bg.png"),
          id: "5.4",
        },
      ],
    };
  },
};
</script>
