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
          <input type="email" class="contact__input" />
          <label for class="contact__label">Сообщение</label>
          <textarea name class="contact__textarea"></textarea>
          <a href="#" class="contact__button">Отправить</a>
        </div>
        <div class="contact__pane">
          <img :src="require('../img/icons/shape-2.png')" alt class="shape-5" />
          <div class="contact__info-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#146BE1"
              viewBox="0 0 24 24"
              class="contact__icon"
            >
              <path
                d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
              />
            </svg>
            <a href="#" class="contact__link">oleg.kouts@gmail.com</a>
          </div>
          <div class="contact__info-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#146BE1"
              viewBox="0 0 24 24"
              class="contact__icon"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"
              />
            </svg>
            <a href="#" class="contact__link">+38 066 733 89 00</a>
          </div>
          <div class="contact__info-wrap">
            <svg
              id="Bold"
              enable-background="new 0 0 24 24"
              height="40"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              fill="#146BE1"
              class="contact__icon"
            >
              <path
                d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
              />
            </svg>
            <a href="#" class="contact__link">@oleoot</a>
          </div>
          <div class="contact__info-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#146BE1"
              class="contact__icon"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <a href="#" class="contact__link">github.com/oleoot</a>
          </div>
          <div class="contact__info-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#146BE1"
              class="contact__icon"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
            <a href="#" class="contact__link">linkedin.com/in/oleg-kouts</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
