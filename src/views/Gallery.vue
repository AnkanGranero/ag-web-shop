 <template>
  <div class="galleryWrapper">
    <h1>Gallery</h1>
    <ul v-for="product in products" :key="product.id">
      <h2>{{ product.name}}</h2>
      <img :src="makeImagePath(product)" />
      <li>Size: {{ product.size}}</li>
      <li>Quantity: {{ product.quantity}}</li>
    </ul>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
export default {
  name: "gallery",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mixins: [imagePath]
};
</script>

<style>
</style>