import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieInput: null,
    searchLists: [1],
    topMovieLists:[],
    
    
    todos: [],
  },
  getters: { 
    //top
    topMovieLists(state) {
      return state.topMovieLists
    },



    // movieInput(state) {
      //   return state.movieInput
      // },



      //search
    searchLists(state) {
      return state.searchLists
    },     
   
  },
  mutations: {
    // setMovieInput(state, data) {
    //   state.movieInput = data;
    // },
    //top
    topList(state, data) {
      state.topMovieLists = data;
    },


    //search
    setList(state, data) {
      state.searchLists = data;
    },



    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      console.log(todoItem)

      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        } 
        return todo
      })
    },
  },
  actions: {
    ///movie
    topMovies(context) {
      const TMDB_API_KEY = '06ed519a475d18bbda3f466c2c00bcbc'
      const TMDB_API_URL = 'https://api.themoviedb.org/3//movie/top_rated'
      axios.get(TMDB_API_URL, {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko",
        }
      })
      .then(response => {
        console.log(response)
        context.commit('topList', response.data.results)
      })
    },



    ///search
    getMovies(context, input) {
      // console.log(tmdb)
      // context.commit("setMovieInput", input);
      const TMDB_API_KEY = '06ed519a475d18bbda3f466c2c00bcbc'
      const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie'
      axios.get(TMDB_API_URL, {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko",
          query: input,
          include_adult: 'true',
        }
      })
      .then(response => {
        console.log(response)
        context.commit('setList', response.data.results)
      })
  },




  createTodo(context, todoTitle) {
    // Todo 객체 만들기
    const todoItem = {
      title: todoTitle,
      isCompleted: false,
    }
    context.commit('CREATE_TODO', todoItem)
  },
  deleteTodo(context, todoItem) {
    context.commit('DELETE_TODO', todoItem)
  },
  updateTodoStatus(context, todoItem) {
    context.commit('UPDATE_TODO_STATUS', todoItem)
  },

  },
  modules: {
  }
})
