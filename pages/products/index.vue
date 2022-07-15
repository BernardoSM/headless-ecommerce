<!-- Please remove this file from your project -->
<template>
  <div class="products">
    <div class="relative bg-blue-500 flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 pb-8">
        <div v-for="product in products" :key="product.id" class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h2 class="text-2xl leading-7 font-semibold">
            {{product.name}}
          </h2>
          <p class="text-xl mt-3 text-gray-600 mb-4 font-bold">
            {{product.price}}
          </p>
          <NuxtLink :to="{name: 'products-id', params: {id: product.id}}">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Abrir produto
            </button>
          </NuxtLink>
          <div class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            <img :src="product.picture" alt="Produto" width="500" height="auto" class="rounded">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeProducts',
  computed: {
    products() {
      return this.$store.getters['products/getProducts']
    }
  },  
  mounted() {
    this.$store.dispatch('products/productsRequest')
  }
}
</script>

<style>
.products {
  background: blue;
}
</style>
