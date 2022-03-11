<template>
   <img :src="image" :alt="title">
</template>

<script>
export default {
     computed:{
        image(){
            return this.$store.getters.getImage;
        },
        title(){
            return this.$store.getters.getTitle;
        }
    }
}
</script>

<style scoped>
img{
    width:300px;
    height:250px;
    margin-left:10px;
    margin-top:15px;
    margin-right:20px;
    float:left;
}
</style>