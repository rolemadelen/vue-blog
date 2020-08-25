<template>
  <div class="home">
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <div v-if="section === 'Data Structure'"> 
            <h2>{{section}}</h2>
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
                <div class="entry">
                    <h3 @click="$router.push({name: entry.id, title: entry.title})">
                    {{entry.title}}
                    <span class="subtitle">{{entry.date}}</span>
                    </h3>
                    <p>{{entry.description}}</p>
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
.center {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}
h3 {
  // color: #42b883;
  color: #298ed8;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: 0.98rem;
    float: right;
    font-weight: normal;
  }
}
p {
  margin-top: 0.4rem;
}

p.description {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.85);
}
.sections {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}
.group {
  margin-bottom: 4rem;
}
</style>