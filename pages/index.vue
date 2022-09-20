<template>
  <div class="container">
    <div class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products">
        <div class="products__top">
          <AppSortSelect></AppSortSelect>
        </div>
        <div class="products__grid"></div>
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
  gap: 1rem;
  padding-top: 2rem;
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
  }
}
</style>
