<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav"></ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <p>블로그입니다.</p>
  </div>
  <blog :informations="informations" />
</template>
<informarions />

<script>
import blog from "./components/blog.vue";
import information from "./assets/a.js";

export default {
  name: "App",
  data() {
    return {
      informations: information,
    };
  },
  components: {
    blog: blog,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
