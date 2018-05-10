<template>
    <div>
    <header :style='{position: scroll}'>
        
        <i class='ion-ios-arrow-back' @click='back'></i>
               
                <i class='ion-fireball'></i>
        <i class='ion-navicon' @click='changeShow'></i>
    </header>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                path: 'kekek',
                scroll: '',
                route: ''
            }
        },

        methods: {
            changeShow(e) {
                this.$root.$emit('State');
            },
            back() {
                this.$router.go(-1);
            }
        },
        // mounted() {
        //     this.$root.$on('setPlay', (src) => { this.path = src })

        // },
        watch: {
            '$route' () {
                this.route = this.$route.params.id
            }
        }
    }
</script>
