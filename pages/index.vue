<template>
  <div class="container">
    <div class="add-product">
      <AppNewProduct></AppNewProduct>
      <div class="products"></div>
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
</style>
