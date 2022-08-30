<template>
    <h4>{{price}}퍼 할인중입니다.</h4>
</template>
<script>
export default {
        name:'The-Discount',
    data(){
        return{
            price:20,
            }
        },
    counted(){
    setInterval(()=>{
    this.price--;},1000);
    },
}

</script>
<style>

</style>
