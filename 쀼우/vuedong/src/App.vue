<template>
<div class="main">
  <div class="menu">
    <a>Home</a>
    <a>Products</a>
    <a>About</a>
  </div> 
  <div v-for="(product,index) in products" :key="index">
    <h4>{{product}}</h4>
    <p> {{prices[index]}} 만원</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      products:['역삼동원룸','천호동원룸','마포구원룸'],
      prices:[60,70,80],
      스타일: 'color:black'
    }
  },
};
</script>

<style>
.main{
  text-align: center;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}
.menu a {
  color : white;
  padding: 10px;
}
</style>