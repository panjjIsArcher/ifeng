<template>
    <div class="housedetail">
        <house-tap-nav :topname="topname"></house-tap-nav>
        <house-info :detail="detail"></house-info>
        <div></div>
    </div>
</template>
<script>
import HouseInfo from "./houseinfo";
import houseTapNav from "./houseTapNav";
import {mapState} from "vuex";
import $ from "jquery";
export default {
    data(){
        return{
            topname:this.$store.state.detail_store.details.descName,
            detail:this.$store.state.detail_store
        }
    },
    components:{
        HouseInfo,houseTapNav
    },
    mounted(){
        let bodylength=$("body").height();
        $(".housedetail").height(bodylength);
    }
}
</script>
<style scoped>
.housedetail{
    z-index:200;
    position: absolute;
    top: 0;
    background-color: white
}
</style>