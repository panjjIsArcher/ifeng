<template>
    <div class="houselist">
        <!-- 选择支 -->
        <div class="topFrame">
            <div class="sellectedCondition">综合排序</div>
            <div @mouseover="onmouseShow('price-list-choose')" @mouseout="onmouseHide('price-list-choose')">
                <div class="pricelist">价格</div>
                <div class="hide" id="price-list-choose">
                    <div @click="filterFromHtoL(defaultItems)">价格从高到低</div>
                    <div @click="filterFromLtoH(defaultItems)">价格从低到高</div>
                </div>
            </div> 
            <div  @mouseover="onmouseShow('sale-list-choose')" @mouseout="onmouseHide('sale-list-choose')">
                <div class="salelist">面积</div>
                <div class="hide" id="sale-list-choose">
                    <div @click="areaFromHtoL(defaultItems)">面积从低到高</div>
                    <div @click="areaFromLtoH(defaultItems)">面积从高到低</div>
                </div>
            </div>
            <div>已为您找到<span style="color:#f44336">280</span>个楼盘</div>
        </div>
        <!-- 列表 -->
        <div>
            <div>
                 <!-- 默认列表 -->
                 <div class="defaultItem" v-for="(item,index) in defaultItems">
                    <!-- 左图 -->
                    <div>
                        <a href="javascript:;"><img v-bind:src='require("../../img/泰禾院子.jpg")' alt=""></a>
                        <div class="hasVrCover">
                            <span class="listenComment">听点评</span>
                        </div>
                    </div>
                    <!-- 右文 -->
                    <div class="rigthPart">
                        <!-- 第一行 -->
                        <p class="descName">
                            <span>在售</span>
                            <span @click="sendID(item)">{{item.descName}}</span>
                        </p>
                        <!-- 第二行 -->
                        <p class="locationDesc"><span>{{item.locationZone}}</span>{{item.locationDesc}}</p>
                        <!-- 第三行 -->
                        <p class="roomNum"><span  class="roomNum">{{item.roomNum}}</span><span>{{item.roomMianji}}</span></p>
                         <!-- 价格 -->
                        <div class="priceFrame">约<span>{{item.priceFrame}}</span>万元/㎡</div>                       
                        <!-- 第四行 -->
                        <p class="houseCategory">
                            <span>普通住宅</span>
                            <span>叠拼别墅</span>
                        </p>
                        <!-- 关注 -->
                        <div class="watched">
                            <span></span>
                            关注
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 选择页面  -->
        <div class="pages">
            <a href="" class="prev">上一页</a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            <span>…</span>
            <a href="">15</a>
            <a href="" class="next">下一页</a>
        </div>
    </div>
</template>
<script>
import houseDetail from "../houses/housecommont/housedetail"
import {filterFromLtoH,filterFromHtoL,areaFromHtoL,areaFromLtoH} from "../../js/filter.js";
export default {
    data(){
        return{
            defaultItems:Array,
            id:Number,
            arr:[]
        }
    },
    methods:{
       onmouseShow:function(param){
             document.getElementById(param).classList.remove("hide");
        },
        onmouseHide:function(param){
            document.getElementById(param).classList.add("hide");
        },
        // 把项目的id传给详情页
        sendID:function(item){
           this.$emit('select',item)
        },
        filterFromLtoH,filterFromHtoL,areaFromHtoL,areaFromLtoH
    },
    created(){
        this.$axios.get("api/defaultItems").then((res)=>{
            this.defaultItems=res.data;
        }).catch((err)=>{
            console.log(err)
        });
    },
}
</script>
<style>
.houselist{
    margin:0 7%;
}
.topFrame{
    overflow: hidden;
    margin-bottom: 10px;
}
.topFrame>div{
    float: left;
    width: 18%;
    color: #666;
    font-size: 18px;
    background-color: #f5f5f5;
}
.topFrame>div:first-child:hover{
    color: #f44336;
    border-bottom: solid 2px #f44336;
}
.topFrame div{
    line-height: 46px;
    text-align: center;
}
.topFrame>div:last-child{
    float:left;
    width: 45%;
    padding-right: 10px;
    text-align: right;
}
.pricelist:hover{
    color: #f44336;
    border-bottom: solid 2px #f44336;
}
.salelist:hover{
    border-bottom: solid 2px #f44336;
}
/* 默认列表 */
.defaultItem{
    float: left;
    width: 75%;
    overflow: hidden;
    border-top: solid 1px #dbdbdb;
}
.defaultItem:hover{
    background-color:#e3e2e2;
}
.defaultItem>div{
    float: left;
    padding-top: 30px;
}
.listenComment{
    display:inline-block;
    background-image: url("../../img/icon/广播.png");
    background-repeat: no-repeat;
    padding-left: 20px;
}
.defaultItem img{
    transition: all .6s;
}
.defaultItem>div:last-child{
    padding-left: 30px;
}
.hasVrCover{
    position: relative;
    top: -30px;
    left: 10px;
    color: #ffffff;
    z-index: 3;
}
.hasVrCover>span{
    font-weight: 700;
}
.descName>span:first-child{
    background-color: #f54343;
    color:#ffffff;
    width: 45px;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    font-weight: 700;
    height: 23px;
    font-size: 0.5rem
}
.descName>span:last-child{
    font-size: 17px;
    font-weight: 700;
    display: inline-block;
    margin-left: 5px;
}
.rigthPart{
    width: 60%;
}
.rigthPart p{
    margin-top:0;
}
.locationDesc{
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: '微软雅黑';
    margin-bottom: 19px;
}
.roomNum{
    display: inline-block;
    margin-right: 27px;
    font-size: 14px;
    margin-bottom: 68px;
    height: 15px;
}
.roomNum>span:last-child{
    display: inline-block;
    margin-left: 25px;
}
.houseCategory{
    display: inline-block;
    width: 50%;
}
.houseCategory>span{
    background-color: #ffe5cb;
    color: #ff9760;
    display: inline-block;
    font-size: 12px;
    padding: 6px 10px;
    margin-right: 20px;
}
.priceFrame{
    font-size: 14px;
    float:right;
}
.priceFrame>span{
    font-size: 30px;
    color: #f54343;
    font-weight: 700;
    margin-right: 5px
}
.watched{
    float: right;
    border: solid 1px #dbdbdb;
    padding:0 1.5rem;
    text-align: right;
    color: #666;
    line-height: 23px;
}
.watched>span{
    display: inline-block;
    height: 16px;
    width: 18px;
    background-image: url('../../img/icon/爱心.png');
}
.pages{
    float: left;
    width: 100%;
    overflow: hidden;
    text-align: center;
    border-top: solid 1px #dbdbdb;
    border-bottom: solid 1px #dbdbdb;
    padding: 32px 0;
}
.next{
    width:80px !important;
}
.prev{
     width:80px !important;
 }
.pages a{
    background-color: #f5f5f5;
    width: 35px;
    height: 35px;
    font-style: normal;
    font-size: 15px;
    color: #85858f;
    text-align: center;
    margin: 0 5px;
    display: inline-block;
    word-spacing: normal;
    vertical-align: top;
    border: 1px solid #ddd;
    line-height: 35px;
}
.pages>span{
    display: inline-block;
    color: #85858f;
    font-size: 12px;
    word-spacing: normal;
    width: 37px;
    height: 37px;
    line-height: 30px;
}
</style>