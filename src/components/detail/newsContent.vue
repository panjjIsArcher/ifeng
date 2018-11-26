<template>
    <div class="wleftfixbar">
        <!-- 为您推荐 -->
        <div class="recommendForU">
            <h3><span>为您推荐</span></h3>
            <ul class="wleftfixbar-list">
                <li v-for="value in recommendList"><a href="">{{value}}</a></li>
            </ul>
        </div>
        <!-- 新闻列表 -->
        <div class="ctrlbox">
            <h3>全部资讯</h3>
            <span class="ttlp">{{nowWeek}}</span>
            <span class="ttlp">{{nowDate}}</span>
            <!-- 轮播图 -->
            <div class="lbbox">
                <a href=""><img :src="require('../../img/lb4.jpg')"></a>
            </div>
            <!-- 新闻列表 -->
            <div class="news-box">
                <div v-for="item in newslist" class="piece-news">
                    <div class="newsleft"><img :src="require('../../img/bak.jpg')"></div>
                    <div class="newsright">
                        <router-link to="news/detail">
                            <span class="news-title">{{item.title}}</span>
                        </router-link>
                        <span class="news-hot" v-show="item.hot">热</span>
                        <p class="news-content">{{item.content}}</p>
                        <span class="news-date">{{item.day}}</span>
                        <div class="news-span">
                            <span v-for="value in item.span" >{{value}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 广告 -->
        <div class="crtgbox">
            <div class="adv-pic">
                <div>
                <a href=""><img :src="require('../../img/pjd.jpg')" alt=""></a>
                <span class="adv-span-first">广告</span>
                </div>
                <div>
                <a href=""><img :src="require('../../img/pjd.jpg')" alt=""></a>
                <span class="adv-span-second">广告</span>
                </div>
            </div>
            <!-- 48小时热文 -->
            <div class="hotNews">
                <h3>48小时热文排行</h3>
                <div>
                    <ul>
                        <li v-for="(item,index) in hotNews" @mouseover="turnToRed($event,index)"><a href=""><span>{{index}}.</span>{{item.title}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import detail from "./Detail"
export default {
    data(){
        return{
            recommendList:["政策","市场","二手房","房企动态","置业指南","楼盘导购","独家","土地","观点","图图说房","更多"],
            lbList:[],
            lbIndex:0,
            nowDate:"",
            nowWeek:"",
            newslist:Array,
            hotNews:Array,
            show:true
        }
    },
    methods:{
        turnToRed:function(event,index){
            $(event.target).children().children().addClass("listIndex")
            $(event.target).siblings().children().children().removeClass("listIndex")
        }
    },
    created(){
        let week=new Date().getDay();
        switch(week){
            case 0:
            this.nowWeek="星期日";
            break;
            case 1:
            this.nowWeek="星期一";
            break;
            case 2:
            this.nowWeek="星期二";
            break;
            case 3:
            this.nowWeek="星期三";
            break;
            case 4:
            this.nowWeek="星期四";
            break;
            case 5:
            this.nowWeek="星期五";
            break;
            default:
            this.nowWeek="星期六";
            break;
        }
        let day=new Date(),Month=day.getMonth()+1
        this.nowDate=day.getFullYear()+"-"+Month+"-"+day.getDate();
        
    },
    mounted(){
        this.$axios.get("api/newsList").then((res)=>{
            this.newslist=res.data;
        }).catch((err)=>{
            console.log("error")
        });
        this.$axios.get("api/hot-news").then((res)=>{
            this.hotNews=res.data;
        }).catch((err)=>{
            console.log("error")
        })
    },
}
</script>
<style>
.recommendForU{
    float: left;
    text-align: center;
}
.recommendForU h3{
    width: 100px;
    padding: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    height: 40px;
    border-bottom: 2px solid #343434;
}
.recommendForU span{
    width: 100px;
    padding: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
}
.recommendForU li{
    list-style: none
}
.wleftfixbar-list{
    margin-top: 10px
}
.wleftfixbar-list li{
    width: 100px;
    height: 34px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
    line-height: 34px;
}
.wleftfixbar-list a:hover{
    border-radius:50%/50px;
    color:#f44343;
    border: 1px #f44343 solid;
}
.wleftfixbar-list li a{
    display: block;
    text-decoration: none;
    color: black
}
.ctrlbox{
    float: left;
    vertical-align: middle;
    margin-left:20px;
    width: 720px;
}
.ctrlbox h3{
    width: 100px;
    padding: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    height: 40px;
    margin-bottom: -2px;
    border-bottom: 2px solid #343434;
    display: inline-block
}
.ttlp{
    float:right;
    color: #d6d5d5;
    padding:30px 10px 0 10px;
}
.lbbox{
    border-top: 2px solid #d6d5d5;
    width: 100%;
}
.news-box{
    overflow: hidden;
}
.newsleft{
    float: left;
}
.newsright{
    float: right;
    height: 104px;
    width: 76%;
}
.piece-news{
    overflow: hidden;
    border-bottom: 1px dotted #ccc;
    padding: 30px 0;
    color: #343434;
}
.piece-news:hover{
    background-color: #d6d5d5;
}
.news-title{
    float: left;
    width: 80%;
    height: 30px;
    line-height: 22px;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}
.news-title:hover{
    color:#f44343
}
.news-content{
    float: left;
    margin:0;
    line-height: 22px;
    font-size: 15px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-bottom: 5px;
}
.news-hot{
    float:right;
    background-color: #f44343;
    margin-right:10px;
    text-align: center;
    font-size: 14px;
    padding-bottom: 10px;
    color: white;
    border-bottom:2px solid orange;
    width: 30px;
}
.news-date{
    float: left;
    color: #d6d5d5;
    font-size: 14px;
    margin-top: 3px;
}
.news-span{
    float: right;
}
.news-span>span{
    border: 1px solid #bdb5b5;
    padding: 0 6px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
    text-align: center;
    max-width: 64px;
    overflow: hidden;
    font-size: 12px;
    color:#bdb5b5;
}
.newsright a{
    color: black;
}
.crtgbox{
    float:right; 
    overflow: hidden;
    padding-top: 18px;
    text-align: left;
}
.wleftfixbar{
    overflow: hidden;
}
.adv-pic{
    padding-top: 41px;
}
.adv-span-first{
    top:100px;
    background-color: #bdb5b5;
    right:130px;
    color: white;
    z-index: 50;
    position: absolute;
}
.adv-span-second{
    top:284px;
    background-color: #bdb5b5;
    right:130px;
    color: white;
    z-index: 50;
    position: absolute;
}
.hotNews h3{
    padding: 0 0 0 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    height: 40px;
    border-bottom: 2px solid #343434;
    margin: 0;
}
.hotNews {
    margin-top: 40px;
    text-align: left;
}
.hotNews a{
    font-size: 14px;
    line-height: 34px;
    color: black;
}
.hotNews ul{
    margin: 0;
    padding:0 0 0 5px;
}
.hotNews li{
    width:195px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin:0
}
.hotNews a:hover{
    color: #f44343
}
.hotNews span{
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    margin-top: 10px
}
.listIndex{
    background-color: red;
    color:#fff;
}
.hotNews>div{
    border: 2px #bdb5b5 solid;
    margin-top: -2px
}

</style>
