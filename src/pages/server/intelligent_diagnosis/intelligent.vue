<template>
    <div>
        <top title="智能诊断" :ShowBg='true'></top>
        <div class="intelligent_search">
            <input type="text" class="intelligent_search_img" disabled="true">
            <input type="text" class="intelligent_search_input" placeholder="请输入患者姓名进行搜索">
        </div>
        <div class="intelligent_list" v-for="item in user_intelligent_list" :key="item.id" @click="intelligent_diagnosis()">
            <div class="intelligent_list_content">
                <div class="intelligent_list_content_left">
                    <img src="../../../../static/img/head_portrait.png">
                </div>
                <div class="intelligent_list_content_center">
                    <div class="intelligent_list_content_center_name">{{item.name}}</div>
                    <div class="intelligent_list_content_center_detail">{{item.disease}}</div>
                </div>
                <div class="intelligent_list_content_right">晚上9:36</div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/intelligent_diagnosis/intelligent.less';
</style>

<script>
import top from '../../../components/top'
export default {
    name:'intelligent',
    components:{
        top
    },
    data(){
        return{
            user_intelligent_list:[
                {
                    id:1,
                    name:'刘德华',
                    disease:'咳嗽'
                },
                {
                    id:2,
                    name:'C罗',
                    disease:'发烧'
                },
                {
                    id:3,
                    name:'内马尔',
                    disease:'头皮发麻'
                },
                {
                    id:4,
                    name:'外马尔',
                    disease:'脚皮发痒'
                },
                {
                    id:5,
                    name:'包贝尔',
                    disease:'嗜睡'
                },
                {
                    id:6,
                    name:'周笔畅',
                    disease:'骨质增生'
                },
                {
                    id:7,
                    name:'佐助',
                    disease:'脚趾头肿大'
                },
                {
                    id:8,
                    name:'卡卡西',
                    disease:'没有查克拉'
                },
            ]
        }
    },
    methods: {
        intelligent_diagnosis(){
            this.$router.push({path:'/intelligent_diagnosis'})
        }
    },
}
</script>