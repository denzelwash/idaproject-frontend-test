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
          :value="form.price.valueFormatted"
          class="form-group__input"
          type="text"
          placeholder="Введите цену"
          name="product_price"
          @input="priceHandler"
        />
        <p class="form-group__error">Поле является обязательным</p>
      </div>
      <button
        class="btn new-product-form__btn-submit"
        :disabled="submitBtnDisabled"
      >
        Добавить товар
      </button>
      <div v-if="showSuccessMessage" class="new-product-form__form-success">
        <span>Товар успешно добавлен!</span>
      </div>
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
          valueFormatted: '',
          required: true,
        },
      },
      loading: false,
      showErrors: false,
      showSuccessMessage: false,
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
        const self = this
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
        this.showSuccessMessage = true
        Object.values(this.form).forEach((item) => {
          item.value = ''
        })
        this.form.price.valueFormatted = ''
        this.showErrors = false
        setTimeout(function (e) {
          self.showSuccessMessage = false
        }, 2000)
      }
    },
    priceHandler(e) {
      const price = e.target.value
      const clearPrice = price.replace(/[^+\d]/g, '')
      const formattedPrice = new Intl.NumberFormat('ru-RU').format(clearPrice)
      this.form.price.valueFormatted = ' '
      this.form.price.value = clearPrice
      this.form.price.valueFormatted =
        formattedPrice === '0' ? '' : formattedPrice
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
    position: relative;
    padding: 24px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    &-success {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #fff;
      border-radius: inherit;
      font-size: 24px;
      font-weight: 700;
      color: #7bae73;
      text-align: center;
    }
  }
  &__btn-submit {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
