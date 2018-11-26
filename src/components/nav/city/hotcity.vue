<template>
    <div>
       <ul>
           <li class="city-item"><a href="">北京</a></li>
           <li class="city-item"> <a href="">深圳</a></li>
           <li class="city-item"><a href="">上海</a></li>
           <li class="city-item"><a href="">天津</a></li>
           <li class="city-item"><a href="">重庆</a></li>
           <li class="city-item"><a href="">成都</a></li>
           <li class="city-item"><a href="">广州</a></li>
           <li class="city-item"><a href="">杭州</a></li>
           <li class="city-item"><a href="">哈尔滨</a></li>
           <li class="city-item"><a href="">沈阳</a></li>
           <li class="city-item"><a href="">昆明</a></li>
           <li class="city-item"><a href="">大理</a></li>
           <li class="city-item"><a href="">济南</a></li>
           <li class="city-item"><a href="">呼和浩特</a></li>
           <li class="city-item"><a href="">长春</a></li>
           <li class="city-item"><a href="">武昌</a></li>
           <li class="city-item"><a href="">武汉</a></li>
           <li class="city-item"><a href="">长沙</a></li>
           <li class="city-item"><a href="">拉萨</a></li>
           <li class="city-item"><a href="">东莞</a></li>
       </ul>
    </div>
</template>
<script>
export default {
    name:"HotCity"
}
</script>
<style>
.city-item{
    list-style: none;
    float: left;
    width:20%;
    text-align: center;
    line-height: 1.5rem;
}
.city-item a{
    color: black;
}
.city-item:hover{
    background-color: #ee7777;
}
</style>