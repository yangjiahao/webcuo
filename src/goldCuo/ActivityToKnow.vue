<template>
    <div class="join_content_div">
        <img class="join_head_img" src="../assets/join_to_know.png"/>
        <p class="join_detail">错x全球原创首饰设计大赛—参赛须知<br>
            本平台为错x原创全球首饰设计大赛唯一举办方，参赛者须在详细阅读并理解本协议条款后（特别是加粗加重标示的条款），明确彼此权益责任后方点击（同意）此协议。如果不同意本声明之条款，则不能成为[错x原创全球首饰设计大赛]的参赛选手。该协议一经同意立即生效，你将遵守如下规定：<br>
            1．信息的发布<br>
            •不得发布上传任何违反有关法律法规规章等规定信息；<br>
            •不得发布任何与本平台和/或设计大赛]不适之信息；<br>
            •用户对所发布上传的信息承担完全责任。<br>
            2．信息的使用<br>
            •参赛者仅可因参加设计大赛而使用网站发布信息；<br>
            •不得将任何本平台和/或设计大赛的信息用作任何商业目的。<br>
            3．信息的公开<br>
            参赛者登录本平台的注册信息及个人资料，网站将按照相关法律法规的规定及限制进行管理和使用。参赛者并授权本平台和/或设计大赛的组织方及相关单位将参赛者信息及上传的参赛作品信息用于与设计大赛相关的公开宣传、展示等。参赛者并理解该信息公开后，因任何非网站和/或设计大赛自身的原因而传播使用及转载产生的法律效应，本平台和/或设计大赛对此不予承担任何责任。<br>
            4．信息更改与删除<br>
            本平台和/或设计大赛有权根据其判断保留修改或删除任何不适信息之权利。<br>
            5．为参加「错x原创全球首饰设计大赛」（以下简称“设计大赛”），本人或本人所代表的组织（以下简称“承诺人”）在充分理解并自愿接受设计大赛征集评选办法的前提下，向设计大赛组委会承诺如下：<br>
            •参赛者保证其所提交的参赛作品由参赛者本人独立创作、首创、原创，对参赛作品拥有完整、充分、排他的知识产权,同时参赛者保证其参赛作品不侵犯任何第三方的知识产权或专有权利，未以任何方式侵犯任意第三方的任何其他权利，否则主办方及相关单位有权取消参赛者的参赛资格及追回奖项；参赛者承诺因参赛作品侵犯第三方合法权利而引起的相关法律后果均由参赛者自行承担；<br>
            •参赛者保证其参赛作品除参加本次大赛外，未曾以任何形式发表，也未曾以任何方式为公众所知；<br>
            •参赛者保证其在全球范围内未曾自行或授权他人对参赛作品进行任何形式的使用或开发等；参赛者保证自参赛作品提交起至本次大赛评选结果揭晓前，参赛者不会自行或授权他人对参赛作品进行任何形式的使用或开发等；<br>
            •如因参赛者的原因使主办方及相关单位遭受任何名誉或经济上的损失，主办方有权要求参赛者采取足够而适当的措施，以保证主办方免受或减少上述损失。主办方同时保留向参赛者追究和索赔的权利；<br>
            •参赛者同意所有获奖作品及入围作品的知识产权均归主办方所有并同意主办方在使用该作品时以不体现其专有权利的方式来予以行使及主办方在使用该作品时进行相应的调整和修改；入围和获奖的设计作者除根据本次大赛奖项设置可获得的奖项外，放弃任何权利主张；<br>
            •参赛者如若获奖，在参与主办法举办的活动使需配合办理相关手续（如提交相关的证明材料等），如因参赛者原因（如所提交的证明材料不满足相关法律法规规定要求等）不能参加后续活动，主办方不承担任何责任；<br>
            •所有参赛作品一经提交不予退还，主办方拥有参赛作品之永久免费宣传使用权；<br>
            6．免责条款<br>
            本平台和或主办方对任何因参赛者使用本平台而产生的与第三方之间的纠纷，不负任何责任。本网并无随时监视此网址，但保留对其实施实时监视的权利。对于他方输入的，不是本平台和或主办方发布的材料，本平台和或主办方概不负任何法律责任。参赛发布方必须对其存入个人用户中心的个人资料，以及作品的准确性和合法性独立承担一切法律责任。<br>
            7．争议处理<br>
            如有分歧，双方应友好协商，解决彼此之间的分歧或争议。<br>
            若协商不成，任何一方均有权向仲裁委员会申请仲裁。<br>
        </p>
        <mt-button class="join_close_button" type="default" @click="gobackPage">我知道了</mt-button>
    </div>
</template>

<style scoped>
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
        margin-top: 10px;
    }
</style>

<script>
    import activityNav from './ActivityNav.vue'

    export default {
        name: 'ActivityInfo',
        data () {
            return {
            }
        },
        components: {activityNav},
        methods: {
            gobackPage: function () {
                this.$router.go(-1);
            }
        }
    }
</script>