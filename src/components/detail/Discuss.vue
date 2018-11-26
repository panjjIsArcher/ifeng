<template>
    <div class="js_hotCmtBlcok">
            <div>最新评论</div>
            <!-- 评论区的内容 -->
            <div>

            </div>
    </div>
</template>
<script>
import DiscussHide from "./DiscussHide";
import $ from "jquery";
export default {
    name:"Discuss",
    method:{
        addComment:function(){
        }
    },
    data(){
        return{
            modcommentfollow:[
                {
                city:'',
                whatUsay:'',
                commentTime:'',
                show:false
                }
            ],
            
        }
    },
    components:{DiscussHide},
    props:{
        modcommentNew:{
            type:Array,
            required:true
        }
    },
}

</script>
<style>
.js_hotCmtBlcok{
    float: left;
    width: 90%;
    margin-top: 25px;
    margin-bottom: 10px;
    font: bold 20px/22px "microsoft yahei";
    padding-left: 5%;
    color: #000;
}
.mod-commentNew{
    font-family: "simsun","arial","helvetica","clean","sans-serif";
}
.mod-commentNew>p{
    font-size: 1.05rem;
    color: #024a82;
    font-weight: normal;
}
.mod-commentNew span{
    color: #999;
}
.w-contentTxt{
    font-weight: normal;
    font-size: 1.05rem;
}
.w-commentTime{
    padding-top: 4px;
    color: #999;
    font-family: "simsun","arial","helvetica","clean","sans-serif";
    font-size: 1rem;
    font-weight: normal;
}
.w-reply{
    font-family: "simsun","arial","helvetica","clean","sans-serif";
    float: right;
    line-height: 14px;
    font-weight: normal;
    font-size: 1rem;
}
.w-reply a{
    color: #000;
}
.w-reply a:hover{
    color: #f54343;
}
.reply{
    padding-top: 20px;
}
.reply textarea{
    width: 95%;
    font-weight: normal;
    font-size: 1.05rem;
    height: 150px;
}
.reply div{
    float: right;
    width: 4.4%;
}
.w-reply span{
    border: none;
    color: #000;
    line-height: 14px;
    font-weight: normal;
    font-size: 1rem;
    font-family: "simsun","arial","helvetica","clean","sans-serif";
}
.reply input{
    width: 100%;
    height: 156px;
    background-color: #f54343;
    border: none;
    font-size: 20px;
    color: white;
}
.follow-commentNew{
    padding-left:40px;
    border: 0.5px solid #999;
}
</style>