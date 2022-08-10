<template>
  <div class="menu">
    <a>Home</a>
    <a>Products</a>
    <a>About</a>
  </div>

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg" @click="모달창열렸니 = false">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
    </div>
  </div>
<!-- 
  <div v-for="(product, index) in products" :key="index">
    <img src="./assets/logo.png" />
    <h4 @click="모달창열렸니 = true">{{ product }}</h4>
    <p>
      {{ prices[index] }} 만원
      <button @click="increase(index)">신고하기</button>
      <button @mouseover="increase(index)">마우스 올리면</button>
      신고수: {{ 신고수[index] }}
    </p>
  </div> -->
  
  <div v-for="(원룸, index) in 원룸들" :key="index">
    <img :src="원룸.image" />
    <h4 @click="모달창열렸니 = true">{{ 원룸.title }}</h4>
    <p>
      {{ 원룸.content }} <br />
      {{ 원룸.price }} 만원 <br />
      <!-- <button @click="increase(index)">신고하기</button>
      신고수: {{ 신고수[index] }} -->
    </p>
  </div>
</template>

<script>
import data from "./assets/data.js";

export default {
  data() {
    return {
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      prices: [60, 70, 80],
      스타일: "color:black",
      신고수: [0, 0, 0, 0, 0, 0],
      모달창열렸니: false,
      원룸들: data,
    };
  },
  methods: {
    increase(i) {
      this.신고수[i]++;
    },
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
