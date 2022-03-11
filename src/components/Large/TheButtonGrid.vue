<template>
    <div id="container">
        <!--later replace the text with icons
        and styling also as per icons -->
         <div class="button" @click="Shuffle" style="margin-left:140px;margin-top:8px">
         <img src="../Assets/LargeIcons/shuffleLight.svg" alt="Shuffle" v-if="shuffle == false">
         <img src="../Assets/LargeIcons/shuffleDark.svg" alt="Shuffle" v-if="shuffle == true">
         </div>

         <div class="button" @click="Previous" style="margin-left:90px;margin-top:15px">
             <img src="../Assets/LargeIcons/prevLight.svg" alt="Previous" v-if="previous == false">
             <img src="../Assets/LargeIcons/prevDark.svg" alt="Previous" v-if="previous == true">
             </div>
         
         <!--after lernig vuex add a global setter and getter for the play buttoin in the main layout-->
         <div class="button" @click="Play" style="margin-left:70px">
             <img src="../Assets/LargeIcons/Play.svg" alt="Play/Pause" v-if="play == true">
             <img src="../Assets/LargeIcons/pause.svg" alt="Play/Pause" v-if="play == false">
             </div>
         
         <div class="button" @click="Next" style="margin-right:30px;margin-top:15px">
             <img src="../Assets/LargeIcons/nextLight.svg" alt="Next" v-if="next == false"> 
              <img src="../Assets/LargeIcons/nextDark.svg" alt="Next" v-if="next == true">
             </div>
         
         <div class="button" @click="Loop" style="margin-top:8px">
             <img src="../Assets/LargeIcons/LoopLight.svg" alt="Loop" v-if="loop == false">
             <img src="../Assets/LargeIcons/LoopDark.svg" alt="Loop" v-if="loop == true">
             </div>
         
         <div class="button" @click="Resize" style="margin-left:100px">
             <img src="../Assets/LargeIcons/smallResize.svg" alt="Resize"></div>
    </div>
</template>



<script>
export default {
    // we are emitting the functions from methods so that class/styling can be changed as well
   data(){
       //these data values will be used to control the icon styling 
       return{
             shufStyle:false,
             prevStyle:false,
             playStyle:false,
             nextStyle:false,
             loopStyle:false,
        }
   },
    inject:['resize','playSong','pauseSong','implementChange'],
    computed:{
       previous()
       {
           return this.$store.getters['prevState']
       },
       shuffle(){
           return this.$store.getters['shufState']
       },
       play(){
           return this.$store.getters['playState']
       },
        next(){
            return this.$store.getters['nextState']
       },
       loop(){
           return this.$store.getters['loopState']
       }
    },
    methods:{
          Shuffle(){
              //change the styling;
               this.$store.dispatch('shufState');
          },
          Previous(){
              //change the styling;
              this.$store.dispatch('prevState');
              this.implementChange();
          },
          Next(){
              //change the styling;
              this.$store.dispatch('nextState')
               this.implementChange();
          },
          Play(){
              this.$store.dispatch('playState')
              if(this.$store.getters['playState'])
              this.playSong();
              else
              this.pauseSong();
          },
          Loop(){
              //change the styling;
              this.$store.dispatch('loopState')
          },
          Resize(){
              //change the styling;
              this.resize('Small');
          }
    }
}
</script>


<style scoped>
#container{
    display:grid;
    grid-template-columns:20fr 10fr 20fr 10fr 20fr 20fr 20fr;
    margin-left: 20%;
    margin-bottom:10px;
}

</style>