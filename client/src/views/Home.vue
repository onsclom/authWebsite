<template>
  <div id="signupPage" class="container-sm py-5">
    <div class="jumbotron lg-1 text-center">
      <form class="" @submit.prevent="submit">
        <h1>Account</h1>
        <div class="form-group">
          <label for="inputUsername">Username</label>
          <input
            type="username"
            class="form-control"
            id="inputUsername"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            v-model="username"
          />
          <small id="usernameHelp" class="form-text text-muted">
            {{ usernameText }}
          </small>
        </div>
        <div class="form-group" v-show="showPassword">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">{{ buttonText }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    buttonText: "Login / Signup",
    usernameText: "",
    showPassword: false
  }),
  watch: {
    username(val) {
      if (val.length < 4) {
        this.buttonText = "Login / Signup";
        this.usernameText = "";
      } else if (val === "austin") {
        this.buttonText = "Login";
        this.usernameText = "Username exists.";
      } else {
        this.buttonText = "Signup";
        this.usernameText = "Username does not exist.";
      }
    }
  },
  methods: {
    checkUsername() {
      console.log(this.username);
      console.log(this.password);
      // if (username === 'austin') {
      //   this.buttonText = 'Signup';
      //   this.usernameText = 'Username does not exist. Create a password.';
      // } else {
      //   this.buttonText = 'Login';
      //   this.usernameText = 'Username exists.';
      // }
      // this.showPassword = true;
    }
  },
  name: "Signup",
  el: "#signupForm",
  components: {}
};
</script>
