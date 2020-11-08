<template>
  <div id="footer">
    <div class="divider"></div>
    <div class="created-by center">© 2020 Eubug</div>
    <div class="powered-by center">
      &lt;/&gt; Powered by
      <a href="https://vuejs.org">Vue</a> and referenced
      <a href="https://github.com/heiswayi/the-plain">The Plain theme</a>.
    </div>
    <div class="sns center">
      <span class="github">
        <a href="https://github.com/bugxvii" target="_blank">GitHub</a>
      </span>
      |
      <span class="twitter">
        <a href="https://twitter.com/bugxvii" target="_blank">Twitter</a>
      </span>
      |
      <span class="youtube">
        <a
          href="https://www.youtube.com/channel/UC8hY3wjYlK2U9W4fqKN598Q?view_as=subscriber"
          target="_blank"
          >YouTube</a
        >
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  margin-top: 2em;
  position: relative;
  width: 100%;
  height: 7em;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;

  a {
    text-decoration: none;

    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    transition: 0.3s;
  }

  a:hover {
    text-decoration: underline;
  }

  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .created-by {
    width: 100%;
    font-size: 12px;
    padding-bottom: 47px;
  }

  .powered-by {
    width: 100%;
    font-size: 11px;
    font-weight: 300;
    padding-bottom: 10px;
  }

  .sns {
    display: flex;
    min-width: 20em;
    justify-content: space-between;

    margin-top: 25px;
    font-size: 11px;

    a {
      font-weight: 400;
      text-decoration: none;
    }

    .github a:hover {
      color: #000;
    }
    .twitter a:hover {
      color: rgb(48, 168, 255);
    }

    .youtube a:hover {
      color: rgb(189, 66, 89);
    }
  }

  transition: all 0.3s;
}

html.darkmode {
  #footer {
    color: #eee;

    a {
      color: #eee;
    }

    .sns {
      .github a:hover {
        color: #818181;
      }
      .twitter a:hover {
        color: rgb(48, 168, 255);
      }

      .youtube a:hover {
        color: rgb(189, 66, 89);
      }
    }

    transition: all 0.3s;
  }
}
</style>