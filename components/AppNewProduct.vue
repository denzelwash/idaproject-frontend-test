<template>
  <div class="new-product-form">
    <h2 class="new-product-form__title">Добавление товара</h2>
    <form class="new-product-form__form" @submit.prevent="submit">
      <div
        class="form-group form-group--required"
        :class="{ 'form-group--error': showErrors && !form.title.value.length }"
      >
        <label class="form-group__label" for="product-name"
          >Наименование товара</label
        >
        <input
          id="product-name"
          v-model="form.title.value"
          class="form-group__input"
          type="text"
          placeholder="Введите наименование товара"
          name="product_title"
        />
        <p class="form-group__error">Поле является обязательным</p>
      </div>
      <div class="form-group">
        <label class="form-group__label" for="product-desc"
          >Описание товара</label
        >
        <textarea
          id="product-desc"
          v-model="form.desc.value"
          class="form-group__textarea"
          name="product_desc"
          placeholder="Введите описание товара"
        ></textarea>
      </div>
      <div
        class="form-group form-group--required"
        :class="{ 'form-group--error': showErrors && !form.image.value.length }"
      >
        <label class="form-group__label" for="product-link"
          >Ссылка на изображение товара</label
        >
        <input
          id="product-link"
          v-model="form.image.value"
          class="form-group__input"
          type="text"
          placeholder="Введите ссылку"
          name="product_link"
        />
        <p class="form-group__error">Поле является обязательным</p>
      </div>
      <div
        class="form-group form-group--required"
        :class="{ 'form-group--error': showErrors && !form.price.value.length }"
      >
        <label class="form-group__label" for="product-price">Цена товара</label>
        <input
          id="product-price"
          v-model="form.price.value"
          class="form-group__input"
          type="number"
          placeholder="Введите цену"
          name="product_price"
        />
        <p class="form-group__error">Поле является обязательным</p>
      </div>
      <button
        class="btn new-product-form__btn-submit"
        :disabled="submitBtnDisabled"
      >
        Добавить товар
      </button>
    </form>
    <AppLoader v-if="loading"></AppLoader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: {
          value: '',
          required: true,
        },
        desc: {
          value: '',
          required: false,
        },
        image: {
          value: '',
          required: true,
        },
        price: {
          value: '',
          required: true,
        },
      },
      loading: false,
      showErrors: false,
    }
  },
  computed: {
    submitBtnDisabled() {
      return (
        !this.form.title.value ||
        !this.form.image.value ||
        !this.form.price.value
      )
    },
  },
  watch: {
    submitBtnDisabled(disabled) {
      if (!disabled) {
        this.showErrors = true
      }
    },
  },
  methods: {
    async submit() {
      const formValid =
        !!this.form.title.value &&
        !!this.form.image.value &&
        !!this.form.price.value
      if (formValid) {
        const randomId = parseInt(Math.random() * 1000000)
        const newProduct = {
          id: randomId,
          title: this.form.title.value,
          desc: this.form.desc.value,
          price: this.form.price.value,
          url: this.form.image.value,
        }
        this.loading = true
        await this.$store.dispatch('products/addNewProduct', newProduct)
        this.loading = false
      }
    },
  },
}
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
