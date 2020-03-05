<template>
  <!-- <MainPage/> -->
  <component v-bind:is="curState" v-on:messageFromChild="childMessageReceived"></component>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import SignedIn from "./components/SignedIn.vue";
import "bootstrap";
import "bootswatch/dist/slate/bootstrap.min.css"; // Added this :boom:

export default {
  created() {
    console.log("Welcome to the console!");
  },
  name: "App",
  data: () => ({
    curState: "MainPage"
  }),
  components: {
    MainPage,
    SignedIn
  },
  methods: {
    childMessageReceived() {
      console.log("got here!");
      this.curState = "SignedIn";
    }
  },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>
