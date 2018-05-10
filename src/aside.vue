<template>
    <transition name='slide'>
    <aside v-show='asideShow'>
        
                 
            <router-link @click='asideShow=!asideShow' to='/' exact class='list'>Все</router-link>
            <router-link @click='asideShow=!asideShow' :to='genree.link' class='list' v-for='genree in genres'>{{ genree.genre }}</router-link>
        
    </aside>
    </transition>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                tracks: '',
                asideShow: false,
                genres: ''
            }
        },
        mounted() {
            this.$root.$on('State', (val) => {
                if (val == undefined) {
                    this.asideShow = !this.asideShow
                }
                else {
                    this.asideShow = val;
                }
            });

            this.$root.$emit('Load', true);
            axios.get('navigation')
                .then((res) => {
                    this.genres = res.data;
                    this.$root.$emit('Load', false);

                })
        },
        methods: {
            search() {
                this.$root.$emit('updateTracks', this.tracks)
            }
        }
    }
</script>
