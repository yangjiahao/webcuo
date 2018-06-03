<template>
    <div>
        <activity-nav></activity-nav>
        <div class="content">
            <!--头部img-->
            <img class="head_img" src="http://olg4p7z9i.bkt.clouddn.com/banner_activity02.png"/>
            <div class="match_info">
                <!--赛事简介-->
                <!--小箭头-->
                <div class="triangle">
                    <div class="triangle_outter">
                        <div class="triangle_inner"></div>
                    </div>
                </div>
                <img class="img_title" src="../assets/title_intro.png"/>
                <p class="paragraph">
                    CUO首届全球原创首饰设计大赛」由知名原创首饰定制平台“错APP”主办。“互联网+首饰定制”全新理念的提出，是一个极具创造性的大胆概念，亦是传统首饰行业转型升级的代表性里程碑。
                </p>
                <div v-if="isParagphHiden1 == false">
                    <p class="paragraph">
                        而“原创”更是对文化产业版权内容保护赋予了重大意义，尊重原创，
                        即是尊重版权。以下简称“大赛”。大赛设定了若干主题，分别为：季节系列、节日系列、星座系列、情感系列、
                        生肖系列、毕业设计等，旨在鼓励全世界的首饰设计师，通过发达的互联网进行创意交流，挖掘行业设计天才，
                        激发设计师的创作热情，推广优质的首饰设计，全力为全球原创首饰设计师打造展现其才华与创造商业价值的广阔平台。
                        为了给设计师们提供更大的展示舞台，“错APP”除每月定期举办线上赛外，也将在每年的年底举办大赛的最高奖项“金错奖”的线下评选盛典。届时将发布关于“金错奖“的相关具体信息，敬请关注。
                    </p>
                </div>
                <div class="a_div a_div1" @click="hiddenParagph(1)">
                    <a class="a_link a_link_no">点击查看更多...</a>
                </div>
            </div>
            <div class="match_rules">
                <!--参赛规则-->
                <div class="triangle" @click="hiddenParagph(1)">
                    <div class="triangle_outter" style="border-top: 10px solid #efefef">
                        <div class="triangle_inner"></div>
                    </div>
                </div>
                <img class="img_title" src="../assets/title_rule.png"/>
                <p class="strong_title">
                    1.奖项说明：
                </p>
                <p class="paragraph">
                    最佳创意奖，旨在突出首饰的先进设计概念，文化内容奖，旨在突出首饰的文化艺术表现，设计视觉奖，旨在突出首饰的视觉时尚潮流；不可一稿多投。
                </p>
                <div v-if="isParagphHiden2 == false">
                    <p class="strong_title">
                        2.月度赛参赛资格：
                    </p>
                    <p class="paragraph">
                        1)月度赛事向所有参赛者开放。高校设计专业师生、设计爱好者、跨界设计师、艺术家，允许以个人名义参赛。2)参赛者年龄、职业、学历、国籍、民族等皆不限。3)不收取任何参赛费用。
                    </p>
                    <p class="strong_title">
                        3.金错奖入围资格：
                    </p>
                    <p class="paragraph">
                        只有在每期月赛中获得最佳创意组、文化内容组、设计视觉组前三名以及最佳人气组第一名的设计师可获得入围“金错奖”评选的资格。
                    </p>
                    <p class="strong_title">
                        4.参赛要求:
                    </p>
                    <p class="paragraph">
                        1)参赛作品须专为本次比赛原创设计，之前从未展出、刊发。2)贵金属或其他材料均可被使用，亦可使用创意新材料。3)天然宝石、人造宝石均可被使用。4)参赛作品在符合主题要求情况下，需突出创新性、新异性。5)作品符合时尚趋势，具有明显人文情怀。
                    </p>
                    <p class="strong_title">
                        5.评选规则
                    </p>
                    <p class="paragraph">
                        【月度赛评奖规则】<br>
                        作品奖——最佳创意奖、文化内容奖、设计视觉奖：由大赛专家评审根据作品创造力、独特性、灵感来源，坚持公平、公正的原则，从入围作品中选出作品奖。专家评审的组成和评选结果是最终的，不可争议的。
                        人气奖——最佳人气奖：投票期截止后，通过网络点赞投票排序在前50名的作品，获得人气奖。其中票数排名第一的作品，获得“最佳人气奖”。
                        注：为保证评选活动的公正和严肃性，严禁任何通过不当手段的刷票行为。
                        网络投票规则如下：<br>
                        1)每人每天最多为每个设计师或作品投3票<br>
                        2)一旦发现刷票行为，第一次直接减去刷票得来的票数。第二次发现违规用户仍有刷票行为，则直接取消所有奖项资格。<br>
                        3)所有被系统识别存在作弊或刷票行为的直接屏蔽投票权利直至活动结束，最终保留正常票数，这些正常票数可以正常参与排名。<br>
                        【金错奖评选规则】<br>
                        参赛选手们将根据大赛组委会提供的命题，按要求设计一幅作品作为参赛作品并由大众评委和专家评委进行评选，评选结果是最终的，不可争议的。
                        注：大众评委由“CUO全球原创首饰设计大赛”月度赛人气奖前15名选手组成。若月度赛选手成为年度“金错奖”参赛候选人以及在其他月度赛事中已成为大众评审名单的选手们，则不再重复记录，且名额顺延；专家评委将由业内知名设计专家与各大院校导师组成，更具专业与公平性。
                    </p>
                    <p class="strong_title">
                        6.评选标准
                    </p>
                    <p class="paragraph">
                        1)主题表意的准确性 2)图形表现的原创性 3)表现手法的艺术性 4)作品可加工性 6)饰品可佩戴性 7)其它
                        <br>
                    </p>
                    <p class="strong_title">
                        7、第一期月度赛赛程安排：
                    </p>
                    <p class="paragraph">
                        作品上传时间：2018/4/6-4/25<br>
                        作品评选时间：2018/4/26-5/10<br>
                        获奖公布时间：2018/5/11-5/16<br>
                    </p>
                </div>
                <div class="a_div a_div1" @click="hiddenParagph(2)">
                    <a class="a_link a_link_no">点击查看更多...</a>
                </div>
            </div>
            <div class="match_theme">
                <div class="triangle" @click="hiddenParagph(2)">
                    <div class="triangle_outter">
                        <div class="triangle_inner"></div>
                    </div>
                </div>
                <img class="img_title" src="../assets/title_theme.png"/>
                <p class="match_theme_title">CUO首届全球原创首饰设计大赛之“春夏季中国风系列”</p>
                <p class="match_theme_time">2018年4月6日——2018年5月16日</p>
                <!--立即报名-->
                <mt-button type="default" @click="joinActivity">立即报名</mt-button>
            </div>
            <div class="match_prize" v-bind:class="{'hidden_paragph': isParagphHiden3}">
                <!--奖项设置-->
                <div class="triangle">
                    <div class="triangle_outter" style="border-top: 10px solid #efefef">
                        <div class="triangle_inner"></div>
                    </div>
                </div>
                <img class="img_title" src="../assets/title_setting.png"/>
                <p class="strong_title">
                    月度奖：
                </p>
                <p class="paragraph">
                    最佳创意奖    文化内容奖    设计视觉奖   月度人气奖
                </p>
                <p class="strong_title">
                    年度“金错奖：
                </p>
                <p class="paragraph">
                    第一名    第二名    第三名    优秀奖
                </p>

                <div v-if="isParagphHiden3 == false">
                    <p class="strong_title">
                        月度最佳创意奖10名：
                    </p>
                    <p class="paragraph">
                        第一名（1名）奖金8000元、第二名（1名）奖金3000元、第三名（1名）奖金1000元、优秀奖（7名）奖金200元/人。
                    </p>
                    <p class="strong_title">
                        月度文化内容奖10名：
                    </p>
                    <p class="paragraph">
                        第一名（1名）奖金8000元、第二名（1名）奖金3000元、第三名（1名）奖金1000元、优秀奖（7名）奖金200元/人。
                    </p>
                    <p class="strong_title">
                        月度设计视觉奖10名：
                    </p>
                    <p class="paragraph">
                        第一名（1名）奖金8000元、第二名（1名）奖金3000元、第三名（1名）奖金1000元、优秀奖（7名）奖金200元/人。
                    </p>
                    <p class="strong_title">
                        月度人气奖50名：
                    </p>
                    <p class="paragraph">
                        最佳人气奖（1名）奖金20000元、人气奖（49名）奖金200元/人。
                    </p>
                    <p class="strong_title">
                        年度“金错奖”：
                    </p>
                    <p class="paragraph">
                        第一名（1名）奖金26万元、第二名（1名）奖金16万元、第三名（1名）奖金6万元、优秀奖（10名）奖金1万元/人。<br><br>
                    </p>
                </div>
                <div class="a_div a_div1" @click="hiddenParagph(3)">
                    <a class="a_link a_link_no">点击查看更多...</a>
                </div>
            </div>
            <!--大赛组织机构-->
            <div class="match_organization">
                <div class="triangle"  @click="hiddenParagph(3)">
                    <div class="triangle_outter">
                        <div class="triangle_inner"></div>
                    </div>
                </div>
                <img class="img_title" src="../assets/title_ogernize.png"/>

                <p class="paragraph paragraph_line">
                    指导单位：深圳市罗湖区经济促进局，深圳市罗湖区投资推广局
                    <br/>
                </p>
                <p class="paragraph paragraph_line">
                    主办单位：中国地质大学（武汉）珠宝学院
                </p>
                <p class="paragraph paragraph_line">
                    承办单位：深圳市宝盒科技有限公司
                </p>
                <p class="paragraph paragraph_line">
                    协办单位：深圳市版权服务中心有限公司
                </p>
                <p class="paragraph paragraph_line">
                    <br>
                </p>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import activityNav from './ActivityNav.vue'
    export default {
        data() {
            return {
                isParagphHiden1: true,
                isParagphHiden2: true,
                isParagphHiden3: true
            };
        },
        components: {activityNav},
        methods: {
            joinActivity: function () {
                this.$router.push('activityjoin');
            },
            hiddenParagph: function (index) {
                switch (index) {
                    case 1:
                        this.isParagphHiden1 = !this.isParagphHiden1
                        break;
                    case 2:
                        this.isParagphHiden2 = !this.isParagphHiden2
                        break;
                    case 3:
                        this.isParagphHiden3 = !this.isParagphHiden3
                        break;
                }
            }
        }
    };
</script>

<style scoped>
    .content {
        margin-top: 50px;
        font-size: 0px;
    }
    .triangle {
        width: 100%;
        height: 10px;
        margin:0 auto;
    }
    .a_link {
        text-decoration: underline;
        color: #2ba0df;
    }
    .a_link_no {
        text-decoration: none;
        font-size: 12px;
    }
    .triangle_outter {
        width: 0;
        height: 0;
        border-top: 10px solid #9af0ff;
        border-left: 21px solid transparent;
        border-right: 21px solid transparent;
        margin-left: -21px;
        left: 50%;
        position: relative;
    }
    .triangle_inner {
        width: 0;
        height: 0;
        border-top: 4px solid gray;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        left: -8px;
        top: -8px;
        position: absolute;
    }
    .head_img {
        width: 100%;
        background: white;
    }
    .img_title {
        height: 20px;
        margin-top: 11px;
        margin-bottom: 11px;
    }
    .paragraph {
        font-size: 14px;
        margin-left: 20px;
        margin-right: 20px;
        line-height: 18px;
        font-weight: 100;
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: left;
    }
    .paragraph_line {
        margin-top: 5px;
    }
    .match_info {
        background: #efefef;
    }
    .match_rules {
        background: #9af0ff;
    }
    .match_theme {
        background: #efefef;
    }
    .match_prize {
        background: #9af0ff;
    }
    .match_organization {
        background: #efefef;
    }
    .match_theme_title {
        margin: 0px;
        font-size: 14px;
        text-decoration:underline;
    }
    .match_theme_time {
        font-size: 12px;
        margin-top: 10px;
    }
    .mint-button--default {
        width: 129px;
        height: 30px;
        background: black;
        color: white;
        border-radius: 7px;
        margin-bottom: 20px;
        font-weight: 100;
        font-size: 14px;
    }
    .strong_title {
        text-align: left;
        margin: 8px 0px 4px 20px;
        font-size: 14px;
        font-weight: 600;
    }
    .a_div {
        margin-top: 30px;
        width: 100%;
        height: 40px;
        font-size: 14px;
    }
    .a_div1 {
        margin-top: 5px;
        width: 100%;
        height: 25px;
    }
</style>
