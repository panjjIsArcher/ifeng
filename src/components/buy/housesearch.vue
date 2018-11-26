<template>
    <div class="housesearch">
        <div class="lookfor">
            <input type="text" placeholder="请输入楼盘名称/开发商名/地名">
            <span><img src="" alt=""></span>
            <button class="housebutton">搜 索</button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.housesearch{
    border-top: 0.5px solid #e3e3e3;
    text-align: center;
}
.housesearch>div{
    /* background-color: lightgreen; */
    width: 84%;
    display: inline-block;
    text-align: left;
    padding: 35px 0;
    vertical-align: middle;
}
.lookfor>input{
    height: 38px;
    width: 50%;
    font-size:1.1rem;
    padding: 0;
    border: 0.5px solid #e3e3e3; 
}
.lookfor>span{
    height: 38px;
    width: 47px;
    display: inline-block;
    background-image: url("../../img/icon/地图.png");
    position: absolute;
    border: 0.5px solid #e3e3e3; 
    border-left: 0;
}
.housebutton{
    height: 38px;
    width: 110px;
    background-image: none;
    background-color: #f54343;
    font-size: 1.2rem;
    color: white;
    position: relative;
    left:47.5px;
}
</style>