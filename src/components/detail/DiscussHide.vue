<template>
    <div class="mod-commentTextareaMiddle">
        <form action="">
            <div class="w-areaBox"><textarea name="" id="" cols="30" rows="10" placeholder="文明上文，理性评论，登录发帖"></textarea></div>
            <div class="w-submitBar">
            <div>
                <img src="../../img/icon/expression.png" alt="">
                <img src="../../img/pull.png" alt="" style="width:14px;height:8px;margin-bottom:18%;">
            </div>
            <div><input type="button" value="发表评论" class="icon-faceTrigarr"></div>
            </div>
        </form>
        </div>
</template>
<script>
export default {
    name:"DiscussHide"
}
</script>
<style>
.mod-commentTextareaMiddle{
    margin-top: 1rem;
    display: none;
}
.mod-commentTextareaMiddle>form{
    width: 50%;
}
.w-areaBox>textarea{
    width: 100%;
    font-size: 14px;
}
</style>