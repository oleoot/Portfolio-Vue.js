<template>
  <section class="about">
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
      <div class="about__info-container">
        <p class="about__info">
          Frontend developer с 1+ годом опыта работы веб-разработки.
          Основным направлением деятельности является создание сайтов на HTML/CSS (включая кроссбраузерную, кроссплатформенную, адаптивную разработку) с использованием JavaScript как ключевого инструмента в реализации проектов.
          Уверенно владею React.js (создан большой проект на нем), в том числе - react-hooks/context-api.
          Ориентируюсь во Vue.js на базовом уровне.
          Знаком с принципами построения backend, для работы с которым применяю Node.js.
          Данный опыт использовал в работе с различными базами данных (MongoDB, NeDB).
          Для оптимизации Css применял препроцессор Sass, владею Git, уверенно работаю с командной строкой.
        </p>
      </div>
    </div>
  </section>
</template>
