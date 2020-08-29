<template>
  <div id="footer">
    <div class="created-by center">© 2020 Jii Eu</div>
    <div class="powered-by center">
      &lt;/&gt; Powered by
      <a href="https://vuejs.org">Vue</a> and referenced
      <a href="https://github.com/heiswayi/the-plain">The Plain theme</a>.
    </div>
    <div class="sns center">
      <span class="github">
        <a href="https://github.com/jioneeu" target="_blank">GitHub</a>
      </span> |
      <span class="twitter">
        <a href="https://twitter.com/jioneeu" target="_blank">Twitter</a>
      </span> |
      <span class="youtube">
        <a
          href="https://www.youtube.com/channel/UC8hY3wjYlK2U9W4fqKN598Q?view_as=subscriber"
          target="_blank"
        >YouTube</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 7em;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.6);

  a {
    text-decoration: none;

    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
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
    font-size: 12px;
    padding-bottom: 47px;
  }

  .powered-by {
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
}
</style>