<template>
  <div>
    <h1>This is a signup page</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="emailField"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="passwordField"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="confirmPasswordField">Repeat Password</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="confirmPasswordField"
                placeholder="Confirm password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log('Uspješna registracija');
        })
        .catch(function (error) {
          console.error('Došlo je do greške', error);
        });
      console.log('Nastavak');
    },
  },
};
</script>
