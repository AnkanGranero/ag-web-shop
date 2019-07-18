export const imagePath = {
    methods: {
        makeImagePath(product) {
            console.log("im in", product)
            return require(`../assets/images/products/${product.images[0]}`);
        }
    }
}