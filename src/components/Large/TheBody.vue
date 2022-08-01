<template>
 
  <div id="body">
     <div id="container">
         <div id="row1">
             <div id="column1">
                 <the-image></the-image>

             </div>
             <div id="column2">
                <div id="info">
                    <div id="details">
                        <h2 style="color:white">{{title}}</h2>
                        <h3 style="color:white">{{album}}</h3>
                    </div>
                    <the-drop></the-drop>
                </div>
                <div id="queue">
                    <h2 style="color:white;margin-top:0px;margin-bottom:15px;padding-top:0px;">Queue</h2>
          <queue-item :image="song1.image" :title="song1.title" :album="song1.from"/>
          <queue-item :image="song2.image" :title="song2.title" :album="song2.from"/>
          <queue-item :image="song3.image" :title="song3.title" :album="song3.from"/>
                </div>
             </div>
         </div>
        <div id="row2">
         <div id="control">
            <the-buttons/>
            <the-musicbar/>
         </div>
          <div class="button" @click="doSomething" style="margin-left:-60px;margin-top:80px" >
             <expand-icon :size="36" fillColor="white"/>
              </div>
        </div>
     </div>
  </div>
    
</template>

<script>
import TheImage from './TheImage.vue'
import TheDrop from './TheDrop.vue'
import TheButtons from './TheButtonGrid.vue'
import TheMusicbar from './Themusicbar.vue'
import ExpandIcon from 'vue-material-design-icons/ArrowExpand.vue';
import QueueItem from './queue-comp.vue'
export default {
    components:{TheImage,TheDrop,TheButtons,TheMusicbar,ExpandIcon,QueueItem},
    inject:['resize'],
    methods:{
        doSomething(){
            this.resize('Small');
        }
    },
    data(){
        return{
            song1_val:{},
            song2_val:{},
            song3_val:{}
        }
    },
    computed:{
        barDisplay(){
            return this.$store.getters['playState'];
        },
        title(){
            return this.$store.getters['getTitle']
        },
        album(){
            return this.$store.getters['getAlbum']
        },
        song1(){
            return this.$store.getters['getQueue'][[0]];
        },
        song2(){
           return this.$store.getters['getQueue'][[1]];
        },
        song3(){
           return this.$store.getters['getQueue'][[2]];
        },
        
    },
   
    
  
  
}
</script>

<style scoped>
#body{
    padding:20px;
    width:100%;
    background: black;
    margin:0;
    padding: 0;
    
}
#body h1{
    margin-left:30px;
    margin-top:10px;
    color:white;
    font-weight:bold;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#container{
    display:grid;
    grid-template-rows: 60fr 40fr;
}
#row1{
display:grid;
grid-template-columns:10fr 10fr;
}
#column1{
    margin-left:0px;
    color:white;
    font-weight:bold;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
#column2{
    height:600px;
    display:grid;
    grid-template-rows:240px 320px;
}
#info{
    display:grid;
    margin-left:10px;
    padding-left:10px;
    grid-template-columns:240px auto;
}
#details{
    text-align: center;
    margin-top:0px;
    font-weight: 500;
}
#details h2{
    font-size: 46px;
    text-align: center;
    margin-bottom:10px;
}
#details h3{
    margin-top:0;
    font-size: 22px;
    text-align: center;
    font-style: italic;
    margin-left:34px;
}
#queue{
    margin-top:1px;
    padding-top:0px;
    display:grid;
    grid-template-rows:30px repeat(3,110px);
    margin-left:10px;
}
#row2{
    display:grid;
    grid-template-columns: auto 80px;
}

#control{
    display: grid;
    grid-template-rows: 100px 100px;
}

</style>
