<template>
    <div id="firstLayer">
        <div id="secondLayer1">
            <the-image></the-image>
            <the-drop></the-drop>
        </div>
        <div id="secondLayer2">
            <the-buttons></the-buttons>
            <the-musicbar></the-musicbar>
        </div>
    </div>
    
</template>

<script>
import TheImage from './TheImage.vue'
import TheDrop from './TheDrop.vue'
import TheButtons from './TheButtonGrid.vue'
import TheMusicbar from './TheMusicbar.vue'
export default {
    components:{TheImage,TheDrop,TheButtons,TheMusicbar},
    
    
     
  
}
</script>

<style scoped>
#firstLayer{
    margin-top: 250px;
    background: linear-gradient( 45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    backdrop-filter: blur(4px);
    box-shadow: 0 0 20px #000;
    width: 100%;
    height:150px;
    display:grid;
    grid-template-columns: 20fr 80fr;

}
#secondLayer2{
    margin-left:20px;
    margin-right:20px;
    display:grid;
    grid-template-rows: 60fr 40fr;
}
#secondLayer1{
    display:grid;
    grid-template-columns: 60fr 40fr;
}
</style>