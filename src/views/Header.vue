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
        <router-link to="/about">
        <language-selector lang="eng" class="selected" @click.native="onChangeLang('eng')"/>
        </router-link>

        <router-link to="/about/ko">
        <language-selector lang="ko" @click.native="onChangeLang('ko')"/>
        </router-link>

        <router-link to="/about/ja">
        <language-selector lang="ja" @click.native="onChangeLang('ja')"/>
        </router-link>
      </div>

      <div class="header-menu">
        <header-menu page="about" name="about" />
        <header-menu page="algorithm" name="algorithm" />
        <header-menu page="data-structure" name="data-structure" />
        <header-menu page="problem-solving" name="ps" />
        <header-menu page="til" name="TIL" />

      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector";
import HeaderMenu from "./HeaderMenu";

export default {
  components: { LanguageSelector, HeaderMenu },
  computed: {
    getLangSelector: function() {
        return document.querySelectorAll('div.lang-selector div');
    }
  },
  methods: {
    onChangeLang(lang) {
      const langSelector = this.getLangSelector;

      if (lang==='eng') {
        langSelector[0].className = 'selected';
        langSelector[1].className = '';
        langSelector[2].className = '';
      } else if (lang==='ko') {
        langSelector[0].className = '';
        langSelector[1].className = 'selected';
        langSelector[2].className = '';
      } else {
        langSelector[0].className = '';
        langSelector[1].className = '';
        langSelector[2].className = 'selected';
      }
    } 
  }
};
</script>

<style lang="scss">
div#header {
  text-align: center;
  height: 11em;
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

  .header-menu {
    display: flex;
    width: auto;
    max-width: 25em;
    justify-content: space-evenly;
    margin: 2em auto;

    a {
      text-decoration: none;
      color: #404040;
    }

    a:hover {
      color: #27598e;
    }
  }
}

  .divider {
    width: 40%;
    background: #ddd;
    background: -webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),color-stop(#ccc),to(rgba(255,255,255,0)));
    background: -webkit-linear-gradient(left,rgba(255,255,255,0),#ccc,rgba(255,255,255,0));
    background: linear-gradient(to right,rgba(255,255,255,0),#ccc,rgba(255,255,255,0));
    height: 1px;
    margin: 2em auto;
  }
</style>