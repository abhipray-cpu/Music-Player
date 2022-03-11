<template>
    <div id="container">
        <!--later replace the text with icons
        and styling also as per icons -->
          <div class="button" @click="Shuffle" style="margin-left:200px;margin-top:30px">
         <img src="../Assets/SmallIcons/shuffleLight.svg" alt="Shuffle" v-if="shuffle == false" >
         <img src="../Assets/SmallIcons/shuffleDark.svg" alt="Shuffle" v-if="shuffle == true" >
         </div>

         <div class="button" @click="Previous" style="margin-left:120px;margin-top:39px">
             <img src="../Assets/SmallIcons/PrevLight.svg" alt="Previous" v-if="previous == false" >
             <img src="../Assets/SmallIcons/PrevDark.svg" alt="Previous" v-if="previous == true" >
             </div>
         
         <!--after lernig vuex add a global setter and getter for the play buttoin in the main layout-->
         <div class="button" @click="Play" >
             <img src="../Assets/SmallIcons/Play.svg" alt="Play/Pause" v-if="play == true" style="margin-left:60px;margin-top:30px">
             <img src="../Assets/SmallIcons/Pause.svg" alt="Play/Pause" v-if="play == false" style="margin-left:60px;margin-top:30px">
             </div>
         
         <div class="button" @click="Next" style="margin-left:57px;margin-top:11px">
             <img src="../Assets/SmallIcons/NextLight.svg" alt="Next" v-if="next == false" style="margin-top:27px"> 
              <img src="../Assets/SmallIcons/nextDark.svg" alt="Next" v-if="next == true" style="margin-top:27px">
             </div>
         
         <div class="button" @click="Loop" style="margin-left:100px;margin-top:11px;margin-right:180px">
             <img src="../Assets/SmallIcons/LoopLight.svg" alt="Loop" v-if="loop == false" style="margin-top:20px">
             <img src="../Assets/SmallIcons/LoopDark.svg" alt="Loop" v-if="loop== true" style="margin-top:20px">
             </div>
         
         <div class="button" @click="Resize" style="margin-left:150px;margin-top:30px" >
             <img src="../Assets/SmallIcons/LargeResize.svg" alt="Resize"></div>
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
            //   console.log(this.$store.getters['songIndex']);
            //   console.log(this.$store.getters['getSong']);
          },
          Next(){
              //change the styling;
              this.$store.dispatch('nextState')
              this.implementChange();
            //   console.log(this.$store.getters['songIndex']);
            //   console.log(this.$store.getters['getSong']);
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
              this.resize('Big');
          }
    }
}
</script>


<style scoped>
#container{
    display:grid;
    grid-template-columns: 20fr 10fr 10fr 10fr 20fr 20fr 20fr;
    margin-top:20px;
}
</style>