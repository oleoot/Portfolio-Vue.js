<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Обо мне</h2>
        <div class="section-headline__icons">
          <a href="#">
            <img :src="require('../img/icons/telegram.png')" alt class="about__img" />
          </a>
          <a href="#">
            <img :src="require('../img/icons/github.png')" alt class="about__img" />
          </a>
          <a href="#">
            <img :src="require('../img/icons/linkedin.png')" alt class="about__img" />
          </a>
        </div>
      </div>
      <div class="about__info-wrap">
        <div class="about__info-container">
          <p class="about__number">1</p>
          <p class="about__info">
            Frontend developer с 1+ годом опыта работы веб-разработки.
            Основным направлением деятельности является создание сайтов на HTML/CSS с использованием JavaScript как ключевого инструмента в реализации проектов.
          </p>
        </div>
        <div class="about__info-container">
          <p class="about__number">2</p>
          <p class="about__info">
            Уверенно владею React.js, в том числе - react-hooks/context-api.
            Ориентируюсь во Vue.js на базовом уровне.
            <br />Знаком с принципами построения backend, для работы с которым применяю Node.js.
            Данный опыт использовал в работе с различными базами данных (MongoDB, NeDB).
          </p>
        </div>
        <div class="about__info-container">
          <p class="about__number">3</p>
          <p
            class="about__info"
          >Для оптимизации Css применял препроцессор Sass, владею Git, уверенно работаю с командной строкой.Владею графическими редакторами Ps, Figma, Zeplin. Участвовал в реализации коммерческих проектов</p>
        </div>
      </div>
    </div>
  </section>
</template>
