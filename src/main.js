import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue'
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
                    "backgroundColor": "rgba(254,11,40)",
                    "image": "https://pagalnew.com/coverimages/Shiddat-Reprise-Manan-Bhardwaj-500-500.jpg",
                    "song": "https://pwdown.com/113573/Chitta - Shiddat.mp3",
                    "title": "Chitta",
                    "from": "Shiddat"
                },
                {
                    "backgroundColor": "rgba(209,87,18)",
                    "image": "https://c4.wallpaperflare.com/wallpaper/688/171/824/spinnin-records-kshmr-jammu-india-wallpaper-preview.jpg",
                    "song": "https://pwdown.com/113579/Aila Re Aillaa - Sooryavanshi.mp3",
                    "title": "Jammu",
                    "from": "KSHMR"
                },
                {
                    "backgroundColor": "rgba(255,83,9)",
                    "image": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/6f/66/8c/6f668c62-885e-9cf3-9256-d590ae9aea4f/196251546821.jpg/400x400cc.jpg",
                    "song": " https://pwdown.com/113515/Bijlee Bijlee - Harrdy Sandhu.mp",
                    "title": "Close eyes",
                    "from": "Hardy Sandhu"
                },
                {
                    "backgroundColor": "rgba(10,88,239)",
                    "image": "https://i.scdn.co/image/ab67616d0000b27382ecc5ea89bf34479a71a297",
                    "song": "https://pwdown.com/10065/07. Jammu-KSHMR (Mr Jammer Remix) - Mr Jammer.mp3",
                    "title": "Me Like Yuh",
                    "from": "Jay Park"
                },
                {
                    "backgroundColor": "rgba(5,181,205)",
                    "image": "https://i.ytimg.com/vi/u2_LlN8jJBQ/maxresdefault.jpg",
                    "song": "https://pwdown.com/110881/12. Ola Ola.mp3",
                    "title": "Ola Ola",
                    "from": "A female singer"
                },
                {
                    "backgroundColor": "rgba(4,167,138)",
                    "image": "https://i1.sndcdn.com/artworks-000653200792-tchwpv-t500x500.jpg",
                    "song": "https://pwdown.com/14648/Tu Hi Ah - The PropheC.mp3",
                    "title": "Tu hi das de",
                    "from": "Prophecy"
                },
                {
                    "backgroundColor": "rgba(5,117,132)",
                    "image": "https://i1.sndcdn.com/artworks-000209075148-0tqabs-t500x500.jpg",
                    "song": "https://pwdown.com/10504/16. Hymn For The Weekend Vs AK 47 - DJ Monte-S.mp3",
                    "title": "Hymm for the weekend",
                    "from": " Cold Play"
                },
                {
                    "backgroundColor": "rgba(154,169,171)",
                    "image": "https://i.scdn.co/image/ab67616d0000b273ddba34f7e71bb61ea2311eae",
                    "song": "",
                    "title": "#Brooklyn blood Pop!",
                    "from": "Some female singer"
                },
                {
                    "backgroundColor": "rgba(141,21,100)",
                    "image": "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
                    "song": "https://pwdown.com/111726/02. Engine Ki Seeti.mp3",
                    "title": "Levitating",
                    "from": "Dua Lipa"
                },
                {
                    "backgroundColor": "rgba(132,129,131)",
                    "image": "https://checklyrics.com/wp-content/uploads/2017/12/17.jpg",
                    "song": "https://pwdown.com/5259/Blood Brothaz (www.PagalWorld.com).mp3",
                    "title": "Seeti maar",
                    "from": "Some Punjabi Singer"
                },
                {
                    "backgroundColor": "rgba(19,216,228)",
                    "image": "https://i1.sndcdn.com/artworks-000148693080-jv2231-t500x500.jpg",
                    "song": "https://pwdown.com/113548/Tumpe Mar Jaaenge - Palak Muchhal.mp3",
                    "title": "Bhole Baba",
                    "from": "Laman"
                },
                {
                    "backgroundColor": "rgba(248,14,140)",
                    "image": "https://i.scdn.co/image/ab67616d0000b2736294c32095195b82baf8ff55",
                    "song": "https://pwdown.com/8632/Dhat Teri Ki  (House Mix) Dj Smilee(PagalWorld.com).mp3",
                    "title": "Kononha Peace",
                    "from": "Naruto Uzumaki"
                },
                {
                    "backgroundColor": "rgba(251,125,9)",
                    "image": "http://a10.gaanacdn.com/images/albums/11/2941711/crop_480x480_2941711.jpg",
                    "song": "https://pwdown.com/113515/Ashke Ashke - JassBajwa.mp3",
                    "title": "On my way",
                    "from": "Some english singer"
                },
                {
                    "backgroundColor": "rgba(130,9,251)",
                    "image": "http://a10.gaanacdn.com/images/albums/31/1839431/crop_480x480_1839431.jpg",
                    "song": "https://pwdown.com/113514/Kill Chori - Ash King.mp3",
                    "title": "Pehli Dafa",
                    "from": "Atif Aslam"
                },
                {
                    "backgroundColor": "rgba(251,9,168)",
                    "image": "http://a10.gaanacdn.com/images/albums/64/2883864/crop_480x480_2883864.jpg",
                    "song": "https://pwdown.com/113514/Aise Na Chhoro - Guru Randhawa.mp3",
                    "title": "Ae munda",
                    "from": "College Romance"
                },
                {
                    "backgroundColor": "rgba(55,141,74)",
                    "image": "https://c.saavncdn.com/917/The-Truth-Remixes-English-2015-500x500.jpg",
                    "song": "https://pwdown.com/113514/Sorry - Mickey Singh.mp3",
                    "title": "Took a pill in ibiza",
                    "from": "Some english singer"
                },
                {
                    "backgroundColor": "rgba(8,1,90)",
                    "image": "https://static.toiimg.com/photo/65781912.cms",
                    "song": "https://pwdown.com/113510/Kalla Kalla Tara Tod Le Avaa.mp3",
                    "title": "3 Peg",
                    "from": "Some punjabi singer"
                },
                {
                    "backgroundColor": "rgba(33,80,172)",
                    "image": "https://i1.sndcdn.com/artworks-000112322178-5wp5r8-t500x500.jpg",
                    "song": "https://pwdown.com/113514/Duniya Chhor Doon - Darshan Raval.mp3",
                    "title": "Bapu Zimidar",
                    "from": "Jassi Gill"
                },
                {
                    "backgroundColor": "rgba(25,171,154)",
                    "image": "https://amitmusic.in/upload_file/156/thumb-Duniya%20Chor%20Doon-%20(AmitMusic.In).jpg",
                    "song": "https://pwdown.com/113514/Duniya Chhor Doon - Darshan Raval.mp3",
                    "title": "Chor Doon",
                    "from": "Darshan Raval"
                },
                {
                    "backgroundColor": "rgba(8,138,167)",
                    "image": "http://a10.gaanacdn.com/images/song/18/23787718/crop_480x480_1529575116.jpg",
                    "song": "https://pwdown.com/113582/Tumse Bhi Zyada - Tadap.mp3",
                    "title": "Prada",
                    "from": "Jas Manak"
                },
                {
                    "backgroundColor": "rgba(85,10,208)",
                    "image": "https://i1.sndcdn.com/artworks-jB2m1hTQaNhLtHLt-duxv2g-t500x500.jpg",
                    "song": "https://pwdown.com/113510/Fish Cut Suit Mera.mp3",
                    "title": "Dj got us falling",
                    "from": "Usher"
                },
                {
                    "backgroundColor": "rgba(215,81,6)",
                    "image": "https://m.media-amazon.com/images/M/MV5BNDIwZDRkZWItYmFhZS00NGJmLTliMzMtOGQ4Y2JjZjZlMzdjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
                    "song": "https://pwdown.com/113580/Meri Zindagi Hai Tu - Satyameva Jayate2.mp3",
                    "title": "Jai Jai shiv shankar",
                    "from": "War"
                },
                {
                    "backgroundColor": "rgba(243,9,93)",
                    "image": "http://a10.gaanacdn.com/images/albums/35/2775435/crop_480x480_2775435.jpg",
                    "song": "https://pwdown.com/113510/Surroor Tera Chha Gaya.mp3",
                    "title": "Ghalat femi",
                    "from": "Some pakistani singer"
                },
                {
                    "backgroundColor": "rgba(239,243,9)",
                    "image": "http://a10.gaanacdn.com/images/song/46/27990546/crop_480x480_1566038666.jpg",
                    "song": "https://pwdown.com/113510/Manike Mage Hithe - Yohani.mp3",
                    "title": "Ik Tera",
                    "from": "Some punjabi singer"
                },
                {
                    "backgroundColor": "rgba(158,91,13)",
                    "image": "https://a10.gaanacdn.com/gn_img/albums/YoEWlwa3zX/oEWlL6XyWz/size_xxl.webp",
                    "song": "https://pwdown.com/113510/Fish Cut Suit Mera.mp3",
                    "title": "Aya na tu",
                    "from": "Arjun and Momina"
                },
                {
                    "backgroundColor": "rgba(117,66,6)",
                    "image": "https://i1.sndcdn.com/artworks-xilFMaWCHO2YbMkl-c8PHzA-t500x500.jpg",
                    "song": "https://pwdown.com/113573/Barbaadiyan - Shiddat.mp3",
                    "title": "Rain over me",
                    "from": "Pitbull"
                },
                {
                    "backgroundColor": "rgba(143,95,68)",
                    "image": "https://c.saavncdn.com/385/Race-Hindi-2008-20190612124629-500x500.jpg",
                    "song": "https://pwdown.com/113573/Barbaadiyan - Shiddat.mp3",
                    "title": "Pehli nazar mei",
                    "from": "Atif Aslam"
                },
                {
                    "backgroundColor": "rgba(21,6,191)",
                    "image": "https://i1.sndcdn.com/artworks-000014061843-nr6xg5-t500x500.jpg",
                    "song": "https://pwdown.com/113510/Barsaat Ke Mausam Mein.mp3",
                    "title": "Stereo hearts",
                    "from": "Viral tiktok video"
                },
                {
                    "backgroundColor": "rgba(238,10,131)",
                    "image": "https://i.scdn.co/image/ab67616d0000b27306e5b12eca32ade5a3874b6c",
                    "song": "https://pwdown.com/113510/Nakhre Tere - Nikk.mp3",
                    "title": "Kun faya kun",
                    "from": "Rockstar"
                },
                {
                    "backgroundColor": "rgba(85,82,4)",
                    "image": "https://miro.medium.com/max/630/1*MmjKjeycONYhiSQYJ2vJ-A.jpeg",
                    "song": "https://pwdown.com/10065/07. Jammu-KSHMR (Mr Jammer Remix) - Mr Jammer.mp3",
                    "title": "Kabira",
                    "from": "Yeh Jawani Hai deewani"
                },
                {
                    "backgroundColor": "rgba(206,187,2)",
                    "image": "http://a10.gaanacdn.com/images/albums/79/58479/crop_480x480_58479.jpg",
                    "song": "https://pwdown.com/113573/Chitta - Shiddat.mp3",
                    "title": "Hosana",
                    "from": "Mid 2000 movie"
                },
                {
                    "backgroundColor": "rgba(182,6,80)",
                    "image": "https://pyxis.nymag.com/v1/imgs/848/851/4305fb42b7d9f5533ac9b8cb054c42f500-ariana-grande-album-review.rsquare.w700.jpg",
                    "song": "https://pwdown.com/113579/Aila Re Aillaa - Sooryavanshi.mp3",
                    "title": "Positions",
                    "from": "Ariana Grande"
                },
                {
                    "backgroundColor": "rgba(235,156,8)",
                    "image": "https://c.saavncdn.com/998/Photo-From-Luka-Chuppi--Hindi-2019-20190212024539-500x500.jpg",
                    "song": "https://pwdown.com/113579/Aila Re Aillaa - Sooryavanshi.mp3",
                    "title": "Photo",
                    "from": "Lukkachuppi"
                },
                {
                    "backgroundColor": "rgba(187,60,5)",
                    "image": "http://a10.gaanacdn.com/images/song/26/28352326/crop_480x480_1570445948.jpg",
                    "song": "https://pwdown.com/14648/Tu Hi Ah - The PropheC.mp3",
                    "title": "Shaitan ka sala",
                    "from": "Housefull4"
                },
                {
                    "backgroundColor": "rgba(6,88,163)",
                    "image": "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
                    "song": "https://pwdown.com/10504/16. Hymn For The Weekend Vs AK 47 - DJ Monte-S.mp3",
                    "title": "One dance",
                    "from": "Drake"
                },
                {
                    "backgroundColor": "rgba(52,84,114)",
                    "image": "https://c.saavncdn.com/670/Sajna-Ve-Hindi-2019-20190924060934-500x500.jpg",
                    "song": "https://pwdown.com/5259/Blood Brothaz (www.PagalWorld.com).mp3",
                    "title": "Sajna Ve",
                    "from": "Adity Mishra"
                },
                {
                    "backgroundColor": "rgba(195,9,20)",
                    "image": "http://a10.gaanacdn.com/images/albums/50/2451950/crop_480x480_1561531992_2451950.jpg",
                    "song": "https://pwdown.com/111726/02. Engine Ki Seeti.mp3",
                    "title": "Haaye oye",
                    "from": "Karan"
                },
                {
                    "backgroundColor": "rgba(195,9,20)",
                    "image": "https://a10.gaanacdn.com/images/albums/83/2148983/crop_480x480_1543044990_2148983.jpg",
                    "song": "https://pwdown.com/111726/02. Engine Ki Seeti.mp3",
                    "title": "Daru band",
                    "from": "Mankirth Aulakh"
                },
                {
                    "backgroundColor": "rgba(195,9,20)",
                    "image": "http://a10.gaanacdn.com/images/song/41/29459741/crop_480x480_1580555039.jpg",
                    "song": "https://pwdown.com/111726/02. Engine Ki Seeti.mp3",
                    "title": "Sip Sip2.0",
                    "from": "ABCD3"
                },
                {
                    "backgroundColor": "rgba(195,9,20)",
                    "image": "https://i.ytimg.com/vi/zXWJLEE7LeI/maxresdefault.jpg",
                    "song": "https://pwdown.com/113514/Kill Chori - Ash King.mp3",
                    "title": "Butabomma",
                    "from": "Allu Arjun Movie"
                },
                {
                    "backgroundColor": "rgba(195,9,20)",
                    "image": "https://i.ytimg.com/vi/XXHpVmpTOQU/maxresdefault.jpg",
                    "song": "https://pwdown.com/113515/Ashke Ashke - JassBajwa.mp3",
                    "title": "Shrikaddey",
                    "from": "Tamil Movie"
                },
                {
                    "backgroundColor": "rgba(84,6,146)",


                    "image": "http://a10.gaanacdn.com/images/song/99/29278299/crop_480x480_1579146214.jpg",
                    "song": "https://pwdown.com/113514/Aise Na Chhoro - Guru Randhawa.mp3",
                    "title": "Malang title track",
                    "from": "Malang"
                },
                {
                    "backgroundColor": "rgba(81,9,234)",
                    "image": "https://i.ytimg.com/vi/7gfhI2FQ55s/maxresdefault.jpg",
                    "song": "https://pwdown.com/113514/Sorry - Mickey Singh.mp3",
                    "title": "Biba",
                    "from": "Pritam and marshmallow"
                },
                {
                    "backgroundColor": "rgba(17,57,143)",
                    "image": "https://c.saavncdn.com/678/Ruka-Hoon-Hindi-2019-20190823140420-500x500.jpg",
                    "song": "https://pwdown.com/113510/Surroor Tera Chha Gaya.mp3",
                    "title": "Ruka hoon",
                    "from": "Jigar"
                },
                {
                    "backgroundColor": "rgba(27,61,86)",
                    "image": "https://i.ytimg.com/vi/nBtDsQ4fhXY/maxresdefault.jpg",
                    "song": "https://pwdown.com/113510/Manike Mage Hithe - Yohani.mp3",
                    "title": "Cold water",
                    "from": "Justin Bieber"
                },
                {
                    "backgroundColor": "rgba(193,16,101)",
                    "image": "http://a10.gaanacdn.com/images/song/56/29336456/crop_480x480_1580302577.jpg",
                    "song": "https://pwdown.com/113510/Fish Cut Suit Mera.mp3",
                    "title": "humrah",
                    "from": "Malang"
                },
                {
                    "backgroundColor": "rgba(28,102,143)",
                    "image": "https://i.scdn.co/image/ab67616d0000b2735d3f33b0bc50423aa400b607",
                    "song": "https://pwdown.com/113573/Barbaadiyan - Shiddat.mp3",
                    "title": "Dil hara",
                    "from": "Meri IIT wali gf"
                },
                {
                    "backgroundColor": "rgba(81,7,107)",
                    "image": "https://i.ytimg.com/vi/lYxjFOvFzb4/maxresdefault.jpg",
                    "song": "https://pwdown.com/113510/Barsaat Ke Mausam Mein.mp3",
                    "title": "Bombay dreams",
                    "from": "KSHMR"
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
        }
    }
})
const app = createApp(App)
app.use(store);
app.mount('#app');