<template>
    <div>
        <NavContain></NavContain>
        <router-view></router-view>
        <router-view name="news"></router-view>
        <Foot></Foot>
    </div>
</template>
<script>
import NavContain from "./components/nav/NavContain";
import Content from "./components/content/Content";
import Foot from "./components/foot/Foot";
import Detail from "./components/detail/Detail";
import Register from './components/login/register';
import news from "./components/detail/news";
export default {
  components:{
    NavContain,Content,Foot,Detail}
}
</script>
<style scoped>
</style>