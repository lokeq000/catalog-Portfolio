<template>
    <div class="m-notification">
        <transition-group
        name='v-transition-animate'
        class='messsages_list'
        >
           <div 
        class="v-notification__content"
        v-for="message in messages"
        :key='message.id'
        >
            <div class="content__text">
                <span>{{message.name}}</span>
            </div>
            <div class="content_buttons">
                <button v-if="rightButtom.length">{{rightButtom}}</button>
                <button v-if="leftButtom.length">{{leftButtom}}</button>
            </div>
        </div>
        </transition-group>
     
    </div>
</template>

<script>
    export default {
         name: 'm-notification',
        props:{
            messages:{
                type:Array,
                default:()=>{
                    return []
                }
            },
            rightButtom:{
                type: String,
                default: ''
            },
             leftButtom:{
                type: String,
                default: ''
            },
            timeout:{
                type: Number,
                default: 3000
            }
        },
        methods:{
            hideNotification(){
                let vm = this;
                if (this.messages.length){
                    setTimeout(function(){
                    vm.messages.splice(vm.messages.length - 1, 1)
                }, vm.timeout)
                }
              
            }
        },
        watch:{
            messages(){
                this.hideNotification()
            }
        },

    }
</script>

<style >
/* lang="scss" */
.m-notification{
    position: fixed;
    top: 80px;
    right: 16px;
    z-index:10;
}
.v-notification__content{
    background: green;
    padding: 16px;
    border-radius: 4px;
    color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
}
.content__text{
     display: flex;
    justify-content: space-between;
    align-items: center;
}

/* // .v-transition-animate{
//     &-enter{
//         transform: translateX(120px);
//         opacity: 0;
//     }
//     &-enter-active{
//         transition: all .6s ease;
//     }
//     &-enter-to{
//         opacity: 1;
//     }
//     &-leave{
//         height: 50px;
//         opacity: 1;
//     }
//     &-leave-active{
//         transition: transform .6s ease, opacity .6s, height .6s .2s ;
//     }
//     &-leave-to{
//         height: 0;
//         transform: translateX(120px);
//         opacity: 0;
//     } */
    .v-transition-animate-enter{
        transform: translateX(120px);
        opacity: 0;
    }
    .v-transition-animate-enter-active{
        transition: all .6s ease;
    }
    .v-transition-animate-enter-to{
        opacity: 1
    }
    .v-transition-animate-leave{
         height: 50px;
        opacity: 1;
    }
    .v-transition-animate-leave-active{
        transition: transform .6s ease, opacity .6s, height .6s .2s ;
    }
    .v-transition-animate-leave-to{
        height: 0;
        transform: translateX(120px);
        opacity: 0;
    }
    .v-transition-animate-move{
        transition: transform .6s ease;
    }

</style>