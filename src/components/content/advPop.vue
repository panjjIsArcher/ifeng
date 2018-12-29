<template>
    <div class="advPop">
        <!-- 图片 -->
        <div>
            <a href=""><img :src="require('../../img/永清融创城.jpg')" alt=""></a>
        </div>
        <div @click="close($event)">关闭</div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    methods:{
        close:function(event){
            $(event.target).parent().css("display","none")
        }
    },
    mounted(){
        setTimeout(function(){
            $(".advPop").animate({
                bottom:0
            })
        },10000)
    }
}
</script>
<style>
.advPop{
    height:250px;
    width:300px;
    z-index: 1000;
    float: right;
    position: fixed;
    right: 0;
    bottom: -250px;
}
.advPop img{
    width: 100%;
    height: 100%;
}
.advPop>div:last-child{
    float: right;
    z-index: 3;
    position: absolute;
    right: 0;
    top:0;
    height: 16px;
    width: 35px;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
}
</style>