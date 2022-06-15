import Vue from "vue";

const globalMixins = {
  methods: {
    setDifficulty({ isHard, qty }) {
      this.$store.dispatch("setDifficulty", isHard, qty);
      this.init(qty);
    },
    init(qty) {
      this.$store.dispatch(
        "init",
        this.createNewColors(qty),
        this.colors[this.pickColor()]
      );
    },
    createNewColors(numbers) {
      const arr = [];
      for (let i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },

    createRandomStringColor() {
      const newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
    pickColor() {
      let quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    restart() {
      // this.colors = [];
      this.$store.dispatch(
        "init",
        this.createNewColors(this.squareQty),
        this.colors[this.pickColor()]
      );

      // pickedColor = this.colors[this.pickColor()];
      // colorDisplay.textContent = pickedColor;
      // this.textContent = "Pick New Colors!";
      // header.style.backgroundColor = "steelblue";
      // messageDisplay.textContent = "";
      // restartButton.textContent = "New Colors!";
      // for (var i = 0; i < squares.length; i++) {
      //   squares[i].style.backgroundColor = colors[i];
      // }
    },
    getColor() {
      let msg = "";
      if (this.pickedColor === this.color) {
        msg = "You win";
      } else {
        msg = "Choose another color";
        this.isWrong = true;
      }
      this.$store.$dispatch("selectedColor", this.color);
      this.$store.$dispatch("message", msg);
    },
  },
  computed: {
    isHard() {
      const difficulty = this.$store.state.isHard;
      return difficulty;
    },
    squareQty() {
      return this.$store.state.squareQty;
    },
    colors() {
      return this.$store.state.colors;
    },
    selectedColor() {
      return this.$store.state.selectedColor;
    },
    pickedColor() {
      return this.$store.state.pickedColor;
    },
    message() {
      return this.$store.state.message;
    },
  },
};

Vue.mixin(globalMixins);
