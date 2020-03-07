<template>
  <section class="text-center">
    <!-- Modal -->
    <div
      class="modal fade text-left"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{ user.formHeader }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="alert alert-dismissible alert-danger"
              v-if="shouldAlert"
            >
              {{ alertMessage }}
            </div>

            <form class @submit.prevent="submit">
              <div class="form-group">
                <label for="inputUsername">Username</label>
                <input
                  type="username"
                  class="form-control"
                  id="inputUsername"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  v-model="user.username"
                />
              </div>
              <div class="form-row">
                <div class="col">
                  <label for="inputPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    v-model="user.password"
                  />
                </div>

                <div class="col" v-if="user.formHeader === 'Register'">
                  <label for="inputPassword">Verify Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Verify Password"
                    v-model="user.verifyPassword"
                  />
                </div>
              </div>

              <div class="row justify-content-between mt-4">
                <button
                  type="button"
                  class="btn btn-primary col-4 ml-3"
                  v-on:click="toggle()"
                >
                  {{ user.toggleText }}
                </button>
                <button type="submit" class="btn btn-primary col-4 mr-3">
                  {{ user.formHeader }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <h1 class="mt-5" id="title">anonConvo</h1>
    <div class="container-sm">
      <h5 class="text-muted">ad-free. anonymous. no email necessary.</h5>
    </div>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary mt-5"
      data-toggle="modal"
      data-target="#myModal"
    >
      Start Now
    </button>
  </section>
</template>

<script>
const SIGNUP_URL = "http://localhost:5000/auth/signup";

export default {
  name: "MainPage",
  data: () => ({
    user: {
      username: "",
      password: "",
      verifyPassword: "",
      formHeader: "Login",
      toggleText: "Register"
    },
    usernameText: "",
    alertMessage: "testing",
    shouldAlert: false
  }),
  methods: {
    submit() {
      if (this.formHeader == "Login") {
        this.login();
      } else {
        this.signup();
      }

      //this.$emit("messageFromChild");
    },
    signup() {
      if (this.user.password != this.user.verifyPassword) {
        this.alertMessage = "Passwords must match.";
        this.shouldAlert = true;
        return;
      }

      const body = {
        username: this.user.username,
        password: this.user.password
      };

      fetch(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then(error => {
            throw new Error(error.message);
          });
        })
        .then(response => {
          console.log("Successful login!");
          console.log(response);
        })
        .catch(error => {
          console.log("PROBLEM");
          console.log(error);
        });
    },
    login() {},
    toggle() {
      if (this.user.formHeader == "Login") {
        this.user.toggleText = this.user.formHeader;
        this.user.formHeader = "Register";
      } else {
        this.user.toggleText = this.formHeader;
        this.user.formHeader = "Login";
      }
    }
  },
  watch: {
    user: {
      // This will let Vue know to look inside the array
      deep: true,
      handler()
      {
        this.shouldAlert=false;
      }
    },
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  font-size: 3.5rem;
}
</style>
