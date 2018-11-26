<template>
    <div class="bussiness">
        <!-- 左边的消息 -->
        <div class="bussiness-left">
            <div class="bussiness-left-top">
                <h3 class="title-style">商业创新汇</h3>
                <div> <a href="javascript:;"><img src="../../img/mall.jpg" alt=""></a></div>
            </div>
            <div class="bussiness-left-bottom">
                <h3 class="title-style">奇点商业店商</h3>
                <span><a href="">更多>>></a></span>
                <div class="bussiness-news">
                    <ul>
                        <li><a href="">半年亏损31亿，关闭店31家！这家商品店东山再起</a></li>
                        <li><a href="">不要小看购物中心导视系统的设计，可以增流量30%</a></li>
                        <li><a href="">号称颠覆全球shopping mall的美国最新设计理念爆炸归来！</a></li>
                        <li><a href="">无IP不商业丨购物中心原创IP的未来</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 右边的图文 -->
        <div class="bussiness-right">
            <h3 class="title-style" style="width:100%">奇点商业地产头条</h3>
            <div class="bussiness-news-left">
                <a href=""><img src="../../img/dill.jpg" alt=""></a>
                <p>餐饮牌品靠店大揽客 小而美的时代是否过去？</p>
            </div>
            <div class="bussiness-news-right">
                <div  class="bussiness-news-right-top">
                    <div>
                        <a href=""><img src="../../img/dyc.jpg" alt=""></a>
                        <p>生鲜平台的主流模式大揭秘</p>
                    </div>
                    <div>
                        <a href=""><img src="../../img/dyc.jpg" alt=""></a>
                        <p>餐饮牌品靠店大揽客 小而美的时代是否过去？</p>
                    </div>
                </div>
                <div class="bussiness-news-right-top">
                    <div>
                        <a href=""><img src="../../img/dyc.jpg" alt=""></a>
                        <p>生鲜平台的主流模式大揭秘</p>
                    </div>
                    <div>
                        <a href=""><img src="../../img/dyc.jpg" alt=""></a>
                        <p>餐饮牌品靠店大揽客 小而美的时代是否过去？</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    nama:"Office"
}
</script>
<style>
/* 左边 */
.bussiness{
    width: 80%;
    margin:20px auto;
    height: 390px;
}
.bussiness>div:first-child{
    width: 25%;
    border-top: 0.3px solid #f35656;
    display: inline-block;
    height: 350px;
}
.bussiness-left-top{
    height: 200px;
}
.bussiness-left-top>div{
    height: 140px;
}
.bussiness-left-top img{
    width: 100%;
    height: 100%;
}
.bussiness-left-bottom span{
   float: right;
   margin-right: 0;
   margin-top: 18px;
}
.bussiness-left-bottom span>a{
    color:#d3d3d3;
}
.bussiness-left-bottom li{
    list-style: none;
}
.bussiness-news{
    float: left;
    overflow: hidden;
    width: 100%;
}
.bussiness-news ul{
    padding:0;
    margin:0;
}
.bussiness-news li{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
    line-height: 2rem;
}
.bussiness-news a{
    color: black;
    font-size: 15px;
}
.bussiness-news a:hover{
 color: #f35656;
}
/* 右边 */
.bussiness-right{
    height: 390px;
    float:right;
    width: 75%;
    border-top: 0.3px solid #f35656;
}
.bussiness-news-left{
    height: 290px;
    float: left;
    width: 48%;
    margin-left:12px;
}
.bussiness-news-left img{
    height: 100%;
    width: 100%;
}
.bussiness-news-left p{
    margin: 0;
}
.bussiness-news-right{
    float: right;
    width: 48%;
}
.bussiness-news-right-top{
    float: right;
    height: 290px;
    width: 50%;
}
.bussiness-news-right-top p{
    margin: 0;
    font-size: 14px;
}
.bussiness-news-right-top img{
    width: 100%;
    height: 100%;
}
.bussiness-news-right-top>div{
    float: left;
    margin:0 2%;
    margin-bottom: 12px;
}
@media screen and (max-width: 960px) {
   .bussiness-left-bottom span{
       display: none;
   }
}
</style>
