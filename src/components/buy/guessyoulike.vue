<template>
    <div class="guessyoulike">
        <div>猜你喜欢</div>
        <div class="housetuijian">
            <ul>
                <li v-for="item in guesslike">
                    <div>
                        <div class="img-box">
                            <a href=""><img src="../../img/wlsy.jpg" alt=""></a>
                            <div><span>{{item.name}}</span></div>
                        </div>
                        <div class="likecover">
                            <span></span>
                            <span>{{item.location}}</span>
                            <span>{{item.price}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            guesslike:[
                {
                    title:"万柳书院",
                    location:"海淀",
                    price:"17万元/㎡"
                },
                {
                    title:"万柳书院",
                    location:"海淀",
                    price:"17万元/㎡"
                },
                {
                    title:"旭辉26街区",
                    location:"丰台",
                    price:"12万元/㎡"
                },
                {
                    title:"万柳书院",
                    location:"海淀",
                    price:"17万元/㎡"
                },
                {
                    title:"旭辉26街区",
                    location:"丰台",
                    price:"12万元/㎡"
                },
                {
                    title:"旭辉26街区",
                    location:"丰台",
                    price:"12万元/㎡"
                },
        ]
        }
    }
}
</script>
<style>
.guessyoulike{
    background-color: #f5f5f5;
    overflow: hidden;
    width:86%;
    margin:2rem 7%;
}
.guessyoulike>div:first-child{
    font-size: 20px;
    margin-bottom: 20px;
    color: #333;
    width: 84%;
    float: left;
}
.housetuijian{
    text-align: center;
    float: left;
    margin: 0 auto;
}
.housetuijian ul{
    margin: 0;
}
.housetuijian li{
    float: left;
    list-style: none;
    margin-right: 8px;
}
.img-box{
    width: 180px;
    height: 120px;
}
.img-box span{
    color: #fff;
    font-size: 16px;
    text-align: center;
    top:45%;
    position: relative;
}
.img-box>div{
    background-color: #000;
    opacity: 0.7;
    color:white;
    width: 180px;
    height: 120px;
    text-align: center;
    align-items: center;
    top: -124px;
    position: relative;
}
.likecover{
    margin:15px 0;
    overflow: hidden;
}
.likecover>span{
    color: #f64444;
}
.likecover>span:nth-child(1){
    background-image: url('../../img/icon/地点.png');
    background-repeat: no-repeat;
    height:16px;
    width:16px;
    display: inline-block;
    float: left;
}
.likecover>span:nth-child(2){
    float: left;
    color: #8a8a8a;
    font: 400 14px/20px "微软雅黑";
}
.likecover>span:nth-child(3){
    float:right;
    font: 400 14px/20px "微软雅黑";
}
</style>