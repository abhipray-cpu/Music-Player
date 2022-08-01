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
    width:700px;
    height:600px;
    margin-left:10px;
    margin-top:4px;
    margin-right:2px;
    float:left;
}
</style>