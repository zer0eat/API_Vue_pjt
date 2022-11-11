<template>
  <div class="random">
    <!-- {{topMovieLists}} -->

    <button @click='randomPick'>Get Movie</button>
    <div v-if="movie" >
     <img :src="tmbdimg" alt="image">
      <h3>{{ videoTitle}}</h3>
      <p>{{ videoDesc }}</p>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import { mapActions } from "vuex"

export default {
  name: 'RandomView',
  data() {
    return{
      movie : null,
    }
  },
  methods: {
    ...mapActions(["topMovies"]),
    randomPick() {
      this.movie = _.sample(this.topMovieLists)
    }
  },
  computed: {
    topMovieLists() {
      return this.$store.state.topMovieLists
    },
    videoTitle() {
      console.log(this.topMovieList)
      return this.movie?.title
    },
    videoDesc() {
      return this.movie?.overview
    },
    // thumbUrl() {
    //   return this.topMovieList.poster_path
    // },
    tmbdimg() {
      return 'https://image.tmdb.org/t/p/w500/' + this.movie?.poster_path
    },
  },
  created(){
    this.$store.dispatch('topMovies')
  },
}
</script>
