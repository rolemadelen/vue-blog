<template>
  <div class="about">
    <div id="bug-title">유버그 입니다.</div>

    <div id="bug-content">
      일본 초등학교에서 영어 교사로 근무 중이며, 현재는 프론트엔드 개발자를
      목표로 Vue.js와 React를 공부 중입니다.

      <br /><br />

      * 2020년 11월 내정을 받았습니다. <br>
      * 2021년 03월부터 프론트엔드 개발자로 일하게 되었습니다.

      <br /><br />

      <div class="bug-links">
        <div><a href="https://github.com/bugxvii">GitHub</a></div>
        <a href="https://www.instagram.com/">Instagram</a>
        <div><a href="https://www.linkedin.com/in/">LinkedIn</a></div>
      </div>
      <div class="bug-links">
        <a href="https://twitter.com/bugxvii">Twitter</a>
        <div>
          <a
            href="https://www.youtube.com/channel/UC8hY3wjYlK2U9W4fqKN598Q?view_as=subscriber"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");

#bug-title {
  text-align: center;
  font-family: "Black Han Sans", "sans-serif";
  margin-bottom: 25px;
  font-size: 3em;
}

#bug-content {
  margin: 0 auto;
  max-width: 25em;
}

.bug-links {
  display: flex;
  justify-content: space-between;

  .lightmode a, a {
    color: black;
  }

  a:hover {
    color: #7a7b7c;
  }
}

.about {
  font-size: 15px;
  line-height: 1.5;
  max-width: 40em;
  margin: 0 auto;
  font-family: "Noto Sans Javanese", serif;

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
    color: #eee;
    transition: 0.3s;
  }
  a:hover {
    color: #da9dff;
  }
}
</style>