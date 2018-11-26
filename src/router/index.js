import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import Content from "../components/content/Content";
import HotCity from "../components/nav/city/hotcity";
import fromAtoK from "../components/nav/city/fromAtoK";
import fromLtoO from "../components/nav/city/fromLtoO";
import fromPtoZ from "../components/nav/city/fromPtoZ";
import houseDetail from "../components/houses/housecommont/housedetail";
Vue.use(VueRouter);
export default new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        // 默认路由
        {
            path:'/',
            component:Content
        },
        // 新闻页面路由
        {
            path:'/news',
            name:"news",
            components:{
                news:resolve=>require(["../components/detail/news"],resolve)
                       },
            children:[
                {
                    path:'detail',
                    components:{
                        detail:resolve=>require(["../components/detail/Detail"],resolve)
                    }
                }
            ]
        },
        // 买房路由
        {
            path:'/newhouse',
            component:resolve=>require(["../components/buy/newhouse"],resolve),
            children:[
                {
                    component:houseDetail,
                    path:":id",
                }
            ]
        },
        // 注册页面路由
        {
            path:'/register',
            component:resolve=>require(["../components/login/register"],resolve)
        },
        // 城市选择路由
        {
            path:'/hotcity' ,
            components:{
                'city':HotCity
            },
        },
        {  
            path:'/fromAtoK',
            components:{
                'city':fromAtoK
            }
        },
        {
            path:'/fromLtoO',
            components:{
               'city':fromLtoO
            }
        },
        {
            path:'/fromPtoZ',
            components:{
                'city': fromPtoZ
            }
        }
    ],
})