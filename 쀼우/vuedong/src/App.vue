<template>
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
    <button @click="priceSort">가격순정렬</button>
    <button @click="priceOrt">가격역순정렬</button>
    <button @click="priceback">되돌리기</button>
  </div>
  <h4>{{ price }}퍼 할인중입니다.</h4>
  <Modal
    @on="모달창열렸니 = false"
    :원룸들="원룸들"
    :누른거="누른거"
    :모달창열렸니="모달창열렸니"
  />
  <Card
    @one="
      모달창열렸니 = true;
      누른거 = $event;
    "
    :원룸들="원룸들[i]"
    v-for="(a, i) in 원룸들"
    :key="a"
  />
</template>
<script>
import Card from "./Card.vue";
import Modal from "./Modal.vue";
import oneroom from "./assets/data.js";

export default {
  data() {
    return {
      price: 10,
      원룸들오리지널: [...oneroom],
      누른거: 0,
      원룸들: oneroom,
      모달창열렸니: false,
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼", "천호", "마구"],
      신고수: [0, 0, 0],
    };
  },
  methods: {
    increase() {
      this.신고수 += 1;
    },
    priceSort() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceOrt() {
      this.원룸들.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    priceback() {
      this.원룸들 = [...this.원룸들오리지널];
    },
  },
  mounted() {
    setInterval(() => {
      if (this.price > 0) {
        this.price--;
      }
    }, 1000);
  },

  components: {
    Modal: Modal,
    Card: Card,
  },
};
</script>
<style>
.main {
  text-align: center;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}
.menu a {
  color: white;
  padding: 10px;
}
body {
  margin: 0;
  text-align: center;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
