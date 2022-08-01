<template>

<audio controls id="player"  :loop="loop" :onended="songEnd" :onloadedmetadata ="metaDataLoaded"
:ontimeupdate="updateTime"
style="display:none"
>
    <source :src="audio" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

    <div>
       <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    </div>
</template>
<script>
//in the database add a background color as well for the song and it should be in contrast with the color of image
//the functions are working fine add icons and then create some data 
//for playing music use the inbuilt music player and make it's visibilty hidden
import TheBodylarge from './components/Large/TheBody.vue'
import TheBodysmall from './components/small/TheBody.vue'
export default {
    data(){return{
        playState:"Play",
        selectedComponent:'the-bodysmall',
        audioPlayer:null
        
    }},
    components: {TheBodylarge,TheBodysmall},
    provide(){
        return{
            "shuffle":this.shuffle,
            "previous":this.previous,
            'next':this.nextSong,
            'play':this.playButton,
            'loop':this.loopButton,
            'resize':this.Resize,
            'playSong':this.play,
            'pauseSong':this.pause,
            'implementChange':this.implementChange,
            'currTime':this.updateTime,
            'changeTime':this.changeTime
        
           
             }
    },
    computed:{
       
        loop(){
            return this.$store.getters['loopState'];
        },
        audio(){
            return this.$store.getters['getSong'];
        },


        background(){
            return this.$store.getters['getBackgroundColor']
        },
     
    }
   ,
    methods:{
        updateTime(){
       this.$store.commit('setCurrTime',this.audioPlayer.currentTime);
        },
        changeTime(){
            console.log('A change duration request is received')
            let val = this.$store.getters['getCurrTime'];
            this.audioPlayer.currentTime=val;
        },
       metaDataLoaded(){
          this.$store.commit('setDuration',this.audioPlayer.duration);
          console.log(`This is the duration of the loaded file ${this.$store.getters['getDuration']}`);
       },
        implementChange(){
             /*this is the flow used for updating the source
        change the source
        load the sourced
        hit play*/
        //friday night hai penchod it's working
            this.audioPlayer.src=this.audio;
            this.audioPlayer.load();
            this.audioPlayer.play();
           
        },
        songEnd(){
            //the condition for shuffle needs to be checked here and also loop
           if(this.$store.getters['loopState'] === false)
           {   
               if(this.$store.getters['shufState'] === true)
               {
                    console.log('the shuf block is reached')   
                    var random = this.$store.dispatch('uniqueRandom');
                    console.log(random);
                   
                    /*need to implement a logic to change the song as it
                    is not changing or am I missing some point*/
                    
          }
               else
               {
                     this.$store.dispatch('nextState')
              this.implementChange();
               }
           }
        },
        control(){
            this.audioPlayer=document.getElementById('player');
        }, 
        play(){
            this.audioPlayer.play();
        },
        pause(){
            this.audioPlayer.pause();
        },
        Resize(state)
        {
            if(state === 'Big')
            this.selectedComponent='the-bodylarge'
            else if(state === 'Small')
            this.selectedComponent='the-bodysmall'
        },
      
         onKeyPress(e) {
             console.log(e)
            if(e.code === 'Space')
            {
                this.$store.dispatch('playState')
                if(this.$store.getters['playState'])
                this.play();
                else
                this.pause();
            }
            else if(e.code === 'KeyD')
            {
              this.$store.dispatch('nextState')
              this.implementChange();
            }
            else if(e.code === 'KeyA')
            {
                this.$store.dispatch('prevState')
                this.implementChange();
            }
                  else if(e.code === 'KeyS')
            {
this.$store.dispatch('shufState')
            }
            else if(e.code === 'KeyL')
            {
this.$store.dispatch('loopState')
            }
            //... your code
        }
    },
     mounted(){
         this.control();
     
       },

       //this setup is for capturing a global key press event
       //use this setup with  the keypress method to capture any global keypress event
       created() {
        window.addEventListener('keypress', this.onKeyPress);
    },
    beforeUnmount() {
        window.removeEventListener('keypress', this.onKeyPress);
    },
}
</script>


<style scoped>
div{
    margin:0px;
    padding:0px;
    width: 100%;
    height:750px;
}
</style>