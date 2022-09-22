export const state = () => ({
  products: [],
})

export const getters = {}

export const mutations = {}

export const actions = {
  async fetchProducts({ state }) {
    const res = await this.$axios.$get('products.json')
    return res
  },
}
