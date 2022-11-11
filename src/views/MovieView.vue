<template>
  <div class="movies">
    <h1>This is an about page</h1>
    <MovieCard/>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  components: {
    MovieCard
  }
}
</script>