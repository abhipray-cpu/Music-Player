<template>
     <div @click="getPosition($event)" ref="progressBar" :style="style">
    </div>
  
</template>


<script>
export default {
    data(){
        return {
            click:false
        }
    },
    inject:['changeTime'],
 computed:{
  
        clickComputed(){
            return this.click;
        },
        barDisplay(){
            return this.$store.getters['playState'];
        },
         style(){
             if(this.clickComputed === false){
             let percent =  (this.$store.getters['getCurrTime']/this.$store.getters['getDuration'])*100;
            return `background:linear-gradient(to right, white ${percent}%,transparent 2%);`
             }
             else
             {
                  return `background:linear-gradient(to right, white ${this.$store.getters['getPercent']}%,transparent 2%);`
             }
        }
        },
        methods:{
            getPosition(event){
                   let click=event.clientX;
                    let left=this.$refs['progressBar'].getBoundingClientRect().left;
                    let right=this.$refs['progressBar'].getBoundingClientRect().right;
                    let percentDuration=(click-left)/(right-left);
                   // console.log(`This is the percent duration ${percentDuration}`);
                    this.$store.commit('setPercent',percentDuration*100);
                    //based on these values calculate the duration at which the player should be reseted to
              this.click = true;
            setTimeout(()=>{
               
                let newDuration=this.$store.getters['getDuration'] * percentDuration;
                this.$store.commit('setCurrTime',newDuration);
                this.changeTime();
                this.click = false;
            },100)
           //this is the range for which we need to listen to the click event
           /*
           min:304
           max:801
           */
           }
        }
}

</script>


<style scoped>
div{
    width: 50%;
    height: 6px;
    border: 2px solid #F00356;
    border-radius: 20px;
    margin-left: 13%;
    margin-top:20px
}

.hide{
    display:none
}
</style>