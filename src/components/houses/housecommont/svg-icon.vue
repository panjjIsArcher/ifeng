<template>
    <div>
        <svg class="priceChange-root" version="1.1">
            <rect width='100%' class="priceChange">
            </rect>
                <!-- <g>
                    <g>
                        <path x='190' y='55' fill='none' d='M 0 11 L 16 11' stroke='#1c7099' stroke-width='2'></path>
                        <path x='190' y='55'></path>
                        <text x='200' y='55'><tspan>本楼盘丨近6个月的均价15000元/㎡</tspan></text>
                    </g>
                     <g>
                        <path></path>
                        <path></path>
                        <text><tspan>周边楼盘丨近6个月的均价12000元/㎡</tspan></text>
                    </g>
                </g> -->
             <!-- 纵坐标 -->
                <g>
                    <text x='20' y='365' class="zzb" ><tspan>0元/㎡</tspan></text>
                    <text x='20' y='325' class="zzb"><tspan>10000元/㎡</tspan></text>
                    <text x='20' y='275' class="zzb"><tspan>20000元/㎡</tspan></text>
                    <text x='20' y='225' class="zzb"><tspan>30000元/㎡</tspan></text>
                    <text x='20' y='175' class="zzb"><tspan>40000元/㎡</tspan></text>
                    <text x='20' y='125' class="zzb"><tspan>50000元/㎡</tspan></text>
                    <text x='20' y='75'  class="zzb"><tspan>60000元/㎡</tspan></text>
                </g>
                 <!-- 横坐标 -->
                <g>
                    <text x='1049' y='385' class="hzb">2018年8月</text>
                    <text x='869' y='385' class="hzb">2018年7月</text>
                    <text x='688' y='385' class="hzb">2018年6月</text>
                    <text x='507' y='385' class="hzb">2018年5月</text>
                    <text x='335' y='385' class="hzb">2018年4月</text>
                    <text x='146' y='385' class="hzb">2018年3月</text>
                </g>
            <rect class="highcharts" >
            </rect>
            <!-- 折现背景图 -->
                <!-- 边缘竖线 -->
                <g>
                    <path fill="#f3f3f3" d='M 85 60 L 85 365' stroke='rgb(0, 134, 199)' stroke-width='2px'></path>
                </g>
                <!-- 边缘横线 -->
                <g>
                    <path fill="#f3f3f3" stroke='rgb(0, 134, 199)' stroke-width='2px' d='M 85 365 L 1158 365'></path>
                </g>
                <!-- 横线 -->
                <g>
                    <path fill="#f3f3f3" d='M 87 125 L 1158 125 1158 175 87 175 Z' stroke='#e6e6e6' stroke-width='1px'></path>
                    <path fill="#f3f3f3" d='M 87 225 L 1158 225 1158 275 87 275 Z' stroke='#e6e6e6' stroke-width='1px'></path>
                    <path fill="#f3f3f3" d='M 87 325 L 1158 325 1158 365 87 365 Z' stroke='#e6e6e6' stroke-width='1px'></path>
                </g>
                <!-- 竖线 -->
                <g>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 170 70 L 170 365'></path>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 359 70 L 359 365'></path>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 531 70 L 531 365'></path>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 712 70 L 712 365'></path>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 893 70 L 893 365'></path>
                    <path fill="#f3f3f3" stroke='#e6e6e6' stroke-width='1px' d='M 1073 70 L 1073 365'></path>
                </g>
                <g>
                    <path fill='none' d='M 170 275 L 359 175 531 100 712 300 893 230 1072 80' stroke-width='2px' stroke='rgb(153, 210, 221)'></path>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='170' cy='275' r='8'></circle>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='359' cy='175' r='8'></circle>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='531' cy='100' r='8'></circle>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='712' cy='300' r='8'></circle>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='893' cy='230' r='8'></circle>
                    <circle fill='rgb(153, 210, 221)' stroke='rgb(153, 210, 221)' cx='1072' cy='80' r='8'></circle>

                </g>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.priceChange-root{
    width:100%;
    height: 400px;
}
.priceChange{
    width:100%;
    fill:rgb(248, 248, 248);
    stroke: #333;
    height: 400px;
    stroke-opacity: -0.3;
    x:0;
    y:0;
    ry:0;
    rx:0;
}
.highcharts{
    fill: none;
    x: 86px;
    y: 62px;
    width: 1046px;
    height: 303px;
}
.zzb{
    color: #666666;
    font-size:11px;
    fill:#666666;
    cursor:default;
}
.hzb{
    color: #666666;
    cursor: default;
    font-size: 11px;
    fill: #666666;
}
</style>
