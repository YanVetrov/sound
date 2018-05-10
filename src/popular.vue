<template>
    <div class='center centerFav' @click='State'>
        <input placeholder='Поиск...' class='searcher' type="text" v-model='inp' @blur='sendData'>
    <div class='genre-block'>
        <div class='selectGenre' @click='sendGenre' v-for='genre in genres'>{{genre}}</div>
    </div>
    <div class='wrap favorite'>

<transition>
<div>
        <div class='block' v-for='track in filterBy(results, update)' :genre='track.genre'>
            <div class='addFav' @click='addFav'><i class='ion-plus'></i></div>
            <div class='bg' @click='playTrack' :style="{backgroundImage:'url(\''+track.background+'\')'}" :data-src='track.src'></div>
            
            <router-link :data-link='track.link' :to='track.link' class='song'>{{track.song}}</router-link>
            <router-link :data-link='track.link' :to='track.link' class='signer'>{{track.signer}}</router-link>
            <div class='playbutton' :data-src='track.src' @click='playTrack'><i class='ion-ios-play'></i></div>
        </div>
     </div>
     </transition>
        <div v-if="show" class='placehold'>
        <i class='ion-ios-search'></i>
        <p>Найдите что-нибудь</p>
</div>
    </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                results: [],
                update: '',
                genre: '',
                inp: ' ',
                show: true,
                genres: ['rock', 'rap', 'house', 'alternative', 'pop', 'indie']


            }
        },
        mounted() {
            window.scrollTo(0, 0);
            this.$root.$on('updateTracks', (data) => { this.update = data });
        },
        methods: {

            playTrack(e) {
                var x = e.target.parentNode.getAttribute('data-src');
                this.$root.$emit('setPlay', x);
                var block = e.target.parentNode.parentNode;
                var signer = block.children[3].textContent;
                var song = block.children[2].textContent;
                var link = block.children[2].getAttribute('data-link');
                var bg = block.children[1].style.backgroundImage;
                var collect = [signer, song, bg, link];
                this.$root.$emit('checkPlay', collect)
            },
            State() {
                this.$root.$emit('State', false);
            },

            addFav(e) {
                var local = localStorage.getItem('local');
                local == undefined || null ? local = [] : local = JSON.parse(local);

                var block = e.target.parentNode.parentNode;
                var signer = block.children[3].textContent;
                var song = block.children[2].textContent;
                var link = block.children[3].getAttribute('data-link');
                var background = block.children[1].getAttribute('style');
                var src = block.children[1].getAttribute('data-src');
                var genre = block.getAttribute('genre');
                var obj = { signer: signer, song: song, background: background, src: src, link: link };
                local.push(obj);
                local = JSON.stringify(local);
                localStorage.setItem('local', local)

            },
            sendData() {
                this.$root.$emit('Load', true);
                this.show = false;
                var inp = JSON.stringify(this.inp);
                axios.post('search', inp)
                    .then((res) => {

                        this.results = res.data;
                        this.$root.$emit('Load', false);
                    })



            },
            sendGenre(e) {
                this.$root.$emit('Load', true);
                this.show = false;
                var inp = JSON.stringify(e.target.textContent);
                axios.post('search', inp)
                    .then((res) => {

                        this.results = res.data;
                        this.$root.$emit('Load', false);
                    })



            }


        },
        filters: {
            trimm(d) {
                return d.trim()
            }
        }

    }
</script>

<style scoped>
    input {
        position: absolute;
    }

    .wrap {
        position: relative;
        top: 100px;

    }

    .placehold {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -180px;
        color: white;
    }

    .placehold i {
        font-size: 100px;
    }

    .placehold p {
        font-weight: bold;
    }

    .addFav {
        position: relative;
    }

    .song {
        font-size: 10px;
        margin: 5px;
        width: 25%;
    }

    .signer {
        font-size: 10px;
        margin: 5px;
        width: 25%;
    }

    .playbutton {
        margin: 5px;
    }
</style>
