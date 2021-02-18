<template>
    <div>
        <top title="视频问诊" :ShowBg="true"></top>
        <div class="video_interrogation_search">
            <input type="text" class="video_interrogation_search_img" disabled="true">
            <input type="text" class="video_interrogation_search_input" placeholder="请输入患者姓名进行搜索">
        </div>
        <tab :options="options" :className="className" @clicktabId="change_tabId"></tab>
        <div v-show="tabId==1" class="appointment_management_content">
            <div class="video_interrogation_list">
                <div class="video_interrogation_list_img">
                    <img src="../../../../static/img/head_portrait.png">
                </div>
                <div class="video_interrogation_list_content">
                    <div class="video_interrogation_list_content_item">
                        <span class="video_interrogation_list_content_title" >啊giao</span>
                        <span class="video_interrogation_list_content_detail" >女</span>
                        <span class="video_interrogation_list_content_detail" >24岁</span>
                    </div>
                    <div class="video_interrogation_list_content_item">
                        <span class="video_interrogation_list_content_title">预约时间:</span>
                        <span class="video_interrogation_list_content_detail">08-13 09:30-11：30</span>
                    </div>
                    <div class="video_interrogation_list_content_item">
                        <span class="video_interrogation_list_content_title">服务时长:</span>
                        <span class="video_interrogation_list_content_detail">120分钟</span>
                    </div>
                    <div class="change_time_button">修改服务预约时间</div>
                </div>
                <div class="video_interrogation_list_right">
                    <img src="../../../assets/icon/video.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '~@css/server/video_interrogation/video_interrogation.less';
</style>

<script>
import top from '../../../components/top'
import tab from '../../../components/tab'
export default {
    name:'video_interrogation',
    components:{
        top,
        tab
    },
    data(){
        return{
            tabId:0,
            options:['进行中','未开始','已完成'],//存放tab选项名字
            className:'active1',
        }
    },
    methods:{
        change_tabId(index){
            this.tabId=index
        },
    },
    beforeCreate() {
        document
            .querySelector("body")
            .setAttribute("style","background:#f2f2f2");
    },
    beforeDestroy(){
        document.querySelector('body').setAttribute("style","")
    }
}
</script>