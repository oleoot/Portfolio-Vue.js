<template>
  <div :class="navbarClass">
    <a href="#skills" class="bottom-navbar__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fff"
        class="bottom-navbar__icon"
      >
        <path
          d="M4.104 0l-4.104 4.152 18.888 18.799 5.112 1.049-.961-5.203-18.935-18.797zm15.946 21.502c-.167.166-.436.166-.602 0l-17.262-17.124c-.167-.167-.167-.435-.001-.603.166-.166.437-.166.603 0l17.262 17.126c.167.165.166.435 0 .601zm1.544-2.132c.166.166.166.437 0 .603-.166.165-.436.166-.602 0l-17.263-17.126c-.165-.165-.165-.435 0-.601.167-.166.436-.166.601-.001l17.264 17.125zm-2.855-14.067c-.195-.195-.195-.512 0-.707s.512-.195.707 0 .195.512 0 .707-.511.196-.707 0zm-7.734 12.641l-6.055 6.056-4.95-4.908 6.059-6.059 1.419 1.41-.407.407.707.707-.707.707-.707-.707-.707.707.707.707-.707.707-.707-.707-.707.707.707.707-.707.707-.707-.707-.707.708 2.121 2.121 4.657-4.657 1.398 1.387zm2.035-11.892l6.052-6.052 4.908 4.95-6.013 6.014-1.398-1.388 4.625-4.625-2.121-2.121-2.121 2.12.707.707-.708.708-.707-.707-.707.707.707.707-.707.707-.707-.708-.39.39-1.42-1.409z"
        />
      </svg>
      <p class="bottom-navbar__text">навыки</p>
    </a>
    <a href="#html" class="bottom-navbar__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fff"
        class="bottom-navbar__icon"
      >
        <path
          d="M9 2c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm12.561 12l-1.2 6h-16.721l-1.2-6h19.121zm2.439-2h-24l2 10h20l2-10zm-1-5v3h-2v-1h-18v1h-2v-3h22z"
        />
      </svg>
      <p class="bottom-navbar__text">проекты</p>
    </a>
    <a href="#contact" class="bottom-navbar__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fff"
        class="bottom-navbar__icon"
      >
        <path
          d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
        />
      </svg>
      <p class="bottom-navbar__text">связаться</p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarClass: "bottom-navbar",
      links: [
        { name: "навыки", anchor: "#skills" },
        { name: "проекты", anchor: "#html" },
        { name: "связаться", anchor: "#contact" },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      const fromTop = window.pageYOffset;
      if (fromTop >= 100) {
        this.navbarClass = "bottom-navbar bottom-navbar-active";
      } else {
        this.navbarClass = "bottom-navbar";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.toggleNavbar);
  },
};
</script>
