<template>
    <div id="container">
        <div id="image">
            <img :src="image" :alt="title">
        </div>
        <div id="info">
            <h2>{{title}}</h2>
            <h3>{{album}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props:['image','title','album'],
}
</script>

<style scoped>
#container{

    display:grid;
    grid-template-columns: 110px 160px;
    margin-top:5px;
    margin-bottom:5px;
    padding-top:1px;
    padding-bottom:1px;
    height:110px;
    width:fit-content;
    height:fit-content;
    padding-left:3%;
}
#info{
  padding:0;
  margin-top:0;
}
img{
    width:100px;
    height:80px;
}
h2{
    color:white;
    margin-top:2px;
    font-size: large;
    font-weight: 500;
}
h3
{
    color:white;
    font-size: medium;
    font-weight: 400;
}
</style>