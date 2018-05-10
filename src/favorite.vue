
<template>
<div class='centerFav' @click='State'>
    <div class=' favorite'>
        <!--<div class='favoriteBar'>-->
        <!--    <div class='addPlaylist'><i class='ion-plus'></i></div>-->
        <!--    <div class='changePlaylist'><i class='ion-ios-more'></i></div>-->
        <!--    </div>-->
        <div class='block' v-for='track in tracklist'>
            <div class='bg' @click='playTrack' :style='track.background'  :data-src='track.src'></div>
            <router-link :data-link='track.link' :to='track.link' class='song'>{{track.song}}</router-link>
            <router-link :data-link='track.link' :to='track.link' class='signer'>{{track.signer}}</router-link>
            <div class='playbutton' :data-src='track.src' @click='playTrack'><i class='ion-ios-play'></i></div>
        </div>

    </div>
</div>

</template>
<script>
    export default {
        data() {
            return {
                tracklist: [],
                update: '',
                genre: ''



            }
        },
        mounted() {
            window.scrollTo(0, 0);
            var local = localStorage.getItem('local');
            local == undefined || null ? local = [] : false;
            local = JSON.parse(local)
            this.tracklist = local;
            this.$root.$on('updateTracks', (data) => { this.update = data });
        },
        methods: {

            playTrack(e) {
                var x = e.target.parentNode.getAttribute('data-src');
                this.$root.$emit('setPlay', x);
                var block = e.target.parentNode.parentNode;
                var signer = block.children[2].textContent;
                var song = block.children[1].textContent;
                var link = block.children[1].getAttribute('data-link');
                var bg = block.children[0].style.backgroundImage;
                var collect = [signer, song, bg,link];
                this.$root.$emit('checkPlay', collect)
            },
            State() {
                this.$root.$emit('State', false);
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
    .block{
        
        
        width:94vw;
    }
    
    
    
    
    
</style>