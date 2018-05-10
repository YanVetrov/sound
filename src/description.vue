<template>
    <div class='window'>
        <div class='descr'>
            <div class='descr-bg' :style="{backgroundImage:'url(\''+ img +'\')'}"></div>
            <h3>{{name}}</h3>
            <div class='favorite' style='margin:10px;'>
    
        <div class='block'>
            <div class='addFav' @click='addFav'><i class='ion-plus'></i></div>
            <div class='bg' @click='playTrack' :style="{backgroundImage:'url(\''+original.background+'\')'}" :data-src='original.src'></div>
            
            <div :data-link='original.link'  class='song'>{{original.song}}</div>
            <div :data-link='original.link'  class='signer'>{{original.signer}}</div>
            <div class='playbutton' :data-src='original.src' @click='playTrack'><i class='ion-ios-play'></i></div>
        </div>
     </div>
            <div v-html='descrSigner'></div>
        
<div class='favorite'>
    <h3 style='color:silver;font-style:italic;' >{{mes}}</h3>
        <div class='block' v-for='track in filterBy(tracklist, update)' :genre='track.genre'>
            <div class='addFav' @click='addFav'><i class='ion-plus'></i></div>
            <div class='bg' @click='playTrack' :style="{backgroundImage:'url(\''+track.background+'\')'}" :data-src='track.src'></div>
            
            <router-link :data-link='track.link' :to='track.link' class='song'>{{track.song}}</router-link>
            <router-link :data-link='track.link' :to='track.link' class='signer'>{{track.signer}}</router-link>
            <div class='playbutton' :data-src='track.src' @click='playTrack'><i class='ion-ios-play'></i></div>
        </div>
     </div>
     
        </div>

    </div>

    
</template>


<script>
    import axios from 'axios';
    export default {

        data() {
            return {
                descrSigner: '',
                tracklist: [],
                update: '',
                img: '',
                name: '',
                mes: '',
                original:''
            }

        },

        mounted() {
            this.$root.$emit('Load', true);
            window.scrollTo(0, 0);
            var signer = this.$route.params.id;
            var genre = this.$route.params.genre;
            var inp = JSON.stringify('/' + genre + '/' + signer);
            axios.post('description', inp)
                .then((res) => {

                    this.descrSigner = res.data.descr;
                    this.img = res.data.src
                    this.name = res.data.name
                    this.original = res.data.track;
                    this.tracklist = res.data.tracklist;
                    this.$root.$emit('Load', false);
                    this.mes = 'Возможно вас заинтересует'
                })



        },
        methods: {
            addFav(e) {
                var local = localStorage.getItem('local');
                local == undefined || null ? local = [] : local = JSON.parse(local);

                var block = e.target.parentNode.parentNode;
                var signer = block.children[3].textContent;
                var song = block.children[2].textContent;
                var background = block.children[1].getAttribute('style');
                var link = block.children[3].getAttribute('data-link');
                var src = block.children[1].getAttribute('data-src');
                var obj = { signer: signer, song: song, background: background, src: src, link:link };
                local.push(obj);
                local = JSON.stringify(local);
                localStorage.setItem('local', local)

            },
            playTrack(e) {
                var x = e.target.parentNode.getAttribute('data-src');
                this.$root.$emit('setPlay', x);
                var block = e.target.parentNode.parentNode;
                var signer = block.children[3].textContent;
                var song = block.children[2].textContent;
                var bg = block.children[1].style.backgroundImage;
                var link = block.children[3].getAttribute('data-link');
                console.log(block.children[3])
                var collect = [signer, song, bg, link];
                this.$root.$emit('checkPlay', collect);
            }
        },
        filters: {
            trimm(d) {
                return d.trim()
            }
        },


        watch: {

            '$route' () {
                this.$root.$emit('Load', true);
                window.scrollTo(0, 0);
                this.okheight = '1000px'



                var signer = this.$route.params.id;
                var genre = this.$route.params.genre;
                var inp = JSON.stringify('/' + genre + '/' + signer);
                axios.post('description', inp)
                    .then((res) => {
                        console.log(res);
                        this.descrSigner = res.data.descr;
                        this.img = res.data.src
                        this.name = res.data.name
                        this.tracklist = res.data.tracklist
                        this.$root.$emit('Load', false);
                    })

            }
        }

    }
</script>


<style type="text/css" scoped>
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
