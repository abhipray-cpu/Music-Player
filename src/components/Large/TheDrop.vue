<template>
    <div class="wrapper" v-if="barStatus">
        <div class="line1">
</div>
<div class="line2">
</div>
<div class="line3">
</div>
<div class="line4">
</div>
<div class="line5">
</div>
<div class="line6">
</div>
<div class="line7">
</div>
</div>

</template>


<script>
export default {
              computed:{
                  barStatus(){
                      return this.$store.getters['playState']
                  }
              },
              //one way to freeze the drop is to use 
              //watch a computed property
        
}
</script>


<style scoped>
#container{
    display:grid;
    background-color:transparent;
    grid-template-columns: 10fr 10fr 10fr 10fr 10fr;
    margin-top:34px;
    max-width:60px;
    
}
        .wrapper{
            width: 380px;
            position: absolute;
            top: 10%;
            left: 85%;
            transform: translate(-50%,-50%);
        }
        div{
            width:30px;
            height:60px;
            animation-iteration-count:infinite;
            animation-iteration-function:linear;
            position:fixed;
        }
        div.line1{
            background-color:#F11B67;
            animation:animate1 1.9s linear infinite ;
            top:200px ;
            left:0px;
        }
        div.line2{
            background-color:#F11B67;
            animation:animate2 2.1s linear infinite;
            top:200px ;
            left:40px;
            
        }
        div.line3{
            background-color:#F11B67;
            animation:animate3 2.3s linear infinite;
            top:200px ;
            left:80px;
         
        }
        div.line4{
            background-color:#F11B67;
            animation:animate4 1.4s linear infinite;
            top: 200px;
            left:120px;
           
        }
        div.line5{
            background-color:#F11B67;
            animation:animate5 1.7s linear infinite ;
            top:200px;
            left:160px;
         
        }
        div.line6{
            background-color:#F11B67;
            animation:animate6 2.0s linear infinite;
            top: 200px;
            left:200px;
           
        }
        div.line7{
            background-color:#F11B67;
            animation:animate7 1.8s linear infinite;
            top:200px ;
            left:240px;
        }
        @keyframes animate1{
            50%{ background-color:#F00356; top:100px; height:160px;}
        }
        @keyframes animate2{
            50%{background-color:#F00356;top:50px;height:210px;}
        }
        @keyframes animate3{
            50%{background-color:#F00356; top:10px; height:250px;}
        }
        @keyframes animate4{
            50%{background-color:#F00356; top:100px; height:160px;}
        }
        @keyframes animate5{
            50%{background-color:#F00356; top:50px; height:210px;}
        }
        @keyframes animate6{
            50%{background-color:#F00356; top:150px; height:110px;}
        }
        @keyframes animate7{
            50%{background-color:#F00356; top:50px; height:210px;}
        }

</style>