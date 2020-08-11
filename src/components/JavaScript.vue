<template>
  <section class="html">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">JavaScript</h2>
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

          <!-- <img :src="require('../img/icons/arrow-next.png')" alt class="slider__arrow" /> -->
          <!-- <img :src="require('../img/icons/arrow-next.png')" alt class="slider__arrow" /> -->
        </div>
        <tiny-slider
          :loop="false"
          items="4"
          gutter="0"
          :nav="false"
          :controlsContainer="'.slider-controls'"
        >
          <a class="project">
            <div class="project__inner boostfolia">
              <div class="project__circle-wrap">
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">Boostfolia</p>
            </div>
          </a>
          <a class="project">
            <div class="project__inner freehand">
              <div class="project__circle-wrap">
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">Freehand</p>
            </div>
          </a>
          <a class="project">
            <div class="project__inner snow">
              <div class="project__circle-wrap">
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">Boostfolia</p>
            </div>
          </a>
          <a class="project">
            <div class="project__inner dance-tour">
              <div class="project__circle-wrap">
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">Dance Tour</p>
            </div>
          </a>
          <a class="project">
            <div class="project__inner dance-tour">
              <div class="project__circle-wrap">
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/internet.png')" alt />
                </a>
                <a href="#" class="project__circle">
                  <img :src="require('../img/icons/github-black.png')" alt />
                </a>
              </div>
              <p class="project__name">Dance Tour</p>
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
};
</script>
