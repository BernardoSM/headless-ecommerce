<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          {{product.name}}
        </h2>
        <p class="text-xl mt-3 text-gray-600">
          {{product.price}}
        </p>
        <div class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          <img :src="product.picture" alt="Produto" width="500" height="auto" class="rounded">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeProduct',
  async asyncData({ params, store }) {
    const product = await store.dispatch('products/productRequest', {id: params.id})
    
    return { product }
  },
}
</script>
