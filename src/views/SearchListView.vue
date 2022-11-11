<template>
  <div class="search-list">
    <input type="text"
    @keyup.enter="getMovies2"

    v-model="searchInputName"
    />
    <!-- {{ searchLists }} -->
    <div v-for="searchList in searchLists" :key="searchList.id" @click="setVideo(searchList)">
      <SearchListItem :searchList="searchList" />
    </div>
    <div v-if="searchLists.length===0" >
      <h1>존재하지 않는 영화 제목입니다</h1>
    </div>
  </div>
</template>

<script>
import SearchListItem from '@/components/SearchListItem'
import { mapActions } from "vuex"

export default {
  name: 'SearchListView',
  data: function() {
    return {
      searchInputName: null,
    }
  },
  components: {
    SearchListItem
  },
  methods: {
    ...mapActions(["getMovies"]),
    getMovies2() {
      this.getMovies(this.searchInputName)
      return this.searchInputName = null
    }
  },
  computed: {
    searchLists() {
      return this.$store.state.searchLists
    }
  }
}
</script>

<style>

</style>