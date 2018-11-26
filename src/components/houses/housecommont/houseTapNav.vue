<template>
    <div class="houseTapNav">
        <div class="logo">
            <a href="javascript:;">
                <img src="../../../img/ifeng.png" alt="">
                <span>凤凰网房产</span>
            </a>
            </div>
        <div class="navhouse-link">
            <span>
                <a href="">首页</a>
                >
                <a href="">北京</a>
                >
                <a href="">新房</a>
                >
                <a href="">{{topname}}</a>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        topname:{
            type:String
        }
    }
}
</script>
<style>
.houseTapNav{
    width: 84%;
    margin:0 7%;
    height: 50px;
}
.navhouse-link{
    padding-top: 19px;
    margin-left: -5px;
    height: 25px;
    text-align: left;
    vertical-align: middle;
    color: #85858f;
    font-family: "宋体";
    font-size: 12px;
}
.navhouse-link a{
    color: #85858f;
}
</style>