<template>
    <div class="nav-contain" id=""> 
        <div class="second-nav">
            <ul>
                <li><router-link to="news" name="news">资讯</router-link></li>
                <li><router-link to="news" name="news">视频</router-link></li>
                <li><router-link to="newhouse" target='_blank' >新房</router-link></li>
                <li><router-link to="newhouse" target='_blank' >二手房</router-link></li>
                <li><router-link to="newhouse" target='_blank' >商铺</router-link></li>
                <li><router-link to="register" target='_blank'>会员中心</router-link></li>
            </ul>   
        </div>
    </div>
</template>
<script>
import Detail from '../detail/Detail';
import NewHouse from '../buy/newhouse';
import Register from '../login/register';
export default {
    name:"NavHorizontal",
}
</script>
<style>
.nav-contain{
    text-align: center;
    background-color: #fff;
    overflow: hidden;
}
.second-nav{
    float: right;
    width: 80%;
    text-align: center
}
.second-nav li{
    list-style: none;
    float: left;
    width: 16%;
    text-align: center;
    line-height: 3rem;
}
.second-nav ul{
    margin:0;
}
.second-nav a{
    text-decoration: none;
    font-family:'Hiragino Sans GB W3';
    font-size: 1.3rem;
    color: black;
    font-size: 1.2rem
} 
/* 媒体查询 960px */
@media screen and (max-width: 960px){
.second-nav ul{
    margin:0;
}
.second-nav a{
     font-size: 1.0rem;
}
.second-nav li{
    margin-top:2%;
    margin-bottom:2%;
}
}
</style>
