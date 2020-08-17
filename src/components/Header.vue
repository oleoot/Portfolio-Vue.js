<template>
  <header :class="headerClass">
    <div class="container">
      <div>
        <a href="#main">
          <svg
            width="63"
            height="30"
            viewBox="0 0 63 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9338 29.4C13.0804 29.4 10.5071 28.7867 8.21375 27.56C5.92042 26.3067 4.12042 24.5867 2.81375 22.4C1.50708 20.1867 0.85375 17.72 0.85375 15C0.85375 12.28 1.50708 9.82667 2.81375 7.64C4.12042 5.42666 5.92042 3.70666 8.21375 2.48C10.5071 1.22667 13.0804 0.599998 15.9338 0.599998C18.7871 0.599998 21.3604 1.22667 23.6538 2.48C25.9471 3.70666 27.7471 5.41333 29.0538 7.6C30.3604 9.78667 31.0138 12.2533 31.0138 15C31.0138 17.7467 30.3604 20.2133 29.0538 22.4C27.7471 24.5867 25.9471 26.3067 23.6538 27.56C21.3604 28.7867 18.7871 29.4 15.9338 29.4ZM15.9338 24.84C17.8004 24.84 19.4804 24.4267 20.9738 23.6C22.4671 22.7467 23.6404 21.5733 24.4938 20.08C25.3471 18.56 25.7738 16.8667 25.7738 15C25.7738 13.1333 25.3471 11.4533 24.4938 9.96C23.6404 8.44 22.4671 7.26667 20.9738 6.44C19.4804 5.58667 17.8004 5.16 15.9338 5.16C14.0671 5.16 12.3871 5.58667 10.8938 6.44C9.40042 7.26667 8.22708 8.44 7.37375 9.96C6.52042 11.4533 6.09375 13.1333 6.09375 15C6.09375 16.8667 6.52042 18.56 7.37375 20.08C8.22708 21.5733 9.40042 22.7467 10.8938 23.6C12.3871 24.4267 14.0671 24.84 15.9338 24.84ZM46.1656 17.28L41.7256 21.84V29H36.5256V0.999998H41.7256V15.36L55.5656 0.999998H61.4056L49.6456 13.52L62.1256 29H56.0456L46.1656 17.28Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div>
        <ul class="header__list">
          <li class="header__list-item" v-for="link in links" :key="link.name">
            <a :href="link.anchor" class="header__link">{{link.name}}</a>
          </li>
        </ul>
        <div class="burger-menu" @click="toggleMenu" :class="{toggle: toggledMenu}">
          <div class="burger-menu__line line-1"></div>
          <div class="burger-menu__line line-2"></div>
          <div class="burger-menu__line line-3"></div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      toggledMenu: false,
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
    toggleMenu() {
      this.toggledMenu = !this.toggledMenu;
    },
  },
  mounted() {
    document.addEventListener("scroll", this.changeHeaderBg);
  },
};
</script>
