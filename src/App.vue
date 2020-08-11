<template>
  <div id="app">
    <Header />
    <MainScreen />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Html />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Html from "./components/Html";
export default {
  name: "App",
  components: {
    Header,
    MainScreen,
    About,
    Skills,
    Experience,
    Education,
    Html,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
@import "styles/style.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
