import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
      name: "to pretend",
      images: ["toPretend.jpg"],
      type: "poster",
      id: 1,
      size: "30 x 45",
      quantity: 10
    },
    {
      name: "writer",
      images: ["writer.jpg"],
      type: "poster",
      id: 2,
      size: "30 x 45",
      quantity: 10
    }],
    cart: [],
  },
  mutations: {},
  actions: {},
  getters: {

  }
});
