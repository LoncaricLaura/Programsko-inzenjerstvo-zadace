<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/fipu_logo.png"
          height="40"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <form id="search" class="navbar-form form-inline ml-auto">
          <input
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
        <ul class="navbar-nav ml-auto">
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/Signup" class="nav-link">Sign up</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click.prevent="logout()" class="nav-link">Log out</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log("PROVJERA STANJA LOGINA!");
  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: "Home" });
    }
  } else {
    console.log("No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      searchText: "",
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white !important;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .collapse.in {
    display: block;
  }
}
</style>
