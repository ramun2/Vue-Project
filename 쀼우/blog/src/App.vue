<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="padding-left : 20px; padding-right: 20px;">
  <a class="navbar-brand" href="#">Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>


  <div class="container-fluid" style="margin-top: 20px; text-align: center;">
    <p>블로그입니다.</p>
    <blog :informations="informations" />
  </div>
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
  

}
</style>
