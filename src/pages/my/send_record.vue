<template>
    <div>
        <top title='成长记录' :ShowBg="true"></top>
        <div class="mg-100"></div>
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





