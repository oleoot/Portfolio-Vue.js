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
        <div class="contact__pane contact__avatar">
          <img :src="require('../img/icons/avatar.png')" alt class="avatar" />
          <p class="contact__name">Олег Куць</p>
        </div>
      </div>
    </div>
  </section>
</template>
