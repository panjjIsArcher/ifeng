<template>
    <div class="detail">
        <!-- 新闻内容 -->
        <div>
            <!-- 标题 -->
            <div class="title-detail">
                <h2>东、西城区禁止新建纯商品住宅</h2>
                <div>
                    <div><span>2018年08月30日 10:10</span></div>
                    <div class="pr">来源:<span>北京日报</span></div>
                    <div class="sharing">
                        <!-- 评论数 -->
                        <div><span style="font-size:20px;color:red" >{{summer}}</span>评论</div>
                        <!-- 分享到其他平台 -->
                        <div>
                            <ul>
                                <li><a href=""><img src="../../img/icon/qq.png" alt=""></a></li>
                                <li><a href=""><img src="../../img/icon/qqkj.png" alt=""></a></li>
                                <li><a href=""><img src="../../img/icon/wechat.png" alt=""></a></li>
                                <li><a href=""><img src="../../img/icon/weibo.png" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 广告 -->
            <div class="advdetail">
                <a href=""><img src="../../img/量子破碎.jpg" alt=""></a>
                <div>关闭</div>
            </div>
            <!-- 内容 -->
            <article class="article">
                <p>北京晨报讯（记者 刘映花）7月份，各地调控措施陆续加码。昨日，国家统计局发布了7月份70个大中城市商品住宅销售价格变动情况统计数据显示，一二线城市新建商品住宅销售价格环比涨幅回落，三线城市略有扩大。</p>
                <p>国家发展改革委秘书长、国民经济综合司司长、新闻发言人丛亮昨日表示，下半年，发改委将坚持稳中求进的工作总基调，下决心解决好房地产的问题，要坚持因城施策，促进供求平衡，合理引导预期，整治市场秩序，坚决遏制房价上涨，加快建立促进房地产市场平稳健康发展的长效机制。</p>
                <p>来自国家统计局的数据显示，据初步测算，从环比看，7月份4个一线城市新建商品住宅销售价格上涨0.2%，涨幅比上月回落0.4个百分点，其中上海价格下降，北京、广州和深圳价格分别上涨0.2%、0.6%和0.5%。31个二线城市新建商品住宅销售价格上涨1.1%，涨幅比上月回落0.1个百分点。35个三线城市新建商品住宅销售价格上涨1.5%，涨幅比上月扩大0.8个百分点。一线、二线、三线城市二手住宅销售价格分别上涨0.2%、1.0%和1.1%。</p>
                <p>从同比看，70个大中城市中，一线城市新建商品住宅销售价格上涨0.2%，上月为持平；二手住宅销售价格上涨0.5%，涨幅比上月扩大0.4个百分点。二线城市新建商品住宅和二手住宅销售价格分别上涨7.3%和5.5%，涨幅比上月分别扩大1.0个和0.9个百分点。三线城市新建商品住宅和二手住宅销售价格分别上涨6.7%和5.1%，涨幅比上月分别扩大0.7个和0.8个百分点。15个热点城市新建商品住宅销售价格有涨有跌。7月份，15个热点城市新建商品住宅销售价格环比下降的城市有2个，与上月相同，最大降幅为0.1%；持平的2个，减少1个；上涨的11个，增加1个，最高涨幅为3.0%。同比下降的城市有4个，比上月减少3个，最大降幅为1.9%；上涨的11个，增加3个，最高涨幅为6.9%。</p>               
                <img src="../../img/erweima.jpg" alt="">
            </article>
        </div>
        <!-- 标签  -->
        <div class="mark">
                <span>标签:城市 房地产 容积率 贷款 新房</span>
                <span>[责任编辑:潘家杰]</span>
        </div>
        <!-- 免责申明 -->
        <div class="disclaimers">
            免责声明：本文仅代表作者个人观点，与凤凰网无关。其原创性以及文中陈述文字和内容未经本站证实，对本文以及其中全部或者部分内容、文字的真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考，并请自行核实相关内容。
        </div>
        <p></p>
        <!-- 评论区 -->
        <Discussion></Discussion>
    </div>
</template>
<script>
import Discussion from "./Discussion";
import $ from "jquery";
export default {
    name:'Detail',
    data(){
        return{
        modcommentNewLength:'',
        summer:0,
    }
    },
    components:{Discussion},
    computed:{
        show(){
        this.summer=this.$store.state.discussion_store.commentNums
        }
    },
    mounted(){
        let prevlength= $(".detail").prev().height();
        $(".detail").height(prevlength);
    }
}
</script>
<style>
.detail{
    width: 90%;
    overflow: hidden;
    display: inline-block;
    margin:0 5%;
    position: absolute;
    z-index: 52;
    top: 40px;
    background-color: white;
}
/* 标题 */
.title-detail{
    border-bottom: 1px dashed #b2b2b6;
}
.title-detail h2{
    font-weight: normal;
    font-size: 26px;
    line-height: 63px;
    font-family: "Microsoft yahei";
    margin:10px 0;
}
.title-detail>div {
    line-height: 22px;
    color: #797979;
    margin-bottom: 40px;
    font-size: 14px
}
.pr{
    display: inline-block;
}
/* 分享 */
.sharing{
    float:right;
    margin-right: 2%;
}
.sharing>div{
    float: left;
}
.sharing>div:first-child{
    line-height: 18px;
    margin-right: 25px;
    color:black;
}
.sharing li{
    float: left;
    list-style: none;
    margin:0 7px;
}
.sharing img{
    height: 100%;
}
.sharing ul{
    margin:0;
    padding: 0;
}
.advdetail img{
    width: 100%;
    height:80px;
    margin: 20px 0;
}
.advdetail>div:last-child{
    z-index: 3;
    height: 16px;
    width: 35px;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    position: relative;
    display: inline-block;
    position: relative;
    top:-107px;
    left:97.5%;
}
/* 文章内容 */
.article{
    padding-top: 10px;
    overflow: hidden;
    font-size: 16px;
    line-height: 30px;
    color: #343434;
    font-family: "Microsoft YaHei","\5b8b\4f53";
}
.article>p{
    text-indent: 28px !important;
    margin-bottom: 30px;
}
.article>img{
    width: 20%;
    height: 20%;
    margin: 0 40%;
}
/* 标签 */
.mark{
    font-size: 14px;
    color: #797979;
    border-bottom: 1px dashed #b2b2b6;
    padding-bottom: 13px; 
}
.mark>span:last-child{
    float:right;
}
.disclaimers{
    padding: 9px 0 6px 2px;
    font-size: 14px;
    color: #797979;
    line-height: 22px;
}
</style>