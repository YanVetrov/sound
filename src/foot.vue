<template>
    <footer>
        <audio @timeupdate='checktime' @ended='nextTrack'  controls :src='path'></audio>
        <transition name='slide'>
        <div class='player' :class='activePlayer' v-if='played'>
            <router-link :to='link' class='player-link'><i @click='openPlayer' class='ion-ios-information-empty'></i></router-link>
            <div class='hide' @click='openPlayer(false)'><i class='ion-ios-arrow-down'></i></div>
            <div class='loop' @click='changeLoop'><i class='ion-ios-infinite-outline'></i><span>{{loopStatus}}</span></div>
            <div @click='openPlayer(true)' class='player-info'>
                
                <div class='player-bg' :style="[{backgroundImage:background}]"></div>
                
                <div class='player-signer'>{{signer}}</div>
                <div class='player-song'>{{song}}</div>
            <!--<div class='progress-bar'><div class='bar' :style='percent'></div></div>-->
            <vue-slider class='progress' ref="slider" @drag-end='changeTime' style='width:130%;margin-top:15px' :bgStyle='{"backgroundColor":"grey"}' :processStyle='{"backgroundColor":"white"}' :height='2' :tooltip='false' :value='currentt' v-model='drag'></vue-slider>
            <div class='time'><span>{{currentt}}</span><span>{{total}}</span></div>
            </div>
            <div class='player-button' @click='playStop' ><i @click='prevTrack' class='ion-ios-rewind'></i><i :class='playStatus'></i><i @click='nextTrack' class='ion-ios-fastforward'></i></div>
        </div>
        </transition>
        <router-link to='/' exact class='button-home'><i class='ion-home'></i>Дом</router-link>
        <router-link to='/favorite' class='button-favorite'><i class='ion-android-favorite'></i>Плейлист</router-link>
        <router-link to='/popular' class='button-popular'><i class='ion-ios-search'></i>Поиск</router-link>
        <div class='button-settings' @click='switchh = !switchh'><i class='ion-ios-settings-strong'></i>Настройки</div>
     <transition name='slide'>   <div v-if='switchh' class='settings'>
         <div>Светлая тема <i :class='check' @click='switchTheme'></i></div>
         <div>Очистить плейлист <div class='cleaner' @click='clearCache' ><i class='ion-ios-loop' ></i></div></div>
         
         </div></transition>
    </footer>
    
    
    
    
    
    
    
</template>



<script>
    import vueSlider from 'vue-slider-component'
    export default {


        data() {
            return {
                played: false,
                playStatus: 'ion-ios-play',
                signer: '',
                song: '',
                state: '',
                switchh: false,
                check: 'ion-toggle',
                active: '',
                background: '',
                activePlayer: '',
                time: '1',
                percent: '',
                currentt: '',
                total: '',
                path: '',
                loopStatus: '',
                link: '',
                drag: ''


            }


        },
        mounted() {
            this.$root.$on('checkPlay', (data) => {
                this.played = true;
                this.playStatus = 'ion-ios-pause';
                this.signer = data[0];
                this.song = data[1];
                this.background = data[2];
                this.link = data[3];
                var audio = document.getElementsByTagName('audio')[0];

                setTimeout(() => { audio.play() }, 200)




            })
            this.$root.$on('setPlay', (src) => { this.path = src })
        },

        methods: {
            playStop() {
                var audio = document.getElementsByTagName('audio')[0];
                audio.paused ? audio.play() : audio.pause();
                audio.paused ? this.playStatus = 'ion-ios-play' : this.playStatus = 'ion-ios-pause';



            },

            switchTheme() {


                document.styleSheets[2].disabled = !document.styleSheets[2].disabled
                document.styleSheets[2].disabled ? this.check = 'ion-toggle' : this.check = 'ion-toggle-filled'


            },

            clearCache(e) {

                localStorage.removeItem('local');

                var current = e.target.parentNode.style.transform
                current == '' || current == 'rotate(0deg)' ? current = 720 : current = 0;
                e.target.parentNode.style.transform = 'rotate(' + current + 'deg)'

            },

            openPlayer(bool) {
                if (bool == true && this.activePlayer == 'active-player') {
                    return;
                }
                this.played = false;
                this.activePlayer == '' ? this.activePlayer = 'active-player' : this.activePlayer = '';
                setTimeout(() => { this.played = true }, 200);
            },
            checktime(e) {

                var percent = e.target.currentTime * 100 / e.target.duration;
                var min = e.target.currentTime / 60
                min = min.toString().slice(0, 1);
                var sec = e.target.currentTime % 60 / 100
                sec = sec.toString().slice(2, 4);
                this.currentt = min + ':' + sec;
                var min = e.target.duration / 60
                min = min.toString().slice(0, 1);
                var sec = e.target.duration % 60
                sec = sec.toString().slice(0, 2);
                this.total = min + ':' + sec;
                this.drag = percent;
                this.percent = 'width:' + percent + '%;';



            },
            nextTrack(e) {
                var local = localStorage.getItem('local');
                local == undefined || null ? local = [] : false;
                local = JSON.parse(local)
                if (local.length == 0) {
                    return;
                }
                var audio = document.querySelector('audio')
                var currentSrc = audio.getAttribute('src');
                for (let i = 0; i < local.length; i++) {

                    if (currentSrc == local[i].src) {
                        var step = 1;
                        if (local[i + step] == undefined) {
                            i = 0;
                            step = 0;
                        }
                        this.signer = local[i + step].signer
                        this.song = local[i + step].song
                        this.background = local[i + step].background.slice(18, local[i + step].background.length - 1);
                        this.path = local[i + step].src
                        setTimeout(() => { this.playStop(); }, 200)
                        break;
                    }


                }





            },
            prevTrack(e) {
                var local = localStorage.getItem('local');
                local == undefined || null ? local = [] : false;
                local = JSON.parse(local)
                if (local.length == 0) {
                    return;
                }
                var audio = document.querySelector('audio')
                var currentSrc = audio.getAttribute('src');
                for (let i = 0; i < local.length; i++) {

                    if (currentSrc == local[i].src) {
                        var step = -1;
                        if (local[i + step] == undefined) {
                            i = 0;
                            step = local.length - 1;
                        }
                        this.signer = local[i + step].signer
                        this.song = local[i + step].song
                        this.background = local[i + step].background.slice(18, local[i + step].background.length - 1);
                        this.path = local[i + step].src
                        setTimeout(() => { this.playStop(); }, 200)
                        break;
                    }


                }





            },
            changeLoop() {
                var audio = document.getElementsByTagName('audio')[0];
                audio.loop ? audio.loop = false : audio.loop = true;
                audio.loop ? this.loopStatus = '1' : this.loopStatus = '';



            },
            
            changeTime(e){
                 var audio = document.getElementsByTagName('audio')[0];
                 audio.currentTime = audio.duration / 100 * e.getValue();
                
            }



        }














    }
</script>

<style type="text/css">
    .ion-ios-fastforward,
    .loop,
    .ion-ios-rewind,
    .hide,
    .player-link,.progress {
        display: none;
    }


    .active-player .ion-ios-fastforward,
    .active-player .loop,
    .active-player .player-link,.active-player .progress {
        display: block;
    }

    .active-player .hide,
    .active-player .loop,
    .active-player .player-link {
        display: block;
        position: absolute;
        top: 60px;
    }

    .active-player .loop {
        right: 10%;

    }

    .active-player .loop span {
        position: absolute;
        top: 5px;
    }

    .active-player .player-link {
        left: 10%;
    }

    .active-player .ion-ios-rewind {
        display: block;
    }

    .active-player {
        padding-top: 50px;
        padding-bottom: 350px;
        position: fixed;
        height: 100vh;
        top: 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }

    .active-player .player-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .active-player .player-bg {
        position: relative;
        width: 200px;
        height: 200px;
        left: 0;
    }

    .active-player .player-button {
        display: flex;
        justify-content: space-around;
        width: 70%;
        position: relative;
        right: 0;
        bottom: 15%;
    }

    .active-player .progress-bar {
        position: relative;
        width: 130%;
        margin-top: 20px;
        background: grey;
        bottom: 0;
    }

    .active-player .time {
        width: 130%;
        display: flex;
        justify-content: space-between;


    }
</style>
