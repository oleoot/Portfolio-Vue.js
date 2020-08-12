<template>
  <section class="contact">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Связаться со мной</h2>
      </div>
      <div class="contact__inner">
        <div class="contact__pane">
          <label for class="contact__label">Имя</label>
          <input type="text" class="contact__input" />
          <label for class="contact__label">E-mail</label>
          <input type="text" class="contact__input" />
          <label for class="contact__label">Сообщение</label>
          <textarea name class="contact__textarea"></textarea>
          <a href="#" class="contact__button">Отправить</a>
        </div>
        <div class="contact__pane">
          <img :src="require('../img/icons/shape-2.png')" alt class="shape-5" />
          <div class="contact__info-wrap">
            <img :src="require('../img/icons/telegram.png')" alt class="about__img" />
            <a href="#" class="contact__link">oleg.kouts@gmail.com</a>
          </div>
          <div class="contact__info-wrap">
            <img :src="require('../img/icons/telegram.png')" alt class="about__img" />
            <a href="#" class="contact__link">+38 066 733 89 00</a>
          </div>
          <div class="contact__info-wrap">
            <img :src="require('../img/icons/telegram.png')" alt class="about__img" />
            <a href="#" class="contact__link">@oleoot</a>
          </div>
          <div class="contact__info-wrap">
            <img :src="require('../img/icons/github.png')" alt class="about__img" />
            <a href="#" class="contact__link">github.com/oleoot</a>
          </div>
          <div class="contact__info-wrap">
            <img :src="require('../img/icons/linkedin.png')" alt class="about__img" />
            <a href="#" class="contact__link">linkedin.com/in/oleg-kouts</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
