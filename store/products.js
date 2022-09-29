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
  addProduct(state, product) {
    state.products.unshift(product)
  },
  sortProducts(state, sort) {
    if (sort === 'min') {
      state.products = state.products.sort((a, b) => {
        if (+a.price > +b.price) return 1
        if (+a.price < +b.price) return -1
        return 0
      })
    } else if (sort === 'max') {
      state.products = state.products.sort((a, b) => {
        if (+a.price < +b.price) return 1
        if (+a.price > +b.price) return -1
        return 0
      })
    } else if (sort === 'name') {
      state.products = state.products.sort((a, b) => {
        const aText = a.title.toUpperCase()
        const bText = b.title.toUpperCase()
        return aText < bText ? -1 : aText > bText ? 1 : 0
      })
    }
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
      // удаление на бэке
      // ...
      commit('deleteProduct', id)
      // имитация асинхрона
      return new Promise((resolve) => setTimeout(resolve, 200))
    } catch (e) {}
  },
  addNewProduct({ commit }, product) {
    try {
      // добавление на бэке
      // ...
      commit('addProduct', product)
      // имитация асинхрона
      return new Promise((resolve) => setTimeout(resolve, 200))
    } catch (e) {}
  },
}
