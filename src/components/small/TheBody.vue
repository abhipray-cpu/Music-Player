<template>
    <div id="firstLayer">
        <div id="secondLayer1">
            <the-image></the-image>
            <div id="info">
                <h2 style="color:white;font-size:large;">{{title}}</h2>
                <h3 style="color:white;font-size:medium">{{album}}</h3>
            </div>
            <the-drop></the-drop>
        </div>
        <div id="secondLayer2">
            <the-buttons style="margin-left:12%"></the-buttons>
            <the-musicbar style="margin-top:1%"></the-musicbar>
           
        </div>
         <div class="button" @click="doSomething" style="margin-left:-60px;margin-top:80px" >
             <expand-icon :size="36" fillColor="white"/>
              </div>
    </div>
    
</template>

<script>
import TheImage from './TheImage.vue'
import TheDrop from './TheDrop.vue'
import TheButtons from './TheButtonGrid.vue'
import TheMusicbar from './TheMusicbar.vue'
import ExpandIcon from 'vue-material-design-icons/ArrowExpand.vue';
export default {
    components:{TheImage,TheDrop,TheButtons,TheMusicbar,ExpandIcon},
    inject:['resize'],
    methods:{
        doSomething(){
            this.resize('Big');
        }
    },
    computed:{
        title(){
            return this.$store.getters['getTitle']
        },
        album(){
            return this.$store.getters['getAlbum']
        },
    }
    
    
     
  
}
</script>

<style scoped>
#firstLayer{
    background: rgba(0, 0, 0,1);
    backdrop-filter: blur(4px);
    box-shadow: 0 0 20px #000;
    width: 100%;
    height:150px;
    display:grid;
    grid-template-columns: 370px auto 50px ;
    margin-top:35%;

}
#secondLayer2{
    margin-left:20px;
    margin-right:20px;
    display:grid;
    grid-template-rows: 60fr 40fr;
}
#secondLayer1{
    display:grid;
    grid-template-columns: 155px 120px;
}
</style>