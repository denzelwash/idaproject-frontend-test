<template>
  <div class="card-product">
    <div class="card-product__image">
      <img :src="product.url" />
    </div>
    <div class="card-product__text">
      <h3 class="card-product__title">{{ product.title }}</h3>
      <p class="card-product__desc">{{ product.desc }}</p>
      <b class="card-product__price">10 000 руб.</b>
    </div>
    <button class="card-product__btn-delete">
      <img src="~/assets/img/icn_delete.svg" width="16" height="16" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.card-product {
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  border-radius: 0px 0px 4px 4px;
  background: #fffefb;
  &__image {
    position: relative;
    padding-top: 60%;
    border-radius: 4px 4px 0px 0px;
    overflow: hidden;
    background: #fffefb;
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
    background: #fffefb;
    border-radius: 0px 0px 4px 4px;
    overflow: hidden;
    flex-grow: 1;
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
  &__btn-delete {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
