<template>
  <section class="certificates" id="certificates">
    <div class="container">
      <div class="section-headline">
        <h2 class="section-headline__text">Сертификаты</h2>
        <div class="reference__wrap">
          <a :href="itea" class="reference__link" target="_blank">ITEA</a>
        </div>
      </div>
      <div class="certificates__type-wrap">
        <div class="certificates__type">
          <img :src="require('../img/certificates/html.png')" alt class="certificates__img" />
        </div>
        <div class="certificates__type">
          <img :src="require('../img/certificates/js-base.png')" alt class="certificates__img" />
        </div>
        <div class="certificates__type">
          <img :src="require('../img/certificates/js-advanced.png')" alt class="certificates__img" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      itea: "https://itea.ua/uk/",
    };
  },
};
</script>
