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
    width:140px;
    height:140px;
    margin-left:5px;
    margin-top:5px;
    margin-right:0px;
    margin-bottom:5px;
    box-shadow: 2px 2px 4px rgba(232, 2, 98, 0.462);
}
</style>