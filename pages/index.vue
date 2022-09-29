<template>
  <div class="container">
    <section class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products">
        <div class="products__top">
          <AppSortSelect @sortProducts="sortProducts"></AppSortSelect>
        </div>
        <transition-group name="card" tag="div" class="products__grid">
          <AppCardProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            @deleteCard="deleteCard"
          ></AppCardProduct>
        </transition-group>
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
  padding: 32px 0 80px;
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
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
    @media (max-width: 576px) {
      margin: 0;
    }
    .card-product {
      width: calc((100% - 48px) / 3);
      margin: 0 8px 16px;
      transition: all 1s;
      @media (max-width: 1210px) {
        width: calc((100% - 32px) / 2);
      }
      @media (max-width: 576px) {
        width: 100%;
        margin: 0 0 16px;
      }
    }
  }
}

.card-enter,
.card-leave-to {
  opacity: 0;
  transform: scale(0.25);
  z-index: -1;
}

.card-leave-active {
  position: absolute;
}
</style>
