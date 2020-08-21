<template>
  <div id="app">
    <Header />
    <MainScreen />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Html />
    <JavaScript />
    <React />
    <Vue />
    <Fullstack />
    <Certificates />
    <Contact />
    <Footer />
    <NavbarMobile />
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
import JavaScript from "./components/JavaScript";
import React from "./components/React";
import Vue from "./components/Vue";
import Fullstack from "./components/Fullstack";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarMobile from "./components/NavbarMobile";
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
    JavaScript,
    React,
    Vue,
    Fullstack,
    Certificates,
    Contact,
    Footer,
    NavbarMobile,
  },
  data() {
    return {};
  },
  // methods: {
  //   loadElements() {
  //     const projects = document.querySelectorAll(".project__inner");

  //   },
  // },
  // mounted() {
  //   document.addEventListener("scroll", this.loadElements);
  // },
};
</script>
<style scoped>
@import "styles/style.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
