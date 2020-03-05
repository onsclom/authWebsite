<template>
  <section class="text-center">
    <!-- Modal -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{formHeader}}</h5>
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
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>-->
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
    usernameText: "",
    formHeader: "Login",
    usernameText: ""
  }),
  methods: {
    submit() {
      console.log("WOW!");
      this.$emit("messageFromChild");
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
