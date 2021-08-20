<template>
    <div class="m-catalog-item">

        <m-popup 
        v-if="isInfoPopupVisible"
        @closePopup="closePopup"
        :rightBtnTitle="'Add to cart'"
        :popupTitle='product.name'
        @btnclick='addToCart'
        >
        <img class="m__catalog__item__img" :src="require('../assets/images/'+ product.image)" alt="img">
        <div class="popup_description">
        <p>{{product.name}}</p>
        <p>price: {{product.price}} Р.</p>
        <p>{{product.category}}</p>
        </div>

        </m-popup>


        <img class="m__catalog__item__img" :src="require('../assets/images/'+ product.image)" alt="img">
        <p>{{product.name}}</p>
        <p>price: {{product.price}} Р.</p>
        <button
        
            class="btn btn_show_info"
            @click="showPopupInfo"
        >Show info</button>
        <button class="btn" @click="addToCart">Add to cart</button>
    </div>
</template>

<script>
import mPopup from '../components/popup/m-popup.vue'
    export default {
        components:{mPopup},
        name:"m-catalog-item",
        props:{
           product:{
               type:Object,
               default(){
                   return{}
               }
           },
          
        },
        data(){
            return{
                isInfoPopupVisible: false
            }
        },
     
        methods: {
            showPopupInfo(){
                this.isInfoPopupVisible = true
            },
            closePopup(){
                this.isInfoPopupVisible = false
            },
               addToCart(){
                  this.$emit('addToCart', this.product) 

               }
           },
    }
</script>

<style>
.m-catalog-item {
    flex-basis: 25%;
    display: flex;
    justify-content: spacqe-between;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 8px 0 rgb(189, 188, 188);
    padding: 16px;
    margin-bottom: 16px;
}
.btn{
    text-transform: uppercase;
    background-color: #ffffff;
    border: 1px solid #474747;
    transition: background-color 0.2s linear;
    border-radius: 3px;
}
.btn:hover {
    background-color: #e7e7e7;
}
.m__catalog__item__img{
    width: 120px;
    height: 150px;
}
.btn_show_info{
    font-size: 10px;
    margin-bottom: 10px;
}
.popup_description{
    margin-left: 15px;
}
</style>