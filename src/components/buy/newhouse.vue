<template>
    <div class="newhouse">
        <!-- 搜索栏 -->
        <house-search></house-search>
        <!-- 筛选栏 -->
        <house-filter></house-filter>
        <!-- 详情栏 -->
        <house-list @select="selectHouse"></house-list>
        <!-- 猜你喜欢 -->
        <guess-you-like></guess-you-like>
        <router-view></router-view>
    </div>
</template>
<script>
import GuessYouLike from './guessyoulike';
import HouseSearch from './housesearch';
import HouseFilter from './housefilter';
import HouseList from './houselist'
export default {
    components:{GuessYouLike,HouseSearch,HouseFilter,HouseList},
    data(){
        return{
            detail:Object
        }
    },
    methods:{
        selectHouse:function(res){
            this.$router.push("./newhouse/${res.id}");
            this.detail=res
            this.$store.commit("detailDate",this.detail)
        }
    }
}
</script>
<style scroped>
</style>