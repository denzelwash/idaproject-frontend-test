export const state = () => ({
  products: [],
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getProductsCount(state) {
    return state.products.length
  },
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  deleteProduct(state, id) {
    state.products = state.products.filter((product) => product.id !== id)
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    try {
      const res = await this.$axios.$get('products.json')
      const resArr = Object.values(res)
      commit('setProducts', resArr)
      return resArr
    } catch (e) {}
  },
  deleteProduct({ commit }, id) {
    try {
      // запрос к api
      commit('deleteProduct', id)
    } catch (e) {}
  },
}
