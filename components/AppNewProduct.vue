<template>
  <div class="new-product-form">
    <h1 class="new-product-form__title">Добавление товара</h1>
    <form class="new-product-form__form">
      <div class="form-group form-group--required">
        <label class="form-group__label" for="product-name"
          >Наименование товара</label
        >
        <input
          id="product-name"
          class="form-group__input"
          type="text"
          placeholder="Введите наименование товара"
          name="product_name"
        />
        <p class="form-group__error"></p>
      </div>
      <div class="form-group">
        <label class="form-group__label" for="product-desc"
          >Описание товара</label
        >
        <textarea
          id="product-desc"
          class="form-group__textarea"
          name="product_desc"
          placeholder="Введите описание товара"
        ></textarea>
        <p class="form-group__error"></p>
      </div>
      <div class="form-group form-group--required">
        <label class="form-group__label" for="product-link"
          >Ссылка на изображение товара</label
        >
        <input
          id="product-link"
          class="form-group__input"
          type="url"
          placeholder="Введите ссылку"
          name="product_link"
        />
        <p class="form-group__error"></p>
      </div>
      <div class="form-group form-group--required">
        <label class="form-group__label" for="product-price">Цена товара</label>
        <input
          id="product-price"
          class="form-group__input"
          type="number"
          placeholder="Введите цену"
          name="product_price"
        />
        <p class="form-group__error"></p>
      </div>
      <button class="btn new-product-form__btn-submit" disabled>
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.new-product-form {
  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 28px;
    line-height: 35px;
  }
  &__form {
    padding: 24px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
  &__btn-submit {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
