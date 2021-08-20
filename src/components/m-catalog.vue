<template>
    <div class="m-catalog">
      
        <router-link :to='{name: "cart", params: {cart_data: CART}}'>
           <div class="v-catalog__link">Cart: {{CART.length}}</div>
        </router-link>
       
        <div class="m-catalog-title"><h1 class="catalog__title">catalog</h1></div>
           <m-select
    :options='options'
    @select="selectOption"
    :selected="selected"
    />
        <div class="catalog__item">
        <m-catalog-item 
        v-for="product in filteredProducts" 
        :key="product.article"
        :product="product"
        @addToCart='addToCart'
        />
        </div>


        <m-notification
        :messages='messages'
        />
     
    </div>
</template>

<script>
import mSelect from './m-select.vue'
import mCatalogItem from './m-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
import MNotification from './notifications/m-notification.vue'
    export default {
  components: { mCatalogItem, mSelect, MNotification },
   name:'m-catalog',
  data(){
      return {

         options:[
                  {name: 'Все', value: 'ALL'},
                 {name: 'Мужские', value: 'm'},
                 {name: 'Женские', value: 'ж'},
                ],
                selected:'Все',
                sortedProducts:[],
          messages:[
            
          ]
      }
  },
    methods: {

       selectOption(option){
                this.selected = option.name;
                this.sortedProducts = [];
                if (this.selected === 'Все') {
                    this.sortedProducts = this.PRODUCTS
                }
                let vm =this;
                this.PRODUCTS.map(function(item){
                  if(item.category === option.name){
                    vm.sortedProducts.push(item)
                  }
                })
            },
      ...mapActions([
       'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
      ]),
      addToCart(data){
              this.ADD_TO_CART(data)
              .then (()=>{
                let timeStemp = Date.now().toLocaleString();
                this.messages.unshift(
                  {name:'Товар добавлен в корзину', id: timeStemp}
                )
              })
      },
      sortedProductsBySearch(value){
         this.sortedProducts = this.PRODUCTS
        if (value){
          
        this.sortedProducts = this.sortedProducts.filter(function(item){
          return item.name.toLowerCase().includes(value.toLowerCase())
        })

        } else{
          this.sortedProducts = this.PRODUCTS
        }
     
      }

    },
    watch:{
      SEARCH_VALUE(){
        this.sortedProductsBySearch(this.SEARCH_VALUE)
      } 
    },
    computed:{
      filteredProducts(){
        if (this.sortedProducts.length){
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
      ...mapGetters(['PRODUCTS', "CART",'SEARCH_VALUE'])
    },
    mounted(){
      this.GET_PRODUCTS_FROM_API()

    }
       
       
    }
</script>

<style>
.m-catalog-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    margin-top: 10px;
}
.catalog__item{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: center;
}
.v-catalog__link{
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 10px;
  color: #fff;
  border: solid 1px rgb(185, 185, 185);
  transition: all .2s linear;
}
.v-catalog__link:hover{
  background: rgb(252, 252, 252);
  color: rgb(0, 0, 0);
}

</style>