<template>
    <div class="join_content_div">
        <activity-nav></activity-nav>
        <div class="content">
            <img class="join_head_img" src="../assets/join_to_know.png"/>
            <p class="join_detail">报名说明<br>
                一、报名资格<br>
                1、本次国际大赛向所有参赛者开放—— 高校设计专业师生、设计爱好者、跨界 设计师、艺术家，允许以个人名义参赛。<br>
                2、不限定国籍、专业、行业（注：参赛者年龄、职业、学历、国籍、名族等皆不限）。<br>
                3、不收取任何参赛费用。<br>
                二、报名方式<br>
                1、选手可通过扫描赛事海报上的二维码，即可获得报名H5专题，填写个人信息进行报名；<br>
                2、选手也可通过关注“错原创首饰平台”公众号，在微信内获取报名H5专题进行报名；<br>
                注：参赛者需在举办大赛的“错原创首饰定制”APP平台上注册账号并成为申请成为设计师，方可报名成功，否则在赛事专题上上传的参赛作品将视为无效作品。<br>
            </p>
            <div class="a_div" @click="activityInfo">
                <a class="a_link">《选手参赛须知》</a>
            </div>
            <mt-button class="join_close_button" type="default" @click="uploadJewelry">立即报名</mt-button>
        </div>
    </div>
</template>

<script scoped>
    import activityNav from './ActivityNav.vue'
    export default {
        data() {
            return {
            };
        },
        props: {userId: String},
        methods: {
            uploadJewelry: function () {
                this.$router.push({name: 'JewelryUpload'});
            },
            activityInfo: function () {
                this.$router.push('activitytoknow');
            }
        },
        components: {activityNav}
    };
</script>

<style scoped>
    .content {
        margin-top: 60px;
    }
    .a_link {
        text-decoration: underline;
        color: #2ba0df;
    }
    .a_div {
        margin-top: 30px;
        width: 100%;
        height: 40px;
        font-size: 14px;
    }
    .join_content_div {
        margin: 15px 20px;
    }
    .join_head_img {
        width: 100%;
    }
    .join_detail {
        font-size: 14px;
        background: #fafafa;
        text-align: left;
        line-height: 30px;
        font-weight: 100;
    }
    .join_close_button {
        width: 101px;
        height: 28px;
        background: #9ceffe;
        border-radius: 4px;
        font-size: 14px;
        color: black;
        font-weight: 400;
    }
</style>