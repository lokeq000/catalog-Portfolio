<template>
    <div class="m-cart">
         <router-link :to='{name: "catalog"}'>
           <div class="v-catalog__link">Back to catalog</div>
        </router-link>
        <h1 class="cart_name">CART</h1>
        <m-cart-item
        v-for="(item, ind) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(ind)"
        @incrementItem='incrementItem(ind)'
        @decrementItem='decrementItem(ind)'
        />
        <div class="m-cart-total">
            <p class="total-name">total :</p>
            <p>{{cartTotalPrice}} Р.</p>
        </div>
    </div>
</template>

<script>
import mCartItem from './m-cart-item.vue'
import {mapActions} from 'vuex'
    export default {
  components: { mCartItem },
        name:'m-cart',
        props:{
            cart_data:{
              type:Array,
            default(){return []},
            }
        
        },
        computed:{
            cartTotalPrice(){
                let result = [];
                if (this.cart_data.length){
                  for (let item of this.cart_data){
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function(sum, el){
                    return sum + el;
                })
               return result
            }
             else {return 0}
                }
            
        },
        methods:{
            incrementItem(ind){
                this.INCREMENT_CART_ITEM(ind)
            },
             decrementItem(ind){
                this.DECREMENT_CART_ITEM(ind)
            },
            deleteFromCart(ind){
                this.DELETE_FROM_CART(ind)
            },
            ...mapActions([
                'DELETE_FROM_CART','DECREMENT_CART_ITEM', 'INCREMENT_CART_ITEM'
            ])
        }
    }
</script>

<style >
.m-cart-total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 15px;
    display: flex;
    justify-content: center;
    background: rgb(163, 163, 163);
    color: #fff;
    font-size: 20px;
}
.total-name{
    margin-right: 16px;
}
.cart_name{
    display: flex;
    justify-content: center;
}
</style>