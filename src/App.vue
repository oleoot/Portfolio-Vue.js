<template>
  <div id="app">
    <Header />
    <MainScreen />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
export default {
  name: "App",
  components: {
    Header,
    MainScreen,
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
