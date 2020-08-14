<template>
  <section class="js">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">JavaScript проекты</h2>
      </div>
    </div>
    <div class="slider__container">
      <div class="slider-wrap">
        <div class="slider-controls js-slider-controls">
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
        <div class="slider__nav js-slider-nav">
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item slider__nav-item_hidden"></div>
          <div class="slider__nav-item slider__nav-item_hidden"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.js-slider-controls'"
          :navContainer="'.js-slider-nav'"
          edgePadding="30"
          :responsive="{
      1023: {
        items:3,
         gutter:32
      },
      1441: {
        items: 4
      }
    }"
        >
          <a
            :href="project.link"
            class="project"
            v-for="project in projects"
            :key="project.id"
            target="_blank"
          >
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
          name: "Weather",
          github: "https://github.com/oleoot/Weather-app",
          link: "https://weather-app-site.netlify.com/",
          bg: require("../img/projects/js/weather/weather-bg.png"),
          id: "2.2",
        },
        {
          name: "Password Generator",
          github: "https://github.com/oleoot/Random-password-app",
          link: "https://random-password.netlify.com/",
          bg: require("../img/projects/js/password-generator/password-generator-bg.png"),
          id: "2.1",
        },
        {
          name: "Shopping cart",
          github: "https://github.com/oleoot/Shopping-cart-using-vanilla-js",
          link: "https://shopping-cart-vanilla-js-app.netlify.app/",
          bg: require("../img/projects/js/shopping-cart-js/shopping-cart-js-bg.png"),
          id: "2.3",
        },
        {
          name: "Snake Game",
          github: "https://github.com/oleoot/Snake-game-vanilla-js",
          link: "https://snake-game-app.netlify.app/",
          bg: require("../img/projects/js/snake-game/snake-bg.png"),
          id: "2.4",
        },
        {
          name: "Form Validation",
          github: "https://github.com/oleoot/JavaScript-Form-Validation",
          link: "https://form-validation-check.netlify.app/",
          bg: require("../img/projects/js/form-validation/form-validation-bg.png"),
          id: "2.5",
        },
        {
          name: "Drums",
          github: "https://github.com/oleoot/Drum-machine",
          link: "https://drum-machine-color-balls.netlify.com",
          bg: require("../img/projects/js/drums/drums-bg.png"),
          id: "2.6",
        },
        {
          name: "Booklist",
          github: "https://github.com/oleoot/Book-list-app",
          link: "https://booklist-app.netlify.com/",
          bg: require("../img/projects/js/books-list/books-list-bg.png"),
          id: "2.7",
        },
        {
          name: "Filtered contacts",
          github: "https://github.com/oleoot/Filterable-list",
          link: "https://filterable-list-website.netlify.com/",
          bg: require("../img/projects/js/filtered-contacts/filtered-contacts-bg.png"),
          id: "2.8",
        },
        {
          name: "Split Slider",
          github: "https://github.com/oleoot/Split-screen-slider",
          link: "https://split-screen-slider-corsair.netlify.app/",
          bg: require("../img/projects/js/split-screen-slider/split-screen-slider-bg.png"),
          id: "2.9",
        },
        {
          name: "Face detection",
          github: "https://github.com/oleoot/Face-recognition-app",
          link: "https://face-recognition-api.netlify.app/",
          bg: require("../img/projects/js/face-recognition/face-recognition-bg.png"),
          id: "2.10",
        },
        {
          name: "Relax App",
          github: "https://github.com/oleoot/Relax-app",
          link: "https://relaxation-app.netlify.app",
          bg: require("../img/projects/js/relax-app/relax-app-bg.png"),
          id: "2.11",
        },
        {
          name: "Bored Api",
          github: "https://github.com/oleoot/Bored-API",
          link: "https://show-activity-api.netlify.app/",
          bg: require("../img/projects/js/bored-api/bored-api-bg.png"),
          id: "2.12",
        },
        {
          name: "Airpods",
          github: "",
          link: "https://airpods-pro.netlify.com",
          bg: require("../img/projects/js/airpods/airpods-bg.png"),
          id: "2.13",
        },
        {
          name: "Drag & Drop",
          github: "https://github.com/oleoot/Drag-and-drop-images-Vanilla-Js",
          link: "https://drag-drop-app.netlify.app/",
          bg: require("../img/projects/js/drag-drop/drag-drop-bg.png"),
          id: "2.13",
        },
        {
          name: "Text to speech",
          github: "https://github.com/oleoot/Text-to-speech-app",
          link: "https://text-to-speech-site.netlify.com",
          bg: require("../img/projects/js/text-to-speech/text-to-speech-bg.png"),
          id: "2.13",
        },
        {
          name: "Rick and Morty",
          github: "https://github.com/oleoot/Rick-and-Morty-API",
          link: "https://rick-and-morty-api-app.netlify.app/",
          bg: require("../img/projects/js/rick-and-morty/rick-and-morty-bg.jpg"),
          id: "2.13",
        },
      ],
    };
  },
};
</script>
