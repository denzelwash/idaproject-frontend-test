<template>
  <div class="container">
    <NuxtLink to="/test">test</NuxtLink>
    <div class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products">
        <div class="products__top">
          <AppSortSelect @sortProducts="sortProducts"></AppSortSelect>
        </div>
        <div class="products__grid">
          <AppCardProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            @deleteCard="deleteCard"
          ></AppCardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({}),
  async fetch() {
    if (!this.$store.getters['products/getProductsCount']) {
      await this.$store.dispatch('products/fetchProducts')
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts']
    },
  },
  fetchOnServer: false,
  methods: {
    deleteCard(id) {
      this.$store.dispatch('products/deleteProduct', id)
    },
    sortProducts(sort) {
      this.$store.commit('products/sortProducts', sort)
    },
  },
}
</script>

<style scoped lang="scss">
.add-product {
  display: grid;
  grid-template-columns: 332px 1fr;
  gap: 16px;
  padding: 32px 0;
  @media (max-width: 1210px) {
    grid-template-columns: 260px 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.products {
  &__top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    @media (max-width: 1210px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
