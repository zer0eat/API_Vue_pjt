<template>
  <div class="watch-list">
    <input type="text"
    @keyup.enter="getMovies2"

    v-model="searchInputName"
    />
    <!-- {{ searchLists }} -->
    <WatchListForm/>
    <div v-for="searchList in searchLists" :key="searchList.id" @click="setVideo(searchList)">
      <WatchListItem :searchList="searchList" />
    </div>
    <div v-if="searchLists.length===0" >
      <h1>잘못된 입력어</h1>
    </div>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'
import { mapActions } from "vuex"


export default {
  name: 'WatchListView',
  data: function() {
    return {
      searchInputName: null,
    }
  },
  components: {
    WatchListForm,
    WatchListItem
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