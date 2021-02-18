<template>
<div>
    <top title='推送' :ShowBg="true"></top>
    <div class="patient_send_mark">
        <div class="patient_send_mark_left">推送标签</div>
        <div class="patient_send_mark_right">全部</div>
    </div>
    <input type="text" placeholder="标题" class="patient_send_ipt"/>
    <textarea  placeholder="请输入推送内容" class="patient_textarea" maxlength="200"></textarea>
    <div class="patient_send_add">
        <div class="patient_send_add_icon">+</div>
    </div>
    <div class="patient_send_text">避免影响居民休息，建议在8:00-22:00时间段内发送消息</div>
    <div class="patient_send_bt">保存</div>
</div>
</template>

<style scoped lang="less">
@import '~@css/patient/patient_send.less';
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
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style','background:#f2f2f2');
    },
    beforeDestroy () {
        document.querySelector('body').setAttribute('style', '')
    }
};
</script>





