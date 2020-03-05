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
              {{ formHeader }}
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
            <form class @submit.prevent="submit">
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
                <small id="usernameHelp" class="form-text text-muted">{{
                  usernameText
                }}</small>
              </div>
              <div class="form-row">
                <div class="col">
                  <label for="inputPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <div class="col" v-if="formHeader==='Register'">
                  <label for="inputPassword">Verify Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Verify Password"
                    v-model="verifyPassword"
                  />
                </div>
              </div>

              <div class="row justify-content-between mt-4">
                <button type="button" class="btn btn-primary col-4 ml-3" v-on:click="toggle()">
                  {{ toggleText }}
                </button>
                <button type="submit" class="btn btn-primary col-4 mr-3">
                  {{ formHeader }}
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
export default {
  name: "MainPage",
  data: () => ({
    username: "",
    password: "",
    formHeader: "Login",
    toggleText: "Register",
    verifyPassword: "",
    usernameText: ""
  }),
  methods: {
    submit() {
      console.log("WOW!");

      

      //this.$emit("messageFromChild");
    },
    toggle() {
      if (this.formHeader == 'Login')
      {
        this.toggleText = this.formHeader;
        this.formHeader = 'Register';
      }
      else
      {
        this.toggleText = this.formHeader;
        this.formHeader = 'Login';
      }
    }
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
