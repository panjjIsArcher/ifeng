<template>
   <div class="house-recommend box-border-top">
       <!-- 特色楼盘 -->
       <div class="special-house">
           <div>
               <h3 class="title-style">特色楼盘</h3>
           </div>
           <div class="house-li">
               <ul>
                   <li v-for="item in houseLi"><a href="">{{item.keyword}}</a><span>丨</span></li>
               </ul>
           </div>
       </div>
       <!-- 开盘日历 -->
       <div class="open-date">
           <div>
              <h3 class="title-style"> 开盘日历</h3>
           </div>
           <!-- 滚动楼盘展示 -->
           <div class="houseCalender-con">
                <!-- 滚动内容 -->
                <div class="scroll-ctn">
                    <ul>
                        <li v-for="item in scrollctn">
                            <dl>
                                <dt>{{item.date}}</dt>
                                <dd v-for="item in item.list">
                                    <a href="">{{item.name}}</a>
                                    <span>
                                        <em class="em-grice" >{{item.price}}</em>
                                        万元/㎡
                                    </span>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
           </div>
       </div>
   </div>
</template>
<script>
export default {
    name:"HouseRecommend",
    data(){
        return {
            houseLi:[
                {keyword:"单身一居"},
                {keyword:"温馨两居"},
                {keyword:"新三代"},
                {keyword:"7月新盘"},
                {keyword:"二胎时代"},
                {keyword:"共有产权"},
                {keyword:"单身一居"},
                {keyword:"温馨两居"},
                {keyword:"新三代"},
                {keyword:"新婚房"},
                {keyword:"单身一居"},
                {keyword:"温馨两居"},
            ],
            scrollctn:[
               {
                   date:'07月01日',
                   list:[
                       {
                           name:'首创半岛',
                           price:"1.5"
                       },
                       {
                           name:'国瑞熙墅',
                           price:"1.2"
                       },
                       
                   ]
                },
                {
                   date:'07月03日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       },
                       {
                           name:'国瑞熙墅',
                           price:"2.2"
                       },
                       
                   ]
                },
                {
                   date:'07月10日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       }
                   ]
                },
                {
                   date:'07月03日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       },
                       {
                           name:'国瑞熙墅',
                           price:"2.2"
                       },
                        {
                           name:'亦庄金茂府',
                           price:"5.2"
                       },
                       
                   ]
                },
                {
                   date:'07月10日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       }
                   ]
                },
                {
                   date:'07月10日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       }
                   ]
                },
                {
                   date:'07月10日',
                   list:[
                       {
                           name:'大湖孔雀城',
                           price:"3.5"
                       }
                   ]
                },
            ]
        }
    }
}
</script>
<style>
.house-recommend{
    height: 600px;
    width: 20%;
    position: relative;
    display: inline-block;
    margin-right: 10px;
}
.special-house{
    margin-bottom: 20px;
    float: left;
    box-shadow: 1px;
}
.special-house>div{
    width: 100%;
    position: relative;
    float: left;
}
.title-style{
    float: left;
    padding-left: 30px;
    font-size: 18px;
    font-family: 'Hiragino Sans GB W3';
}
.box-border-top{
    border-top: 1px solid #f54343;
}
.special-house ul{
    padding: 0;
}
.special-house li{
    float: left;
    list-style: none;
    margin-left: 8px;
    width: 41%;
}
.special-house li>span{
    padding: 0;
}
.special-house a{
    color: black;
    float: left;
    margin-right: 0.5px;
    font-size: 0.9rem;
    line-height: 1.5rem;
}
.special-house a:hover{
    color: #f54343;
}
/* .house-li{
    height: 272px;
} */
/* 开盘日历 */
.open-date{
    float: left;
    border-top: 1px solid #f54343;
    width: 100%;
}
.scroll-ctn{
    height: 290px;
    overflow-y: scroll;
    float: left;
}
/* 滚动条的样式 */
/* 宽度 */
.scroll-ctn::-webkit-scrollbar{
    width:3px;
}
/* 里面的小方块 */
.scroll-ctn::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
/* 轨道 */
.scroll-ctn::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
.scroll-ctn ul{
    margin:0;
    padding:0;
}
.scroll-ctn li{
    list-style: none;
    margin:5px 0;
}
.scroll-ctn dl{
    margin: 0;
}
.scroll-ctn dt{
    color: #932828;
    font-size: 12px;
}
.scroll-ctn dd{
    line-height: 15px;
    padding: 5px 0;
    margin: 0;
    font-size: 14px;
    width:100%;
    display: inline-block;
}
.scroll-ctn a{
   color: #1e1e1e;
}
.scroll-ctn a:hover{
   color: #f54343;
}
.scroll-ctn span{
    font-weight: inherit;
    margin-right: 1px;
    float:right;
}
.em-grice{
    color: #f54343;
    font-weight: normal;
}
/* 媒体查询960px */
@media screen and (max-width: 960px) {
    .special-house li{
    margin-left: 0.1rem;
}
.special-house li>span{
    display: none;
}
.special-house a{
    font-size: 0.75rem;
}
}

</style>

