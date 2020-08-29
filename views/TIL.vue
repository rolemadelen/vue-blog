<template>
  <div class="home">
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="group">
          <h2>{{section}}</h2>
          <div v-for="entry in entries[section]" :key="entry.id">
            <div class="section">
              <div class="entry">
                <h3 @click="$router.push({name: entry.id, lang: entry.lang})">
                  {{entry.title}}
                  <span class="date">{{entry.date}}</span>
                </h3>
                <p class="description">{{entry.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TILENTRIES from "../statics/data/til.json";
import ListPosts from "./components/ListPosts.vue";

export default {
  components: { ListPosts },

  props: {
    lang: String,
    _section: String,
  },
  computed: {
    entries() {
      return TILENTRIES;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_home.scss";
</style>