<template>
    <div class="page-loadmore">
        <h1 class="page-title">Pull up</h1>
        <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
        <p class="page-loadmore-desc">此例请使用手机查看</p>
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <div class="table"  v-for="n in 10">
                    <div class="cell">
                        <div class="cell_item">
                            <div class="cell_item_outter">
                                <img class="cell_item_img" src="../assets/jewelry_01.png"/>
                                <p class="cell_item_title">zhangqipu</p>
                                <div class="cell_item_img_line">
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/read.png"/><span class="cell_line_span">12</span>
                                    </div>
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/comment.png"/><span class="cell_line_span">11</span>
                                    </div>
                                    <div class="cell_item_button">
                                        <img class="cell_item_icon" src="../assets/praise.png"/><span class="cell_line_span">22</span>
                                    </div>
                                </div>
                                <div class="cell_item_img_line2">
                                    <img class="cell_item_user_icon" /><span class="cell_item_user_name">zhangqipu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                        <mt-spinner type="fading-circle"></mt-spinner>
                    </span>
                </div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script type="text/babel">
    import { Loadmore } from 'mint-ui';

    export default {
        data() {
            return {
                page: 0,
                params: {"page": 0},
                list: [],
                jewelries: [],
                allLoaded: false,
                bottomStatus: '',
                wrapperHeight: 0
            };
        },
        methods: {
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    let lastValue = this.list[this.list.length - 1];
                    if (lastValue < 40000) {
                        for (let i = 1; i <= 10; i++) {
                            this.list.push(lastValue + i);
                        }
                    } else {
                        this.allLoaded = true;
                    }
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            getJewelries: function () {
                let vm = this
                this.$http.get(BASE_URL + '/CuoWechat/index.php/Home/jewelry/matchJewelryList', {
                    params: vm.params
                }).then((response) => {
//                    vm.list = response.data.items;
                }).catch((response) => {

                })
            },
        },
        created() {
            for (let i = 1; i <= 20; i++) {
                this.list.push(i);
            }
            this.getJewelries();
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        }
    };
</script>

<style>
    @component-namespace page {
        @component loadmore {
            @descendent desc {
                text-align: center;
                color: #666;
                padding-bottom: 5px;
            &:last-of-type {
                 border-bottom: solid 1px #eee;
             }
            }
            @descendent listitem {
                height: 50px;
                line-height: 50px;
                border-bottom: solid 1px #eee;
                text-align: center;
            &:first-child {
                 border-top: solid 1px #eee;
             }
            }
            @descendent wrapper {
                overflow: scroll;
            }
            .mint-spinner {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    @component mint-loadmore-bottom {
        span {
            display: inline-block;
            transition: .2s linear;
            vertical-align: middle;
        @when rotate {
            transform: rotate(180deg);
        }
    }
    }

    .table {
        margin: 0 20px;
    }
    .cell {
        width: 100%;
    }
    .cell_item {
        width: 33.333333%;
        height: 100%;
    }
    .cell_item_outter {
        margin-left: 2%;
        width: 98%;
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
        font-size: 10px;
    }

</style>