<template>
    <div>
        <div class="pieceofnews">
            <!-- 新闻详情页的导航 -->
            <news-nav></news-nav>
            <!-- 新闻内容的主页面 -->
            <div>
                <news-content></news-content>
            </div>
        </div>
        <!-- 详情页 -->
        <router-view name="detail"></router-view>
        <adv-bottom></adv-bottom>
    </div>
</template>
<script>
import Detail from "./Detail";
import newsNav from "./newsNav";
import newsContent from "./newsContent";
import advBottom from "./advBottom";
import $ from 'jquery';
export default {
    components:{Detail,newsNav,newsContent,advBottom},
    
}
</script>
<style>
.pieceofnews{
    z-index: 50;
    background-color: white;
    position: absolute;
    top:0;
    padding:0 9%;
    width: 82%
}
</style>
