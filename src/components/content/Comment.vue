<template>
    <div class="comment box-border-top">
        <!-- 最新更新 -->
        <div class="new-house-station">
            <div>
                <h3 class="title-style">最新动态</h3>
            </div>
            <div class="new-house-station-detail">
                <ul>
                    <li class="new-house-detail-show" v-for="item in newHouseDetailShow">
                        <a href=""><img alt="" :src= "item.housePicture"></a>
                        <p><a href="">{{item.houseName}}</a>
                                更新了
                                <a href="">楼盘动态</a>
                        </p>
                        <span>{{item.reloadDate}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 楼盘快讯 -->
        <div class="house-flash">
            <div>
                <h3 class="title-style">楼盘快讯</h3>
            </div>
            <div class="flash">
                <ul>
                    <li v-for="item in houseflash"><a href="">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Comment",
    data(){
        return{
            houseflash:[
                {title:"孔雀城匠心独具 启幕美好人居新生活"},
                {title:"华夏幸福匠心独具 启幕美好人居新生活"},
                {title:"孔雀城匠心独具 启幕美好人居新生活"},
                {title:"绿地集团匠心独具 启幕美好人居新生活"},
                {title:"华夏幸福匠心独具 启幕美好人居新生活"},
                {title:"绿地集团匠心独具 启幕美好人居新生活"},
                {title:"华夏幸福匠心独具 启幕美好人居新生活"}
            ],
            // 楼盘更新的动态对象
        newHouseDetailShow:[
            {
                housePicture:require('../../img/jhyp.jpg'),
                houseName:"潮白河孔雀城",
                reloadDate:'6月1日更新'
            },
            {
                housePicture:require('../../img/jhyp.jpg'),
                houseName:"新西塘孔雀城",
                reloadDate:'6月29日更新'
            },
             {
                 housePicture:require('../../img/jhyp.jpg'),
                houseName:"嘉善孔雀城",
                reloadDate:'6月19日更新'
            },
             {
                 housePicture:require('../../img/jhyp.jpg'),
                houseName:"亦庄金茂府",
                reloadDate:'6月20日更新'
            },
             {
                housePicture:require('../../img/jhyp.jpg'),
                houseName:"中粮国瑞熙墅",
                reloadDate:'6月2日更新'
            },
             {
                housePicture:require('../../img/jhyp.jpg'),
                houseName:"新西塘孔雀城",
                reloadDate:'6月29日更新'
            },
        ]
        }
    }
}
</script>
<style>
.comment{
    width: 22%;
    height:600px;
    margin-left: 15px;
    position: relative;
    display: inline-block;
}
.box-border-top{
    border-top: 1px solid #f54343;
}
.title-style{
    float: left;
    padding-left: 30px;
    font-size: 18px;
    font-family: 'Hiragino Sans GB W3';
}
/* 最新更新 */
.new-house-station{
    height: 360px;
    float: left;
    width: 100%;
}
.new-house-station>div:last-child{
    height: 340px;
    float: left;
    width: 100%;
}
.station-detail{
    font-size: 12px;
    margin:0;
}
.new-house-station-detail div{
    display: inline-block;
}
.new-house-station-detail ul{
    padding:0;
    margin:0;
}
.new-house-station-detail li{
    height: 40px;
    list-style: none;
    margin: 8px;
}
.new-house-detail-show img{
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin:0 8px;
}
.new-house-detail-show p{
    font-size: 12px;
    margin-top:1%;
    position: absolute;
    display: inline-block;
    margin-bottom: 0;
}
.new-house-detail-show p>a:last-child{
    color:#f54343;
}
.new-house-detail-show span{
    font-size: 12px;
    position: relative;
}
.new-house-detail-show a{
    color: black;
}

.new-house-detail-show a:hover{
    color:#f54343;
}
/* 楼盘快讯 */
.house-flash{
    height: 240px;
    float: left;
}
.flash{
    height: 180px;
    text-align: center;
}
.flash ul{
    padding: 0;
    margin: 0;
}
.flash li{
    list-style: none;
    font-size: 14px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 9%;
    height: 27px;
    width: 80%;
}
.flash a{
    white-space: normal; 
    color: black;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
@media screen and (max-width: 960px){
    .comment{
        display: none;
    }
}
</style>

