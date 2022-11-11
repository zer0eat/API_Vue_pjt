import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    movieInput: null,
    searchLists: [],
  },
  getters: { 
    // movieInput(state) {
    //   return state.movieInput
    // },
    searchLists(state) {
      return state.searchLists
    } 
  },
  mutations: {
    // setMovieInput(state, data) {
    //   state.movieInput = data;
    // },
    setList(state, data) {
      state.searchLists = data;
    }
  },
  actions: {
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

  }
  },
  modules: {
  }
})
