<template>
    <div class="page-navbar">
        <mt-navbar class="page-part to_top" v-model="selected">
            <mt-tab-item><router-link to="activity" class="a-no-line a-title-color">首页</router-link></mt-tab-item>
            <mt-tab-item><router-link to="activityjoin" class="a-no-line a-title-color">赛事报名</router-link></mt-tab-item>
            <mt-tab-item><router-link to="activityjewelry" class="a-no-line a-title-color">作品展示</router-link></mt-tab-item>
            <mt-tab-item><router-link to="activityjudges" class="a-no-line a-title-color">评委介绍</router-link></mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        }
    }
</script>

<style scoped>
    .a-no-line {
        text-decoration:none;
        font-size: 14px;
    }
    .a-title-color {
        color: black;
    }
    .to_top {
        position:fixed; /* <a href="https://www.baidu.com/s?wd=%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1d9mW7BPhfzuWbdnANBnvN-0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EnHf1njbYP163n1RLPWn4nWcdrf" target="_blank" class="baidu-highlight">绝对定位</a>，fixed是相对于浏览器窗口定位。 */
        top:0; /* 距离窗口顶部距离 */
        left:0; /* 距离窗口左边的距离 */
        width:100%; /* 宽度设置为100% */
        height:50px; /* 高度 */
        z-index:99; /* 层叠顺序，数值越大就越高。页面滚动的时候就不会被其他内容所遮挡。 */
    }
    .parent {
        font-size: 0;
    }
    .mint-tab-item-label {
        color: inherit;
        line-height: 1;
        font-weight: 600;
        font-size: 14px;
    }
    .mint-navbar {
        background: #9af0ff;
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 0px solid black;
        color: black;
        margin-bottom: -3px;
    }
</style>