<template>
  <div class="container">
    <NuxtLink to="/test">test</NuxtLink>
    <section class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products">
        <div class="products__top">
          <AppSortSelect @sortProducts="sortProducts"></AppSortSelect>
        </div>
        <template v-if="products.length">
          <transition-group
            name="fade"
            tag="div"
            class="products__grid"
            mode="out-in"
          >
            <AppCardProduct
              v-for="product in products"
              :key="product.id"
              :product="product"
              @deleteCard="deleteCard"
            ></AppCardProduct>
          </transition-group>
        </template>
      </div>
    </section>
    <AppLoader v-if="loading"></AppLoader>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    loading: false,
  }),
  async fetch() {
    if (!this.$store.getters['products/getProductsCount']) {
      this.loading = true
      await this.$store.dispatch('products/fetchProducts')
      this.loading = false
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts']
    },
  },
  // fetchOnServer: false,
  methods: {
    async deleteCard(id) {
      this.loading = true
      await this.$store.dispatch('products/deleteProduct', id)
      this.loading = false
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
    position: relative;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
