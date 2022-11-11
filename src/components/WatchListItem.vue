<template>
  <div>
    <ul v-if="videoTitle != null "
     @click="selectMovie">
      <img :src="tmbdimg" alt="image">
      <h3>{{ videoTitle}}</h3>
      <p>{{ videoDesc }}</p>
    </ul>
    <!-- <ul v-if="videoTitle == '어ㅏ어라어ㅏ럼낭러'">
      <h1>데이터가 없습니다</h1>
    </ul> -->
  </div>
</template>

<script>

export default {
  name : 'WatchListItem',
  data(){
    return {
      title12 : null
    }
  },
  props:{
    searchList: Object,
  },
  computed:{
    videoTitle() {
      console.log(this.searchList.title)
      return this.searchList.title
    },
    videoDesc() {
      return this.searchList.overview
    },
    // thumbUrl() {
    //   return this.searchList.poster_path
    // },
    tmbdimg() {
      return 'https://image.tmdb.org/t/p/w500/' + this.searchList.poster_path
    },
  },
  methods: {
    selectMovie(){
      this.$emit('select-movie', this.searchList)
    }
  },
}
</script>

<style>

</style>