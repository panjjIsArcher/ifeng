<template>
    <div class="news-nav">
        <!-- 跳转项目 -->
        <div class="f-header">
            <div>
                <ul>
                    <li v-for="value in title" class="explicit"><a href="" class="title-nav">{{value}}</a></li>
                </ul>
            </div>
            <div  class="hide-menu" @mouseover="mouseShow()" @mouseout="mouseHide()">
                更多▼
                <div v-if="show">
                    <ul>
                        <li v-for="value in hideTitle"><a href="">{{value}}</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <span>登录</span>
                <span>注册</span>
            </div>
        </div>
        <!-- 登录注册页 -->
        <div></div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data(){
        return{
            title:["首页","资讯","财经","娱乐","体育","房产","科技","读书","教育","文化","历史","军事","国际","博客","宗教","凤凰卫视"],
            show:false,
            hideTitle:["视频","旅游","游戏","家居","星座","数码","资讯","酒业","未来",]
        }
    },
    methods:{
        mouseShow:function(event){
            this.show=true;

        },
        mouseHide:function(event){
            this.show=false;
        }
    }
}
</script>
<style>
.f-header>div:first-child{
    width: 80%
}
.f-header>div:nth-child(2){
    width: 4.8%;
    float: left;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
}
.f-header>div:last-child{
    float: right;
    line-height: 24px;
    font-size: 12px;
}
.f-header>div:last-child span{
    padding: 0 10px
}
.f-header>div:last-child span:hover{
    color: #f44343
}
.news-nav{
    overflow: hidden;
}
.news-nav li{
    list-style: none; 
}
.explicit{
    width: 6%;
    border-right: 1px lightgray solid;
    text-align: center;
    float: left;
}
.news-nav a{
    text-decoration: none;
    color:black ;
    line-height: 24px;
    font-size: 12px;
}
.news-nav a:hover{
    color: #f44343;
}
.hide-menu>div{
    position:absolute;
    width: 3.8%
}
.hide-menu ul{
    margin:0;
    padding:0;
}
</style>
