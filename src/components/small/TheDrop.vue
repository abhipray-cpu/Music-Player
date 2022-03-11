<template>
    <div id="container" v-if="barStatus">
        <div class="box" :style="{height:height1}"></div>
        <div class="box" :style="{height:height2}"></div>
        <div class="box" :style="{height:height3}"></div>
        <div class="box" :style="{height:height4}"></div>
        <div class="box" :style="{height:height5}"></div>
    </div>
</template>


<script>
export default {
// now we need some sort of mechanism to pass dynamic value of play state to this component?
    data(){
        return{
            height1:'100px',
            height2:'60px',
            height3:'80px',
            height4:'40px',
            height5:'70px',
            }
    },
    //write a function that fires periodically to change the width of bars
        mounted(){
          this.changeWidth();
          
              },
              computed:{
                  barStatus(){
                      return this.$store.getters['playState']
                  }
              },
              //one way to freeze the drop is to use 
              //watch a computed property
        
    methods:{
       changeWidth(){
            const values = [['100px','50px','60px','40px','55px'],
            ['60px','25px','80px','40px','55px'],
            ['40px','75px','50px','55px','35px'],
            ['30px','90px','25px','70px','30px'],
            ['80px','50px','40px','70px','30px'],
            ['80px','40px','60px','50px','20px'],
            ['80px','40px','60px','50px','20px'],
            ['40px','60px','45px','70px','40px'],
            ['20px','50px','30px','70px','60px'],
            ['90px','50px','40px','70px','45px'],
            ['80px','90px','55px','40px','20px'],
            ['100px','75px','50px','25px','35px']]
            const index = values[Math.floor(Math.random() * values.length)];
            this.height1=index[0];
            this.height2=index[1];
            this.height3=index[2];
            this.height4=index[3];
            this.height5=index[4];
            setTimeout(()=>{
                this.changeWidth()
            },180)
          }
    }
}
</script>


<style scoped>
#container{
    display:grid;
    background-color:transparent;
    grid-template-columns: 10fr 10fr 10fr 10fr 10fr;
    margin-top:34px;
    
}
.box{
   width:10px;
    background-color:white;
    margin-left:0px;
    margin-right:0px;
  
    
}
</style>