<template>
<div>
    <div class="NewHouse" >
        <div><h2>{{title}}</h2></div>
        <div>
            <HouseRecommend></HouseRecommend>
            <Sale :secondhouses="secondhouses" :imgtxtBlockSixImgBoxs="imgtxtBlockSixImgBoxs"></Sale>
            <Comment></Comment>
        </div>
    </div>
</div>
</template>
<script>
import HouseRecommend from "./HouseRecommend"
import Sale from "./Sale"
import Comment from "./Comment"
export default {
    name:"NewHouse",
    data(){
      return{
        secondhouses:this.secondhouse,
        imgtxtBlockSixImgBoxs:this.imgtxtBlockSixImgBox
      }  
    },
    components:{HouseRecommend,Sale,Comment},
    props:{
        title:{
            type:String
        },
         secondhouse:{
            type:Array
        },
        imgtxtBlockSixImgBox:{
            type:Array
        }
    },
    
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

