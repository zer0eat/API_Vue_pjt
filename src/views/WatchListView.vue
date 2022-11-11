<template>
  <div>
    <div id="app">
    <h1>보고싶은영화</h1>
     <WatchListForm/>
    <div>
    <WatchListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
    </div>
  </div>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components :{
    WatchListForm,
    WatchListItem
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
</style>