import Vue from 'vue'

export const state = () => ({
  products: []
})

export const getters = {
  getProducts: (state) => state.products
}

export const mutations = {
  setProducts: (state, payload) => {
    state.products = payload
  }
}

export const actions = {
  productsRequest({ commit }) {
    return new Promise((resolve) => {
      Vue.prototype.$http
        .get(`/products`)
        .then((resp) => {
          commit('setProducts', resp.data.data)
          resolve(resp.data)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  productRequest({ commit }, payload) {
    return new Promise((resolve) => {
      Vue.prototype.$http
        .get(`/products/${payload.id}`)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
}
