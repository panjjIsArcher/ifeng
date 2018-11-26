<template>
    <div class="nav-vertical" id="navVertical" >
        <ul>
            <li @click="scrollTo('.scroll-news')"><span class="guide-img guide-img-one"></span>资讯</li>
            <li @click="scrollTo('.video')"><span class="guide-img guide-img-two"></span>视频</li>
            <li @click="scrollTo('.NewHouse')"><span class="guide-img guide-img-three"></span>新房</li>
            <li @click="scrollTo('.Secondhouse')"><span class="guide-img guide-img-four"></span>二手房</li>
            <li @click="scrollTo('.bussiness')"><span class="guide-img guide-img-five"></span>商铺</li>
            <li @click="scrollTo('.vip')"><span class="guide-img guide-img-six"></span>会员中心</li>
        </ul>
    </div>
</template>
<script>
import $ from "jquery" ;
export default {
    name:"NavVetical",
    mounted(){
    },
    methods:{
         scrollTo:function(param){
            $("html,body").finish().animate({"scrollTop":$(param).offset().top},500);
            $("#navVertical").finish().animate({"scrollTop":$(param).offset().top},500);
    }
    } 
}
</script>
<style>
.nav-vertical{
    width: 4%;
    float: right;
    text-align: center;
    position: absolute;
    right: 0;
    top:543px;
    z-index: 3;
}
.guide-img{
    background-size: 100% 100%;
    height:50px;
    width:50px;
    display: inline-block;
    margin-top: 10px;
}
.guide-img-one{
    background-image: url('../../img/bookblack.png');
}
.guide-img-two{
    background-image: url('../../img/videoblack.png');
}
.guide-img-three{
    background-image: url('../../img/newhouseblack.png');
}
.guide-img-four{
    background-image: url('../../img/oldhouseblack.png');
}
.guide-img-five{
    background-image: url('../../img/officeblack.png');
}
.guide-img-six{
    background-image: url('../../img/vipblack.png');
}
.nav-vertical li{
    list-style: none;
    font-size: 12px;
    border-top: 0.5px solid #edecec;
    height: 80px
}
.visibility{
    visibility:hidden;
}
</style>
