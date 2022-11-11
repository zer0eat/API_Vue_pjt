<template>
  <div class="movies">
    <div v-for="topMovieList in topMovieLists" :key="topMovieList.id">
      <MovieCard :topMovieList="topMovieList" />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import { mapActions } from "vuex"

export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  props: {
    cards: Array,
  },
   methods: {
    ...mapActions(["topMovies"]),
  },
  computed: {
    topMovieLists() {
      return this.$store.state.topMovieLists
    }
  },
  created(){
    this.$store.dispatch('topMovies')
  }
}
</script>