<template>
  <div class="form-group mb-0">
    <select
      class="form-group__select"
      @change="sortProducts($event.target.value)"
    >
      <option value="" selected disabled>По умолчанию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
      <option value="name">По наименованию</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    sortProducts(val) {
      this.$emit('sortProducts', val)
    },
  },
}
</script>

<style scoped lang="scss"></style>
