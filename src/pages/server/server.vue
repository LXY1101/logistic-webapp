<template>
    <div>
        <top title='服务' :ShowBg="false"></top>
        <div class="service_content">
            <div class="service_item" 
            v-for="item in service_item_list" 
            :key="item.content"
            @click="choose_service(item.path)">
                <div class="service_item_title">
                    <div class="service_item_img" ref="service_item_ref">
                        <img :src='item.img' alt=''/>
                    </div>
                </div>
                <div class="service_item_content">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/server.less';
</style>
<script>
import top from '../../components/top.vue'
export default {
    name: "server",
    data() {
        return {
            service_item_list:[
                {
                    img:'../../../../static/img/service1.png',
                    content:'预约管理',
                    path:'/appointment_management'
                },
                {
                    img:'../../../static/img/service2.png',
                    content:'处方',
                    path:'/prescription'
                },
                {
                    img:'../../../static/img/service3.png',
                    content:'随访',
                    path:'/follow_up_visit'
                },
                {
                    img:'../../../static/img/service4.png',
                    content:'慢病管理',
                    path:'/chronic_disease_surveillance'
                },
                {
                    img:'../../../static/img/service5.png',
                    content:'智能诊断',
                    path:'/intelligent'
                },
                {
                    img:'../../../static/img/service6.png',
                    content:'健康教育',
                    path:'/health_education'
                },
                {
                    img:'s../../static/img/service7.png',
                    content:'视频问诊',
                    path:'/video_interrogation'
                },
                {
                    img:'../../static/img/service8.png',
                    content:'设备链接',
                    path:'/equipment'
                },
                {
                    img:'../static/img/service9.png',
                    content:'MDT会诊',
                    path:'/mdt'
                },
            ]
        }
    },
    components: {
        top
    },
    methods:{
        choose_service(path){
            this.$router.push({path:path})
        }
    },
    mounted(){
        // this.$refs.service_item_ref.style.height=this.$refs.service_item_ref.style.width
    }
};
</script>






