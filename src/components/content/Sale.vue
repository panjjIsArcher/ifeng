<template>
    <div class="sale box-border-top">
        <!-- 热盘推荐 -->
        <div class="recommen">
            <div>
                <h3 class="title-style">热盘推荐</h3>
            </div>
            <!-- 热盘推荐的内容 -->
            <div>
                <!-- 高300 -->
                <div class="hot-house-advertisement">
                    <!-- 首行左边的大图 -->
                    <div>
                        <a href="../../pages/buy/buy.html"><img src="../../img/thfzyz.jpg" alt=""></a>
                    </div>
                    <!-- 右边的图 -->
                    <div>
                        <!-- 上边的图 -->
                       <div class="hot-house-advertisement-rihgt" v-for="item in hotHouseAdvertisementRihgt">
                           <div class="house-img-detail">
                               <p>{{item.location}}</p>
                           </div>
                           <p>
                               <a href="javascript:;">{{item.name}}</a>
                               <span>{{item.price}}</span>
                           </p>
                           <span>地铁房</span>
                           <span>二胎房</span>
                       </div>
                    </div>
                </div>
                <!-- 下边的图，各个高170px -->
                <div class="imgtxtBlock-6-imgBox">
                    <ul>
                       <li class="imgBox" v-for="item in imgtxtBlockSixImgBoxs">
                            <div>
                                <p>{{item.location}}</p>
                            </div>
                            <p class="imgTxt">
                                <a href="javascript:;">{{item.name}}</a>
                                <span>{{item.price}}</span>
                            </p>
                            <span>地铁房</span>
                            <span>二胎房</span>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Sale",
    data(){
        return{
            hotHouseAdvertisementRihgt:this.secondhouses,
            
        }
    },
    props:{
      secondhouses:{
            type:Array,
        },
     imgtxtBlockSixImgBoxs:{
         type:Array
     }
    }
}
</script>
<style>
.sale{
    width: 55%;
    height: 600px;
    position: relative;
    display: inline-block;
    border: 1px solid #eaeaea;
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
.recommen>div:last-child{
    height: 540px;
    width: 100%;
    float: left;
}
.hot-house-advertisement{
    height: 290px;
}
.hot-house-advertisement>div:first-child{
    height: 290px;
    width: 53.703%;
    display: inline-block;
    margin-left: 3%;
}
.hot-house-advertisement>div:last-child{
    width:33.3333%;
    height: 290px;
    margin:0 4%;
    float: right;
}
.hot-house-advertisement img{
    width: 100%;
    height: 100%;
}
/* 右上的两张图 */
.hot-house-advertisement-rihgt>div{
    height: 100px;
    background-image: url('../../img/金茂府.jpg');
    background-size: cover;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hot-house-advertisement-rihgt{
    margin-bottom: 10px;
}
.hot-house-advertisement-rihgt p{
    margin:0;
    color: black;
    font-size: 14px;
}
.house-img-detail>p{
    display: inline-block;
    font-size: 13px;
    width: 100%;
    color: #fff;
    margin:0;
    position: relative;
    background-color: rgba(0,0,0,0.6);
    bottom:-81px;
}
.hot-house-advertisement-rihgt p>a{
    color: black;
}
.hot-house-advertisement-rihgt p>span{
    color: #f54343;
    float: right;
}
.hot-house-advertisement-rihgt>span{
    border: 1px solid #eaeaea;
    margin:3px 2px;
    font-size: 12px;
}
/* 下方的6张图 */
.imgtxtBlock-6-imgBox{
    height: 250px;
    margin-top: 5px;
}
.imgBox{
    width: 30%;
    display: inline-block;
    margin:0 9.5px;
}
.imgBox>div{
    height: 80px;
    background-size: cover;
    background-image: url('../../img/牛驼温泉.jpg');
}
.imgBox>div p{
    display: inline-block;
    font-size: 13px;
    width: 100%;
    color: #fff;
    position: relative;
    background-color: rgba(0,0,0,0.6);
    bottom:-62px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
}
.imgTxt{
    margin: 0;
    color: black;
    font-size: 12px
}
.imgBox>span{
    border: 1px solid #eaeaea;
    margin: 3px 2px;
    font-size: 12px;
}
.imgTxt>a{
    color: black;
} 
.imgTxt>span{
    color: #f54343;
    float: right;
} 
.imgtxtBlock-6-imgBox>ul{
    margin:0;
    padding:0;
}
@media screen and (max-width: 960px) {
    .imgBox{
        float: left;
        width: 29%;
        margin-top: 10px;
    }
    .imgBox>span{
        display: none;
    }
    .imgTxt{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .sale{
        width: 78%;
    }
}
</style>