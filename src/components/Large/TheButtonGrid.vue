<template>
    <div id="container">
        <!--later replace the text with icons
        and styling also as per icons -->
          <div class="button" @click="Shuffle" style="margin-top:5px;">
          <shuffle-icon :size="44"  fillColor="#F00356" v-if="shuffle==true"/>
          <shuffle-icon :size="44" fillColor="white" v-else />
         
         </div>

         <div class="button" @click="Previous" style="margin-top:9px;">
             <prev-icon :size="36" fillColor="#F00356" v-if="previous == true"/>
             <prev-icon :size="36" fillColor="white" v-else />
             
             </div>
         
         <!--after lernig vuex add a global setter and getter for the play buttoin in the main layout-->
         <div class="button" @click="Play" style="">
             <pause-icon :size="48" v-if="play==true" fillColor="#F00356"/>
             <play-icon :size="48" v-else fillColor="white" />
             
             </div>
         
         <div class="button" @click="Next" style="margin-top:9px;">
                <next-icon :size="36" fillColor="#F00356" v-if="next == true" />
                
                <next-icon :size="36" fillColor="white" v-else />
              
             </div>
         
         <div class="button" @click="Loop" style="margin-top:5px;">
                <loop-icon :size="44" fillColor="#F00356" v-if="loop == true" />
             
             <loop-icon :size="44" fillColor="white" v-else/>
             </div>
         
         
    </div>
</template>



<script>
import playIcon from 'vue-material-design-icons/PlayCircleOutline.vue';
import pauseIcon from 'vue-material-design-icons/PauseCircleOutline.vue';
import nextIcon from 'vue-material-design-icons/SkipNext.vue';
import prevIcon from 'vue-material-design-icons/SkipPrevious.vue';
import shuffleIcon from 'vue-material-design-icons/Shuffle.vue';
import loopIcon from 'vue-material-design-icons/RepeatVariant.vue';
export default {
    // we are emitting the functions from methods so that class/styling can be changed as well
  components:{playIcon,pauseIcon,nextIcon,prevIcon,shuffleIcon,loopIcon},
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
    grid-template-columns: 10fr 10fr 10fr 10fr 10fr;
    margin-top:20px;
    max-width:600px;
    margin-bottom:9px;
    margin-left:30%;
}
</style>