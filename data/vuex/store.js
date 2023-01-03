import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

const GetUrl = "http://localhost:3000/products";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      const answear = await axios(GetUrl, {
        method: "GET",
      });
      console.log(answear)
      const productsData = await JSON.parse(answear.data)
      commit("SET_PRODUCTS_TO_STATE", productsData);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
});

export default store;
