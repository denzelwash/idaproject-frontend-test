<template>
  <div class="container">
    <div class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products">
        <div class="products__top">
          <AppSortSelect></AppSortSelect>
        </div>
        <div class="products__grid">
          <AppCardProduct></AppCardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
