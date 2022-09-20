<template>
  <div class="card-product">
    <div class="card-product__image">
      <img :src="require(`~/assets/img/cnt_product.jpg`)" />
    </div>
    <div class="card-product__text">
      <h3 class="card-product__title">Наименование товара</h3>
      <p class="card-product__desc">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <b class="card-product__price">10 000 руб.</b>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.card-product {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  overflow: hidden;
  &__image {
    position: relative;
    padding-top: 60%;
    border-radius: 4px 4px 0px 0px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }
  &__text {
    padding: 16px 16px 24px;
    min-height: 223px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  &__desc {
    font-size: 16px;
    line-height: 20px;
  }
  &__price {
    margin-top: auto;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
