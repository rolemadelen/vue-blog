<template>
  <div class="about">
    <div id="bug-title">I'm Eubug.</div>

    <div id="bug-content">
      Currently (2020) I'm working in Japan as a Foreign Language Teacher. Today, I'm spending times studying Vue.js and React to 
      move forward towards becoming a frontend developer.

      <br /><br />

    <div class="bug-links">
      <div><a href="https://github.com/bugxvii">GitHub</a></div>
      <a href="https://www.instagram.com/jioneeu_4am/">Instagram</a>
      <div><a href="https://www.linkedin.com/in/jioneeu/">LinkedIn</a></div> 
    </div>
    <div class="bug-links">
      <a href="https://twitter.com/bugxvii">Twitter</a>
      <div><a href="https://www.youtube.com/channel/UC8hY3wjYlK2U9W4fqKN598Q?view_as=subscriber">YouTube</a></div>
    </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@600;700;800;900&display=swap');

#bug-title {
  text-align: center;
  font-family: "Maven Pro", "sans-serif";
  font-weight: 900;
  margin-bottom: 25px;
  font-size: 3em;
}

#bug-content {
  margin: 0 auto;
  max-width: 25em;
  font-size: 14px;
}

.bug-links {
  display: flex;
  justify-content: space-between;

  .lightmode a, a{
    color: black;
    transition: .3s;
  }

  a:hover {
    color: #7a7b7c;
  
  }
}

.about {
  // font-size: 14px;
  line-height: 1.5;
  max-width: 40em;
  margin: 0 auto;
  font-family: 'Noto Sans Javanese', serif;

  h2 {
    margin-bottom: 2em;
  }

  .tgl-btn {
    text-decoration: underline;
  }
  .tgl-btn:hover {
    cursor: pointer;
  }
}

ul,
li {
  list-style-type: none;
}

.darkmode {
  a {
    color: #d3c6db;
    transition: 0.3s;
  }
  a:hover {
    color: #da9dff;
  }
}
</style>