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
          <div class="slider__nav-item slider__nav-item_hidden-big-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-big-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-small-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-small-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.js-slider-controls'"
          :navContainer="'.js-slider-nav'"
          edgePadding="30"
          :responsive="{
       320: {
        items:1.2,
        gutter: 20
      },
            375: {
        items:1.2,
             gutter:20
      },
             640: {
        items:2,
             gutter:32
      },
                768: {
        items:2,
             gutter:32
      },
      1280: {
        items:3,
         gutter:32
      },
      1441: {
        items: 4,
        gutter: 40
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
            <div class="project__inner">
              <img v-lazy="project.bg" class="project__bg" />
              <div class="project__mask"></div>
              <div class="project__circle-wrap">
                <a :href="project.link" class="project__circle" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z"
                    />
                  </svg>
                </a>
                <a :href="project.github" class="project__circle" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
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
import Vue from "vue";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
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
          id: "2.1",
        },
        {
          name: "Password Generator",
          github: "https://github.com/oleoot/Random-password-app",
          link: "https://random-password.netlify.com/",
          bg: require("../img/projects/js/password-generator/password-generator-bg.png"),
          id: "2.2",
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
          id: "2.14",
        },
        {
          name: "Text to speech",
          github: "https://github.com/oleoot/Text-to-speech-app",
          link: "https://text-to-speech-site.netlify.com",
          bg: require("../img/projects/js/text-to-speech/text-to-speech-bg.png"),
          id: "2.15",
        },
        {
          name: "Rick and Morty",
          github: "https://github.com/oleoot/Rick-and-Morty-API",
          link: "https://rick-and-morty-api-app.netlify.app/",
          bg: require("../img/projects/js/rick-and-morty/rick-and-morty-bg.jpg"),
          id: "2.16",
        },
      ],
    };
  },
};
</script>
