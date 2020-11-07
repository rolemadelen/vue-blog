<template>
  <div class="home">
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index">
        <div v-if="section === (_section==='' ? section : _section)" class="group">
          <h2 v-if="(entries[section]).map((entry)=>entry.lang).includes(lang)">{{section}}</h2>
          <div v-for="entry in entries[section]" :key="entry.id">
            <div class="section" v-if="lang.includes(entry.lang) && entry.published === true">
              <div class="entry">
                <h3 @click="$router.push({name: entry.id, lang: entry.lang})">
                  {{entry.title}}
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
import BLOGENTRIES from "../../statics/data/blogs.json";
export default {
  
  props: {
    lang: String,
    _section: String,
  },
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_home.scss";
</style>