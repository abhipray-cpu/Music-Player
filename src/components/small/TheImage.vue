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
    width:120px;
    height:120px;
    margin-left:10px;
    margin-top:15px;
    margin-right:0px
}
</style>