<template>
    <div class="judge_content">
        <activity-nav></activity-nav>
        <div class="content">
            <img class="judge_head_img" src="../assets/judges_info.png"/>
            <div class="expert_div">
                <div class="judge_title_img_div">
                    <img class="judge_title_img" src="../assets/expert_judge.png"/>
                </div>
                <div v-for="(item, index) in judges" class="judge_cell">
                    <div class="judge_cell_head_div">
                        <img class="judge_cell_head_img" v-bind:src="item.head_icon"/>
                    </div>
                    <div class="judge_cell_detail_div">
                        <p class="judge_cell_detail">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import activityNav from './ActivityNav.vue'
    export default {
        data() {
            return {
                judges: [
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E6%9D%A8%E6%98%8E%E6%98%9F.jpg", "desc": "杨明星，中国地质大学（武汉）博士学位，教授。英国宝石协会珠宝鉴定师FGA，英国宝石协会钻石分级师DGA，中国珠宝玉石质量注册检验师CGC；美国珠宝评估师MVP，全国珠宝玉石首饰类产品质量检验专家委员会委员，《宝石和宝石学杂志》编委会主任。现任中国地质大学（武汉）珠宝学院院长，中国地质大学珠宝检测中心主任，主要社会兼职有：武汉市洪山区政协常委，武汉市洪山区政府咨询委员会委员，中国珠宝首饰行业协会副会长兼鉴定与评估委员会副秘书长，湖北省宝玉石协会副会长，武汉金饰珠宝行业协会副会长，武汉珠宝文化街行业协会会长，湖北省观赏石协会顾问，湖北省绿松石协会顾问，湖北省竹山县绿松石产业高级顾问，云南省珠宝玉石协会顾问，广东省彩宝首饰商会顾问，深圳市首饰设计师协会顾问等。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/WechatIMG656.jpeg", "desc": "孙仲鸣，中国地质大学（武汉）硕士学位，副教授，硕士研究生导师，中国贵金属学会理事。现任珠宝学院副院长，院中心实验室主任。2011~2013“宝瑶杯”、 2011~2012梧州国际宝石节宝石首饰设计大赛评委组组长，2011~2014“云峰杯”首饰设计大赛评委组组长，2012“闪耀十年——钻石小鸟10周年珠宝设计大赛”评委，2013“意彩石光”时尚首饰设计大赛评委，2014周大福“设•想未来”大学生首饰设计大赛评委，深圳、广州、北京多家珠宝企业技术及设计顾问。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E5%BC%A0%E8%8D%A3%E7%BA%A2.jpg", "desc": "张荣红，中国地质大学（武汉）博士学位，教授。中国地质大学（武汉）珠宝学院首饰系主任，首饰设计专业学科带头人。英国爱丁堡大学艺术学院访问学者，英国当代首饰学会会员，中国宝玉石协会教育专业委员会委员，《宝石和宝石学杂志》编委。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/WechatIMG627.jpeg", "desc": "卢筱，北京服装学院学士学位，中国地质大学（武汉）珠宝学院首饰设计专业教研室讲师，硕士研究生导师，中国地质大学珠宝学院首饰系副主任，珠宝学院珠宝首饰设计专业主要创建人，湖北省重点人社基地传统首饰工艺的传承与发展研究所所长，中国首饰设计师协会、中国礼品协会专家委员会委员。主要从事珠宝首饰设计专业教学与科研工作。从事首饰设计专业教学十余年。开设并主讲MFA的课程“品牌首饰的规划与设计”、综合首饰工艺—珐琅等。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E5%8C%85%E5%BE%B7%E6%B8%85.jpg", "desc": "包德清，教授，硕士研究生导师，武汉工程科技学院珠宝学院院长。中国地质大学（武汉）理学学士，中南财经政法大学工商管理硕士（MBA）。英国皇家宝石学会会员（FGA），国家注册宝石鉴定师，现任中国地质大学珠宝学院教授、宝石系主任，兼任武汉工程科技学院珠宝学院院长，北京华夏典当行营销顾问。1988年进入珠宝行业从事宝石学教育，在珠宝行业内具有很高的声望。著有《实用宝石加工工艺学》、《珠宝市场营销学》、《翡翠商贸》等专著，承担多项教学科研项目。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/WechatIMG11.jpeg", "desc": "李冯君，武汉工程科技学院珠宝学院首饰设计系主任，硕士研究生，副教授，中国珠宝玉石首饰行业协会学术教育专业委员会委员，主要从事珠宝首饰设计专业的教学与研究工作。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E6%9D%8E%E5%8B%8B%E8%B4%B5.png", "desc": "李勋贵，深圳技师学院珠宝首饰系主任，国家注册珠宝玉石质量检验师，国家贵金属首饰制作工裁判员，中国珠宝玉石协会理事，中国黄金协会常务理事，深圳黄金珠宝首饰行业协会常务理事，中国珠宝玉石协会教育专业委员会副主任委员，世界技能大赛珠宝加工项目国家集训基地（深圳技师学院）负责人。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E7%8E%8B%E6%83%8A%E6%B6%9B.png", "desc": "王惊涛，深圳技师学院珠宝首饰系副主任，高级讲师，高级技师，高级考评员，珠宝培训师，鉴定师。"},
                    {"head_icon": "http://olg4p7z9i.bkt.clouddn.com/%E9%99%88%E6%98%8E.png", "desc": "陈明，深圳技师学院珠宝首饰系副主任，硕士学位，讲师，高级技师，深圳市珠宝首饰设计师协会监事，财富天下频道“百姓聊珠宝栏目”顾问，中国珠宝玉石首饰行业协会注册珠宝首饰设计师。"}
                ]
            };
        },
        components: {activityNav}
    };
</script>

<style scoped>
    .judge_content {
        margin: 0px 20px;
    }
    .judge_head_img {
        width: 100%;
    }
    .content {
        margin-top: 60px;
    }
    .judge_title_img_div {
        height: 30px;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 10px;
    }
    .judge_title_img {
        float: left;
        width: 180px;
    }
    .expert_div {
        float: left;
        background: #fafafa;
    }
    .judge_cell {
        width: 100%;
    }
    .judge_cell_head_img {
        width: 50px;
        height: 50px;
        float: left;
        border-radius: 25px;
    }
    .judge_cell_detail_div {
        margin-left: 60px;
        margin-bottom: 10px;
    }
    .judge_cell_detail {
        font-size: 14px;
        font-weight: 100;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow:ellipsis;
        text-align: left;
    }
</style>