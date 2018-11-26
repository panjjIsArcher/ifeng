<template>
    <div class="adv-bottom" >
        <span @mouseover="rotate($event)" @click="close($event)" id="close">X</span>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    methods:{
        rotate:function(e){
           
        },
        close:function(e){
            let leng=$(e.target).parent().width()*(-1);
            $(e.target).parent().animate({left:leng+"px"},1000)
        }
    },
    mounted(){
        let leng=$(".adv-bottom").width()*(-1);
        $(".adv-bottom").css("left",leng+"px")
        setTimeout(function(){
           $(".adv-bottom").animate({
                left:0
            },1000)
        },1.2E5)
    }
}
</script>

<style>
.adv-bottom{
    background-image: url('../../img/adv.png');
    height: 130px;
    z-index: 60;
    position:fixed;
    width:100%;
    bottom:0;
}
.adv-bottom>span{
    z-index: 51;
    position:fixed;
    bottom: 90px;
    display: inline-block;
    height: 26px;
    width: 26px;
    font-size: 30px;
    padding-left: 10px;
    color: white;
}
</style>