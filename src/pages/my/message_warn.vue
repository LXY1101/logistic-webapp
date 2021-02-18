<template>
    <div>
        <top title='消息' :ShowBg="true"></top>
        <div class="mg-100"></div>
        <div class="message_list">
            <div class="message_list_time">2019-08-18 10:47:23</div>
            <div class="message_list_item">
                <div class="message_list_top">消息提醒</div>
                <div class="message_list_bottom"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~@css/my/message_warn.less";
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "message_warn",
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





