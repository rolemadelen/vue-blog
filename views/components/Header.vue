<template>
  <div>
    <div id="header">
      <div @click="goHome">
        <img
          class="logo"
          width="85px"
          height="85px"
          src="https://avatars3.githubusercontent.com/u/34954499?v=4"
          alt="Github Logo"
        />
      </div>

      <div class="lang-selector">
        <language-selector lang="eng" class="selected" @click.native="onChangeLang('eng')" />
        <language-selector lang="kor" @click.native="onChangeLang('kor')" />
        <language-selector lang="jap" @click.native="onChangeLang('jap')" />
      </div>

      <div class="header-menu">
        <header-menu page="about/" name="about" @click.native="navMenu('-about/')" />
        <header-menu page="algorithm/" name="algorithm" @click.native="navMenu('-algorithm/')" />
        <header-menu
          page="data-structure/"
          name="data-structure"
          @click.native="navMenu('-data-structure/')"
        />
        <header-menu
          page="problem-solving/"
          name="ps"
          @click.native="navMenu('-problem-solving/')"
        />
        <a href="https://jioneeu-til.com"> TIL </a>
        
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
  data() {
    return {
      lang: 'eng',
    };
  },
  mounted() {
    // this.goHome();
  },
  computed: {
    lang2: {
      get: function () {
        return this.lang;
      },
      set: function (lang) {
        const langSelector = this.getLangSelector;
        this.lang = lang;
        if (lang === "eng") {
          this.lang = "eng";
          langSelector[0].className = "selected";
          langSelector[1].className = "";
          langSelector[2].className = "";
        } else if (lang === "kor") {
          this.lang = "kor";
          langSelector[0].className = "";
          langSelector[1].className = "selected";
          langSelector[2].className = "";
        } else if (lang === "jap") {
          this.lang = "jap";
          langSelector[0].className = "";
          langSelector[1].className = "";
          langSelector[2].className = "selected";
        }
      }
    },
    getLangSelector: function () {
      return document.querySelectorAll("div.lang-selector div");
    },
  },
  methods: {
    navMenu: function (str) {
      const path = "/" + this.lang + "/" + this.lang2 + str;
      if (this.$router.currentRoute.path !== path) {
        this.$router.replace({ path: path });
      }
    },
    goHome: function () {
      const path = "/home/" + this.lang2 + "-home";
      if (this.$router.currentRoute.path !== path) {
        this.$router.replace({ path: path });
      }
    },
    onChangeLang(lang) {
      let prevPath = this.$router.currentRoute.path;
      if (prevPath === "/") {
        prevPath = "/home/eng-home";
      }
      let currPath = prevPath.split(/[\s/]+/);
      if ("engkorjap".includes(currPath[1])) {
        currPath[1] = lang;
      }
      let secondParam = currPath[2].split(/[\s-]+/);
      secondParam[0] = lang;
      secondParam = secondParam.join("-");
      currPath[2] = secondParam;
      currPath = currPath.join("/");

      if (prevPath !== currPath) {
        this.lang2 = lang;
        this.$router.replace({ path: currPath });
      }
    },
  },
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
    transition: margin-right 0.1s ease-in;
  }

  img.logo:hover {
    box-shadow: 0 0 2px black;
    margin-right: 3px;
    cursor: pointer;
  }

  .lang-selector {
    display: flex;
    justify-content: space-evenly;

    min-width: 11em;
    max-width: 15em;
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
    max-width: 26em;
    justify-content: space-evenly;
    margin: 2em auto;
    font-size: 15px;

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
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0)),
    color-stop(#ccc),
    to(rgba(255, 255, 255, 0))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0),
    #ccc,
    rgba(255, 255, 255, 0)
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #ccc,
    rgba(255, 255, 255, 0)
  );
  height: 1px;
  margin: 2em auto;
}
</style>