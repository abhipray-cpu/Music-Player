<template>
 
  <div id="body">
      <h1>
      Playing from {{ source }}
     </h1>
     <div id="container">
         <div id="row1">
             <div id="column1">
                 <the-image></the-image>
                 <h2 style="margin-top:160px"> {{ songName }} </h2>
                 <h2> {{ album }} </h2>
             </div>
             <div id="column2">
                <the-drop></the-drop>
             </div>
         </div>
         <div id="row2">
             <the-buttons></the-buttons>
             <the-musicbar></the-musicbar>
         </div>
     </div>
  </div>
    
</template>

<script>
import TheImage from './TheImage.vue'
import TheDrop from './TheDrop.vue'
import TheButtons from './TheButtonGrid.vue'
import TheMusicbar from './Themusicbar.vue'
export default {
    components:{TheImage,TheDrop,TheButtons,TheMusicbar},
    data(){
        return{
            source:'Playlist',
           
        }
    },
    computed:{
        barDisplay(){
            return this.$store.getters['playState'];
        },
        songName(){
            return this.$store.getters['getTitle'];
        },
        album(){
            return this.$store.getters['getAlbum'];
        }
        
    },
  
  
}
</script>

<style scoped>
#body{
    padding:20px;
    width:100%;
    
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
    padding:10px;
    display:grid;
    grid-template-rows: 60fr 40fr;
}
#row1{
display:grid;
grid-template-columns:10fr 10fr;
margin-top:50px;
}
#column1{
    margin-left:20px;
    color:white;
    font-weight:bold;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
#column2{
    height:300px;
}
#row2{
    margin-bottom:10px;
    display: grid;
    grid-template-rows: 100px 100px;
}
</style>
