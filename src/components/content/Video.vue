<template>
    <div class="video">
        <div>
            <video src="../../video/kon.mp4" controls poster="../../img/融创城.jpg"></video>
        </div>
        <div>
            <ul>
                <li v-for="item in video"><a href="">{{item.title}}</a><span></span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Video",
    data(){
        return{
            video:[
                {title:"地产好玩圈丨厦门调控是否一厢情愿"},
                {title:"地产好玩圈丨世界杯与楼市的异曲同工"},
                {title:"地产好玩圈丨一脚绕过楼市的定位球"},
                {title:"地产好玩圈丨老司机带你玩转售楼处"},
            ]
        }
    }
}
</script>
<style>
video{
    float: left;
    width: 100%;
}
.video>div:first-child{
    width:100%;
}
.video a{
    color:black;
    font-size: 1rem;
}
.video li{
   list-style: none;
   margin-top: 3px;
   margin-left: 3%;
}
.video a:hover{
    color:#f04827;
}
.video>div:last-child{
    float: left;
    width: 80%;
}
.video li>span{
    background-image: url("../../img/play.png");
    width: 14px;
    height: 13px;
    display: inline-block;
    margin-left: 5px;
}
.video{
    border: 0.5px solid #d6d0d0;
    float: left;
    width: 100%;
    margin-top: 2%;
}
</style>
