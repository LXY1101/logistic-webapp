<template>
    <div>
        <top title='成长记录' :ShowBg="true"></top>
        <div class="mg-100"></div>
        <div class="repair_list" style="margin-top:70px">
            <div class="repair_list_left">修改密码</div>
            <div class="repair_list_right"></div>
        </div>
        <div class="repair_list" @click="logout">
            <div class="repair_list_left">退出登录</div>
            <div class="repair_list_right"></div>           
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~@css/my/send_record.less";
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "send_record",
    data() {
        return {};
    },
    components: {
        top
    },

    computed: {},
    methods: {

    },
    beforeCreate() {
        document
            .querySelector("body")
            .setAttribute("style", "background:#f2f2f2");
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "");
    },
    mounted() {

    }
};
</script>





