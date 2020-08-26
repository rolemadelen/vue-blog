<template>
  <div class="blog">
    <!-- <h1>{{$route.name}}</h1> -->
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<style lang="scss">
.blog {
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');
  font-family: 'Source Serif Pro', serif;

  max-width: 40em;
  margin: 3rem auto;

  @import "../styles/_content.scss";
}
</style>