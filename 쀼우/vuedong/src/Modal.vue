<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width: 10%" />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model.number="month" />
      <p>{{ month }}개월선택함: {{ month * 원룸들[누른거].price }}원</p>
      <button @click="$emit('on')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      month: 0,
    };
  },
  watch: {
    month(a) {
      if (isNaN(a) == true) {
        alert("숫자만 입력하셈");
        this.month = 1;
      }
    },
  },
  name: "Mo-dal",
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Array,
  },
};
</script>
<style></style>
