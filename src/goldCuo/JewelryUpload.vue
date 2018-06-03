<template>
    <div id="container">
        <div class="content">
            <div class="section_1 section_common">
                <div v-for="imgUrl in photoArray" class="upload-div">
                    <img class="add_img upload-div-img" v-bind:src="imgUrl"/>
                    <input name="file" type="file" class="file-input" @change="uploadImage($event)"/>
                </div>
                <div v-if="showImgLoading" class="upload-div loading-margin">
                    <mt-spinner type="fading-circle" color="#9ceffe"></mt-spinner>
                </div>
                <div class="upload-div">
                    <img class="add_img upload-div-img" src="http://olg4p7z9i.bkt.clouddn.com/designerAddPhoto.png"/>
                    <input name="file" type="file" class="file-input" @change="uploadImage($event)"/>
                </div>
                <div style="height: 16px; clear: both"></div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    作品名称 (必填)
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <input placeholder="请输入作品名称" type="text" class="mint-field-core" maxlength="10" v-model="name">
                    <div class="mint-field-clear" style="display: none;">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <span class="mint-field-state is-default">
                      <i class="mintui mintui-field-default"></i>
                  </span>
                    <div class="mint-field-other"></div>
                </div>
            </div>

            <div class="section_3 section_common boxing">
                <p class="section_title">
                    设计说明 (必填)
                </p>
                <div class="mint-cell-value mint-cell-textarea">
                    <textarea placeholder="请填写您的详细定制描述和灵感来源" rows="4" class="mint-field-core textarea_back" v-model="introduction"></textarea>
                    <div class="mint-field-clear" style="display: none;">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <span class="mint-field-state is-default">
                      <i class="mintui mintui-field-default"></i>
                  </span>
                    <div class="mint-field-other">
                    </div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    材质 (必填)
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <div class="select_div_border" @click="selectOption(1)">
                        <span class="select_title">{{material}}</span>
                        <img class="select_right_img" src="../assets/up_down.png"/>
                    </div>
                </div>
            </div>
            <div class="section_2 section_common boxing">
                <p class="section_title">
                    重量
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <input placeholder="重量" type="text" class="mint-field-core" maxlength="10" v-model="weight">
                    <div class="mint-field-clear" style="display: none;">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <span class="mint-field-state is-default">
                      <i class="mintui mintui-field-default"></i>
                  </span>
                    <div class="mint-field-other"></div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    穿戴部位 (必选)
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <div class="select_div_border" @click="selectOption(2)">
                        <span class="select_title">{{position}}</span>
                        <img class="select_right_img" src="../assets/up_down.png"/>
                    </div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    设计风格 (必选)
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <div class="select_div_border" @click="selectOption(3)">
                        <span class="select_title">{{style}}</span>
                        <img class="select_right_img" src="../assets/up_down.png"/>
                    </div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    主石参数
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <input placeholder="主石参数" type="text" class="mint-field-core" maxlength="10" v-model="main">
                    <div class="mint-field-clear" style="display: none;">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <span class="mint-field-state is-default">
                      <i class="mintui mintui-field-default"></i>
                  </span>
                    <div class="mint-field-other"></div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    副石参数
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <input placeholder="副石参数" type="text" class="mint-field-core" maxlength="10" v-model="side">
                    <div class="mint-field-clear" style="display: none;">
                        <i class="mintui mintui-field-error"></i>
                    </div>
                    <span class="mint-field-state is-default">
                      <i class="mintui mintui-field-default"></i>
                  </span>
                    <div class="mint-field-other"></div>
                </div>
            </div>

            <div class="section_2 section_common boxing">
                <p class="section_title">
                    参赛奖项 (必选)
                </p>
                <div class="mint-cell-value mint-cell-value-border-gray">
                    <div class="select_div_border" @click="selectOption(4)">
                        <span class="select_title">{{group}}</span>
                        <img class="select_right_img" src="../assets/up_down.png"/>
                    </div>
                </div>
            </div>

            <a class="mint-cell mint-cell-div">
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper mint-cell-wrapper-white">
                    <div class="mint-cell-title">
                        <span class="mint-cell-text">是否有实物</span> </div>
                    <label class="mint-switch">
                        <input type="checkbox" class="mint-switch-input checbox-vlaue" v-model="isReal" @change="isRealChange">
                        <span class="mint-switch-core"></span>
                        <div class="mint-switch-label"></div>
                    </label>
                </div>
            </a>
        </div>
        <button class="mint-button mint-button--primary mint-button--large mint-button-fixed" v-on:click="createJewelry">
            <label class="mint-button-text">确认上传</label>
        </button>

        <mt-popup v-model="popupVisible1" position="right" class="mint-popup-3">
            <mt-radio align="right" class="page-part" :options="options1" v-model="options1Value"/>
            <mt-button @click="optionSure(1)" size="large" type="primary" class="mint-button-fixed">确定</mt-button>
        </mt-popup>
        <mt-popup v-model="popupVisible2" position="right" class="mint-popup-3">
            <mt-radio align="right" class="page-part" :options="options2" v-model="options2Value"/>
            <mt-button @click="optionSure(2)" size="large" type="primary" class="mint-button-fixed">确定</mt-button>
        </mt-popup>
        <mt-popup v-model="popupVisible3" position="right" class="mint-popup-3">
            <div class="mint-popup-ratio">
                <mt-radio align="right" class="page-part" :options="options3" v-model="options3Value"/>
            </div>
            <mt-button @click="optionSure(3)" size="large" type="primary" class="mint-button-fixed">确定</mt-button>
        </mt-popup>
        <mt-popup v-model="popupVisible4" position="right" class="mint-popup-3">
            <mt-radio align="right" class="page-part" :options="options4" v-model="options4Value"/>
            <mt-button @click="optionSure(4)" size="large" type="primary" class="mint-button-fixed">确定</mt-button>
        </mt-popup>
        <mt-popup v-model="showQRCode" position="right" class="mint-popup-3 popup-back">
            <div class="qrcode-back">
                <img class="qrcode-img" :src="downQRCode"/>
                <p class="qrcode-detail">扫描或长按二维码下载App，即刻查看参赛作品详情</p>
                <img class="close-button-img" src="../assets/close_qrcode_img.png" @click="closeQRCode"/>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { Spinner } from 'mint-ui';
    import { MessageBox } from 'mint-ui';

    export default {
        name: 'JewelryUpload',
        data () {
            return {
                photoArray:[],
                domain: "http://olg4p7z9i.bkt.clouddn.com/",
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false,
                popupVisible4: false,
                showImgLoading: false,
                showQRCode: false,
                options1: ['Au999', 'Au750', 'Pt950', 'Pt900', 'S925', 'S999', '不锈钢或铜', '其他'],
                options2: ['手链/手镯', '项链/吊坠', '耳饰', '胸针', '戒指', '其他'],
                options3: ['生活','游戏','动漫','星座','生肖','婚恋','动物','植物','水果','工艺','音乐','运动','建筑','简约','儿童','复古','抽象','豪华','可爱','民族','欧美','偶像','前卫','趣味','日韩','影视','中性','宗教'],
                options4: ['最佳创意奖', '文化内容奖', '设计视觉奖', '人气奖'],
                options1Value: "请选择材质",
                options2Value: "请选择穿戴部位",
                options3Value: "请选择风格",
                options4Value: "请选择风格",
                name: "",
                introduction: "",
                position: "请选择穿戴部位",
                style: "请选择风格",
                weight: "",
                main: "",
                mainParam: "",
                side: "",
                sideParam: "",
                material: "请选择材质",
                group: "请选择参赛奖项",
                isReal: 0,
                downQRCode:"http://olg4p7z9i.bkt.clouddn.com/ios_down_qrcode.png"
            }
        },
        methods: {
            closeQRCode: function () {
                this.showQRCode = false;
                this.$router.go(-2);
            },
            uploadImage: function (e) {
                this.showImgLoading = true;
                var formdata = new FormData();
                formdata.append('file',e.target.files[0]);
                axios({
                    url: IMG_DOMAIN_URL + '/v1/home/uploadFile',
                    method:'post',
                    data:formdata,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then((res)=>{
                    this.showImgLoading = false;
                    this.addImage(this.domain + res.data.content);
                })
            },
            addImage: function (url) {
                this.photoArray.push(url);
            },
            selectOption: function (index) {
                switch (index) {
                    case 1:
                        this.popupVisible1 = true;
                        break;
                    case 2:
                        this.popupVisible2 = true;
                        break;
                    case 3:
                        this.popupVisible3 = true;
                        break;
                    case 4:
                        this.popupVisible4 = true;
                        break;
                }
            },
            optionSure: function (index) {
                switch (index) {
                    case 1:
                        this.popupVisible1 = false;
                        this.material = this.options1Value;
                        break;
                    case 2:
                        this.popupVisible2 = false;
                        this.position = this.options2Value;
                        break;
                    case 3:
                        this.popupVisible3 = false;
                        this.style = this.options3Value;
                        break;
                    case 4:
                        this.popupVisible4 = false;
                        this.group = this.options4Value;
                        break;
                }
            },
            getPrizeType: function () {
                if (this.group == '最佳创意奖') {
                    return 0;
                }
                if (this.group == '文化内容奖') {
                    return 1;
                }
                if (this.group == '设计视觉奖') {
                    return 2;
                }
                if (this.group == '人气奖') {
                    return 3;
                }
            },
            isRealChange: function (val) {
                this.isReal = val.target.checked == true ? 1 : 0;
            },
            createJewelry: function () {
                if (this.validateParam() == false) return;
                var params = new URLSearchParams();
                params.append('name', this.name);
                params.append('introduction', this.introduction);
                params.append('photos', this.photoArray.toString());
                params.append('position', this.position.toString());
                params.append('style', this.style.toString());
                params.append('weight', this.weight);
                params.append('main', this.main);
                params.append('side', this.side);
                params.append('material', this.material);
                params.append('prize_type', this.getPrizeType());
                params.append('is_real', this.isReal);
                params.append('status', '原创作品');
                Indicator.open('请稍后...');
                this.$http.post(BASE_URL + "/CuoWechat/index.php/Home/Custom/doAddCustom", params).then((response) => {
                    console.log(response);
                    Indicator.close();
                    MessageBox.confirm('上传成功!', '提示', {confirmButtonText: "确定", cancelButtonText: "查看"}).then(() => {
                        this.$router.go(-2);
                    },() => {
                        this.showQRCode = true;
                    });
                });
            },
            validateParam: function () {
                if (this.photoArray.length == 0) {
                    Toast({
                        message: '上传作品图片!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.name == "") {
                    Toast({
                        message: '请输入作品名称!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.introduction == "") {
                    Toast({
                        message: '请输入作品描述!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.material == "请选择材质") {
                    Toast({
                        message: '请选择材质!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.position == "请选择穿戴部位") {
                    Toast({
                        message: '请选择穿戴部位!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.style == "请选择风格") {
                    Toast({
                        message: '请选择风格!',
                        duration: 1000
                    });
                    return false;
                }
                if (this.group == "请选择参赛奖项") {
                    Toast({
                        message: '请选择参赛奖项!',
                        duration: 1000
                    });
                    return false;
                }
                return true;
            }
        },
        created: function () {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) { //android终端
                this.downQRCode = "http://olg4p7z9i.bkt.clouddn.com/anrdoid_down_qrcode.png";
            }
            if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { //ios终端
                this.downQRCode = "http://olg4p7z9i.bkt.clouddn.com/ios_down_qrcode.png";
            }
        }
    }
</script>

<style scoped>
    .content {
        background: white;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 70px;
    }
    .boxing {
        border-width: 1px;
        border-style: solid;
        border-color: white;
    }
    .section_common {
        width: 100%;
        background: #f5f5f5;
        margin-bottom: 5px;
    }
    .section_1 {
        width: 100%;
        /*height: 100px;*/
    }
    .section_2 {
        /*height: 100px;*/
    }
    .section_3 {
        /*height: 150px;*/
    }
    .add_img {
        float: left;
        margin: 0px 0px 0px 0px;
        width: 90px;
        height: 90px;
    }
    p {
        text-align: left;
    }
    .section_title {
        font-size: 12px;
        margin-top: 20px;
        margin-left: 10px;
    }
    .mint-cell-value {
        height: 35px;
        border-radius: 8px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        font-size: 12px;
        background: #efefef;
        border-style: solid;
        border-width: 1px;
        border-color: white;
    }
    .mint-radiolist-label {
        line-height: 20px;
        font-size: 12px;
    }
    .mint-cell-value-border-gray {
        border-color: #e1e1e1;
    }
    .mint-cell-textarea {
        height: 100px;
        border-color: #e1e1e1;
    }
    .mint-cell-div {
        margin-bottom: 60px;
    }
    input {
        margin-left: 15px;
        background: #efefef;
    }
    .textarea_back {
        font-size: 12px;
        margin-left: 10px;
        background: #efefef;
    }
    .select_div_border {
        width: 100%;
        height: 25px;
        border-style: solid;
        border-width: 1px;
        border-color: #efefef;
        border-radius: 4px;
    }
    .select_title {
        padding-left: 10px;
        line-height: 25px;
        float: left;
    }
    .select_right_img {
        width: 12px;
        height: 20px;
        float: right;
        margin-top: 2px;
        margin-right: 20px;
    }
    .mint-cell-title {
        text-align: left;
        font-size: 12px;
    }
    .mint-cell-wrapper-white {
        background: #f5f5f5;
    }
    .mint-radio-label {
        font-size: 12px;
    }
    .file-input {
        background: gray;
        width: 90px;
        height: 90px;
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
    }
    .upload-div {
        margin: 16px 0px 0px 16px;
        float: left;
        width: 90px;
        height: 90px;
        position: relative;
    }
    .loading-margin {
        margin: 32px 0px 0px 32px;
    }
    .upload-div-img {
        margin: 0px;
    }
    .mint-popup-3 {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .mint-popup-ratio {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .mint-switch-input:checked + .mint-switch-core {
        border-color: #9ceffe;
        background-color: #9ceffe;
    }
    .mint-button--primary {
        color: #fff;
        background-color: #9ceffe;
        height: 49px;
        border-radius: 0px;
        color: #394a4d;
        font-size: 14px;
    }
    .mint-button-fixed {
        position: fixed;
        bottom: 0px;
    }
    .popup-back {
        background-color: rgba(0,0,0,0.5);
    }
    .qrcode-img {
        width:110px;
        height: 110px;
        margin-top: 20px;
    }
    .qrcode-back {
        margin-left: -90px;
        margin-top: -90px;
        width: 180px;
        height: 180px;
        position: relative;
        left: 50%;
        top: 50%;
        background: white;
        border-radius: 2px;
    }
    .qrcode-detail {
        margin: 5px 25px 0px 25px;
        height: 30px;
        font-size: 10px;
        text-align: center;
    }
    .close-button-img {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        /* WebKit browsers */
        color: lightgrey;
    }
    input:-moz-placeholder, textarea:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: lightgrey;
    }
    input::-moz-placeholder, textarea::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: lightgrey;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: lightgrey;
    }
</style>