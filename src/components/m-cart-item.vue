<template>
    <div class="m-cart-item">
        <img class="m__catalog__item__img" :src="require('../assets/images/'+ cart_item_data.image)" alt="img"> 
        <div class="m-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} Р.</p>
                 <p>{{cart_item_data.article}}</p>
            <div>
               
               
            </div>
            
        </div>
         <div class="cart_item__quantity"> <p>Qty: </p>
         <span>
             <span  class="quantity__btn" @click="decrementItem">-</span>
             {{cart_item_data.quantity}}
             <span class="quantity__btn" @click="incrementItem">+</span>
         </span>
         </div>
          <button @click="deleteFormCart">DELETE</button>
    </div>
</template>

<script>
    export default {
        name:'m-cart-item',
        props: {
            cart_item_data:{
                type:Object,
                default(){ return{}}
            }
        },
      
        methods: {
            deleteFormCart(){
                this.$emit('deleteFromCart')
            },
            decrementItem(){
                this.$emit('decrementItem')
            },
            incrementItem(){
                 this.$emit('incrementItem')
            },
      
        }
    }
</script>

<style >
.m-cart-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
       box-shadow: 0 0 8px 0 rgb(189, 188, 188);
    padding: 16px;
    margin-bottom: 16px;
}
.quantity__btn{
    cursor:pointer;
}
.m-cart-item__info{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>