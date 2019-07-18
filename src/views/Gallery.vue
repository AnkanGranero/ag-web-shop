 <template>
  <div class="galleryWrapper">
    <h1>Gallery</h1>
    <ul v-for="product in products" :key="product.id">
      <h2>{{ product.name}}</h2>
      <!--  <img :src="product.src" /> -->
      <li>Size: {{ product.size}}</li>
      <li>Quantity: {{ product.quantity}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "gallery",
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style>
</style>