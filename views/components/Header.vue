<template>
  <div>
    <div id="header">
      <div @click="goHome">
        <img
          id="profile"
          class="logo"
          width="85px"
          height="85px"
          :src="'../../assets/profile-img.jpg'"
          alt="Github Logo"
        />
      </div>

      <div id="mode-wrapper">
        <span id="lightmode-txt">Light</span>
        <button id="mode-btn" @click="onClickMode">
          <div id="btn-ball"></div>
        </button>
        <span id="darkmode-txt">Dark</span>
      </div>

      <div class="lang-selector">
        <language-selector
          lang="eng"
          class="selected"
          @click.native="onChangeLang('eng')"
        />
        <language-selector lang="kor" @click.native="onChangeLang('kor')" />
        <language-selector lang="jap" @click.native="onChangeLang('jap')" />
      </div>

      <div class="header-menu">
        <header-menu
          page="about/"
          name="about"
          @click.native="navMenu('-about/')"
        />
        <header-menu
          page="algorithm/"
          name="algorithm"
          @click.native="navMenu('-algorithm/')"
        />
        <header-menu
          page="data-structure/"
          name="data-structure"
          @click.native="navMenu('-data-structure/')"
        />
        <header-menu
          page="daily-coding-problem/"
          name="ps"
          @click.native="navMenu('-daily-coding-problem/')"
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
      lang: "eng",
      darkmode: false,
    };
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
      },
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
    onClickMode() {
      const html = document.getElementsByTagName("html")[0];
      const modeWrapper = document.getElementById("mode-wrapper");
      const profileImg = document.getElementById("profile");

      if (this.darkmode) {
        html.classList.remove("darkmode");
        html.classList.toggle("lightmode");
        this.darkmode = false;
        modeWrapper.firstElementChild.style.color = "black";
        modeWrapper.lastElementChild.style.color = "#d2d2d2";
        modeWrapper.children[1].firstElementChild.classList.remove("enable");
      } else {
        html.classList.remove("lightmode");
        html.classList.toggle("darkmode");
        this.darkmode = true;
        modeWrapper.firstElementChild.style.color = "rgb(40, 40, 40)";
        modeWrapper.lastElementChild.style.color = "#f1ebf5";
        modeWrapper.children[1].firstElementChild.classList.add("enable");
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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
    transition: all 0.2s;
  }

  img.logo:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    transition: 0.2s;
    cursor: pointer;
  }

  .lang-selector {
    display: flex;
    justify-content: space-evenly;

    min-width: 11em;
    max-width: 15em;
    margin: 0 auto;
    padding-top: 10px;

    div img {
      border-radius: 50%;
      width: 22px;
      height: 22px;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
      background-color: rgba(255, 255, 255, 0.801);
      transition: 0.3s;

      cursor: pointer;
    }
    div img:hover {
      transition: 0.3s;
      transform: scale(1.15);
    }

    div.selected img {
      transition: 0.3s;
      transform: scale(0.8);
      box-shadow: 1px 2px 4px black;
    }
  }

  .header-menu {
    display: flex;
    width: auto;
    max-width: 25em;
    justify-content: space-evenly;
    margin: 15px auto;
    font-size: 16px;

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

#mode-wrapper {
  #lightmode-txt {
    color: black;
  }
  margin: 13px 0 10px 0;
  color: #d2d2d2;
  font-family: "Copperplate", "sans-serif";
  font-size: 13px;
  text-transform: uppercase;

  #mode-btn {
    #btn-ball {
      -webkit-transform: translateX(-2px);
      -ms-transform: translateX(-2px);
      transform: translateX(-2px);

      background: white;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: all 0.3s;
    }

    #btn-ball.enable {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
      background-color: #a690c6;
      transition: all 0.3s;
    }

    width: 35px;
    height: 15px;
    border-radius: 10px;
    background-color: #a690c6;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }

  #mode-btn:focus {
    outline: none;
    box-shadow: none;
  }
}

html.lightmode {
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.03);

  transition: all 0.3s;
}

html.darkmode {
  color: #ded4e4;
  background-color: #121212;

  .divider {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      #121212,
      color-stop(#9a909f),
      #121212
    );
    background: -webkit-linear-gradient(left, #121212, #9a909f, #121212);
    background: linear-gradient(to right, #121212, #9a909f, #121212);
  }

  #mode-wrapper #mode-btn {
    background: rgba(233, 233, 233, 0.9);
    color: #121212;
    cursor: pointer;
    transition: 0.3s;
  }

  div#header {
    .header-menu a {
      color: #d3c6db;
    }

    img.logo {
      box-shadow: 0 4px 4px #777777;
      transition: all 0.2s;
    }

    img.logo:hover {
      box-shadow: 0 4px 5px #a1a1a1;
    }

    .lang-selector {
      div img {
        box-shadow: 1px 2px 4px #cccccc;
        background-color: rgba(255, 255, 255, 0.801);

        cursor: pointer;
      }

      div.selected img {
        box-shadow: 1px 2px 4px #ececec;
      }
    }
  }
  transition: all 0.3s;
}
</style>