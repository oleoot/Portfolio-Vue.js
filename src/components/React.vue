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
