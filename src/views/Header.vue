<template>
  <div>
    <div id="header">
      <router-link to="/">
        <img
          class="logo"
          width="85px"
          height="85px"
          src="https://avatars3.githubusercontent.com/u/34954499?v=4"
          alt="Github Logo"
        />
      </router-link>
      <div class="lang-selector">
        <language-selector country="eng" class="selected" />
        <language-selector country="ko" />
        <language-selector country="ja" />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector";

export default {
  components: { LanguageSelector },
};
</script>

<style lang="scss">
div#header {
  text-align: center;
  height: 30vh;
  margin-top: 3em;

  img.logo {
    width: 85px;
    height: 85px;
    border-radius: 40%;
    box-shadow: 0 0 2px rgb(160, 152, 152);
    transition: margin-right .1s ease-in;
  }

  img.logo:hover {
    box-shadow: 0 0 2px black;
    margin-right: 3px;
  }

  .lang-selector {
    display: flex;
    justify-content: space-evenly;

    width: 15%;
    margin: 0.5rem auto;

    div img {
      border-radius: 50%;
      width: 22px;
      height: 22px;
      box-shadow: 0 0 0 white;
      transition: box-shadow 0.3s ease;

      cursor: pointer;
    }
    div img:hover {
      box-shadow: 0 0 4px black;
    }

    div.selected img {
      // opacity: 0.5;
      width: 24px;
      height: 24px;
      box-shadow: 0 0 2px black;
    }
  }
}

hr {
  border: none;
  border-bottom: 1px solid grey;
  width: 30%;
}
</style>