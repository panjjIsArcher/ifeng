<template>
    <div class="filter">
        <!-- 位置 -->
       <div class="locationSelect">
           <dl class="locationTable">
               <dt>位置</dt>
               <dd class="search00" >
                   <span class = "subwaySearch_on locationCommon" @click="changeLocationSelect(0,$event)">地铁找房</span>
               </dd>
               <dd class="search00" >
                   <span class = "lineSearch locationCommon" @click="changeLocationSelect(1,$event)">环线找房</span>
               </dd >
               <dd class="search00">
                   <span class="zoneSearch locationCommon"  @click="changeLocationSelect(2,$event)">区域找房</span>
               </dd>
               <dd v-for = "(item,index) in location_select" class="searchcontent" v-if="index==showindex">
                   <div><ul><li v-for="(son_item,son_index) in item.name" class="searchcontent_list">{{son_item.name}}</li></ul></div>
               </dd>
           </dl>
       </div>
       <div class="search_list" v-for="item in category">
           <dl>
               <dt>{{item.name}}</dt>
               <dd v-for="(son_item,son_index) in item.items" class="search00" @click="changeCategoryList($event),SelectAll($event)">{{son_item.name}}</dd>
           </dl>
       </div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    data(){
        return{
            selectArr:["","",""],
            showindex:0,
            location_category:[{name:"地铁找房",img:require("../../img/icon/地铁.png")},{name:"环线找房",img:require("../../img/icon/线路.png")},{name:"区域找房",img:require("../../img/icon/地点.png")}],
            location_select:[
                {
                name:[
                    {name:"全部"},
                    {name:"1号线"},
                    {name:"2号线"},
                    {name:"3号线"},
                    {name:"4号线"},
                    {name:"5号线"},
                    {name:"6号线"},
                    {name:"7号线"},
                    {name:"8号线"},
                    {name:"9号线"},
                    {name:"10号线"},
                    {name:"八通线"}
                    ]
                },
            {
                name:[
                    {name:"全部"},
                    {name:"内环"},
                    {name:"二环"},
                    {name:"三环"},
                    {name:"五环"},
                    {name:"四环"},
                    {name:"六环"},
                    {name:"七环"}
                ]
            },
            {
                name:[
                    {name:"全部"},
                    {name:"朝阳"},
                    {name:"海淀"},
                    {name:"西城"},
                    {name:"东城"},
                    {name:"丰台"},
                    {name:"房山"},
                    {name:"房山"},
                    {name:"门头沟"},
                    {name:"昌平"},
                    {name:"顺义"}
                ]
            }
        ],
         category:[
            {
                name:"户型",
                items:[
                    {name:"一居"},
                    {name:"二居"},
                    {name:"三居"},
                    {name:"四居"}
                ]
            },
            {
                name:"均价",
                items:[
                    {name:"2万以下"},
                    {name:"2至4万"},
                    {name:"4至6万"},
                    {name:"6至8万"},
                    {name:"8万以上"},
            ]},
            {
                name:"物业",
                items:[
                    {name:"住宅"},
                    {name:"别墅"},
                    {name:"商铺"},
                    {name:"办公楼"},
            ]
            }
         ]
        }
    },
    methods:{
        changeLocationSelect:function(param,event){
            this.showindex = param;
            if(param == 0){
            $(event.target).addClass("subwaySearch_on").removeClass("subwaySearch");
            $(".locationCommon").eq(1).addClass("lineSearch").removeClass("lineSearch_on");
            $(".locationCommon").eq(2).addClass("zoneSearch").removeClass("zoneSearch_on");
            }else if(param == 1){
            $(event.target).addClass("lineSearch_on").removeClass("lineSearch");
            $(".locationCommon").eq(0).addClass("subwaySearch").removeClass("subwaySearch_on")
            $(".locationCommon").eq(2).addClass("zoneSearch").removeClass("zoneSearch_on")
            }else{
            $(event.target).addClass("zoneSearch_on").removeClass("zoneSearch");
            $(".locationCommon").eq(0).addClass("subwaySearch").removeClass("subwaySearch_on")
            $(".locationCommon").eq(1).addClass("lineSearch").removeClass("lineSearch_on")
            }
        },
        changeCategoryList:function(event){
            $(event.target).addClass("search01").removeClass("search00").siblings().addClass("search00").removeClass("search01");
        },
         SelectAll:function(event){
            var param = $(event.target).parent().children().eq(0).html();
            if(param == "户型"){
                switch($(event.target).html()){
                    case "一居":
                    this.$set(this.selectArr,0,"1居")
                    break;
                    case "二居":
                    this.$set(this.selectArr,0,"2居")
                    break;
                    case "三居":
                    this.$set(this.selectArr,0,"3居")
                    break;
                    default:
                    this.$set(this.selectArr,0,"4居")
                    break;
                }
            }else if(param == "均价"){
                switch($(event.target).html()){
                    case "2万以下":
                    this.$set(this.selectArr,1,[0,2])
                    break;
                    case "2至4万":
                    this.$set(this.selectArr,1,[2,4])
                    break;
                    case "4至6万":
                    this.$set(this.selectArr,1,[4,6])
                    break;
                    case "6至8万":
                    this.$set(this.selectArr,1,[6,8])
                    break;
                    default:
                    this.$set(this.selectArr,1,[8,99999])
                    break;
                }
            }else{
                switch($(event.target).html()){
                    case "住宅":
                    this.$set(this.selectArr,2,"普通住宅")
                    break;
                    case "别墅":
                    this.$set(this.selectArr,2,"叠加别墅")
                    break;
                    case "商铺":
                    this.$set(this.selectArr,2,"商铺")
                    break;
                    default:
                    this.$set(this.selectArr,2,"办公楼")
                    break;
                }
            }
        },
    }
}
</script>
<style>
.filter{
    width: 84%;
    background-color: #f8f8f8;
    display: inline-block;
    margin: 0 8%;
}
.locationSelect{
    overflow: hidden;
}
.locationSelect dt{
    padding-left: 36px;
    padding-right: 25px;
    color: #343434;
    font-size: 12px;
    position: relative;
    left: -9px;
    float: left
}
.search00{
    float: left;
    color: #343434;
    font-size: 12px;
}
.search01{
    float: left;
    color: #f64444;
    font-size: 12px;
}
.search00>span{
    display: inline-block;
    text-indent: 16px
}
.searchcontent{
    float: left;
    width: 100%;
    margin-top: 12px;
}
.searchcontent ul{
    padding:0;
    margin: 0;
}
.searchcontent>div{
    overflow: hidden;
    color: #343434;
    font-size: 12px;
    border: 1px solid #ddd;
    margin-left: 85px;
    width:80%;
}
.searchcontent_list{
    list-style: none;
    float: left;
    padding:10px 10px;
}
.subwaySearch{
    background-image: url("../../img/icon/地铁.png");
}
.lineSearch{
    background-image: url("../../img/icon/线路.png");
}
.zoneSearch{
    background-image: url("../../img/icon/居乐乐 地点.png");
}
.locationCommon{
    background-repeat: no-repeat;
}
.search_list dt{
    padding-left: 36px;
    padding-right: 25px;
    color: #343434;
    font-size: 12px;
    position: relative;
    left: -9px;
    float: left;
}
.search_list {
    overflow: hidden;
}
.search_list dl{
    float: left;
}
.subwaySearch_on{
    background-image: url("../../img/icon/地铁红.png");
    color: #f64444
}
.lineSearch_on{
    background-image: url("../../img/icon/线路红.png");
    color: #f64444
}
.zoneSearch_on{
    background-image: url("../../img/icon/居乐乐 地点红.png");
    color: #f64444  
}
</style>