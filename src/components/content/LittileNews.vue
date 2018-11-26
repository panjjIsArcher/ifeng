<template>
    <div class="LittleNews">
        <div class="LN" v-for="item in  LN" >
            <a href="javascript:;"><img :src='item.LNPicture' alt=""></a>
            <h5>{{item.title}}</h5>
        </div>
    </div>
</template>
<script>
export default {
    name:'LittleNews',
    data(){
        return{
            LN:[
                {
                    LNPicture:require("../../img/house.jpg"),
                    title:"上半年65城房价环比上涨"
                },
                {
                    LNPicture:require("../../img/house.jpg"),
                    title:"2019年65城房价环比上涨"
                },
                {
                    LNPicture:require("../../img/house.jpg"),
                    title:"专家分析二线城市走势"
                },
                {
                    LNPicture:require("../../img/house.jpg"),
                    title:"上半年65城房价环比上涨"
                }
            ]
        }
    }
}
</script>
<style>
.LittleNews{
    width: 80%;
    text-align: center;
    margin:0 auto;
}
.LN{
    float: left;   
    width:23%;
    margin:1rem 1%;
    text-align: center;
}
.LN:hover{
   box-shadow: 0 1px 1.5px 1px #d2cfcf; 
}
.LN img{
    width: 100%;
    height: 100%;
}
.LN h5{
    font-size: 0.9rem;
    font-family: 'Hiragino Sans GB W3';
    font-weight: lighter;
    float: left;
    margin: 1% 10%;
}
/* 媒体查询 960px */
@media screen and (max-width: 960px){
.LN{
    float: left;   
    width:21%;
    margin:0.5rem 2%;
}
.LN h5{
    font-size: 0.8rem;
    margin: 1% 5%;
}
}
</style>
