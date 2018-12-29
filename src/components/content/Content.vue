<template>
    <!-- 内容 -->
    <div class="content"> 
    <!-- 垂直导航栏 -->
        <nav-vertical></nav-vertical>
    <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href=""><img src="../../img/金和喜.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href=""><img src="../../img/融创九樾府.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href=""><img src="../../img/金和喜.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href=""><img src="../../img/融创九樾府.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href=""><img src="../../img/金和喜.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href=""><img src="../../img/融创九樾府.jpg" alt=""></a></div>
                </div>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 导航按钮 -->
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
    <!-- 滚动新闻 -->
        <div class="scroll-news">
            <span>今日新闻：</span>
            <div class="content-news">
                <ul>
                    <li v-for="item in Scrollnews"><a href="">{{item.list}}</a></li>
                </ul>
            </div>
        </div>
    <!-- 4个小新闻 -->
        <div>
            <little-news></little-news>
        </div>
    <!-- 资讯 -->
        <News></News>
    <!-- 新房-->
    <house-list></house-list>
    <!-- 二手房 -->
    <old-house></old-house>
    <!-- 商业地产 -->
        <Office></Office>
    <!-- 会员中心 -->
        <Vip></Vip>
    <!-- 底部广告弹窗 -->
        <adv-pop></adv-pop>
    </div>
</template>
<script>
import Vue from 'vue'
import News from './News'
import LittleNews from "./LittileNews"
import NewHouse from "./NewHouse"
import secondhouse from "./secondhouse"
import NavVertical from "./NavVertical"
import Office from "./Office"
import Vip from "./Vip"
import advPop from "./advPop"
import HouseList from "./HouseList"
import OldHouse from "./oldhouse"
import $ from 'jquery'
var Swiper=require('swiper')
export default {
    name:"Content",
    data(){
       return{
        Scrollnews:[],
        LN:[],
        }
    },
    created(){
        this.$axios.get("api/content-news").then((response) => {
           this.Scrollnews = response.data;
        }).catch((error) => {
            console.log(err)
        });
        var mySwiper = document.getElementsByClassName('swiper-container').swiper;
        // var mySwiper = new Swiper(".swiper-container",{
        //     speed:300,
        //     pagination: '.swiper-pagination',
        //     nextButton: '.swiper-button-next',
        //     prevButton: '.swiper-button-prev',
        //     autoplay: {
        //         delay: 1000,
        //     },
        //     loop:true
        // })
        
    },
    components:{LittleNews,News,NewHouse,NavVertical,Office,Vip,advPop,HouseList,OldHouse},
    }
function scroll() {
    $(".content-news ul").animate({"margin-left":"-318px"},10000,function() {
        $(".content-news ul li:eq(0)").appendTo($(".content-news ul"));
        $(".content-news ul").css({"margin-left": 0});
    });
}
var scrolling = setInterval(scroll,5000);

$('.content-news').hover(function() {
    clearInterval(scrolling);
}, function() {
    scrolling = setInterval(scroll,2000);
    
});

</script>
<style>
/* 滚动新闻 */
.scroll-news{
    height: 24px;
    overflow: hidden;
    margin-top: 4px;
    text-align: center;
    float:left;
    width: 100%;
}
.scroll-news span{
    width: 10%;
    float: left;
    text-align: center;
    font-size: 13px;
}
.scroll-news div{
    float: left;
    width: 80%;
    height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: #eaeaea;
    border-radius: 10px;
}
.scroll-news ul{
    margin: 0;
    overflow: hidden;
    height: 24px;
    word-break:keep-all;
    width: 140%;
}
.scroll-news li{
    display:inline-block;
    padding: 0 6px;
    list-style: none;
    width: 305px;
    white-space:nowrap; 
}
.scroll-news a{
    color:black;
}
/* 轮播图 */
.swiper-container{
    float: left;
    width:100%;
}
.swiper-container img{
    width: 100%;
    height: 100%;
}
</style>