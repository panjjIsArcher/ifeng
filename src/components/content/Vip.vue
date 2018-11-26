<template>
    <div class="vip">
        <h2>会员中心</h2>
        <div>
            <!-- 会员中心大图展示 -->
            <div class="vip-show">
            <!-- 大图展示 -->
                <div>
                    <a href=""><img src="../../img/ygdsj.jpg" alt=""></a>
                </div>
            <!-- 小图展示 -->
                <div>
                    <ul>
                        <li>
                            <div class="vip-little-show">
                                <div>
                                    <img src="../../img/ygdsj.jpg" alt="">
                                    <p>500万置业北京指南</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="vip-little-show">
                                <div>
                                    <img src="../../img/ygdsj.jpg" alt="">
                                    <p>500万置业北京指南</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="vip-little-show">
                                <div>
                                    <img src="../../img/ygdsj.jpg" alt="">
                                    <p>500万置业北京指南</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="vip-little-show">
                               <div>
                                    <img src="../../img/ygdsj.jpg" alt="">
                                    <p>500万置业北京的终极使用指南</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 登录会员中心 -->
            <div class="vip-log-in">
                <!-- 抢红包 -->
                <div>
                    <a href=""><img src="../../img/redbag.jpg" alt=""></a>
                </div>
                <!-- 会员登录 -->
                <div class="log-in">
                    <a href=""><img src="../../img/grxs.jpg" alt=""></a>
                    <div>
                        <form action="">
                            <input type="text" placeholder="用户名">
                            <input type="text" placeholder="密码">
                            <a href="">忘记密码</a>
                            <input type="button" value="登录">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Vip"
}
</script>
<style>
.vip{
    width:80%;
    margin:0 auto;
    overflow: hidden;
    height:430px;
}
.vip>div{
    height: 360px;
}
.vip-show{
    width:75%;
    height: 360px;
    float: left;
}
.vip-show>div{
    width: 100%;
}
.vip-show>div:first-child{
    height: 290px;
}
.vip-show>div:first-child img{
    width: 100%;
    height: 100%;
}
.vip-show>div:last-child ul{
    padding: 0;
    margin: 0;
}
.vip-show>div li{
    width: 25%;
    float: left;
    list-style: none;
}
.vip-show>div li:hover{
    background-color: #f35656;
}
.vip-little-show{
    width: 100%;
    display: inline-block;
    margin:14px;
}
.vip-little-show img{
    height: 50px;
    width: 50px;
    float: left;
}
.vip-little-show p{
    float: left;
    margin:0;
    width:65%;
    font-size:14px;
    margin-top:16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.vip-little-show p:hover{
    color:white;
}
.vip-little-show>div{
    display: inline-block;
}
/* 会员登录中心 */
.vip-log-in{
    height: 360px;
    width: 20%;
    float:right;
    margin-right: 2%;
    text-align: center;
}
.vip-log-in>div:first-child{
    height:140px;
    margin-bottom: 20px;
}
.vip-log-in img{
    width: 100%;
    height: 140px;
}
.vip-log-in>div:last-child{
    height: 200px;
}
.log-in img{
    height: 80px;
    width: 100%;
}
/* 登录 */
form>input{
    height:16px;
    width: 94%;
    display: inline-block;
    margin:5px auto;
}
form a{
    color: gray;
    float: right;
    margin-right: 10px;
    position: relative;
    font-size: 8px;
}
form>input:last-child{
    height:20px;
    background-color: #f35656;
    border: 0;
    box-shadow: 0;
}

</style>
