<template>
  <div>
    <h5>{{ informations[0].title }}</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
</template>
<script>
export default {
  name: "blog",
  props: {
    informations: Array,
  },
};
</script>
<style></style>
