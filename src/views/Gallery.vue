 <template>
  <div class="galleryWrapper">
    <h1>Gallery</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name}}</h2>
      <img :src="makeImagePath(product)" class="productImg" />
      <div class="infoWrapper">
        <button @click="addToCart(product.id)">Add to Cart</button>
        <li>Size: {{ product.size}}</li>
        <li>Quantity: {{ product.quantity}}</li>
      </div>
    </div>
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
  mixins: [imagePath],
  methods: {
    addToCart(id) {
      this.$store.dispatch(addToCart, id);
    }
  }
};
</script>

<style>
.productImg {
  width: 50%;
}

.infoWrapper {
  display: block;
  margin: auto;
}
</style>