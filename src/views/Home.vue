<template>
   <div class="home">
        <h1>v-m-blog</h1>
        <div class="sections">
            <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
                <h2>{{section}}</h2>
                <div class="section" v-for="entry in entries[section]" :key="entry.id">
                    <div class="entry">
                        <h3 @click="$router.push({name: entry.id})">
                        {{entry.title}}
                        <span class="subtitle">{{entry.date}}</span>
                        </h3>
                        <p>{{entry.description}}</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import BLOGENTRIES from '../statics/data/blogs.json';

export default {
    name: 'home',
    computed: {
        entries() {
        return BLOGENTRIES
        }
    }
  }
</script>
<style lang="scss" scoped>
h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: .98rem;
    float: right;
    font-weight: normal;
  }
}
    .sections {
    max-width: 40vw;
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