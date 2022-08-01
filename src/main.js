import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlay);

const store = createStore({
    state() {
        return {
            //using a map for a unique number each time for mapping
            currTime: 0.0,
            duration: 0.0,
            percentProg: 2.0,
            map: new Map(),
            mode: 'series',
            suhffle: false,
            previous: false,
            play: false,
            next: false,
            loop: false,
            currSong: 13, //this will keep the track of current song
            song: '', //url of MP3 file
            image: '', //url of image file
            title: '', //title of song
            backGround: '', //bakgorund color
            songs: [{
                    "image": "https://m.media-amazon.com/images/M/MV5BZWFiMjVlYTMtMzlhYy00MDcxLWFlNmEtMGJkNmRhNjE5N2ViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
                    "song": "https://pwdown.com/113573/Chitta - Shiddat.mp3",
                    "title": "Chitta",
                    "from": "Shiddat"
                },
                {

                    "image": "https://i.ytimg.com/vi/YnzN4DM0gAA/maxresdefault.jpg",
                    "song": "https://pwdown.com/113579/Aila Re Aillaa - Sooryavanshi.mp3",
                    "title": "Aila re aila",
                    "from": "Sooryavanshi"
                },
                {

                    "image": "https://i.scdn.co/image/ab67616d0000b273ab02d10470adaf555c7d3f9d",
                    "song": " https://pwdown.com/113515/Bijlee Bijlee - Harrdy Sandhu.mp",
                    "title": "Bijlee",
                    "from": "Hardy Sandhu"
                },
                {

                    "image": "https://i.ytimg.com/vi/ggZLU5C8JsA/maxresdefault.jpg",
                    "song": "https://pwdown.com/10065/07. Jammu-KSHMR (Mr Jammer Remix) - Mr Jammer.mp3",
                    "title": "Jammu-KSHMR (Mr Jammer Remix)",
                    "from": "KSHMR"
                },
                {

                    "image": "https://i.ytimg.com/vi/u2_LlN8jJBQ/maxresdefault.jpg",
                    "song": "https://pwdown.com/110881/12. Ola Ola.mp3",
                    "title": "Ola Ola",
                    "from": "Kate linn"
                },
                {

                    "image": "https://i.ytimg.com/vi/_QdgMB6jCAI/maxresdefault.jpg",
                    "song": "https://pwdown.com/14648/Tu Hi Ah - The PropheC.mp3",
                    "title": "Tu Hi Ah",
                    "from": "Prophecy"
                },
                {

                    "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2016%2F01%2Fbeyonce-1024-5.jpg&q=60",
                    "song": "https://pwdown.com/10504/16. Hymn For The Weekend Vs AK 47 - DJ Monte-S.mp3",
                    "title": "Hymm for the weekend vs AK 47",
                    "from": "DJ Monte-S"
                },
                {

                    "image": "https://i.ytimg.com/vi/z15PQepwqMI/maxresdefault.jpg",
                    "song": "https://pwdown.com/111726/02. Engine Ki Seeti.mp3",
                    "title": "Engine ki seeti",
                    "from": "Khoobsurat"
                },
                {

                    "image": "https://pbs.twimg.com/media/DUGyEEqVQAAqtGH?format=jpg&name=large",
                    "song": "https://pwdown.com/5259/Blood Brothaz (www.PagalWorld.com).mp3",
                    "title": "Blood Brothaz",
                    "from": "Sidhu Moosewala"
                },
                {

                    "image": "https://i.ytimg.com/vi/krJsyb_yf7A/maxresdefault.jpg",
                    "song": "https://pwdown.com/113548/Tumpe Mar Jaaenge - Palak Muchhal.mp3",
                    "title": "Mar Jaaenge",
                    "from": "Palak Munchal"
                },
                {

                    "image": "https://c.saavncdn.com/442/Dhat-Teri-Ki-Hindi-2013-20200708075851-500x500.jpg",
                    "song": "https://pwdown.com/8632/Dhat Teri Ki  (House Mix) Dj Smilee(PagalWorld.com).mp3",
                    "title": "Dhat teri ki (House Mix)",
                    "from": "Dj Smilee"
                },
                {

                    "image": "https://static.toiimg.com/photo/msid-86749179/86749179.jpg",
                    "song": "https://pwdown.com/113515/Ashke Ashke - JassBajwa.mp3",
                    "title": "Ashke Ashke",
                    "from": "Jass Bajwa"
                },
                {

                    "image": "https://i.scdn.co/image/ab67616d0000b273be707d6f75be305094db6687",
                    "song": "https://pwdown.com/113514/Kill Chori - Ash King.mp3",
                    "title": "Kill Chori",
                    "from": "Ash King"
                },
                {

                    "image": "https://i.ytimg.com/vi/Nud2Y_Gv2mU/maxresdefault.jpg",
                    "song": "https://pwdown.com/113514/Aise Na Chhoro - Guru Randhawa.mp3",
                    "title": "Aise Na Chorro",
                    "from": "Guru Randhawa"
                },
                {

                    "image": "https://static.toiimg.com/photo/msid-87152235/87152235.jpg",
                    "song": "https://pwdown.com/113514/Sorry - Mickey Singh.mp3",
                    "title": "Sorry",
                    "from": "Mickey Singh"
                },
                {

                    "image": "https://i.ytimg.com/vi/QQ_oWE24DsA/maxresdefault.jpg",
                    "song": "https://pwdown.com/113510/Kalla Kalla Tara Tod Le Avaa.mp3",
                    "title": "Kalla Kalla Tara Tod Le Avaa",
                    "from": "Babu Maan"
                },
                {

                    "image": "https://c.saavncdn.com/113/Duniya-Chhor-Doon-Hindi-2021-20211014161801-500x500.jpg",
                    "song": "https://pwdown.com/113514/Duniya Chhor Doon - Darshan Raval.mp3",
                    "title": "Duniya Chhor Doon",
                    "from": "Darshan Raval"
                },
                {

                    "image": "https://i.ytimg.com/vi/iwhpS4ow7Zc/maxresdefault.jpg",
                    "song": "https://pwdown.com/113582/Tumse Bhi Zyada - Tadap.mp3",
                    "title": "Tumse Bhi Zyada",
                    "from": "Tadap"
                },
                {

                    "image": "https://i.pinimg.com/736x/d7/79/27/d77927a8fdad334d86ad06ad2212d828.jpg",
                    "song": "https://pwdown.com/113510/Fish Cut Suit Mera.mp3",
                    "title": "Fish Cut Suit Mera",
                    "from": "Jasmeen Singh"
                },
                {

                    "image": "https://i.ytimg.com/vi/VYslt8bc-4Q/maxresdefault.jpg",
                    "song": "https://pwdown.com/113580/Meri Zindagi Hai Tu - Satyameva Jayate2.mp3",
                    "title": "Meri Zindagi Hai Tu",
                    "from": "Satyamev jayte2"
                },
                {

                    "image": "https://www.pagalworld.pw/GpE34Kg9Gq/113510/146165-surroor-tera-chha-gaya-mp3-song-300.jpg",
                    "song": "https://pwdown.com/113510/Surroor Tera Chha Gaya.mp3",
                    "title": "Suroor tera cha gya",
                    "from": "Nasty Mathre"
                },
                {

                    "image": "https://statusour.com/wp-content/uploads/2021/08/Manike-Mage-Hithe-Whatsapp-Status-Video.jpg",
                    "song": "https://pwdown.com/113510/Manike Mage Hithe - Yohani.mp3",
                    "title": "Manike Mage Hithe",
                    "from": "Yohani"
                },
                {

                    "image": "https://i.ytimg.com/vi/vJQMhj6WYZA/maxresdefault.jpg",
                    "song": "https://pwdown.com/113573/Barbaadiyan - Shiddat.mp3",
                    "title": "Barbadiyaan",
                    "from": "Shiddat"
                },
                {

                    "image": "https://blogger.googleusercontent.com/img/a/AVvXsEjHBD2pEqobXWESJdYmluksPhf0kDLeoEDmhX9fzV4QZgt7FqHqSzXguKVB80LyPxm28_FblJHe3wnhY6FEe0aAhA2daw-PCYMMh3MGQWJyK--gXSWpEytoRE_FhxXYoHQLKPuSEu576kiyRMeUgOIfW9PbubTyB-QQZl-Js4k-1OpD8JhGPpxrrTaJ=s16000",
                    "song": "https://pwdown.com/113510/Barsaat Ke Mausam Mein.mp3",
                    "title": "Barsat ke mausam mein",
                    "from": "Timothy Gupta"
                },
                {

                    "image": "https://i.scdn.co/image/ab67616d0000b2735b27d0d71d0a534d2284f41c",
                    "song": "https://pwdown.com/113510/Nakhre Tere - Nikk.mp3",
                    "title": "Nakhre Tere",
                    "from": "Nikki"
                }
            ], //this is the array containing all the songs object
        }
    },
    mutations: {
        setCurrTime(state, payload) {
            state.currTime = payload;
        },
        setDuration(state, payload) {

            state.duration = payload;
        },
        setPercent(state, payload) {
            state.percentProg = payload;
        },
        //updating the states of the buttons
        //updating the current song
        //changing title,background and image
        //updating the counter for some of the mutations
        shufState(state) {
            state.suhffle = !state.suhffle;
            //need to update the mode in which songs are played
        },
        prevShade(state) {
            state.previous = !state.previous;
        },
        nextShade(state) {
            state.next = !state.next;
        },
        prevState(state) {
            state.previous = !state.previous;
            if (state.currentSong == 0) {
                state.currentSong = state.songs.length - 1;
            } else
                state.currSong--;
            //need to update the songs fields as well 

        },
        playState(state) { //this will update the music bars as well
            state.play = !state.play;

        },
        nextState(state) {
            state.next = !state.next;
            if (state.currSong == state.songs.length - 1) {
                state.currSong = 0;
            } else
                state.currSong++;
            //need to update the songs fields as well 
        },
        loopState(state) {
            state.loop = !state.loop;
            //need to change the mode in which song is played
        },
        changeSong(state) {
            state.song = state.songs[state.currSong].song;
        },
        changeImage(state) {
            state.image = state.songs[state.currSong].image;
        },
        changeTitle(state) {
            state.title = state.songs[state.currSong].title;
        },
        changeBackground(state) {
            state.backGround = state.songs[state.currSong].backgroundColor;
        },
        playSong() {
            //this will deal with the music player controls
        }
    },
    //since the req for getting the songs from the firebase will be an asynchronous one
    //therefore using actions to process the async req
    actions: {
        //gateway for all the mutations and the req of fetching the songs array
        shufState(context) {
            console.log('req is reaching the action!')
            context.commit('shufState');
            //need to update the mode in which songs are played
        },
        prevState(context) {
            context.commit('prevState');
            setTimeout(function() {
                    context.commit('prevShade');
                    context.commit('changeSong');
                }, 200)
                //need to update the songs fields as well 

        },

        playState(context) { //this will update the music bars as well
            context.commit('playState');


        },
        nextState(context) {
            context.commit('nextState')
            setTimeout(function() {
                    context.commit('nextShade');
                    context.commit('changeSong');
                }, 200)
                //need to update the songs fields as well 
        },

        loopState(context) {
            context.commit('loopState')
                //need to change the mode in which song is played
        },
        changeSong(context) {
            context.commit('changeSong')
        },
        changeImage(context) {
            context.commit('changeImage')
        },
        changeTitle(context) {
            context.commit('changeTitle')
        },
        changeBackground(context) {
            context.commit('changeBackground')
        },
        playSong() {
            //this will deal with the music player controls
        },
        //this function generates a unique random number
        uniqueRandom() {
            const min = 0;
            const max = this.state.songs.length;
            var random = Math.floor(Math.random() * (max - min) + min);
            if (this.state.map.has(random)) {
                random = this.uniqueRandom();
            } else {
                this.state.map.set(random, random);
                return random;
            }
        }

    },
    getters: {
        getCurrTime(state) {
            return state.currTime;
        },
        getDuration(state) {
            return state.duration;
        },
        getPercent(state) {
            return state.percentProg;
        },
        shufState(state) {
            return state.suhffle;
        },
        prevState(state) {
            return state.previous;
        },
        playState(state) {
            return state.play;
        },
        nextState(state) {
            return state.next;
        },
        loopState(state) {
            return state.loop;
        },
        songIndex(state) {
            return state.currSong;
        },
        getSong(state) {
            return state.songs[state.currSong].song;
        },
        getBackgroundColor(state) {
            return state.songs[state.currSong].backgroundColor;
        },
        getTitle(state) {
            return state.songs[state.currSong].title;
        },
        getImage(state) {
            return state.songs[state.currSong].image;
        },
        getAlbum(state) {
            return state.songs[state.currSong].from
        },
        getQueue(state) {
            if (state.currSong >= state.songs.length - 2)
                return [state.songs[0], state.songs[1], state.songs[2]];
            else
                return [state.songs[state.currSong + 1], state.songs[state.currSong + 2], state.songs[state.currSong + 3]];
        }
    }
})
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)
app.use(store);
app.mount('#app');