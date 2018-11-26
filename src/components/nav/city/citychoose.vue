<template>
    <div class="citychoose" id="citychoose">
        <div class="city-list">
            <ul>
            <li><router-link to="/hotcity" class="tab-item">热门城市</router-link></li>
            <li><router-link to="/fromAtoK" class="tab-item">A to K</router-link></li>
            <li><router-link to="/fromLtoO" class="tab-item">L to O</router-link></li>
            <li><router-link to="/fromPtoZ" class="tab-item">P to Z</router-link></li>
            </ul>
        </div>
        <div>
            <router-view name="city"></router-view>
        </div>
    </div>
</template>
<script>
import HotCity from "./hotcity";
import fromAtoK from "./fromAtoK";
import fromLtoO from "./fromLtoO";
import fromPtoZ from "./fromPtoZ";
export default {
    name:"CityChoose",
    components:{HotCity,fromAtoK,fromLtoO,fromPtoZ
    }
}
</script>
<style>
.citychoose{
    background-color: #eaeaea;
    position:absolute;
    width: 45%;
    z-index: 20;
    display: none
}
.citychoose ul{
    margin:0;
    padding:0;
}
.city-list li{
   list-style: none;
   float: left;
   text-align: center;
   width: 25%;
   font-size: 1rem;
   border-bottom: 2px solid #eaeaea;
}
.city-list li:hover{
    border-bottom: 2px solid #f37f7f;
}
.tab-item{
    color:black;
}
.citychoose>div:first-child{
    overflow: hidden;
    width: 100%;
}
</style>