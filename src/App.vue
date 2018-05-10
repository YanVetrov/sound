<template>
  <div id="app">
   <app-header></app-header>
   <app-aside ></app-aside>
   <pulse-loader style='position:fixed;left: 44%;top:50%;':loading="loading" color="silver" size="15px"></pulse-loader>
   <transition :name='transitionName'>
   <router-view></router-view>
   </transition>
   <app-footer></app-footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import resource from 'vue-resource';
  import head from './head.vue';
  import aside from './aside.vue';
  import center from './center.vue';
  import footer from './foot.vue';
  import VueRouter from 'vue-router';
  import description from './description.vue';
  import favorite from './favorite.vue';
  import popular from './popular.vue';
  import PulseLoader from 'vue-spinner/src/ScaleLoader.vue'
  import vueSlider from 'vue-slider-component'
  Vue.component('app-header', head);
  Vue.component('app-aside', aside);
  Vue.component('app-center', center);
  Vue.component('app-footer', footer);
  Vue.component('app-favorite', favorite);
  Vue.component('app-popular', popular);
  Vue.component('app-description', description);
  Vue.component('pulse-loader', PulseLoader);
  Vue.component('vue-slider',vueSlider);
  Vue.use(resource);
  Vue.use(VueRouter);

  const routes = [
    { path: '/popular', component: popular },
    { path: '/favorite', component: favorite },
    { path: '/:genre/:id', component: description },
    { path: '/:genre', component: center },
    { path: '/', component: center }
  ]

  const router = new VueRouter({
    routes
  })

  export default {
    router,
    name: 'app',
    data() {
      return {
        url: 'tracklist.json',
        transitionName: '',
        loading:true

      }
    },
    methods: {
      getTracks() {
        this.$http.get(this.url)
          .then(
            (res) => console.log(res),
            (rej) => console.log(rej)

          )
      },


    },
    mounted(){
      this.$root.$on('Load',(data)=>{this.loading = data})
      
      
      
      
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.length
        const fromDepth = from.path.length
        console.log(`${toDepth} ${fromDepth}`)
        this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left';
        to.path == '/favorite' ? this.transitionName = 'slide' : false;
        from.path == '/favorite' ? this.transitionName = 'slide' : false;
      }
    }
  }
</script>















<style>
</style>
