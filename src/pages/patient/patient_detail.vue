<template>
    <div>
        <div class="patient_detail_top" ref="patientBg">
            <div class="patient_detail_top_back" @click='back'>
            </div>
            <div class="patient_detail_top_back_img">
                <img src='../../assets/images/greatImg.png' alt='' class="patient_detail_top_back_src"/>
            </div>
            <div class="patient_detail_top_back_text_top">
                <span>何柳</span>
                <span> 13798565987</span>
            </div>
            <div class="patient_detail_top_back_text_bottom">
                <span>24岁</span>
                <span> 女</span>
                <span> 普通人群</span>
            </div>
        </div>
        <div class="patient_detail_list">
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">家庭住址</div>
                 <div class="patient_detail_item_center">大亚湾惠环路西悦城3栋2017号</div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">身份证号</div>
                 <div class="patient_detail_item_center">42910*************9281</div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">健康档案</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">血压</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">血糖</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">随访情况</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">处方</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">家庭成员</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
             <div class="patient_detail_item">
                 <div class="patient_detail_item_left">服务包</div>
                 <div class="patient_detail_item_center"></div>
                 <div class="patient_detail_item_right"></div>
             </div>
        </div>
        <footer class="patient_detail_footer">发消息</footer>
    </div>
</template>

<style scoped lang="less">
@import '~@css/patient/patient_detail.less';
</style>
<script>

export default {
    name: "patient_detail",
    data() {
        return {

        };
    },
    components: {
        top
    },

    computed: {},
    methods: {
        back(){
        this.$router.go(-1);
        }
    },

    mounted(){
        var that = this;
        var dd_height = that.$refs.patientBg.offsetWidth*0.244+'px';
        that.$refs.patientBg.style.height = dd_height;           
    },
};
</script>





