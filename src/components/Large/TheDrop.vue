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
    //pass a prop in here and to check whether the state is play or pause to trigger bars
    data(){
        return{
            height1:'200px',
            height2:'100px',
            height3:'120px',
            height4:'80px',
            height5:'110px',
        }
    },
    computed:{
                  barStatus(){
                      return this.$store.getters['playState']
                  }
              },
    mounted(){
          this.changeWidth();
          
              },
    methods:{
        changeWidth(){
            const values = [['200px','100px','120px','80px','110px'],
            ['120px','50px','160px','80px','110px'],
            ['80px','150px','100px','110px','70px'],
            ['60px','180px','50px','140px','60px'],
            ['160px','100px','80px','140px','60px'],
            ['160px','80px','120px','100px','40px'],
            ['160px','80px','120px','100px','40px'],
            ['80px','120px','90px','140px','80px'],
            ['40px','100px','60px','140px','120px'],
            ['180px','100px','80px','140px','90px'],
            ['160px','180px','110px','80px','40px'],
            ['200px','150px','100px','50px','70px']]
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
    width:300px;
    display: grid;
    grid-template-columns:40px 40px 40px 40px 40px;
    padding:0px; 
    height:110px;
   
    margin-left:300px
}
.box{
    width:20px;
    background-color:white;
    border:2px solid transparent;
    margin-left: 5px;
    margin-right: 5px;
}
</style>