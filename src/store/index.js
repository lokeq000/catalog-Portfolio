import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue:'',
    products: [],
    cart:[]
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state,products) =>{
      state.products = products;
    },
    SET_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    SET_SEARCH_VALUE:(state,value)=>{
      state.searchValue = value
    },
    DEL_CART:(state,id)=>{
      state.cart[id].quantity = 1;
      state.cart.splice(id, 1)
    },
    INCREMENT:(state, id) =>{
      state.cart[id].quantity++
    },
    DECREMENT:(state, id) =>{
      if (state.cart[id].quantity > 1) {
        state.cart[id].quantity-- 
      }
      
    

    }
  },
  actions: {
    GET_SEARCH_VALUE({commit}, value){
      commit('SET_SEARCH_VALUE', value)
    },
    GET_PRODUCTS_FROM_API({commit}){
      return axios(' http://localhost:3000/products', {
      method: "GET"
      })
      .then((products)=>{
        products.data.map((item) => {
          item.quantity = 1;
        })
        commit("SET_PRODUCTS_TO_STATE", products.data)
        return products;
      })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, ind){
      commit('DEL_CART', ind)
    },
    INCREMENT_CART_ITEM({commit}, ind){
      commit('INCREMENT', ind)
    },
    DECREMENT_CART_ITEM({commit}, ind){
      commit('DECREMENT', ind)
    }

  },
  getters:{
    SEARCH_VALUE(state){
      return state.searchValue
    },
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    }
  },
  modules: {
  }
})
