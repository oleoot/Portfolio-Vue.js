<template>
  <section class="html" id="html">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Html/Css проекты</h2>
      </div>
    </div>
    <div class="slider__container">
      <div class="slider-wrap">
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
        <div class="slider__nav">
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item"></div>
          <div class="slider__nav-item slider__nav-item_hidden"></div>
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="40"
          :controlsContainer="'.slider-controls'"
          :navContainer="'.slider__nav'"
          edgePadding="30"
          :responsive="{
            640: {
        items:2,
      },
                768: {
        items:2,
      },
      1280: {
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
                <a :href="project.link" class="project__circle" target="_blank">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a :href="project.github" class="project__circle" target="_blank">
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
          bg: require("../img/projects/html-css/boostfolia/boostfolia-bg.png"),
          id: "1.1",
        },
        {
          name: "Freehand",
          github: "https://github.com/oleoot/Freehand-website",
          link: "https://freehand-website.netlify.app/",
          bg: require("../img/projects/html-css/Freehand/freehand-bg.png"),
          id: "1.2",
        },
        {
          name: "Snow",
          github: "https://github.com/oleoot/Snow",
          link: "https://snow-website.netlify.com/",
          bg: require("../img/projects/html-css/snow/snow-bg.png"),
          id: "1.3",
        },
        {
          name: "Dance Tour",
          github: "https://github.com/oleoot/Dance-tour",
          link: "https://dance-tour.netlify.app/",
          bg: require("../img/projects/html-css/dance-tour/dance-tour-bg.jpg"),
          id: "1.4",
        },
        {
          name: "Lasles VPN",
          github: "https://github.com/oleoot/Lasles-vpn-website",
          link: "https://lasles-vpn-site.netlify.app/",
          bg: require("../img/projects/html-css/lasles-vpn/lasles-bg.png"),
          id: "1.5",
        },
        {
          name: "Delicious Sushi",
          github: "https://github.com/oleoot/Delicious-sushi-website",
          link: "https://delicious-sushi.netlify.app/",
          bg: require("../img/projects/html-css/delicious-sushi/delicious-sushi-bg.png"),
          id: "1.6",
        },
        {
          name: "Silon",
          github: "https://github.com/oleoot/Silon",
          link: "https://silon.netlify.com/",
          bg: require("../img/projects/html-css/silon/silon-bg.png"),
          id: "1.7",
        },
        {
          name: "Merkury",
          github: "https://github.com/oleoot/Merkury",
          link: "https://merkury-website.netlify.com/",
          bg: require("../img/projects/html-css/merkury/merkury-bg.png"),
          id: "1.8",
        },
        {
          name: "My Tunes",
          github: "https://github.com/oleoot/myTunes-website",
          link: "https://mytunes-website.netlify.com/",
          bg: require("../img/projects/html-css/myTunes/showcase.png"),
          id: "1.9",
        },
        {
          name: "Data Warehouse",
          github: "https://github.com/oleoot/Data-warehouse",
          link: "https://data-warehouse.netlify.com/",
          bg: require("../img/projects/html-css/data-warehouse/data-warehouse-bg.png"),
          id: "1.10",
        },
        {
          name: "Coffee Shop",
          github: "https://github.com/oleoot/coffee-shop",
          link: "https://coffee-shop-website.netlify.app/",
          bg: require("../img/projects/html-css/coffee-shop/coffee-shop-bg.png"),
          id: "1.11",
        },
        {
          name: "Cosmo Junkie",
          github: "https://github.com/oleoot/Cosmo-junkie",
          link: "https://cosmo-junkie-website.netlify.app/",
          bg: require("../img/projects/html-css/cosmo-junkie/cosmo-junkie-bg.png"),
          id: "1.12",
        },
        {
          name: "Netflix",
          github: "https://github.com/oleoot/Netflix-main-page",
          link: "https://netflix-main-page.netlify.com/",
          bg: require("../img/projects/html-css/netflix/netflix-bg.png"),
          id: "1.13",
        },
      ],
    };
  },
};
</script>
