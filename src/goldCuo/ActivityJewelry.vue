<template>
    <div>
        <activity-nav></activity-nav>
        <div class="page-loadmore">
            <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <!--头部img-->
                    <img class="head_img" src="http://olg4p7z9i.bkt.clouddn.com/banner_activity02.png"/>
                    <div class="select_div">
                        <span class="all_jewelries">全部作品 {{totalCount}}</span>
                        <select name="selected" class="select_componet1" @change="prizeChange">
                            <option class="option">全部作品</option>
                            <option value="0" class="option">最佳创意奖</option>
                            <option value="2" class="option">文化内容奖</option>
                            <option value="3" class="option">设计视觉奖</option>
                            <option value="4" class="option">人气奖</option>
                        </select>
                        <select name="selected" class="select_componet2" @change="praiseChange">
                            <option value="0">综合</option>
                            <option value="1">点赞</option>
                        </select>
                    </div>
                    <div class="cell"  v-for="(item, index) in jewelries">
                        <div class="cell_item" v-for="(subitem, subindex) in item" @click="jewelryDetail(subitem.object_id)">
                            <div class="cell_item_outter">
                                <img class="cell_item_img" v-bind:src="subitem.photos"/>
                                <p class="cell_item_title">{{subitem.name}}</p>
                                <div class="cell_item_img_line">
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/read.png"/><span class="cell_line_span">0</span>
                                    </div>
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/comment.png"/><span class="cell_line_span">{{subitem.comment_num}}</span>
                                    </div>
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/praise.png"/><span class="cell_line_span">{{subitem.praise_num}}</span>
                                    </div>
                                </div>
                                <div class="cell_item_img_line2">
                                    <img class="cell_item_user_icon" v-bind:src="subitem.head_image_url"/><span class="cell_item_user_name">{{subitem.nick_name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">正在加载中...</span>
                        <span v-show="bottomStatus === 'loading'">
                            <mt-spinner type="triple-bounce"></mt-spinner>
                        </span>
                    </div>
                </mt-loadmore>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import activityNav from './ActivityNav.vue'
    export default {
        data() {
            return {
                praise_type: 0,
                prize_type: 0,
                page: 1,
                params: {"page": 1},
                jewelries: [],
                allLoaded: false,
                bottomStatus: '',
                wrapperHeight: 0,
                totalCount: 0
            };
        },
        components: {activityNav},
        methods: {
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.$refs.loadmore.onBottomLoaded();
                    this.getMoreJewelries();
                }, 1500);
            },
            prizeChange: function (val) {
                this.params = {
                    ...this.params,
                    'page' : 1,
                    'prize_type' : val.target.value
                }
                this.jewelries = [];
                this.getJewelries();
            },
            praiseChange: function (val) {
                console.log(val.target.value);
                this.params = {
                    ...this.params,
                    'page' : 1,
                    'praise_type' : val.target.value
                }
                this.jewelries = [];
                this.getJewelries();
            },
            jewelryDetail: function (objectId) {
                window.location.href = BASE_URL + "/CuoWechat/index.php/Home/Jewelry/jewelryDetail?jewelry_id=" + objectId;
            },
            getMoreJewelries: function () {
                this.page = this.page + 1;
                this.params = {
                    ...this.params,
                    'page' :this.page
                };
                this.requestJewelries();
            },
            getJewelries: function () {
                this.requestJewelries();
            },
            requestJewelries: function () {
                let vm = this;
                this.$http.get(BASE_URL + '/CuoWechat/index.php/Home/jewelry/matchJewelryList', {
                    params: vm.params
                }).then((response) => {
                    this.totalCount = response.data.total;
                    for (var i = 0; i < response.data.items.length; i ++) {
                        vm.jewelries.push(response.data.items[i]);
                    }
                }).catch((response) => {
                });
            }
        },
        created() {
            this.getJewelries();
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - 50;
        }
    };
</script>

<style scoped>
    .head_img {
        width: 100%;
        background: white;
    }
    .select_div {
        margin: 10px 20px;
        text-align: left;
    }
    .select_componet1 {
        font-size: 10px;
        width: 80px;
        height: 20px;
        float: right;
        border-width: 0px;
        background: #efefef;
        border-radius: 2px;
    }
    .select_componet2 {
        font-size: 10px;
        width: 80px;
        height: 20px;
        float: right;
        margin-right: 20px;
        border-width: 0px;
        background: #efefef;
        border-radius: 2px;
    }
    .all_jewelries {
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        font-style: italic;
    }
    .cell {
        margin: 0 20px;
    }
    .cell_item {
        width: 33.333333333333333%;
        display: inline-block;
    }
    .cell_item_outter {
        /*margin-left: 2%;*/
        /*width: 98%;*/
    }
    .cell_item_img {
        width: 100%;
    }
    .cell_item_title {
        margin: 0px;
        text-align: left;
        font-size: 12px;
    }
    .cell_item_img_line {
        width: 100%;
        height: 18px;
    }
    .cell_item_img_line2 {
        float: left;
        /*width: 100%;*/
        height: 28px;
    }
    .cell_item_icon {
        width: 10px;
        vertical-align:middle;
    }
    .cell_line_span {
        margin-left: 1px;
        font-size: 8px;
    }
    .cell_item_button {
        float: left;
        margin-right: 4px;
        height: 18px;
    }
    .cell_item_user_icon {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: lightgrey;
        vertical-align:middle;
    }
    .cell_item_user_name {
        margin-left: 2px;
        font-size: 10px;
    }
    .page-loadmore{
        margin-top: 50px;
    }
    .mint-loadmore .mint-spinner {
        display: inline-block;
        vertical-align: middle;
    }
    .mint-loadmore-bottom span{
        display: inline-block;
        transition: .5s linear;
        vertical-align: middle;
    }
</style>
