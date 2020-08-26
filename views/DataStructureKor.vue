<template>
  <div class="home">
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <div v-if="section === 'Data Structure'"> 
            <h2>{{section}}</h2>
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
              <div v-if="entry.lang === 'kor'">
                <div class="entry">
                    <h3 @click="$router.push({name: entry.id, title: entry.title})">
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
import BLOGENTRIES from "../statics/data/blogs.json";

export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/_home.scss";
</style>