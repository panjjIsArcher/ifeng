<template>
    <div class="houseinfo">
        <div class="houseinfo-top">
            <!-- 顶部介绍 -->
            <div>
                <div class="housetitle">
                    <span>待售</span>
                    <h2>{{house.details.descName}}</h2>
                </div>
                <div class="housetop-info-ketword">
                    <ul>
                        <li>大兴线</li>
                        <li>6环以外</li>
                        <li>小户型</li>
                        <li>大户型</li>
                    </ul>
                </div>
            </div>
        </div>
         <!-- 图片展示区域 -->
        <div class="houseInfomation">
                <!-- 左侧的图 -->
                <div>
                    <div class="bigdetail" id="bigdetail" >
                        <img :src='this.kqc[i]' id='bigPic' alt="">
                    </div>
                    <div class="houseInfo-swiper" >
                        <!-- 左边的按钮 -->
                        <a href="javascript:;" @click="changePic()" class="houseInfo-photo-prev"><img src="../../../img/icon/左.png" alt=""></a>
                        <!-- 图片切换 -->
                        <div>
                            <ol class="photo-swiper-shift" id="houseAll" >
                                <li id="houseAllPic" v-for="(item, index) in kqc" @mouseover= "()=>{i=index}" ><img :src="item" class="kqc" alt="" ></li>
                            </ol>
                        </div>
                        <!-- 右边的按钮 -->
                        <a href="javascript:;" @click="changePicRight()"  class="houseInfo-photo-next"><img src="../../../img/icon/右.png" alt=""></a>
                    </div>
                </div>
                <!-- 右侧的文字描述 -->
                <div class="houseInfo-main">
                    <dl class="reference-price">
                        <dt>参考价格</dt>
                        <dd>约<span>{{house.details.priceFrame}}</span>万/㎡</dd>
                    </dl>
                    <dl>
                        <dt>物业类型</dt>
                        <dd>{{house.details.property}}</dd>
                    </dl>
                    <dl>
                        <dt>楼盘地址</dt>
                        <dd>{{house.details.locationDesc}}</dd>
                    </dl>
                    <dl>
                        <dt>开 发 商</dt>
                        <dd>{{house.details.company}}</dd>
                    </dl>
                    <dl>
                        <dt>开盘时间</dt>
                        <dd>{{house.details.openDate}}</dd>
                    </dl>
                    <dl>
                        <dt>户型信息</dt>
                        <dd>{{house.details.houseType2}}</dd>
                        <dd>{{house.details.houseType1}}</dd>
                    </dl>
                    <dl class="buy-phone-number">
                        <dt>购房热线</dt>
                        <dd>{{house.details.telephone}}</dd>
                    </dl>
                </div>
        </div>
        <!-- 楼盘详情 -->
        <div class="house-detail">
            <div>楼盘详情</div>
            <div>
                <dl>
                    <dt>开盘时间:</dt>
                    <dd>{{house.details.openDate}}</dd>
                    <dt>入住时间:</dt>
                    <dd>{{house.details.liveDate}}</dd>
                    <dt>开发商:</dt>
                    <dd>{{house.details.company}}</dd>
                    <dt>物业公司:</dt>
                    <dd>{{house.details.propertyCompany}}</dd>
                    <dt>房屋产权:</dt>
                    <dd>{{house.details.propertyRight}}</dd>
                    <dt>装修状态:</dt>
                    <dd>{{house.details.fixture}}</dd>
                    <dt>建筑面积:</dt>
                    <dd>40万平方米</dd>
                    <dt>建筑类型:</dt>
                    <dd>{{house.details.build}}</dd>
                    <dt>楼盘户数:</dt>
                    <dd>{{house.details.householder}}</dd>
                    <dt>物业费:</dt>
                    <dd>{{house.details.propertyPrice}}</dd>
                    <dt>绿化率:</dt>
                    <dd>{{house.details.green}}</dd>
                    <dt>容积率:</dt>
                    <dd>{{house.details.plotratio}}</dd>
                </dl>
                <div>
                    <dl class="house-descrip">
                        <dt>楼盘描述:</dt>
                        <dd>{{house.details.des}}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <!-- 折线图 -->
        <div class="priceChangeWrap">
            <div>价格走势</div>
            <svg-icon></svg-icon>
        </div>
        <!-- 用户点评 -->
        <div class="customers-comment">
            <div>用户点评</div>
            <div>
                <!-- 评论精华 -->
                <div class="commentlist">
                    <div class='commentLine' v-for="item in comment">
                        <div class="avaFrame">
                            <img v-bind:src='require("../../../img/icon/头像.png")'  alt="">
                        </div>
                        <div class="commentMain">
                            <div>来自北京的用户
                                <span>2018-04-30</span>
                            </div>
                            <div>
                                <p id='houseComment'>{{item.say}}</p> 
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="commentInputArea">
                    <div>我来点评<span>最少10字</span></div>
                    <form action="">
                         <textarea name="" id="comment" cols="30" rows="10" placeholder="请分享您对楼盘的看法"></textarea>
                    </form>                   
                    <div>
                        <button @click='comnentFollow("#comment",comment)'></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import svgIcon from './svg-icon';
import {comnentFollow} from "../../../js/comment.js"
import {Switch} from "../../../js/Switch.js";
import $ from "jquery"
export default {
    components:{ svgIcon },
    data(){
        return{
            i:0,
            house:this.detail,
            comment:[
                {
                    say:"1.经典瞰景三居，阳光通透，格局朗阔，尺度合理。2.客厅餐厅相连，结合观景大阳台，尽享公园四季美景。3.南向主卧连接观景飘窗，开间3.3米，进深4.1米，舒适尺度，除了卧室三件套，还可以适当摆放电视、贵妃椅等，提升生活品质。4.独立观景书房，明亮通透，书香之家藏纳天地大美。5.厨房带窗户且靠近门口位置，方便油烟的排出。;1.卫生间没有窗户，通风排湿稍受影响。",
                },
                ],
            kqc:[
                require("../../../img/永定河孔雀城实景图.jpg"),
                require("../../../img/永定河孔雀城效果图.jpg"),
                require("../../../img/永定河孔雀城户型图.jpg"),
                require("../../../img/永定河孔雀城样板间.jpg"),
                require("../../../img/永定河孔雀城规划图.jpg")          
            ],
            
        }
    },
    computed:{
        Switch,
    },
    props:{
        detail:{
            type:Object
        }
    },
    methods:{
        comnentFollow,
        changePic:function(){
            $("#houseAll li").animate({right:"137.5px"},500,"swing",function(){
                $(this).unbind("click",this.changePic);
            });
            $(".houseInfo-photo-next").bind("click",this.changePicRight)
        },
        changePicRight:function(){
            $("#houseAll li").animate({right:"0"},500,"swing",function(){
               $(".houseInfo-photo-prev").bind("click",this.changePic) 
            });
        },
    },
}
</script>
<style>
.houseinfo{
    margin:30px 7%;
    width: 84%;
}
.housetitle>span{
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    word-spacing: normal;
    color: #fff;
    padding: 0 10px;
    margin-right: 10px;
    overflow: hidden;
    font-weight: 700;
    background-color: #f35858;
}
.housetitle>h2{
    height: 26px;
    max-width: 720px;
    margin:0 10px 0 0;
    line-height: 26px;
    font-size: 22px;
    letter-spacing: 2px;
    overflow: hidden;
}
.housetop-info-ketword{
    float: left;
    overflow: hidden;
    position: relative;
}
.housetop-info-ketword li{
    float: left;
    position: relative;
    list-style: none;
    margin-right: 8px;
    color: #666 !important;
    text-decoration: none;
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    border: 1px solid #dbdbdb;
    padding:2px 10px;
}
.houseinfo-top>div:nth-child(2){
    float: left;
    margin-top: 20px;
    position: relative;
}
.houseinfo-top>div:nth-child(3){
    float:right;
    margin-top: 20px;
    position: relative;
}
.houseInfomation{
    width: 100%;
    float: left;
    overflow: hidden;
    margin-top: 20px;
}
.houseInfomation>div:first-child{
    float: left;
}
.houseInfo-main{
    float:left;
    margin-left: 3rem;
    height: 450px;
    position:relative;
}
.houseInfo-main dl{
    width: 100%;
    clear: left;
}
.houseInfo-main dt{
    height: 100%;
    width: 85px;
    color: #999;
    float: left;
    position: relative;
    line-height: 55px;
    font-size: 14px;
}
.houseInfo-main dd{
    float: left;
    color: #333;
    position: relative;
    line-height: 55px;
}
.houseInfo-swiper{
    position: relative;
    width: 550px;
    height: 78px;
    overflow: hidden;
    margin-top: 5px;
}
.houseInfo-swiper>div{
    text-align: center;
}
.houseInfo-photo-prev{
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 16px;
    height: 78px;
    cursor: pointer;
    background: #fff;
}
.houseInfo-swiper ol{
    margin: 0;
    padding: 0;
    width: 825px
}
.houseInfo-swiper li{
    float: left;
    position: relative;
    list-style: none;
    width: 117px;
    height: 78px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 10.25px;
    margin-left: 10.25px;
}
.houseInfo-photo-next{
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 16px;
    height: 78px;
    cursor: pointer;
    background: #fff;
    right: 0;
}

.reference-price dd{
    color: #f35858;
}
.reference-price span{
    font-size: 2rem;
}
.buy-phone-number{
    margin-top: 45px;
    position: relative;
    overflow: hidden;
    float: left;
}
.buy-phone-number dd{
    color: #f54343;
    font-size: 34px;
}
.house-detail{
    display: inline-block;
    overflow: hidden;
    margin:0 auto;
    width: 100%;
}
.house-detail>div:first-child{
    border-bottom: 1px solid #dbdbdb!important;
    font-weight:500px;
    font-size: 20px;
    line-height: 100px;
}
.house-detail dl{
    clear: left;
}
.house-detail dt{
    float: left;
    position: relative;
    color: #999; 
    width: 68px;
    margin-top:12px;
    margin-bottom: 12px;
}
.house-detail dd{
    float: left;
    position: relative;
    margin-top:12px;
    margin-bottom: 12px;
    font-weight: 400px;
    width: 37.5%;
    height: 100%;
    color: #333;
}
.house-descrip>dd{
    width:87%;
    line-height: 24px;
    font-size: 0.8rem
}
.priceChangeWrap{
    width: 100%;
}
.priceChangeWrap>div:first-child{
    border-bottom: 1px solid #dbdbdb!important;
    font-weight:500px;
    font-size: 20px;
    line-height: 100px;
}
.customers-comment>div:first-child{
    border-bottom: 1px solid #dbdbdb!important;
    font-weight:500px;
    font-size: 20px;
    line-height: 100px;
}
.customers-comment>div:last-child{
    overflow: hidden;
    padding-top: 35px;
}
.commentlist{
    overflow: hidden;
    position: relative;
    float: left;
    width: 62%;
}
.commentlist>div{
    float: left;
    position: relative;
    width: 100%
}
.avaFrame{
    position: relative;
    float: left;
}
.commentMain{
    width: 88%;
    position: relative;
    float: left;
    padding-left: 10px;
}
.commentMain>div:first-child{
    font-size: 12px;
}
.commentMain>div:first-child span{
    color: #999;
    padding-left: 1.5rem;
}
.commentMain>div:last-child p{
    line-height:21px;
    font-size: 14px;
}
.commentInputArea{
    background-color: #f5f5f5;
    float: right;
    width: 33%;
    text-align: center;
}
.commentInputArea>div:first-child{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    width: 80%;
    margin: 0 auto 6px auto;
    padding-top: 27px;
}
.commentInputArea>div:first-child>span{
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
    color: #9f9f9f;
    font-weight: normal;
}
.commentInputArea textarea{
    width: 80%;
    border: solid 1px #dbdbdb;
    font-family: 'Microsoft YaHei';
}
.commentInputArea button{
    background-image: url('../../../img/提交评论.jpg');
    background-repeat: no-repeat;
    height: 30px;
}
.commentInputArea>div:last-child{
    width: 80%;
    margin:25px auto 5px auto;
    text-align: right;
}
.bigdetail{
    display:flex;
    align-items:center;
    justify-content:center;
}
.kqc{
    height: auto;
    width: 100%
}
</style>