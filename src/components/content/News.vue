<template>
    <div class="news">
        <div class="news-left">
            <div class="focus-today">
                <div>今日关注</div>
                <div> 
                    <a href="">北三县房价环比下跌</a><br>
                    <a href="">北京颁布商品房用地限价政策</a>
                </div>
            </div>
            <div class="news-today">
                <h4>今日要闻</h4>
                <a href="">房地产世界杯大赏</a>
                <span>丨</span>
                <a href="">北京楼市迎来“金九银十”</a>
                <a href="">>>更多</a>
            </div>
            <div class="news-more">
                <div class="news-piece">
                    <a href="">全国楼市进入“度假地产”模式</a>
                    <a href="">8月份60城土地流拍攀升</a>
                </div>
                <div class="news-piece">
                    <a href="">从三涨到连跌：南京二手房市场渐冻</a>
                    <a href="">杭州3名经纪人因散步虚假消息被捕</a>
                </div>
                <div class="news-piece">
                    <a href="">武汉公租房轮候期间补贴发放范围扩大</a>
                    <a href="">发改委再强调：坚决遏制房价上涨</a>
                </div>
                <div class="news-piece">
                    <a href="">楼市重磅新号：停止去库存第一枪打响</a>
                    <a href="">绿地香港：下半年可售资源380亿</a>
                </div>
            </div>
            <Video></Video>
        </div>
        <div class="news-right">
            <div>
                <a href="">
                    <img src="../../img/融创城.jpg" alt="">
                </a>
                <ul>
                    <li v-for="item in newsright"><a href="javascript:;" >{{item.title}}</a></li>
                   
                </ul>
            </div>
            <div>
                 <a href="javascript:;">
                    <img src="../../img/zjs.jpg" alt="">
                </a>
                <ul>
                    <li v-for="item in newsrightsecond"><a href="javascript:;">{{item.title}}</a></li>
                </ul>
            </div>
            <div>
                 <a href="javascript:;">
                    <img src="../../img/zjs.jpg" alt="">
                </a>
                <ul>
                    <li v-for="item in newsrightsecond"><a href="javascript:;">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Video from "./Video"
export default {
    name:"News",
    data(){
        return{
            newsright:[
                {title:"500万置业北京全攻略"},
                {title:"500万置业上海全攻略"},
                {title:"500万置业天津全攻略"},
                {title:"500万置业杭州全攻略"}
            ],
             newsrightsecond:[
                {title:"家中镜子的摆放位置"},
                {title:"卧室的风水学问题"},
                {title:"属狗的人适合什么样的落地窗"},
                {title:"500万置业杭州全攻略"}
            ]
        }
    },
    components:{Video}
}
</script>
<style>
.news{
    width: 80%;
    margin: 0 auto;
}
.news a{
    text-decoration: none;
    color:black;
}
.news-left{
    width: 75%;
    float: left;
    border: 0.5px ridge #dbd7d6;
    border-top: 1px ridge red
}
.news-right{
    width: 22%;
    float: left;
}
.focus-today{
    width: 100%;
}
.focus-today>div:first-child{
    float: left;
    background-color: #f04827;
    font-size: 1.3rem;
    width: 2.5rem;
    margin:1rem auto;
    text-align: center;
    color: white;
    line-height: 1.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: -7px;
}
.focus-today>div:last-child{
    float: right;
    font-size: 2.48rem;
    text-align: left;
    width: 90%;
    margin: 1%;
    line-height: 4.5rem;
    color: black;
}
.focus-today>div:last-child>a{
    font-family: "黑体";
}
.focus-today>div:last-child>a:hover{
    color: #f04827;
}
.news-today{
    border-top: 0.5px ridge #dbd7d6;
    float: left;
    width: 100%;
    padding-top: 10px;
}
.news-today>h4{
    float: left;
    color:#f04827;
    margin-left: 10px;
    margin-top: 0;
}
.news-today>a{
    float: left;
    margin-left: 1.3rem;
    text-align: left;
    font-size: 0.9rem;
}
.news-today>a:hover{
    color: #f04827;
}
.news-today>span{
    float: left;
}
.news-today>input{
    float: left;
}
.news-today>a:last-child{
    float: right;
    margin-right: 1.5rem;
}
.news-more{
    width: 90%;
    margin: 0 auto;
}
.news-piece>a:hover{
    color: #f04827;
}
.news-piece>a{
    font-size: 0.9rem;
    width:50%;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 10px;
}
.news-right{
    float: right;
}
.news-right img{
    width: 100%;
    height: 100%;
}
.news-right li{
    text-decoration: none;
    list-style: none;
    float: left;
    margin:8px auto;
}
.news-right a:hover{
    color: #f04827;
}

/* 媒体查询960px */
@media screen and (max-width: 960px) {
    .focus-today>div:last-child{
        margin: 1%;
        font-size: 2.3rem;
    }
    .news-right li{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>