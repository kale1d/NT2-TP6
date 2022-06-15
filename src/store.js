import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHard: false,
    squareQty: 0,
    colors: [],
    selectedColor: "",
    pickedColor: "",
    message: "",
  },
  actions: {
    setDifficulty({ commit }, isHard, qty) {
      commit("setIsHard", isHard);
      commit("setQty", qty);
    },
    init({ commit }, colors, pickedColor) {
      commit("setColors", colors);
      commit("setPickedColor", pickedColor);
      // this.colors = this.createNewColors(qty);
      //   this.pickedColor = this.colors[this.pickColor()];
    },
    message({ commit }, message) {
      commit("setMessage", message);
    },
    selectedColor({ commit }, selectedColor) {
      commit("setSelectedColor", selectedColor);
    },
  },
  mutations: {
    setIsHard(state, isHard) {
      state.isHard = isHard;
    },
    setQty(state, qty) {
      state.squareQty = qty;
    },
    setColors(state, colors) {
      state.colors = colors;
    },
    setPickedColor(state, pickedColor) {
      state.pickedColor = pickedColor;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setSelectedColor(state, selectedColor) {
      state.selectedColor = selectedColor;
    },
  },
});
