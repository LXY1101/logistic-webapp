<template>
    <div>
        <top title='设置与帮助' :ShowBg="true"></top>
        <div class="set_list" style="margin-top:70px">
            <div class="set_list_left">修改密码</div>
            <div class="set_list_right"></div>
        </div>
        <div class="set_list" @click="logout">
            <div class="set_list_left">退出登录</div>
            <div class="set_list_right"></div>           
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~@css/my/set.less";
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "set",
    data() {
        return {};
    },
    components: {
        top
    },
	beforeRouteLeave(to, from, next) {
        if(to.path=='/my'){
            document.querySelector("body").setAttribute("style", "");
            next();
        }
        else{
            next();
        }
	},
    computed: {},
    methods: {
        logout(){
            this.$router.push({path:'/login'})
        }
    },
    mounted() {
        document
            .querySelector("body")
            .setAttribute("style", "background:#f2f2f2");
    },
    // beforeDestroy() {
    //     document.querySelector("body").setAttribute("style", "");
    // },
};
</script>





