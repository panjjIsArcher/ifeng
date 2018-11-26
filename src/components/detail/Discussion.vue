<template>
    <div class="discussion">
        <!-- 评论区 -->
        <div>
            <div class="mod-comment">
                <span>跟帖评论</span>
                <span class="w-com">
                    <span id="plNumber" >{{commentNum}}</span>
                    <span>条评论</span>
                </span>
            </div>
            <!-- 填写评论区 -->
            <div class="discuss-comment">
                <form >
                    <!-- 评论区输入 -->
                    <div>
                        <textarea name="" id="whatUSay" cols="30" rows="10" placeholder="文明上文，理性评论，登录发帖"></textarea>
                        <!-- <textarea disabled name="" id="" cols="30" rows="10" placeholder="先登录才能发表评论"></textarea> -->
                    </div>
                    <!-- 输入表情 -->
                    <div class="w-submitBar">
                        <div>
                            <img src="../../img/icon/expression.png" alt="">
                            <img src="../../img/pull.png" alt="" style="width:14px;height:8px;margin-bottom:18%;">
                        </div>
                        <div><input type="button" value="发表评论" class="icon-faceTrigarr" id="icon-faceTrigarr" @click="addComment()"></div>
                    </div>
                </form>
                <div>
                    <ul>
                        <li><a href="">东、西城区禁止新建纯商品住宅</a></li>
                        <li><a href="">东、西城区禁止新建纯商品住宅</a></li>
                        <li><a href="">东、西城区禁止新建纯商品住宅</a></li>
                        <li><a href="">东、西城区禁止新建纯商品住宅</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 跟帖区 -->
        <div class="js_hotCmtBlcok">
            <div>最新评论</div>
            <!-- 评论区的内容 -->
            <div id="comment"></div>
        </div>
    </div>
</template>
<script>
import Discuss from "./Discuss";
import $ from "jquery";
import {mapActions} from "vuex";
export default {
    name:"Discussion",
    data(){
        return{
            commentNum:0,
            modcommentNew:[
                {
                    city:'上海市',
                    whatUsay:'我觉得这条新闻的价值很大，值得分享出去，欢迎大家就此发表意见',
                    commentTime:'2018-07-26 18:16',
                    show:false
                },
                 {
                    city:'南京市',
                    whatUsay:'我觉得这条新闻的价值不大，不值得分享出去，请大家就此发表意见',
                    commentTime:'2018-07-26 20:16',
                    show:false
                },
                {
                    city:'深圳市',
                    whatUsay:'我觉得这条新闻的价值不大，不值得分享出去，请大家就此发表意见',
                    commentTime:'2018-07-26 20:16',
                    show:false
                }
            ]
        }
    },
    methods:{      
        // 发表新的评论
        addComment:function(){
            // 取得最新事件并实现字符串化
        var getTimeNow=function(param){
             if($('#whatUSay').val()){
                $("#comment>div:last-child .whatReply").text($('#whatUSay').val());
            }else{
                alert("输入的信息不能为空");
                $("#comment>div:last-child").remove();
            }
                var date=new Date();
                var year=date.getUTCFullYear().toString();
                var month=date.getMonth()+1;
                if(month>=10){
                    month.toString()
                }else{
                    month="0"+date.getMonth();
                }
                var day=date.getDate()<10?"0"+date.getDate():date.getDate().toString();
                var hour=date.getHours()<10?"0"+date.getHours():date.getHours().toString();
                var min=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes().toString()
                $(param).text(year+"-"+month+"-"+day+"     "+hour+":"+min)
                return year+"-"+month+"-"+day+"     "+hour+":"+min
            }
            $("#comment").append("<div class='myComment' id='myComment'></div>");
            $("#comment>div:last-child").append("<p class='whoReply'>我是来自中国的网友</p>");
            $("#comment>div:last-child").append("<span class='cityfrom'>[杭州市]</span>");
            $("#comment>div:last-child").append("<p class='whatReply'></p>");
            $("#comment>div:last-child").append("<span class='whenReply'></span>");
            $("#comment>div:last-child").append("<span id='replytosomeone'>回复</span>");
            $("#comment>div:last-child").append("<div style='display:none'><textarea id='resTxt' class='resTxt'></textarea><input class='resInput' value='回复' type='button'></input></div>");
            $("#comment>div:last-child .whenReply").text(getTimeNow());  
            $("#comment>div:last-child #replytosomeone").bind('click', function () {
              console.log($(this).parent().children().last());
              if($(this).parent().children().last().css("display0")=="none"){
                 $(this).parent().children().last().show()
              }else{
                  $(this).parent().children().last().hide()
              }
            });
            $(".resInput").bind("click",function(){
                // console.log( $(this).parent().before("<div>这是一个追加的元素</div>"));
                $(this).parent().before("<div class='res'><span class='who-res'>我是太白金星</span><p class='what-res'></p><span><span id='floor'>1</span>楼</span></div>");
                $(this).parent().prev().children().eq(1).text($(this).prev().val());
                $(this).parent().prev().children().eq(2).children().eq(0).text($(this).parent().parent().children(".res").length);
            });
            this.commentNum=$("#comment").children().length;
        },
        // 追加评论
    },
    components:{
        Discuss
    },
    watch:{
       commentNum(newValue,oldValue){
            this.$store.dispatch("ComSummer",this.commentNum)
        }
    }
}
</script>
<style>
.discussion{
    margin-top: 1.2rem;
    overflow: hidden;
}
#replytosomeone{
    float:right;
    font-size: 14px;
    font-weight: normal;
}
.mod-comment{
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
}
.mod-comment>span:last-child{
    float:right;
}
.w-com>span:first-child{
    color: #f54343;
    font-size: 16px;
}
.w-com{
    margin-right: 1%;
}
/* 评论区 */
.discuss-comment>form{
    width: 70%;
    float: left;
}
.discuss-comment textarea{
    width: 100%;
    border: 1px solid #dcdcdc;
    resize: none;
    outline: 0;
    font-size: 14px;
    box-sizing: inherit;
}
.discuss-comment>div:last-child{
    width: 25%;
    float:right;
    height: 170px;
}
.discuss-comment li{
    list-style: none;
    height: 45px;
    vertical-align:middle;
}
.discuss-comment ul{
    margin:12px 0;
    padding: 0;
}
.discuss-comment a{
    color: black;
}
/* 输入表情 */
.w-submitBar{
    float: left;
    width: 100%;
    height: 20px;
    border: 1px solid #dcdcdc;
    margin-top: -4px;
}
.w-submitBar>div:first-child{
    height: 20px;
    float: left;
    margin:0 1%;
}
.w-submitBar>div:last-child{
    float: right;
}
.w-submitBar img{
    height: 100%;
}
.icon-faceTrigarr{
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    box-shadow: none;
    text-shadow: none;
    border: none;
    background-color: #f54343;
    color: #fff;
}
.whoReply{
    color: rgb(38, 87, 250);
    font-weight: normal;
    display: inline-block;
    font-size: 18px;
}
.cityfrom{
    font-weight: normal;
    font-size: 18px;
}
.whatReply{
    font-weight: normal;
    font-size: 16px;
}
.whenReply{
    font-weight: normal;
    font-size: 16px;
}
.resTxt{
    float: left;
    width: 95%;
    height: 100px;
}
.resInput{
    width: 4.4%;
    height: 104px;
    float: right;
    border: 1px solid;
    background-color: #fff;
}
.res{
    padding-left: 50px;
    margin-top: 5px;
    padding-top: 5px;
    border: 1px solid lightgray

}
.res>span:last-child{
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    position: relative;
}
.what-res{
    font-weight: normal;
    font-size: 16px;
}
.who-res{
    color: rgb(38, 87, 250);
    font-weight: normal;
    display: inline-block;
    font-size: 18px;
}
</style>