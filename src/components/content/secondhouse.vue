<template>
<div class="NewHouse Secondhouse">
        <div><h2>二手房</h2></div>
        <div>
            <HouseRecommend></HouseRecommend>
            <Sale></Sale>
            <Comment></Comment>
        </div>
    </div>
</template>
<script>
import HouseRecommend from "./HouseRecommend"
import Sale from "./Sale"
import Comment from "./Comment"
export default {
    name:"secondhouse",
    components:{HouseRecommend,Sale,Comment}
}
</script>
<style>
/* 整体的宽高 */
.NewHouse{
    width: 80%;
    overflow: hidden;
    position: relative;
    display: inline-block;
    margin:0 10%;
    height: 675px;

}
/* 标题的宽高 */
.NewHouse>div:first-child{
    height: 75px;
    float: left;
    margin-top: 10px;
    width: 100%;
}
/* 正文的宽高 */
.NewHouse>div:last-child{
    height: 600px;
}
</style>

