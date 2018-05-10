<template>
    <div class='center' @click='State'>
       
    <div class='wrap'>
    
        <div class='block' v-for='track in tracklist' :genre='track.genre'>
            <div class='addFav' @click='addFav'><i class='ion-plus'></i></div>
            <div class='bg' @click='playTrack' :style="{backgroundImage:'url(\''+track.background+'\')'}" :data-src='track.src'></div>
            
            <!--<div class='song'>{{track.song}}</div>-->
            <router-link :data-link='track.link' :to='track.link' class='song'>{{track.song}}</router-link>
            <router-link :data-link='track.link' :to='track.link' class='signer'>{{track.signer}}</router-link>
        </div>

        
    </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import resource from 'vue-resource';
    import Vue2Filters from 'vue2-filters'
    import axios from 'axios';
    Vue.use(Vue2Filters)
    export default {
        data() {
            return {
                tracklist: [],
                tracklist1: [],
                update: '',
                genre: '',
                route: ''



            }
        },
        mounted() {
            this.$root.$emit('Load', true);
            if (this.$route.path == '/') {
                this.$http.get('tracks')
                    .then((res) => {
                        this.tracklist = res.body;
                        this.$root.$emit('Load', false);
                    });
            }
            else{
                this.loadTracks()
            }
            this.$root.$on('updateTracks', (data) => { this.update = data; });
        },
        methods: {

            playTrack(e) {
                var x = e.target.getAttribute('datВa-src');
                this.$root.$emit('setPlay', x);
                var block = e.target.parentNode;
                var signer = block.children[3].textContent;
                var song = block.children[2].textContent;
                var link = block.children[2].getAttribute('data-link')
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
                var background = block.children[1].getAttribute('style');
                var link = block.children[3].getAttribute('data-link');
                var src = block.children[1].getAttribute('data-src');
                var genre = block.getAttribute('genre');
                var obj = { signer: signer, song: song, background: background, src: src, link: link };
                local.push(obj);
                local = JSON.stringify(local);
                localStorage.setItem('local', local)

            },
            loadTracks() {
                this.$root.$emit('Load', true);
                window.scrollTo(0, 0);





                var genre = this.$route.params.genre;
                console.log(genre)
                if (genre == undefined) { genre = '' }
                var inp = JSON.stringify(genre);
                axios.post('switchgenre', inp)
                    .then((res) => {

                        this.tracklist = res.data
                        this.$root.$emit('Load', false);

                    })
            }


        },
        filters: {
            trimm(d) {
                return d.trim()
            }
        },
        watch: {
            '$route' () {
                this.loadTracks()


            }
        }

    }
</script>
