<template>
    <div class="navigation">
        <div>
            <div class="logo">
            <a href="javascript:;">
                <img src="../../img/ifeng.png" alt="">
                <span>凤凰网房产</span>
            </a>
            </div>
            <div class="search">
                <div class="city">
                    <span class="cityChoose">北京</span>
                    <img src="../../img/pull.png" alt="" >
                </div>
                    <input type="text">
                    <button></button>
                    <CityChoose></CityChoose>
            </div>
            <div class="AppDownload" id="AppDownload">
            <a href="javascript:;">
                <img src="../../img/AppDownload.png" alt="">
                <span @mouseover="onmouseShow('erweima')" @mouseout="onmouseHide('erweima')">App下载</span>
            </a>
            </div>
            <!-- 二维码 -->
            <img src="../../img/erweima.jpg" alt="" class="erweima hide" id="erweima">
        </div>
       <!-- 水平导航栏 -->
        <NavHorizontal></NavHorizontal>
    </div>
</template>
<script>
import CityChoose from './city/citychoose';
import NavHorizontal from './NavHorizontal'
export default {
    name:'NavContain',
    components:{CityChoose,NavHorizontal},
    methods:{
        onmouseShow:function(param){
             document.getElementById(param).classList.remove("hide")
        },
        onmouseHide:function(param){
            document.getElementById(param).classList.add("hide");
        }
    }
}
</script>
<style>
/* 页面单独的css样式 */
 body,html,div{
    margin: 0;
    padding: 0;
}
 .navigation{
    height:108px;
    background-color: #f4f2f2;
    box-shadow:10px 0x 0 #f4f2f2;
    overflow: hidden;
}
.navigation div{
    /* position: relative; */
    margin:0.1% 0;
    overflow: hidden;
}
a{
    text-decoration: none;
}
/* logo */
.logo{
    float: left;
    width:30%;
} 
.logo a{
    color: black;
}
.logo img{
padding-left:10%;
float: left;
height: 50px;
}
.logo span{
font-size: 32px;
font-family: "黑体";
margin-top: 2%;
float: left;
padding-left: 2%;
}
/* 搜索栏 */
.search{
    float: left;
    width:45%;
}
.search>input{
    height: 40px;
    float: left;
    width: 45%;
    font-size: 35px;
}
button{
    background-image: url("../../img/searchButton.jpg");
    height:46px;
    width: 75px;
    border:0px;
    background-color:transparent;
}
.city{
    height: 50px;
    width: 20%;
    float: left;
    text-align: right;
}
.city>img{
    height: 10px;
    float: left;
    padding-top: 15%;
    margin-left: 10%;
}
.city>span{
    font-family: "黑体";
    float: left;
    padding-top: 12%;
    margin-left: 28%;
}
/* app 下载 */
.AppDownload{
    float: left;
    width:20%;
} 
.AppDownload img{
    float:left;
    margin-left:30%;
    height: 50px;
}
.AppDownload span {
    float:right;
    margin-right: 21%;
    margin-top: 5%;
}
.AppDownload a{
    color: black;
    font-family: "黑体";
    font-size: 24px;
}
/* 扫描二维码 */
.erweima{
    z-index: 10;
    position: absolute;
    width:10%;
    right: 9%;
    top:60px;
}
.hide{
    display: none;
}
/* 媒体查询 960px */
@media screen and (max-width: 960px){
.AppDownload img{
    float:left;
    margin-left:10%;
}
}
</style>


