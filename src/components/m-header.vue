<template>
    <div class="m-header">
        <input 
        class="search-field"
        type="text"
        v-model="searchValue"
        >
        <button 
        class="btn"
        @click="search(searchValue)" >search</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        name:'m-header',
        data(){
            return{
                searchValue:'',
            }
        },
        methods:{
            ...mapActions(['GET_SEARCH_VALUE']),
            search(value){
                this.GET_SEARCH_VALUE(value)
            }
        },
        computed:{
 
        }
    }
</script>

<style>
.m-header{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(163, 163, 163);
    padding: 16px;
}
.search-field{
    padding: 3px;
    color: rgb(0, 0, 0);
    background: #ffffffe7;
    border:1px solid black;
    margin-right: 10px;
}
</style>