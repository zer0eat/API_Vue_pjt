<template>
  <div>
    <ul @click="selectMovie">
      <img :src="tmbdimg" alt="image">
      <h3>{{ videoTitle}}</h3>
      <p>{{ videoDesc }}</p>
    </ul>
  </div>
</template>

<script>

export default {
  name : 'MovieCard',
  props:{
    topMovieList: Object,
  },
  computed:{
    videoTitle() {
      console.log(this.topMovieList)
      return this.topMovieList.title
    },
    videoDesc() {
      return this.topMovieList.overview
    },
    // thumbUrl() {
    //   return this.topMovieList.poster_path
    // },
    tmbdimg() {
      return 'https://image.tmdb.org/t/p/w500/' + this.topMovieList.poster_path
    },
  },
  methods: {
    selectMovie(){
      this.$emit('select-movie', this.topMovieList)
    }
  },
}
</script>

<style>

</style>