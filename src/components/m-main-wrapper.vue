<template>
    <div class="v-main-wrapper">
        <m-header/>
        <div class="container">
         <keep-alive>
           <router-view>

        </router-view>
        </keep-alive>
        </div>
      
     
    <!-- json-server --watch bd.json подключение каталога товаров -->
    </div>
</template>

<script>
import mHeader from './m-header.vue'

    export default {
  components: { mHeader },

        name:'v-main-wrapper',
        props:{},
        data(){
            return{
     
            }
        },
        computed:{

        },
        methods:{
        },
        watch:{}
    }
</script>

<style>
*{
    margin:0;
}
.v-main-wrapper {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
    margin: 0 auto;
}
.container{
      max-width: 900px;
         margin: 0 auto;
}
</style>