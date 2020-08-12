<template>
  <section class="experience">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Образование</h2>
        <div>
          <a href="#" class="reference__link">ITEA</a>
        </div>
      </div>
      <div class="type-wrap">
        <div class="type-wrap__left">
          <div class="circle"></div>
          <div class="type-wrap__inner">
            <img :src="require('../img/icons/shape-3.png')" alt class="shape shape-3" />
            <h2 class="type-wrap__headline">Курсы web-разработки ITEA (HTML/CSS)</h2>
            <p class="type-wrap__date">16.10.2018–06.12.2018</p>
            <p
              class="type-wrap__description"
            >Полный цикл разработки frontend приложений с использованием HTML5, CSS3.</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div class="type-wrap__right">
          <div class="circle"></div>
          <div class="type-wrap__inner">
            <img :src="require('../img/icons/shape-4.png')" alt class="shape shape-4" />
            <h2 class="type-wrap__headline">Курсы web - разработки ITEA (JS Base/JS Advanced)</h2>
            <p class="type-wrap__date">10.12.2018-08.02.2019</p>
            <p
              class="type-wrap__description"
            >Изучение JavaScript от основ до продвинутого уровня. Работа с типами данных, массивами, циклами, DOM, объектами, функциями, ивентами, анимациями.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
