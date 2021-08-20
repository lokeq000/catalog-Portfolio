<template>
     <div class="m-popup-wrapper">
    <div class="m-popup">
   
    <div class="m-popup__header"> 
            <span>{{popupTitle}}</span>
            <span @click="closePopup">cancel</span>
        </div>
        <div class="m-popup__content">
            <slot></slot>
         </div>
        <div class="m-popup__footer"> 
               <button 
               class="close__btn" 
               @click="closePopup" 
               >Close</button>
            <button class="submit_btn"
            @click='btnclick'
            >{{rightBtnTitle}}</button>
        </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        name:'m-popup',
        props:{
            popupTitle:{
                type:String,
                default:'default'
            },
            rightBtnTitle:{
                type:String,
                default:'Ok'
            }
        },
          methods: {
              btnclick(){
                  this.$emit('btnclick')
              },
        closePopup(){
            this.$emit('closePopup')
        }
    },
    }
  
</script>

<style>
    .m-popup-wrapper{
        background: #e7e7e7e7;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .m-popup{
        position: fixed;
        top: 50px;
        width: 400px;
        padding: 16px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7e7;
    }
    .m-popup__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .m-popup__footer{
         display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .m-popup__content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submit_btn{
        padding: 8px;
        color: #ffffff;
        background: rgb(130, 245, 119);
        border:1px solid #ffffff;
    }
    .close__btn{
         padding: 8px;
        color: #ffffff;
        background: rgb(253, 163, 163);
        border:1px solid #ffffff;
    }
</style>