<template>
  <MainPage/>
</template>

<script>

import MainPage from "./components/MainPage.vue";
import 'bootstrap'
import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:

export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style>
html,body{
        margin: 0px;
        padding: 0px;
    }
</style>
