<template>
  <header :class="headerClass">
    <div class="container">
      <div>
        <a href="#main">
          <img :src="require('../img/icons/logo.png')" alt="logo" class="logo" />
        </a>
      </div>
      <div>
        <ul class="header__list">
          <li class="header__list-item" v-for="link in links" :key="link.name">
            <a :href="link.anchor" class="header__link">{{link.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      headerClass: "header",
      links: [
        { name: "Обо мне", anchor: "#about" },
        { name: "Навыки", anchor: "#skills" },
        { name: "Опыт работы", anchor: "#experience" },
        { name: "Образование", anchor: "#education" },
        { name: "Проекты", anchor: "#html" },
        { name: "Сертификаты", anchor: "#certificates" },
      ],
    };
  },
  methods: {
    changeHeaderBg() {
      const fromTop = window.pageYOffset;
      if (fromTop >= 100) {
        this.headerClass = "header header_bg";
        console.log(fromTop);
      } else {
        this.headerClass = "header";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.changeHeaderBg);
  },
};
</script>
