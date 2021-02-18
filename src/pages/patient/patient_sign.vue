<template>
<div>
    <top title='签约列表' :ShowBg="true"></top>
    <div class="patient_sign_content">
        <div class="ask_search">
            <input type='text' class="ask_search_ipt" placeholder="搜索"/>
        </div>
        <div class="patient_sign_list">
            <div class="patient_sign_item">
                <div class="patient_sign_item_left">
                    <img src='../../assets/icon/user.png' alt='' class="patient_sign_item_img"/>
                </div>
                <div class="patient_sign_item_center">
                   <div class="patient_sign_item_top">
                       <div class="patient_sign_item_top_name">王晓丽</div>
                       <div class="patient_sign_item_top_img"><img src='../../assets/icon/women.png' alt='' class="patient_sign_item_top_src"/></div>
                       <div class="patient_sign_item_top_age">24岁</div>
                   </div>
                   <div class="patient_sign_item_bottom">
                       8-15 12:11
                   </div>
                </div>
                <div class="patient_sign_item_right">
                    <div class="patient_sign_item_reject">拒绝</div>
                    <div class="patient_sign_item_resolve">接受</div>
                </div>
            </div>
            <div class="patient_sign_item">
                <div class="patient_sign_item_left">
                    <img src='../../assets/icon/user.png' alt='' class="patient_sign_item_img"/>
                </div>
                <div class="patient_sign_item_center">
                   <div class="patient_sign_item_top">
                       <div class="patient_sign_item_top_name">王晓丽</div>
                       <div class="patient_sign_item_top_img"><img src='../../assets/icon/women.png' alt='' class="patient_sign_item_top_src"/></div>
                       <div class="patient_sign_item_top_age">24岁</div>
                   </div>
                   <div class="patient_sign_item_bottom">
                       8-15 12:11
                   </div>
                </div>
                <div class="patient_sign_item_right">
                    <div class="patient_sign_item_done">已接受</div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<style scoped lang="less">
@import '~@css/campus/index.less';
@import '~@css/patient/patient_sign.less';
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "patient_sign",
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
    }
};
</script>





