<template>
  <section class="react">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">React.js проекты</h2>
      </div>
    </div>
    <div class="slider__container">
      <div class="slider-wrap">
        <div class="slider-controls react-slider-controls">
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
        <div class="slider__nav react-slider-nav">
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item slider__nav-item_hidden-big-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-small-desktop"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
          <div class="slider__nav-item slider__nav-item_hidden-mobile"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.react-slider-controls'"
          :navContainer="'.react-slider-nav'"
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
          name: "YouFruit",
          github: "https://github.com/oleoot/Youfruit-react",
          link: "https://youfruit-react.netlify.app/",
          bg: require("../img/projects/react/youfruit/youfruit-bg.png"),
          id: "3.1",
        },
        {
          name: "Hot Ones",
          github:
            "https://github.com/oleoot/hot-sauce-heat-meter-from-hot-ones-react-hooks",
          link: "https://hot-ones-souces.netlify.app/",
          bg: require("../img/projects/react/hot-ones-hot-sauces/hot-ones-hot-sauces-bg.png"),
          id: "3.2",
        },
        {
          name: "Slack Clone",
          github: "https://github.com/oleoot/Slack-Clone-React.js",
          link: "https://slack-clone-website.netlify.app/",
          bg: require("../img/projects/react/slack-clone/slack-clone-bg.png"),
          id: "3.3",
        },
        {
          name: "Expense Tracker",
          github: "https://github.com/oleoot/Expense-tracker-on-React",
          link: "https://expense-tracker-website.netlify.com/",
          bg: require("../img/projects/react/expense-tracker/expense-tracker-bg.png"),
          id: "3.3",
        },
        {
          name: "Reading List",
          github:
            "https://github.com/oleoot/Reading-list-app-using-react-context-hooks",
          link: "https://reading-list-react-context-hooks.netlify.app",
          bg: require("../img/projects/react/reading-list/reading-list-bg.png"),
          id: "3.4",
        },
        {
          name: "Recipe Search",
          github: "https://github.com/oleoot/Recipe-searching-app-on-react",
          link: "https://recipe-searching-app.netlify.com/",
          bg: require("../img/projects/react/recipe-searching/recipe-search-bg.png"),
          id: "3.5",
        },
        {
          name: "Todo List Hooks",
          github: "https://github.com/oleoot/To-do-list-react-hooks",
          link: "https://react-hooks-todo-list.netlify.app/",
          bg: require("../img/projects/react/todo-hooks/todo-hooks-bg.png"),
          id: "3.6",
        },
        {
          name: "Page Translate",
          github:
            "https://github.com/oleoot/translating-react-page-with-react-intl",
          link: "https://react-translate-page.netlify.app/",
          bg: require("../img/projects/react/page-translation/page-translation-bg.png"),
          id: "3.7",
        },
        {
          name: "Theme Change",
          github: "https://github.com/oleoot/react-hooks-context-api",
          link: "https://react-context-hooks-training.netlify.app",
          bg: require("../img/projects/react/context-hooks-theme-change/context-hooks-theme-change-bg.png"),
          id: "3.8",
        },
      ],
    };
  },
};
</script>
